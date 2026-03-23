#!/usr/bin/env python3
"""
Busca todas as imagens do Cloudinary via Search API com assinatura.
"""
import json
import hashlib
import time
import urllib.request
import urllib.parse
import base64

CLOUD_NAME = "dipruvqks"
API_KEY = "249195267513556"
API_SECRET = "-r9WsfMzOIDSmHSjsqte6Snc_NU"

def generate_signature(params_to_sign, api_secret):
    sorted_params = "&".join(f"{k}={v}" for k, v in sorted(params_to_sign.items()))
    to_sign = sorted_params + api_secret
    return hashlib.sha1(to_sign.encode()).hexdigest()

def fetch_via_search_api(next_cursor=None, all_resources=None):
    if all_resources is None:
        all_resources = []

    url = f"https://api.cloudinary.com/v1_1/{CLOUD_NAME}/resources/search"

    timestamp = str(int(time.time()))
    params_to_sign = {
        "timestamp": timestamp,
        "max_results": "500",
        "expression": "resource_type:image",
    }
    if next_cursor:
        params_to_sign["next_cursor"] = next_cursor

    signature = generate_signature(params_to_sign, API_SECRET)

    post_params = {
        **params_to_sign,
        "api_key": API_KEY,
        "signature": signature,
    }

    post_data = urllib.parse.urlencode(post_params).encode()
    req = urllib.request.Request(url, data=post_data, method="POST")
    req.add_header("Content-Type", "application/x-www-form-urlencoded")

    try:
        with urllib.request.urlopen(req, timeout=30) as response:
            data = json.loads(response.read().decode())
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        print(f"HTTPError {e.code}: {body}")
        return all_resources
    except Exception as e:
        print(f"Erro: {e}")
        return all_resources

    resources = data.get("resources", [])
    all_resources.extend(resources)
    print(f"  Lote: {len(resources)} imagens (total: {len(all_resources)})")

    cursor = data.get("next_cursor")
    if cursor:
        return fetch_via_search_api(cursor, all_resources)
    return all_resources

def build_url(public_id, fmt="jpg"):
    return f"https://res.cloudinary.com/{CLOUD_NAME}/image/upload/f_auto,q_auto/{public_id}.{fmt}"

if __name__ == "__main__":
    print(f"Buscando via Search API ({CLOUD_NAME})...")
    resources = fetch_via_search_api()
    print(f"\nTotal: {len(resources)} imagens\n")

    results = []
    for r in resources:
        public_id = r.get("public_id", "")
        fmt = r.get("format", "jpg")
        url = build_url(public_id, fmt)
        folder = r.get("folder", "")
        results.append({
            "public_id": public_id,
            "folder": folder,
            "format": fmt,
            "url": url,
            "width": r.get("width"),
            "height": r.get("height"),
            "created_at": r.get("created_at", ""),
        })

    with open("all_images.json", "w") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"Salvo em all_images.json")

    folders = sorted(set(r["folder"] for r in results))
    print(f"Pastas: {folders}")

    print("\nURLs:")
    for r in results:
        print(r["url"])

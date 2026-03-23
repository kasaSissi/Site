#!/usr/bin/env python3
"""
Busca todas as imagens da nova conta Cloudinary via SDK.
"""
import cloudinary
import cloudinary.api
import json

CLOUD_NAME = "dp9rcls07"
API_KEY = "414781151276465"
API_SECRET = "NxoN4dXaaWZoZudK-Zq3erueeXk"

cloudinary.config(
    cloud_name=CLOUD_NAME,
    api_key=API_KEY,
    api_secret=API_SECRET,
    secure=True
)

all_resources = []
next_cursor = None

print(f"Buscando imagens na conta '{CLOUD_NAME}'...")
while True:
    kwargs = {"max_results": 500, "type": "upload", "resource_type": "image"}
    if next_cursor:
        kwargs["next_cursor"] = next_cursor
    result = cloudinary.api.resources(**kwargs)
    batch = result.get("resources", [])
    all_resources.extend(batch)
    print(f"  Lote: {len(batch)} imagens (total: {len(all_resources)})")
    next_cursor = result.get("next_cursor")
    if not next_cursor:
        break

print(f"\nTotal encontrado: {len(all_resources)} imagens")

results = []
for r in all_resources:
    public_id = r["public_id"]
    fmt = r.get("format", "jpg")
    url = f"https://res.cloudinary.com/{CLOUD_NAME}/image/upload/f_auto,q_auto/{public_id}.{fmt}"
    results.append({
        "public_id": public_id,
        "folder": r.get("folder", ""),
        "format": fmt,
        "url": url,
        "width": r.get("width"),
        "height": r.get("height"),
        "created_at": r.get("created_at", ""),
    })

with open("all_images_new.json", "w") as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

folders = sorted(set(r["folder"] for r in results))
print(f"Pastas encontradas: {folders}")
print(f"\nURLs das imagens:")
for r in results:
    print(r["url"])

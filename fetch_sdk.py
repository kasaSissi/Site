#!/usr/bin/env python3
import cloudinary
import cloudinary.api
import json

cloudinary.config(
    cloud_name="dipruvqks",
    api_key="249195267513556",
    api_secret="-r9WsfMzOIDSmHSjsqte6Snc_NU",
    secure=True
)

all_resources = []
next_cursor = None

print("Buscando imagens...")
while True:
    kwargs = {"max_results": 500, "type": "upload", "resource_type": "image"}
    if next_cursor:
        kwargs["next_cursor"] = next_cursor
    result = cloudinary.api.resources(**kwargs)
    batch = result.get("resources", [])
    all_resources.extend(batch)
    print(f"  Lote: {len(batch)} (total: {len(all_resources)})")
    next_cursor = result.get("next_cursor")
    if not next_cursor:
        break

print(f"\nTotal: {len(all_resources)} imagens")

results = []
for r in all_resources:
    public_id = r["public_id"]
    fmt = r.get("format", "jpg")
    url = f"https://res.cloudinary.com/dipruvqks/image/upload/f_auto,q_auto/{public_id}.{fmt}"
    results.append({
        "public_id": public_id,
        "folder": r.get("folder", ""),
        "format": fmt,
        "url": url,
        "width": r.get("width"),
        "height": r.get("height"),
        "created_at": r.get("created_at", ""),
    })

with open("all_images.json", "w") as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

folders = sorted(set(r["folder"] for r in results))
print(f"Pastas: {folders}")
print("\nURLs:")
for r in results:
    print(r["url"])

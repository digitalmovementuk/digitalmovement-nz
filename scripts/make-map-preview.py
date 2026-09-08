#!/usr/bin/env python3
"""
Builds the still map behind the "Where to find us" card in the footer.

Why a self-hosted still and not a Google embed: until the visitor clicks
"Load Google Maps", nothing on the page talks to Google. The still is
stitched from OpenStreetMap tiles (ODbL). The credit line in FooterMap.tsx
is the licence condition for using them, not decoration — leave it in.

Run once; the output is committed. Run again only if the address moves.

    python3 scripts/make-map-preview.py

Outputs (all under public/brand):
    map-139-quay-street.jpg        1600×600, desktop
    map-139-quay-street-1600.webp
    map-139-quay-street-800.jpg     800×300, phone
    map-139-quay-street-800.webp
"""
import io
import math
import urllib.request

from PIL import Image

# Harbour Board Building, 139 Quay Street, Auckland 1010 — Nominatim, 2026-09-08.
LAT, LON = -36.8422767, 174.7648605
ZOOM = 17
OUT_W, OUT_H = 1600, 600
STEM = "public/brand/map-139-quay-street"
UA = "DigitalMovement-nz-site-build/1.0 (office@digitalmovement.co.nz)"
TILE = 256


def project(lat, lon, z):
    """World pixel coordinates (Web Mercator) for a point."""
    n = TILE * 2**z
    x = (lon + 180.0) / 360.0 * n
    s = math.sin(math.radians(lat))
    y = (0.5 - math.log((1 + s) / (1 - s)) / (4 * math.pi)) * n
    return x, y


def main():
    cx, cy = project(LAT, LON, ZOOM)
    left, top = cx - OUT_W / 2, cy - OUT_H / 2
    tx0, ty0 = int(left // TILE), int(top // TILE)
    tx1, ty1 = int((left + OUT_W) // TILE), int((top + OUT_H) // TILE)

    canvas = Image.new("RGB", ((tx1 - tx0 + 1) * TILE, (ty1 - ty0 + 1) * TILE), "#f2efe9")
    for tx in range(tx0, tx1 + 1):
        for ty in range(ty0, ty1 + 1):
            url = f"https://tile.openstreetmap.org/{ZOOM}/{tx}/{ty}.png"
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=30) as r:
                tile = Image.open(io.BytesIO(r.read())).convert("RGB")
            canvas.paste(tile, ((tx - tx0) * TILE, (ty - ty0) * TILE))
            print(f"  tile {tx}/{ty}")

    ox, oy = int(left - tx0 * TILE), int(top - ty0 * TILE)
    crop = canvas.crop((ox, oy, ox + OUT_W, oy + OUT_H))
    crop.save(f"{STEM}.jpg", "JPEG", quality=78, optimize=True, progressive=True)
    crop.save(f"{STEM}-1600.webp", "WEBP", quality=72, method=6)
    small = crop.resize((OUT_W // 2, OUT_H // 2), Image.LANCZOS)
    small.save(f"{STEM}-800.jpg", "JPEG", quality=78, optimize=True, progressive=True)
    small.save(f"{STEM}-800.webp", "WEBP", quality=72, method=6)
    print(f"written: {STEM}.jpg, -1600.webp, -800.jpg, -800.webp")


if __name__ == "__main__":
    main()

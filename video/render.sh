#!/usr/bin/env bash
# Renders every loop to ../public/video/<id>.mp4, <id>.webm and <id>.jpg (poster).
# Usage: ./render.sh            (all)   ./render.sh angie   (one)
set -euo pipefail
cd "$(dirname "$0")"
OUT=../public/video
mkdir -p "$OUT"
IDS=${1:-"home lora angie sophie clara"}
for id in $IDS; do
  npx remotion render src/index.ts "$id" "$OUT/$id.mp4" --codec=h264 --crf=30 --x264-preset=veryslow --pixel-format=yuv420p --image-format=jpeg --jpeg-quality=92 --log=error
  npx remotion render src/index.ts "$id" "$OUT/$id.webm" --codec=vp9 --crf=42 --image-format=jpeg --jpeg-quality=92 --log=error
  # Poster: the approved state, so a still (and reduced motion) still ends on the approval.
  npx remotion still src/index.ts "$id" "$OUT/$id.jpg" --frame=320 --image-format=jpeg --jpeg-quality=80 --log=error
done
ls -la "$OUT"

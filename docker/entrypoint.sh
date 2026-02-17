#!/usr/bin/env bash
set -euo pipefail

trap "echo 'Stopping git-sync'; exit 0" SIGTERM SIGINT

: "${SYNC_INTERVAL:=10}"

echo "Starting git-sync (interval=${SYNC_INTERVAL}s)"

while true; do
  /opt/git-sync/redeploy.sh
  sleep "$SYNC_INTERVAL"
done
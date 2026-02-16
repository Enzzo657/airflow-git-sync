#!/usr/bin/env bash
set -euo pipefail

# ENV

: "${REPO_URL:?REPO_URL not set}"
: "${GIT_BRANCH:?GIT_BRANCH not set}"
: "${SYNC_ROOT:?SYNC_ROOT not set}"
: "${AIRFLOW_RESTART_SERVICES:?AIRFLOW_RESTART_SERVICES not set}"

# PATHS

PLUGINS_PATH="${SYNC_ROOT}/plugins"
LOCKFILE="/tmp/git-sync.lock"

# LOCK

exec 9>"$LOCKFILE"
flock -n 9 || exit 0

# UTILS

dir_hash() {
  local dir="$1"
  [ -d "$dir" ] || { echo "none"; return; }

  find "$dir" -type f -print0 \
    ! -path "*/__pycache__/*" \
    ! -name "*.pyc" \
    ! -name "*.pyo" \
    -print0 \
    | sort -z \
    | xargs -0 sha256sum \
    | sha256sum \
    | awk '{print $1}'
}

# CLONE IF NEEDED

if [ ! -d "$SYNC_ROOT/.git" ]; then
  git clone --branch "$GIT_BRANCH" "$REPO_URL" "$SYNC_ROOT"
fi

cd "$SYNC_ROOT"
git config --global --add safe.directory "$SYNC_ROOT"

# SYNC

PLUGINS_HASH_BEFORE=$(dir_hash "$PLUGINS_PATH")

git fetch --prune origin
git reset --hard "origin/$GIT_BRANCH"
git clean -fdx \
  -e __pycache__/ \
  -e '**/__pycache__**' \
  -e '*.pyc' \
  -e '*.pyo'

PLUGINS_HASH_AFTER=$(dir_hash "$PLUGINS_PATH")

# RESTART IF NEEDED

if [[ "$PLUGINS_HASH_BEFORE" != "$PLUGINS_HASH_AFTER" ]]; then
  echo "Plugins changed → restarting airflow"
  docker restart $AIRFLOW_RESTART_SERVICES
else
  echo "Plugins unchanged → no restart"
fi
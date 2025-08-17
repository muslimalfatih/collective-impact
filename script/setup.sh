
#!/usr/bin/env bash
set -euo pipefail

FRONTEND_DIR="src/frontend"

echo "📦 Installing frontend dependencies..."
pnpm --dir "$FRONTEND_DIR" install


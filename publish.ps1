# Publishes changes to the live site.
# Usage: .\publish.ps1 "Add post: <title>"

param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$Message
)

git add -A

$staged = git diff --cached --name-only
if (-not $staged) {
    Write-Host "Nothing to publish - no changes since last commit."
    exit 0
}

git commit -m $Message
if (-not $?) {
    Write-Host "Commit failed - aborting push."
    exit 1
}

git push

Write-Host "Published. Live at https://emiliobejasa.github.io/music-blog/ (may take a minute to update)."

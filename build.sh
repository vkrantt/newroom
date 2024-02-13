set -e

if [ -z "$1" ]; then
  echo "Version number: $0 <version>"
  exit 1
fi

VERSION=$1

sed -i "s/\"version\": \"buildversion\"/\"version\": \"$VERSION\"/" version.json

echo "Version updated to $VERSION"

echo "Creating new build ---------"
yarn build
echo "New build created successfully ---------"

sed -i "s/\"version\": \"$VERSION\"/\"version\": \"buildversion\"/" version.json

echo "Version reverted"
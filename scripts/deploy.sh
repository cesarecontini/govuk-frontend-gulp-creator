PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

git clone git@gitlab.domain.net:group-name/project-name.git .deploy
rm -rf .deploy/css .deploy/examples .deploy/images .deploy/js
cp -R dist/* .deploy
cd .deploy
sed -i "" "s/\"version\": \".*\",/\"version\": \"$PACKAGE_VERSION\",/" package.json
git add -A
git commit -m "Deploying and releasing version $PACKAGE_VERSION"
git tag $PACKAGE_VERSION
git push && git push --tags
cd ..
rm -rf .deploy

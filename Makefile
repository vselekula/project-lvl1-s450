install:
        npm install
start:
        npx babel-node -- 'src/bin/brain-games.js'
build:
        NODE_ENV=production babel src --out-dir dist --source-maps inline
prepublishOnly:
        npm run build
publish:
        npm publish
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsConfigPaths = require('tsconfig-paths');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsConfig = require('./tsconfig.json');

tsConfigPaths.register({
  baseUrl: '.',
  paths: tsConfig.compilerOptions.paths,
});

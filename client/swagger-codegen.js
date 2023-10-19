const { codegen } = require('swagger-axios-codegen');
const dotenv = require('dotenv');

dotenv.config();

codegen({
  methodNameMode: 'path',
  remoteUrl: process.env.REACT_APP_SWAGGER_URL,
  outputDir: './src/api',
  strictNullChecks: false,
  modelMode: 'interface',
  extendDefinitionFile: './src/api/customerDefinition.ts',
  extendGenericType: ['JsonResult'],
  sharedServiceOptions: true,
  classNameMode: 'parentPath',
});

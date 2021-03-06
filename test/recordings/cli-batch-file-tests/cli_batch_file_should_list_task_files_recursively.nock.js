// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForFileTests/tasks/xplatTask/files?recursive=true&api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#files\",\"value\":[\r\n    {\r\n      \"name\":\"ProcessEnv.cmd\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForFileTests/tasks/xplatTask/files/ProcessEnv.cmd\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2016-04-11T18:52:27.0904391Z\",\"lastModified\":\"2016-04-11T18:52:27.0904391Z\",\"contentLength\":\"2448\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    },{\r\n      \"name\":\"stderr.txt\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForFileTests/tasks/xplatTask/files/stderr.txt\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2016-04-11T18:52:27.015436Z\",\"lastModified\":\"2016-04-11T18:52:27.015436Z\",\"contentLength\":\"0\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    },{\r\n      \"name\":\"stdout.txt\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForFileTests/tasks/xplatTask/files/stdout.txt\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2016-04-11T18:52:27.0144408Z\",\"lastModified\":\"2016-04-11T18:52:27.0144408Z\",\"contentLength\":\"0\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    },{\r\n      \"name\":\"wd\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForFileTests/tasks/xplatTask/files/wd\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"wd\\\\taskOut.txt\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForFileTests/tasks/xplatTask/files/wd\\\\taskOut.txt\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2016-04-11T18:52:27.1004394Z\",\"lastModified\":\"2016-04-11T18:52:27.1004394Z\",\"contentLength\":\"7\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '69a7f08b-e34e-4cd1-aeb7-91440da3efd0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'a8837b54-fcc7-44fa-a010-f5d370423156',
  dataserviceversion: '3.0',
  date: 'Mon, 11 Apr 2016 18:52:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForFileTests/tasks/xplatTask/files?recursive=true&api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#files\",\"value\":[\r\n    {\r\n      \"name\":\"ProcessEnv.cmd\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForFileTests/tasks/xplatTask/files/ProcessEnv.cmd\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2016-04-11T18:52:27.0904391Z\",\"lastModified\":\"2016-04-11T18:52:27.0904391Z\",\"contentLength\":\"2448\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    },{\r\n      \"name\":\"stderr.txt\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForFileTests/tasks/xplatTask/files/stderr.txt\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2016-04-11T18:52:27.015436Z\",\"lastModified\":\"2016-04-11T18:52:27.015436Z\",\"contentLength\":\"0\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    },{\r\n      \"name\":\"stdout.txt\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForFileTests/tasks/xplatTask/files/stdout.txt\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2016-04-11T18:52:27.0144408Z\",\"lastModified\":\"2016-04-11T18:52:27.0144408Z\",\"contentLength\":\"0\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    },{\r\n      \"name\":\"wd\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForFileTests/tasks/xplatTask/files/wd\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"wd\\\\taskOut.txt\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForFileTests/tasks/xplatTask/files/wd\\\\taskOut.txt\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2016-04-11T18:52:27.1004394Z\",\"lastModified\":\"2016-04-11T18:52:27.1004394Z\",\"contentLength\":\"7\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '69a7f08b-e34e-4cd1-aeb7-91440da3efd0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'a8837b54-fcc7-44fa-a010-f5d370423156',
  dataserviceversion: '3.0',
  date: 'Mon, 11 Apr 2016 18:52:33 GMT',
  connection: 'close' });
 return result; }]];
// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=teststorage1220;AccountKey=null';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://teststorage1220.table.core.windows.net:443')
  .get('/storageclitesttable?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '51ac3d4f-0002-007e-3a49-3eec8d000000',
  'x-ms-version': '2014-02-14',
  date: 'Fri, 13 Mar 2015 09:08:37 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://teststorage1220.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storageclitesttable?comp=acl', '*')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5e142f50-0002-0007-0d30-b90cc5000000',
  'x-ms-version': '2014-02-14',
  date: 'Fri, 13 Mar 2015 09:08:37 GMT' });
 return result; }]];
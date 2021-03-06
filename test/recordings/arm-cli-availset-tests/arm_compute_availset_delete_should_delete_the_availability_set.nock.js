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
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate7966/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail3910?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 3,\r\n    \"virtualMachines\": []\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate7966/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail3910\",\r\n  \"name\": \"xplatTestaAvail3910\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '421',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131106124671095645',
  'x-ms-request-id': 'e91487b0-97b8-4f6c-9b4d-8c87c99e44e9',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'aa7032c5-42be-40a0-a68e-f121695d2e09',
  'x-ms-routing-request-id': 'EASTUS:20160718T193916Z:aa7032c5-42be-40a0-a68e-f121695d2e09',
  date: 'Mon, 18 Jul 2016 19:39:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate7966/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail3910?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 3,\r\n    \"virtualMachines\": []\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate7966/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail3910\",\r\n  \"name\": \"xplatTestaAvail3910\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '421',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131106124671095645',
  'x-ms-request-id': 'e91487b0-97b8-4f6c-9b4d-8c87c99e44e9',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'aa7032c5-42be-40a0-a68e-f121695d2e09',
  'x-ms-routing-request-id': 'EASTUS:20160718T193916Z:aa7032c5-42be-40a0-a68e-f121695d2e09',
  date: 'Mon, 18 Jul 2016 19:39:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate7966/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail3910?api-version=2016-03-30')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131106124671095645',
  'x-ms-request-id': '339c756e-ec86-458c-8772-f91afbbf91cb',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'a8edaa73-b8d4-479a-b6a6-0f9da7611f5b',
  'x-ms-routing-request-id': 'EASTUS:20160718T193917Z:a8edaa73-b8d4-479a-b6a6-0f9da7611f5b',
  date: 'Mon, 18 Jul 2016 19:39:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate7966/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail3910?api-version=2016-03-30')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131106124671095645',
  'x-ms-request-id': '339c756e-ec86-458c-8772-f91afbbf91cb',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'a8edaa73-b8d4-479a-b6a6-0f9da7611f5b',
  'x-ms-routing-request-id': 'EASTUS:20160718T193917Z:a8edaa73-b8d4-479a-b6a6-0f9da7611f5b',
  date: 'Mon, 18 Jul 2016 19:39:16 GMT',
  connection: 'close' });
 return result; }]];
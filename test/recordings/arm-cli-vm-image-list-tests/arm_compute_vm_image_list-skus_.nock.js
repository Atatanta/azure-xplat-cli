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
    registeredProviders: ['mobileservice'],
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2008R2SP3-WS2008R2SP1/skus?api-version=2016-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"Enterprise\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Enterprise\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"Standard\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Standard\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"Web\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Web\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '810',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '735818f1-50e4-4613-873f-64399a27a350',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14934',
  'x-ms-correlation-request-id': '7c86d1dc-57fc-45fa-9e77-efebec6051c1',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T180756Z:7c86d1dc-57fc-45fa-9e77-efebec6051c1',
  date: 'Thu, 11 Aug 2016 18:07:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2008R2SP3-WS2008R2SP1/skus?api-version=2016-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"Enterprise\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Enterprise\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"Standard\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Standard\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"Web\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Web\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '810',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '735818f1-50e4-4613-873f-64399a27a350',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14934',
  'x-ms-correlation-request-id': '7c86d1dc-57fc-45fa-9e77-efebec6051c1',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T180756Z:7c86d1dc-57fc-45fa-9e77-efebec6051c1',
  date: 'Thu, 11 Aug 2016 18:07:55 GMT',
  connection: 'close' });
 return result; }]];
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers?api-version=2016-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2008R2SP3-WS2008R2SP1\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2008R2SP3-WS2012\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2012\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2012SP2-WS2012\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP2-WS2012\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2012SP2-WS2012R2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP2-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2012SP3-WS2012R2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2012SP3-WS2012R2-BYOL\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2-BYOL\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2014-WS2012R2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2014SP1-WS2012R2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014SP1-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2014SP1-WS2012R2-BYOL\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014SP1-WS2012R2-BYOL\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2016-WS2012R2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2016-WS2012R2-BYOL\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016-WS2012R2-BYOL\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2016CTP3-WS2012R2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP3-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2016CTP3.1-WS2012R2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP3.1-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2016CTP3.2-WS2012R2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP3.2-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2016RC3-WS2012R2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016RC3-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2016RC3-WS2012R2v2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016RC3-WS2012R2v2\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4247',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '6bc5446f-46fa-4743-8e41-2bebc80c53ec',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': 'e157e737-347a-42e4-ab9d-7de877ab6cb2',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T180755Z:e157e737-347a-42e4-ab9d-7de877ab6cb2',
  date: 'Thu, 11 Aug 2016 18:07:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers?api-version=2016-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2008R2SP3-WS2008R2SP1\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2008R2SP3-WS2012\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2012\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2012SP2-WS2012\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP2-WS2012\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2012SP2-WS2012R2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP2-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2012SP3-WS2012R2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2012SP3-WS2012R2-BYOL\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2-BYOL\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2014-WS2012R2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2014SP1-WS2012R2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014SP1-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2014SP1-WS2012R2-BYOL\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014SP1-WS2012R2-BYOL\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2016-WS2012R2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2016-WS2012R2-BYOL\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016-WS2012R2-BYOL\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2016CTP3-WS2012R2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP3-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2016CTP3.1-WS2012R2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP3.1-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2016CTP3.2-WS2012R2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP3.2-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2016RC3-WS2012R2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016RC3-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2016RC3-WS2012R2v2\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016RC3-WS2012R2v2\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4247',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '6bc5446f-46fa-4743-8e41-2bebc80c53ec',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': 'e157e737-347a-42e4-ab9d-7de877ab6cb2',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T180755Z:e157e737-347a-42e4-ab9d-7de877ab6cb2',
  date: 'Thu, 11 Aug 2016 18:07:54 GMT',
  connection: 'close' });
 return result; }]];
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/NS/set-ns?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/NS\\/set-ns\",\"name\":\"set-ns\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"da85dd4a-bdb0-49f3-8872-53098002690c\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-ns.example1.com.\",\"TTL\":3600,\"NSRecords\":[{\"nsdname\":\"ns1.com.\"}]}}", { 'cache-control': 'private',
  'content-length': '427',
  'content-type': 'application/json; charset=utf-8',
  etag: 'da85dd4a-bdb0-49f3-8872-53098002690c',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'cd0810f1-aaf1-42b9-830b-0be2f035440d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '640b67d6-e647-4dcc-9033-9463ebf2d588',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104917Z:640b67d6-e647-4dcc-9033-9463ebf2d588',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:49:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/NS/set-ns?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/NS\\/set-ns\",\"name\":\"set-ns\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"da85dd4a-bdb0-49f3-8872-53098002690c\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-ns.example1.com.\",\"TTL\":3600,\"NSRecords\":[{\"nsdname\":\"ns1.com.\"}]}}", { 'cache-control': 'private',
  'content-length': '427',
  'content-type': 'application/json; charset=utf-8',
  etag: 'da85dd4a-bdb0-49f3-8872-53098002690c',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'cd0810f1-aaf1-42b9-830b-0be2f035440d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '640b67d6-e647-4dcc-9033-9463ebf2d588',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104917Z:640b67d6-e647-4dcc-9033-9463ebf2d588',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:49:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/NS/set-ns?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/NS\\/set-ns\",\"name\":\"set-ns\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"caf26fa8-8d35-4b05-95ed-4e30e77e7c58\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-ns.example1.com.\",\"TTL\":3600,\"NSRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '405',
  'content-type': 'application/json; charset=utf-8',
  etag: 'caf26fa8-8d35-4b05-95ed-4e30e77e7c58',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '25056df5-28ad-428e-b4a7-207c4ac14268',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'a7d73293-07df-4a30-8454-647b730b06f7',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104917Z:a7d73293-07df-4a30-8454-647b730b06f7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:49:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/NS/set-ns?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/NS\\/set-ns\",\"name\":\"set-ns\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"caf26fa8-8d35-4b05-95ed-4e30e77e7c58\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-ns.example1.com.\",\"TTL\":3600,\"NSRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '405',
  'content-type': 'application/json; charset=utf-8',
  etag: 'caf26fa8-8d35-4b05-95ed-4e30e77e7c58',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '25056df5-28ad-428e-b4a7-207c4ac14268',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'a7d73293-07df-4a30-8454-647b730b06f7',
  'x-ms-routing-request-id': 'WESTEUROPE:20160316T104917Z:a7d73293-07df-4a30-8454-647b730b06f7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 10:49:16 GMT',
  connection: 'close' });
 return result; }]];
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGAvailCreate6691?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGAvailCreate6691' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '50261eb9-3c18-42b6-8f78-a8f7c8c28411',
  'x-ms-correlation-request-id': '50261eb9-3c18-42b6-8f78-a8f7c8c28411',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T180628Z:50261eb9-3c18-42b6-8f78-a8f7c8c28411',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Aug 2016 18:06:28 GMT',
  connection: 'close',
  'content-length': '117' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGAvailCreate6691?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGAvailCreate6691' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '50261eb9-3c18-42b6-8f78-a8f7c8c28411',
  'x-ms-correlation-request-id': '50261eb9-3c18-42b6-8f78-a8f7c8c28411',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T180628Z:50261eb9-3c18-42b6-8f78-a8f7c8c28411',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Aug 2016 18:06:28 GMT',
  connection: 'close',
  'content-length': '117' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGAvailCreate6691?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate6691\",\"name\":\"xplatTestGAvailCreate6691\",\"location\":\"eastus\",\"tags\":{\"arm-cli-availset-tests\":\"2016-08-11T18:06:27.370Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '264',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1187',
  'x-ms-request-id': '9ec7cc4f-0374-423d-93a3-e76957e1f981',
  'x-ms-correlation-request-id': '9ec7cc4f-0374-423d-93a3-e76957e1f981',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T180630Z:9ec7cc4f-0374-423d-93a3-e76957e1f981',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Aug 2016 18:06:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplatTestGAvailCreate6691?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate6691\",\"name\":\"xplatTestGAvailCreate6691\",\"location\":\"eastus\",\"tags\":{\"arm-cli-availset-tests\":\"2016-08-11T18:06:27.370Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '264',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1187',
  'x-ms-request-id': '9ec7cc4f-0374-423d-93a3-e76957e1f981',
  'x-ms-correlation-request-id': '9ec7cc4f-0374-423d-93a3-e76957e1f981',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T180630Z:9ec7cc4f-0374-423d-93a3-e76957e1f981',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Aug 2016 18:06:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate6691/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail7429?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Compute/availabilitySets/xplatTestaAvail7429' under resource group 'xplatTestGAvailCreate6691' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'd895217e-19f9-48d8-9375-c6178f58cbd8',
  'x-ms-correlation-request-id': 'd895217e-19f9-48d8-9375-c6178f58cbd8',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T180633Z:d895217e-19f9-48d8-9375-c6178f58cbd8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Aug 2016 18:06:32 GMT',
  connection: 'close',
  'content-length': '183' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate6691/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail7429?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Compute/availabilitySets/xplatTestaAvail7429' under resource group 'xplatTestGAvailCreate6691' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'd895217e-19f9-48d8-9375-c6178f58cbd8',
  'x-ms-correlation-request-id': 'd895217e-19f9-48d8-9375-c6178f58cbd8',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T180633Z:d895217e-19f9-48d8-9375-c6178f58cbd8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 11 Aug 2016 18:06:32 GMT',
  connection: 'close',
  'content-length': '183' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate6691/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail7429?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 3\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate6691/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail7429\",\r\n  \"name\": \"xplatTestaAvail7429\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '393',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'fd84d67a-575e-4ef4-a544-f036b4356d66',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1186',
  'x-ms-correlation-request-id': 'b6a2a255-5e94-4604-938e-75ce7ab04847',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T180635Z:b6a2a255-5e94-4604-938e-75ce7ab04847',
  date: 'Thu, 11 Aug 2016 18:06:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate6691/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail7429?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 3\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGAvailCreate6691/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail7429\",\r\n  \"name\": \"xplatTestaAvail7429\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '393',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'fd84d67a-575e-4ef4-a544-f036b4356d66',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1186',
  'x-ms-correlation-request-id': 'b6a2a255-5e94-4604-938e-75ce7ab04847',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T180635Z:b6a2a255-5e94-4604-938e-75ce7ab04847',
  date: 'Thu, 11 Aug 2016 18:06:35 GMT',
  connection: 'close' });
 return result; }]];
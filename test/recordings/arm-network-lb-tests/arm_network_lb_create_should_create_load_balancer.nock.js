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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-lb?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-lb' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-request-id': '887aec1d-3fcb-42e0-af55-135b383d3d81',
  'x-ms-correlation-request-id': '887aec1d-3fcb-42e0-af55-135b383d3d81',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T012218Z:887aec1d-3fcb-42e0-af55-135b383d3d81',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 12 Aug 2016 01:22:18 GMT',
  connection: 'close',
  'content-length': '105' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-lb?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-lb' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-request-id': '887aec1d-3fcb-42e0-af55-135b383d3d81',
  'x-ms-correlation-request-id': '887aec1d-3fcb-42e0-af55-135b383d3d81',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T012218Z:887aec1d-3fcb-42e0-af55-135b383d3d81',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 12 Aug 2016 01:22:18 GMT',
  connection: 'close',
  'content-length': '105' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-lb?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb\",\"name\":\"xplat-test-lb\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '189',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-request-id': '6051a513-99de-4549-b5b2-4c6bf7dcf7f1',
  'x-ms-correlation-request-id': '6051a513-99de-4549-b5b2-4c6bf7dcf7f1',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T012221Z:6051a513-99de-4549-b5b2-4c6bf7dcf7f1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 12 Aug 2016 01:22:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-lb?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb\",\"name\":\"xplat-test-lb\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '189',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-request-id': '6051a513-99de-4549-b5b2-4c6bf7dcf7f1',
  'x-ms-correlation-request-id': '6051a513-99de-4549-b5b2-4c6bf7dcf7f1',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T012221Z:6051a513-99de-4549-b5b2-4c6bf7dcf7f1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 12 Aug 2016 01:22:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/test-lb' under resource group 'xplat-test-lb' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '62e2dd4b-1016-4b93-beb5-9f8d618021ea',
  'x-ms-correlation-request-id': '62e2dd4b-1016-4b93-beb5-9f8d618021ea',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T012222Z:62e2dd4b-1016-4b93-beb5-9f8d618021ea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 12 Aug 2016 01:22:22 GMT',
  connection: 'close',
  'content-length': '156' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/test-lb' under resource group 'xplat-test-lb' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '62e2dd4b-1016-4b93-beb5-9f8d618021ea',
  'x-ms-correlation-request-id': '62e2dd4b-1016-4b93-beb5-9f8d618021ea',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T012222Z:62e2dd4b-1016-4b93-beb5-9f8d618021ea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 12 Aug 2016 01:22:22 GMT',
  connection: 'close',
  'content-length': '156' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30', '*')
  .reply(201, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"037f19e3-f61a-4d81-86c3-089e9b4ff6d4\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6e0f6b79-ab0b-4e66-913d-25b9e62e821d\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '682',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd6e60488-f5e7-4401-bd5d-392daa06ba7f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/d6e60488-f5e7-4401-bd5d-392daa06ba7f?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-correlation-request-id': '0c9a5d39-8205-41b7-83dd-c3b12a31aaa3',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T012224Z:0c9a5d39-8205-41b7-83dd-c3b12a31aaa3',
  date: 'Fri, 12 Aug 2016 01:22:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30', '*')
  .reply(201, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"037f19e3-f61a-4d81-86c3-089e9b4ff6d4\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6e0f6b79-ab0b-4e66-913d-25b9e62e821d\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '682',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd6e60488-f5e7-4401-bd5d-392daa06ba7f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/d6e60488-f5e7-4401-bd5d-392daa06ba7f?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-correlation-request-id': '0c9a5d39-8205-41b7-83dd-c3b12a31aaa3',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T012224Z:0c9a5d39-8205-41b7-83dd-c3b12a31aaa3',
  date: 'Fri, 12 Aug 2016 01:22:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"037f19e3-f61a-4d81-86c3-089e9b4ff6d4\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6e0f6b79-ab0b-4e66-913d-25b9e62e821d\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '682',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"037f19e3-f61a-4d81-86c3-089e9b4ff6d4"',
  'x-ms-request-id': 'd6a048d9-77a3-4d2b-b83e-41734c2b4540',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14950',
  'x-ms-correlation-request-id': '49026e6a-575d-40a2-b46b-ec13dce1879f',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T012225Z:49026e6a-575d-40a2-b46b-ec13dce1879f',
  date: 'Fri, 12 Aug 2016 01:22:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"037f19e3-f61a-4d81-86c3-089e9b4ff6d4\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6e0f6b79-ab0b-4e66-913d-25b9e62e821d\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '682',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"037f19e3-f61a-4d81-86c3-089e9b4ff6d4"',
  'x-ms-request-id': 'd6a048d9-77a3-4d2b-b83e-41734c2b4540',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14950',
  'x-ms-correlation-request-id': '49026e6a-575d-40a2-b46b-ec13dce1879f',
  'x-ms-routing-request-id': 'CANADAEAST:20160812T012225Z:49026e6a-575d-40a2-b46b-ec13dce1879f',
  date: 'Fri, 12 Aug 2016 01:22:25 GMT',
  connection: 'close' });
 return result; }]];
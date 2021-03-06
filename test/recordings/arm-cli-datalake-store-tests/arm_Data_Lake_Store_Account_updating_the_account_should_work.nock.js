// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4918?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls4918.azuredatalakestore.net\",\"accountId\":\"53d7a318-68a1-4f49-8a66-d71cad1f62aa\",\"creationTime\":\"2016-06-16T21:48:45.0299345Z\",\"lastModifiedTime\":\"2016-06-16T21:48:45.0299345Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4918\",\"name\":\"xplattestadls4918\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '672',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '405c8e1c-a166-46b3-92ff-daf31e7ff42c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '55bb654b-b68e-4470-b96f-df90fbd85bf3',
  'x-ms-routing-request-id': 'CENTRALUS:20160616T214912Z:55bb654b-b68e-4470-b96f-df90fbd85bf3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4918?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls4918.azuredatalakestore.net\",\"accountId\":\"53d7a318-68a1-4f49-8a66-d71cad1f62aa\",\"creationTime\":\"2016-06-16T21:48:45.0299345Z\",\"lastModifiedTime\":\"2016-06-16T21:48:45.0299345Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4918\",\"name\":\"xplattestadls4918\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '672',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '405c8e1c-a166-46b3-92ff-daf31e7ff42c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '55bb654b-b68e-4470-b96f-df90fbd85bf3',
  'x-ms-routing-request-id': 'CENTRALUS:20160616T214912Z:55bb654b-b68e-4470-b96f-df90fbd85bf3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4918?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls4918.azuredatalakestore.net\",\"accountId\":\"53d7a318-68a1-4f49-8a66-d71cad1f62aa\",\"creationTime\":\"2016-06-16T21:48:45.0299345Z\",\"lastModifiedTime\":\"2016-06-16T21:48:45.0299345Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4918\",\"name\":\"xplattestadls4918\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '672',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '093b86c0-9bff-4951-b410-2d85a6e744be',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'a8babe3b-1521-40f2-8c05-2d22f875399a',
  'x-ms-routing-request-id': 'CENTRALUS:20160616T214913Z:a8babe3b-1521-40f2-8c05-2d22f875399a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4918?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls4918.azuredatalakestore.net\",\"accountId\":\"53d7a318-68a1-4f49-8a66-d71cad1f62aa\",\"creationTime\":\"2016-06-16T21:48:45.0299345Z\",\"lastModifiedTime\":\"2016-06-16T21:48:45.0299345Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4918\",\"name\":\"xplattestadls4918\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '672',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '093b86c0-9bff-4951-b410-2d85a6e744be',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'a8babe3b-1521-40f2-8c05-2d22f875399a',
  'x-ms-routing-request-id': 'CENTRALUS:20160616T214913Z:a8babe3b-1521-40f2-8c05-2d22f875399a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4918?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls4918.azuredatalakestore.net\",\"accountId\":\"53d7a318-68a1-4f49-8a66-d71cad1f62aa\",\"creationTime\":\"2016-06-16T21:48:45.0299345Z\",\"lastModifiedTime\":\"2016-06-16T21:49:14.7957259Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4918\",\"name\":\"xplattestadls4918\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '590',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '6c544bd6-8328-4c55-bffa-33d79f337dd8',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'a3a61671-e68a-4e18-b4a5-c3ffa60e5bbb',
  'x-ms-routing-request-id': 'CENTRALUS:20160616T214915Z:a3a61671-e68a-4e18-b4a5-c3ffa60e5bbb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4918?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls4918.azuredatalakestore.net\",\"accountId\":\"53d7a318-68a1-4f49-8a66-d71cad1f62aa\",\"creationTime\":\"2016-06-16T21:48:45.0299345Z\",\"lastModifiedTime\":\"2016-06-16T21:49:14.7957259Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4918\",\"name\":\"xplattestadls4918\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '590',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '6c544bd6-8328-4c55-bffa-33d79f337dd8',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'a3a61671-e68a-4e18-b4a5-c3ffa60e5bbb',
  'x-ms-routing-request-id': 'CENTRALUS:20160616T214915Z:a3a61671-e68a-4e18-b4a5-c3ffa60e5bbb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4918?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls4918.azuredatalakestore.net\",\"accountId\":\"53d7a318-68a1-4f49-8a66-d71cad1f62aa\",\"creationTime\":\"2016-06-16T21:48:45.0299345Z\",\"lastModifiedTime\":\"2016-06-16T21:49:14.7957259Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4918\",\"name\":\"xplattestadls4918\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '696',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '5270fa0e-4fe7-4c69-a2fc-980548a37991',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '82379a3e-48b6-4310-93f0-923f8792d081',
  'x-ms-routing-request-id': 'CENTRALUS:20160616T214915Z:82379a3e-48b6-4310-93f0-923f8792d081',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4918?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls4918.azuredatalakestore.net\",\"accountId\":\"53d7a318-68a1-4f49-8a66-d71cad1f62aa\",\"creationTime\":\"2016-06-16T21:48:45.0299345Z\",\"lastModifiedTime\":\"2016-06-16T21:49:14.7957259Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4918\",\"name\":\"xplattestadls4918\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '696',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '5270fa0e-4fe7-4c69-a2fc-980548a37991',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '82379a3e-48b6-4310-93f0-923f8792d081',
  'x-ms-routing-request-id': 'CENTRALUS:20160616T214915Z:82379a3e-48b6-4310-93f0-923f8792d081',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:15 GMT',
  connection: 'close' });
 return result; }]];
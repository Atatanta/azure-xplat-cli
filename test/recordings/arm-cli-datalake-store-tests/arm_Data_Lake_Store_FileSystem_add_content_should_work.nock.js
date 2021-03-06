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
nock('http://xplattestadls3248.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?op=APPEND&append=true&api-version=2015-10-01-preview', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'aadde685-5f51-4057-a39f-94ab28098291',
  'set-cookie': [ 'UserPrincipalSession=a388f3c3-d1cd-411e-8b3b-6631ffc7c81a; path=/; secure; HttpOnly' ],
  'server-perf': '[aadde685-5f51-4057-a39f-94ab28098291][ AuthTime::1459.29582560987::PostAuthTime::509.384914508018 ][S-FsOpenStream :: 00:00:092 ms]%0a[S-FsGetStreamLength :: 00:00:009 ms]%0a[S-FsAppendStream :: 00:00:166 ms]%0a[BufferingTime :: 00:00:000 ms]%0a[WriteTime :: 00:00:168 ms]%0a[S-FsCloseHandle :: 00:00:001 ms]%0a[APPEND :: 00:00:276 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:35 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3248.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?op=APPEND&append=true&api-version=2015-10-01-preview', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'aadde685-5f51-4057-a39f-94ab28098291',
  'set-cookie': [ 'UserPrincipalSession=a388f3c3-d1cd-411e-8b3b-6631ffc7c81a; path=/; secure; HttpOnly' ],
  'server-perf': '[aadde685-5f51-4057-a39f-94ab28098291][ AuthTime::1459.29582560987::PostAuthTime::509.384914508018 ][S-FsOpenStream :: 00:00:092 ms]%0a[S-FsGetStreamLength :: 00:00:009 ms]%0a[S-FsAppendStream :: 00:00:166 ms]%0a[BufferingTime :: 00:00:000 ms]%0a[WriteTime :: 00:00:168 ms]%0a[S-FsCloseHandle :: 00:00:001 ms]%0a[APPEND :: 00:00:276 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:35 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3248.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1466113766060,\"modificationTime\":1466113775643,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ca9e4328-f696-4497-b094-f804dbd2f671',
  'server-perf': '[ca9e4328-f696-4497-b094-f804dbd2f671][ AuthTime::0::PostAuthTime::0 ][S-HdfsGetFileStatusV2 :: 00:00:021 ms]%0a[GETFILESTATUS :: 00:00:021 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:35 GMT',
  connection: 'close',
  'content-length': '269' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3248.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1466113766060,\"modificationTime\":1466113775643,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ca9e4328-f696-4497-b094-f804dbd2f671',
  'server-perf': '[ca9e4328-f696-4497-b094-f804dbd2f671][ AuthTime::0::PostAuthTime::0 ][S-HdfsGetFileStatusV2 :: 00:00:021 ms]%0a[GETFILESTATUS :: 00:00:021 ms]%0a',
  'x-ms-webhdfs-version': '16.05.18.00',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 16 Jun 2016 21:49:35 GMT',
  connection: 'close',
  'content-length': '269' });
 return result; }]];
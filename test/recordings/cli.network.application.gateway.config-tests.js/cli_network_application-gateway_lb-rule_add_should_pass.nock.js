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
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/ApplicationGateways/CliTestAppGate/configuration?api-version=2015-04-01')
  .reply(200, "<ApplicationGatewayConfiguration xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><FrontendIPConfigurations><FrontendIPConfiguration><Name>fip1</Name><Type>Private</Type><StaticIPAddress>10.1.0.5</StaticIPAddress></FrontendIPConfiguration><FrontendIPConfiguration><Name>fipConfig</Name><Type>Private</Type><StaticIPAddress>10.0.0.10</StaticIPAddress></FrontendIPConfiguration></FrontendIPConfigurations><FrontendPorts><FrontendPort><Name>fep1</Name><Port>80</Port></FrontendPort><FrontendPort><Name>frontEndPort</Name><Port>80</Port></FrontendPort></FrontendPorts><BackendAddressPools><BackendAddressPool><Name>pool1</Name><IPAddresses><IPAddress>10.0.0.1</IPAddress></IPAddresses></BackendAddressPool><BackendAddressPool><Name>MyPool</Name><IPAddresses><IPAddress>10.0.0.2</IPAddress></IPAddresses></BackendAddressPool><BackendAddressPool><Name>clitestaddpool</Name><IPAddresses><IPAddress>10.0.0.10</IPAddress></IPAddresses></BackendAddressPool></BackendAddressPools><BackendHttpSettingsList><BackendHttpSettings><Name>setting1</Name><Port>80</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings><BackendHttpSettings><Name>MySettings</Name><Port>81</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings><BackendHttpSettings><Name>settings2</Name><Port>888</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings><BackendHttpSettings><Name>settings3</Name><Port>999</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings><BackendHttpSettings><Name>httpSetting</Name><Port>80</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings></BackendHttpSettingsList><HttpListeners><HttpListener><Name>listener1</Name><FrontendPort>fep1</FrontendPort><Protocol>Http</Protocol></HttpListener><HttpListener><Name>httpListener</Name><FrontendIP>fipConfig</FrontendIP><FrontendPort>frontEndPort</FrontendPort><Protocol>Http</Protocol></HttpListener></HttpListeners><HttpLoadBalancingRules><HttpLoadBalancingRule><Name>rule1</Name><Type>Basic</Type><BackendHttpSettings>setting1</BackendHttpSettings><Listener>listener1</Listener><BackendAddressPool>pool1</BackendAddressPool></HttpLoadBalancingRule></HttpLoadBalancingRules></ApplicationGatewayConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '2617',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.323 (rd_rdfe_stable.160224-0707) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'a86e07801b3f74a2a6e81a4d93c8879b',
  date: 'Mon, 29 Feb 2016 11:51:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/ApplicationGateways/CliTestAppGate/configuration?api-version=2015-04-01')
  .reply(200, "<ApplicationGatewayConfiguration xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><FrontendIPConfigurations><FrontendIPConfiguration><Name>fip1</Name><Type>Private</Type><StaticIPAddress>10.1.0.5</StaticIPAddress></FrontendIPConfiguration><FrontendIPConfiguration><Name>fipConfig</Name><Type>Private</Type><StaticIPAddress>10.0.0.10</StaticIPAddress></FrontendIPConfiguration></FrontendIPConfigurations><FrontendPorts><FrontendPort><Name>fep1</Name><Port>80</Port></FrontendPort><FrontendPort><Name>frontEndPort</Name><Port>80</Port></FrontendPort></FrontendPorts><BackendAddressPools><BackendAddressPool><Name>pool1</Name><IPAddresses><IPAddress>10.0.0.1</IPAddress></IPAddresses></BackendAddressPool><BackendAddressPool><Name>MyPool</Name><IPAddresses><IPAddress>10.0.0.2</IPAddress></IPAddresses></BackendAddressPool><BackendAddressPool><Name>clitestaddpool</Name><IPAddresses><IPAddress>10.0.0.10</IPAddress></IPAddresses></BackendAddressPool></BackendAddressPools><BackendHttpSettingsList><BackendHttpSettings><Name>setting1</Name><Port>80</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings><BackendHttpSettings><Name>MySettings</Name><Port>81</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings><BackendHttpSettings><Name>settings2</Name><Port>888</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings><BackendHttpSettings><Name>settings3</Name><Port>999</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings><BackendHttpSettings><Name>httpSetting</Name><Port>80</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout></BackendHttpSettings></BackendHttpSettingsList><HttpListeners><HttpListener><Name>listener1</Name><FrontendPort>fep1</FrontendPort><Protocol>Http</Protocol></HttpListener><HttpListener><Name>httpListener</Name><FrontendIP>fipConfig</FrontendIP><FrontendPort>frontEndPort</FrontendPort><Protocol>Http</Protocol></HttpListener></HttpListeners><HttpLoadBalancingRules><HttpLoadBalancingRule><Name>rule1</Name><Type>Basic</Type><BackendHttpSettings>setting1</BackendHttpSettings><Listener>listener1</Listener><BackendAddressPool>pool1</BackendAddressPool></HttpLoadBalancingRule></HttpLoadBalancingRules></ApplicationGatewayConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '2617',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.323 (rd_rdfe_stable.160224-0707) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'a86e07801b3f74a2a6e81a4d93c8879b',
  date: 'Mon, 29 Feb 2016 11:51:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/ApplicationGateways/CliTestAppGate/configuration?api-version=2015-04-01', '*')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>d5476713-06fb-476c-b9b7-62620794cbcc</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.323 (rd_rdfe_stable.160224-0707) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8644703442317c5f9fe5230029058746',
  date: 'Mon, 29 Feb 2016 11:51:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/ApplicationGateways/CliTestAppGate/configuration?api-version=2015-04-01', '*')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>d5476713-06fb-476c-b9b7-62620794cbcc</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.323 (rd_rdfe_stable.160224-0707) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8644703442317c5f9fe5230029058746',
  date: 'Mon, 29 Feb 2016 11:51:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/operation/d5476713-06fb-476c-b9b7-62620794cbcc')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HealthStatus/><HttpStatusCode>OK</HttpStatusCode><ID>d5476713-06fb-476c-b9b7-62620794cbcc</ID><OperationCompletedTime>2016-02-29T11:51:49.6360349</OperationCompletedTime><OperationStartedTime>2016-02-29T11:51:48.1846662</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '416',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.323 (rd_rdfe_stable.160224-0707) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '76d31111a5217dfa81823747f2eff835',
  date: 'Mon, 29 Feb 2016 11:52:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/operation/d5476713-06fb-476c-b9b7-62620794cbcc')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HealthStatus/><HttpStatusCode>OK</HttpStatusCode><ID>d5476713-06fb-476c-b9b7-62620794cbcc</ID><OperationCompletedTime>2016-02-29T11:51:49.6360349</OperationCompletedTime><OperationStartedTime>2016-02-29T11:51:48.1846662</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '416',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.323 (rd_rdfe_stable.160224-0707) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '76d31111a5217dfa81823747f2eff835',
  date: 'Mon, 29 Feb 2016 11:52:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/ApplicationGateways/CliTestAppGate?api-version=2015-04-01')
  .reply(200, "<ApplicationGateway xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Description/><DnsName i:nil=\"true\"/><GatewaySize>Medium</GatewaySize><InstanceCount>3</InstanceCount><Name>CliTestAppGate</Name><State>Stopped</State><Subnets><Subnet>CliTestSubnet</Subnet></Subnets><VirtualIPs i:nil=\"true\"/><VnetName>CliTestVnet</VnetName></ApplicationGateway>", { 'cache-control': 'no-cache',
  'content-length': '401',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.323 (rd_rdfe_stable.160224-0707) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '9d99dbbaa21b7b058aa708b18e4f7817',
  date: 'Mon, 29 Feb 2016 11:52:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/ApplicationGateways/CliTestAppGate?api-version=2015-04-01')
  .reply(200, "<ApplicationGateway xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Description/><DnsName i:nil=\"true\"/><GatewaySize>Medium</GatewaySize><InstanceCount>3</InstanceCount><Name>CliTestAppGate</Name><State>Stopped</State><Subnets><Subnet>CliTestSubnet</Subnet></Subnets><VirtualIPs i:nil=\"true\"/><VnetName>CliTestVnet</VnetName></ApplicationGateway>", { 'cache-control': 'no-cache',
  'content-length': '401',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.323 (rd_rdfe_stable.160224-0707) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '9d99dbbaa21b7b058aa708b18e4f7817',
  date: 'Mon, 29 Feb 2016 11:52:22 GMT',
  connection: 'close' });
 return result; }]];
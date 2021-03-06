// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'East US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/e33f361b-53c2-4cc7-b829-78906708387b/services/hostedservices')
  .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/e33f361b-53c2-4cc7-b829-78906708387b/services/hostedservices/clitestvm4864</Url><ServiceName>clitestvm4864</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>East US</Location><Label>Y2xpdGVzdHZtNDg2NA==</Label><Status>Created</Status><DateCreated>2016-04-22T03:41:04Z</DateCreated><DateLastModified>2016-04-22T03:41:36Z</DateLastModified><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>clitestvm4864</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>East US</Value></ExtendedProperty></ExtendedProperties></HostedServiceProperties><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1_v2</RoleSize><RoleSize>Standard_D11_v2</RoleSize><RoleSize>Standard_D12_v2</RoleSize><RoleSize>Standard_D13_v2</RoleSize><RoleSize>Standard_D14_v2</RoleSize><RoleSize>Standard_D2_v2</RoleSize><RoleSize>Standard_D3_v2</RoleSize><RoleSize>Standard_D4_v2</RoleSize><RoleSize>Standard_D5_v2</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1_v2</RoleSize><RoleSize>Standard_D11_v2</RoleSize><RoleSize>Standard_D12_v2</RoleSize><RoleSize>Standard_D13_v2</RoleSize><RoleSize>Standard_D14_v2</RoleSize><RoleSize>Standard_D2_v2</RoleSize><RoleSize>Standard_D3_v2</RoleSize><RoleSize>Standard_D4_v2</RoleSize><RoleSize>Standard_D5_v2</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService></HostedServices>", { 'cache-control': 'no-cache',
  'content-length': '2189',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '127f23e9e3909394965199ffea8acbe3',
  date: 'Fri, 22 Apr 2016 03:43:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/e33f361b-53c2-4cc7-b829-78906708387b/services/hostedservices')
  .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/e33f361b-53c2-4cc7-b829-78906708387b/services/hostedservices/clitestvm4864</Url><ServiceName>clitestvm4864</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>East US</Location><Label>Y2xpdGVzdHZtNDg2NA==</Label><Status>Created</Status><DateCreated>2016-04-22T03:41:04Z</DateCreated><DateLastModified>2016-04-22T03:41:36Z</DateLastModified><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>clitestvm4864</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>East US</Value></ExtendedProperty></ExtendedProperties></HostedServiceProperties><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1_v2</RoleSize><RoleSize>Standard_D11_v2</RoleSize><RoleSize>Standard_D12_v2</RoleSize><RoleSize>Standard_D13_v2</RoleSize><RoleSize>Standard_D14_v2</RoleSize><RoleSize>Standard_D2_v2</RoleSize><RoleSize>Standard_D3_v2</RoleSize><RoleSize>Standard_D4_v2</RoleSize><RoleSize>Standard_D5_v2</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1_v2</RoleSize><RoleSize>Standard_D11_v2</RoleSize><RoleSize>Standard_D12_v2</RoleSize><RoleSize>Standard_D13_v2</RoleSize><RoleSize>Standard_D14_v2</RoleSize><RoleSize>Standard_D2_v2</RoleSize><RoleSize>Standard_D3_v2</RoleSize><RoleSize>Standard_D4_v2</RoleSize><RoleSize>Standard_D5_v2</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService></HostedServices>", { 'cache-control': 'no-cache',
  'content-length': '2189',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '127f23e9e3909394965199ffea8acbe3',
  date: 'Fri, 22 Apr 2016 03:43:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/e33f361b-53c2-4cc7-b829-78906708387b/services/hostedservices/clitestvm4864/deploymentslots/Production')
  .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>clitestvm4864</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>d689d96e75594d13990cd9e6672e5e60</PrivateID><Status>Running</Status><Label>Y2xpdGVzdHZtNDg2NA==</Label><Url>http://clitestvm4864.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJjbGl0ZXN0dm00ODY0Ij4NCiAgICA8SW5zdGFuY2VzIGNvdW50PSIxIiAvPg0KICA8L1JvbGU+DQo8L1NlcnZpY2VDb25maWd1cmF0aW9uPg==</Configuration><RoleInstanceList><RoleInstance><RoleName>clitestvm4864</RoleName><InstanceName>clitestvm4864</InstanceName><InstanceStatus>Provisioning</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>100.111.16.91</IpAddress><InstanceEndpoints><InstanceEndpoint><Name>rdp</Name><Vip>13.92.124.154</Vip><PublicPort>3389</PublicPort><LocalPort>3389</LocalPort><Protocol>tcp</Protocol></InstanceEndpoint></InstanceEndpoints><PowerState>Started</PowerState><GuestAgentStatus><ProtocolVersion>1.0</ProtocolVersion><Timestamp>2016-04-22T03:42:42Z</Timestamp><GuestAgentVersion>Unknown</GuestAgentVersion><Status>NotReady</Status><FormattedMessage><Language>en-US</Language><Message>Status not available for role clitestvm4864.</Message></FormattedMessage></GuestAgentStatus></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>clitestvm4864</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><InputEndpoints><InputEndpoint><LocalPort>3389</LocalPort><Name>rdp</Name><Port>3389</Port><Protocol>tcp</Protocol><Vip>13.92.124.154</Vip><EnableDirectServerReturn>false</EnableDirectServerReturn><EndpointAcl><Rules><Rule><Order>1</Order><Action>permit</Action><RemoteSubnet>23.99.18.228/31</RemoteSubnet><Description>testing</Description></Rule></Rules></EndpointAcl></InputEndpoint></InputEndpoints><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>clitestvm4864-clitestvm4864-0-201604220341140761</DiskName><MediaLink>https://portalvhds1452320462527.blob.core.windows.net/vhd-store/clitestvm4864-f2413233b61a4eb6.vhd</MediaLink><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Team-Foundation-Server-2013-Update4-WS2012R2</SourceImageName><OS>Windows</OS><IOType>Standard</IOType></OSVirtualHardDisk><RoleSize>Small</RoleSize><ProvisionGuestAgent>true</ProvisionGuestAgent></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2016-04-22T03:41:10Z</CreatedTime><LastModifiedTime>2016-04-22T03:42:42Z</LastModifiedTime><ExtendedProperties/><PersistentVMDowntime><StartTime>2016-04-20T17:03:40Z</StartTime><EndTime>2017-04-20T17:03:40Z</EndTime><Status>PersistentVMUpdateScheduled</Status></PersistentVMDowntime><VirtualIPs><VirtualIP><Address>13.92.124.154</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>clitestvm4864ContractContract</Name></VirtualIP></VirtualIPs><InternalDnsSuffix>clitestvm4864.b7.internal.cloudapp.net</InternalDnsSuffix><LoadBalancers/></Deployment>", { 'cache-control': 'no-cache',
  'content-length': '3616',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '99b804397ef7926a9cccd46c3a61c848',
  date: 'Fri, 22 Apr 2016 03:43:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/e33f361b-53c2-4cc7-b829-78906708387b/services/hostedservices/clitestvm4864/deploymentslots/Production')
  .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>clitestvm4864</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>d689d96e75594d13990cd9e6672e5e60</PrivateID><Status>Running</Status><Label>Y2xpdGVzdHZtNDg2NA==</Label><Url>http://clitestvm4864.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJjbGl0ZXN0dm00ODY0Ij4NCiAgICA8SW5zdGFuY2VzIGNvdW50PSIxIiAvPg0KICA8L1JvbGU+DQo8L1NlcnZpY2VDb25maWd1cmF0aW9uPg==</Configuration><RoleInstanceList><RoleInstance><RoleName>clitestvm4864</RoleName><InstanceName>clitestvm4864</InstanceName><InstanceStatus>Provisioning</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>100.111.16.91</IpAddress><InstanceEndpoints><InstanceEndpoint><Name>rdp</Name><Vip>13.92.124.154</Vip><PublicPort>3389</PublicPort><LocalPort>3389</LocalPort><Protocol>tcp</Protocol></InstanceEndpoint></InstanceEndpoints><PowerState>Started</PowerState><GuestAgentStatus><ProtocolVersion>1.0</ProtocolVersion><Timestamp>2016-04-22T03:42:42Z</Timestamp><GuestAgentVersion>Unknown</GuestAgentVersion><Status>NotReady</Status><FormattedMessage><Language>en-US</Language><Message>Status not available for role clitestvm4864.</Message></FormattedMessage></GuestAgentStatus></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>clitestvm4864</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><InputEndpoints><InputEndpoint><LocalPort>3389</LocalPort><Name>rdp</Name><Port>3389</Port><Protocol>tcp</Protocol><Vip>13.92.124.154</Vip><EnableDirectServerReturn>false</EnableDirectServerReturn><EndpointAcl><Rules><Rule><Order>1</Order><Action>permit</Action><RemoteSubnet>23.99.18.228/31</RemoteSubnet><Description>testing</Description></Rule></Rules></EndpointAcl></InputEndpoint></InputEndpoints><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>clitestvm4864-clitestvm4864-0-201604220341140761</DiskName><MediaLink>https://portalvhds1452320462527.blob.core.windows.net/vhd-store/clitestvm4864-f2413233b61a4eb6.vhd</MediaLink><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Team-Foundation-Server-2013-Update4-WS2012R2</SourceImageName><OS>Windows</OS><IOType>Standard</IOType></OSVirtualHardDisk><RoleSize>Small</RoleSize><ProvisionGuestAgent>true</ProvisionGuestAgent></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2016-04-22T03:41:10Z</CreatedTime><LastModifiedTime>2016-04-22T03:42:42Z</LastModifiedTime><ExtendedProperties/><PersistentVMDowntime><StartTime>2016-04-20T17:03:40Z</StartTime><EndTime>2017-04-20T17:03:40Z</EndTime><Status>PersistentVMUpdateScheduled</Status></PersistentVMDowntime><VirtualIPs><VirtualIP><Address>13.92.124.154</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>clitestvm4864ContractContract</Name></VirtualIP></VirtualIPs><InternalDnsSuffix>clitestvm4864.b7.internal.cloudapp.net</InternalDnsSuffix><LoadBalancers/></Deployment>", { 'cache-control': 'no-cache',
  'content-length': '3616',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '99b804397ef7926a9cccd46c3a61c848',
  date: 'Fri, 22 Apr 2016 03:43:10 GMT',
  connection: 'close' });
 return result; }]];
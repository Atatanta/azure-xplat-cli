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
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"13204df6-c66e-4598-aa70-c98f92bf8339\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL7645\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_D1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clicd5523b0a8673778-os-1470941145285\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage11670.blob.core.windows.net/xplatteststoragecnt16297/clicd5523b0a8673778-os-1470941145285.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage11670.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3512',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'c9ca629d-d11c-4d5b-ae3d-834e6d4a6dae',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '8cf1af30-369e-4dcc-b592-a66ab008206a',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T200030Z:8cf1af30-369e-4dcc-b592-a66ab008206a',
  date: 'Thu, 11 Aug 2016 20:00:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"13204df6-c66e-4598-aa70-c98f92bf8339\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL7645\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_D1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clicd5523b0a8673778-os-1470941145285\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage11670.blob.core.windows.net/xplatteststoragecnt16297/clicd5523b0a8673778-os-1470941145285.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage11670.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3512',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'c9ca629d-d11c-4d5b-ae3d-834e6d4a6dae',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '8cf1af30-369e-4dcc-b592-a66ab008206a',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T200030Z:8cf1af30-369e-4dcc-b592-a66ab008206a',
  date: 'Thu, 11 Aug 2016 20:00:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"13204df6-c66e-4598-aa70-c98f92bf8339\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL7645\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_D1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clicd5523b0a8673778-os-1470941145285\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage11670.blob.core.windows.net/xplatteststoragecnt16297/clicd5523b0a8673778-os-1470941145285.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage11670.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3512',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '3627c468-2de8-480d-a45d-9a68737dbc11',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '230a77b0-0503-4709-8f49-9f093a8ddd0e',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T200032Z:230a77b0-0503-4709-8f49-9f093a8ddd0e',
  date: 'Thu, 11 Aug 2016 20:00:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"13204df6-c66e-4598-aa70-c98f92bf8339\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL7645\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_D1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clicd5523b0a8673778-os-1470941145285\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage11670.blob.core.windows.net/xplatteststoragecnt16297/clicd5523b0a8673778-os-1470941145285.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage11670.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3512',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '3627c468-2de8-480d-a45d-9a68737dbc11',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '230a77b0-0503-4709-8f49-9f093a8ddd0e',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T200032Z:230a77b0-0503-4709-8f49-9f093a8ddd0e',
  date: 'Thu, 11 Aug 2016 20:00:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/networkInterfaces/xplattestnic?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplattestnic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/networkInterfaces/xplattestnic\",\r\n  \"etag\": \"W/\\\"901a234c-768b-4f86-be70-8c07c91e6fc2\\\"\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"33807451-e999-4c6a-9d68-967d83007c64\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ipconfig1470940699926\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/networkInterfaces/xplattestnic/ipConfigurations/ipconfig1470940699926\",\r\n        \"etag\": \"W/\\\"901a234c-768b-4f86-be70-8c07c91e6fc2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/publicIPAddresses/xplattestip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/virtualNetworks/xplattestvnet/subnets/xplattestsubnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"w1l5wtdzsk0etk1rqpfczu4fsa.bx.internal.cloudapp.net\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-14-BF-A1\",\r\n    \"enableIPForwarding\": false,\r\n    \"primary\": true,\r\n    \"virtualMachine\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Compute/virtualMachines/xplatvm\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1966',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"901a234c-768b-4f86-be70-8c07c91e6fc2"',
  'x-ms-request-id': 'cd6c6012-a5ae-4646-936a-6ef7235937ce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'c0a56a99-824b-4551-a004-82b1cfc2a39e',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T200033Z:c0a56a99-824b-4551-a004-82b1cfc2a39e',
  date: 'Thu, 11 Aug 2016 20:00:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/networkInterfaces/xplattestnic?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplattestnic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/networkInterfaces/xplattestnic\",\r\n  \"etag\": \"W/\\\"901a234c-768b-4f86-be70-8c07c91e6fc2\\\"\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"33807451-e999-4c6a-9d68-967d83007c64\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ipconfig1470940699926\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/networkInterfaces/xplattestnic/ipConfigurations/ipconfig1470940699926\",\r\n        \"etag\": \"W/\\\"901a234c-768b-4f86-be70-8c07c91e6fc2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/publicIPAddresses/xplattestip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/virtualNetworks/xplattestvnet/subnets/xplattestsubnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"w1l5wtdzsk0etk1rqpfczu4fsa.bx.internal.cloudapp.net\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-14-BF-A1\",\r\n    \"enableIPForwarding\": false,\r\n    \"primary\": true,\r\n    \"virtualMachine\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Compute/virtualMachines/xplatvm\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1966',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"901a234c-768b-4f86-be70-8c07c91e6fc2"',
  'x-ms-request-id': 'cd6c6012-a5ae-4646-936a-6ef7235937ce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'c0a56a99-824b-4551-a004-82b1cfc2a39e',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T200033Z:c0a56a99-824b-4551-a004-82b1cfc2a39e',
  date: 'Thu, 11 Aug 2016 20:00:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/publicIPAddresses/xplattestip?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplattestip\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/publicIPAddresses/xplattestip\",\r\n  \"etag\": \"W/\\\"0245c660-2c5b-447f-8f62-7048d95b5582\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6fed001a-49ed-4fb7-9fe6-c5ccbd85b2cc\",\r\n    \"ipAddress\": \"40.85.188.179\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"xplattestipdns8067\",\r\n      \"fqdn\": \"xplattestipdns8067.eastus.cloudapp.azure.com\"\r\n    },\r\n    \"ipConfiguration\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/networkInterfaces/xplattestnic/ipConfigurations/ipconfig1470940699926\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '972',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0245c660-2c5b-447f-8f62-7048d95b5582"',
  'x-ms-request-id': '2f5e49a6-9d41-40a7-8441-6262adf11608',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '0b832d0e-b0b9-477c-9956-15ad34faf7c3',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T200034Z:0b832d0e-b0b9-477c-9956-15ad34faf7c3',
  date: 'Thu, 11 Aug 2016 20:00:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/publicIPAddresses/xplattestip?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"xplattestip\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/publicIPAddresses/xplattestip\",\r\n  \"etag\": \"W/\\\"0245c660-2c5b-447f-8f62-7048d95b5582\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6fed001a-49ed-4fb7-9fe6-c5ccbd85b2cc\",\r\n    \"ipAddress\": \"40.85.188.179\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"xplattestipdns8067\",\r\n      \"fqdn\": \"xplattestipdns8067.eastus.cloudapp.azure.com\"\r\n    },\r\n    \"ipConfiguration\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Network/networkInterfaces/xplattestnic/ipConfigurations/ipconfig1470940699926\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '972',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0245c660-2c5b-447f-8f62-7048d95b5582"',
  'x-ms-request-id': '2f5e49a6-9d41-40a7-8441-6262adf11608',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '0b832d0e-b0b9-477c-9956-15ad34faf7c3',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T200034Z:0b832d0e-b0b9-477c-9956-15ad34faf7c3',
  date: 'Thu, 11 Aug 2016 20:00:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail7645?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 5,\r\n    \"platformFaultDomainCount\": 3,\r\n    \"virtualMachines\": [\r\n      {\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTESTGVMCREATE7502/providers/Microsoft.Compute/virtualMachines/XPLATVM\"\r\n      },\r\n      {\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTESTGVMCREATE7502/providers/Microsoft.Compute/virtualMachines/XPLATVM2\"\r\n      }\r\n    ]\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail7645\",\r\n  \"name\": \"xplatTestaAvail7645\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '780',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'ca44d215-6ea6-42d4-b933-de8243410367',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'a04521c5-0ed7-4a60-ba4d-0e976eb35382',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T200035Z:a04521c5-0ed7-4a60-ba4d-0e976eb35382',
  date: 'Thu, 11 Aug 2016 20:00:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail7645?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 5,\r\n    \"platformFaultDomainCount\": 3,\r\n    \"virtualMachines\": [\r\n      {\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTESTGVMCREATE7502/providers/Microsoft.Compute/virtualMachines/XPLATVM\"\r\n      },\r\n      {\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/XPLATTESTGVMCREATE7502/providers/Microsoft.Compute/virtualMachines/XPLATVM2\"\r\n      }\r\n    ]\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7502/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail7645\",\r\n  \"name\": \"xplatTestaAvail7645\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '780',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'ca44d215-6ea6-42d4-b933-de8243410367',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'a04521c5-0ed7-4a60-ba4d-0e976eb35382',
  'x-ms-routing-request-id': 'CANADAEAST:20160811T200035Z:a04521c5-0ed7-4a60-ba4d-0e976eb35382',
  date: 'Thu, 11 Aug 2016 20:00:35 GMT',
  connection: 'close' });
 return result; }]];
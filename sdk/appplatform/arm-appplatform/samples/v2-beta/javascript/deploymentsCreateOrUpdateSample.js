/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AppPlatformManagementClient } = require("@azure/arm-appplatform");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create a new Deployment or update an exiting Deployment.
 *
 * @summary Create a new Deployment or update an exiting Deployment.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-09-01-preview/examples/Deployments_CreateOrUpdate.json
 */
async function deploymentsCreateOrUpdate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const deploymentName = "mydeployment";
  const deploymentResource = {
    properties: {
      deploymentSettings: {
        addonConfigs: {
          applicationConfigurationService: { patterns: { string: ["mypattern"] } },
        },
        environmentVariables: { env: "test" },
        livenessProbe: {
          disableProbe: false,
          failureThreshold: 3,
          initialDelaySeconds: 30,
          periodSeconds: 10,
          probeAction: {
            type: "HTTPGetAction",
            path: "/health",
            scheme: "HTTP",
          },
        },
        readinessProbe: {
          disableProbe: false,
          failureThreshold: 3,
          initialDelaySeconds: 30,
          periodSeconds: 10,
          probeAction: {
            type: "HTTPGetAction",
            path: "/health",
            scheme: "HTTP",
          },
        },
        resourceRequests: { cpu: "1000m", memory: "3Gi" },
        startupProbe: {
          disableProbe: false,
        },
        terminationGracePeriodSeconds: 30,
      },
      instances: [],
      source: {
        type: "Source",
        artifactSelector: "sub-module-1",
        relativePath:
          "resources/a172cedcae47474b615c54d510a5d84a8dea3032e958587430b413538be3f333-2019082605-e3095339-1723-44b7-8b5e-31b1003978bc",
        version: "1.0",
      },
    },
    sku: { name: "S0", capacity: 1, tier: "Standard" },
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.deployments.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    appName,
    deploymentName,
    deploymentResource
  );
  console.log(result);
}

deploymentsCreateOrUpdate().catch(console.error);

/**
 * This sample demonstrates how to Create a new Deployment or update an exiting Deployment.
 *
 * @summary Create a new Deployment or update an exiting Deployment.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-09-01-preview/examples/Deployments_CreateOrUpdate_CustomContainer.json
 */
async function deploymentsCreateOrUpdateCustomContainer() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const deploymentName = "mydeployment";
  const deploymentResource = {
    properties: {
      deploymentSettings: {
        environmentVariables: { env: "test" },
        livenessProbe: {
          disableProbe: false,
          failureThreshold: 3,
          initialDelaySeconds: 30,
          periodSeconds: 10,
          probeAction: {
            type: "HTTPGetAction",
            path: "/health",
            scheme: "HTTP",
          },
        },
        readinessProbe: {
          disableProbe: false,
          failureThreshold: 3,
          initialDelaySeconds: 30,
          periodSeconds: 10,
          probeAction: {
            type: "HTTPGetAction",
            path: "/health",
            scheme: "HTTP",
          },
        },
        resourceRequests: { cpu: "1000m", memory: "3Gi" },
        startupProbe: {
          disableProbe: false,
        },
        terminationGracePeriodSeconds: 30,
      },
      instances: [],
      source: {
        type: "Container",
        customContainer: {
          args: ["-c", "while true; do echo hello; sleep 10;done"],
          command: ["/bin/sh"],
          containerImage: "myContainerImage:v1",
          imageRegistryCredential: {
            password: "myPassword",
            username: "myUsername",
          },
          languageFramework: "springboot",
          server: "myacr.azurecr.io",
        },
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.deployments.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    appName,
    deploymentName,
    deploymentResource
  );
  console.log(result);
}

deploymentsCreateOrUpdateCustomContainer().catch(console.error);

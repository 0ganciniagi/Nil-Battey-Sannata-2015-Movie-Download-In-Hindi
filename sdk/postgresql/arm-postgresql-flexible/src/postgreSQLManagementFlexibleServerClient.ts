/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest,
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  AdministratorsImpl,
  BackupsImpl,
  LocationBasedCapabilitiesImpl,
  ServerCapabilitiesImpl,
  CheckNameAvailabilityImpl,
  CheckNameAvailabilityWithLocationImpl,
  ConfigurationsImpl,
  DatabasesImpl,
  FirewallRulesImpl,
  ServersImpl,
  FlexibleServerImpl,
  LtrBackupOperationsImpl,
  MigrationsImpl,
  OperationsImpl,
  GetPrivateDnsZoneSuffixImpl,
  PrivateEndpointConnectionsImpl,
  PrivateEndpointConnectionOperationsImpl,
  PrivateLinkResourcesImpl,
  QuotaUsagesImpl,
  ReplicasImpl,
  LogFilesImpl,
  ServerThreatProtectionSettingsImpl,
  VirtualEndpointsImpl,
  VirtualNetworkSubnetUsageImpl,
} from "./operations";
import {
  Administrators,
  Backups,
  LocationBasedCapabilities,
  ServerCapabilities,
  CheckNameAvailability,
  CheckNameAvailabilityWithLocation,
  Configurations,
  Databases,
  FirewallRules,
  Servers,
  FlexibleServer,
  LtrBackupOperations,
  Migrations,
  Operations,
  GetPrivateDnsZoneSuffix,
  PrivateEndpointConnections,
  PrivateEndpointConnectionOperations,
  PrivateLinkResources,
  QuotaUsages,
  Replicas,
  LogFiles,
  ServerThreatProtectionSettings,
  VirtualEndpoints,
  VirtualNetworkSubnetUsage,
} from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  PostgreSQLManagementFlexibleServerClientOptionalParams,
  MigrationNameAvailabilityResource,
  CheckMigrationNameAvailabilityOptionalParams,
  CheckMigrationNameAvailabilityResponse,
} from "./models";

export class PostgreSQLManagementFlexibleServerClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId?: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the PostgreSQLManagementFlexibleServerClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription. The value must be an UUID.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: PostgreSQLManagementFlexibleServerClientOptionalParams,
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: PostgreSQLManagementFlexibleServerClientOptionalParams,
  );
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionIdOrOptions?:
      | PostgreSQLManagementFlexibleServerClientOptionalParams
      | string,
    options?: PostgreSQLManagementFlexibleServerClientOptionalParams,
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }

    let subscriptionId: string | undefined;

    if (typeof subscriptionIdOrOptions === "string") {
      subscriptionId = subscriptionIdOrOptions;
    } else if (typeof subscriptionIdOrOptions === "object") {
      options = subscriptionIdOrOptions;
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: PostgreSQLManagementFlexibleServerClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials,
    };

    const packageDetails = `azsdk-js-arm-postgresql-flexible/8.0.0-beta.6`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix,
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com",
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] =
        options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName,
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName,
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge,
          },
        }),
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2023-12-01-preview";
    this.administrators = new AdministratorsImpl(this);
    this.backups = new BackupsImpl(this);
    this.locationBasedCapabilities = new LocationBasedCapabilitiesImpl(this);
    this.serverCapabilities = new ServerCapabilitiesImpl(this);
    this.checkNameAvailability = new CheckNameAvailabilityImpl(this);
    this.checkNameAvailabilityWithLocation =
      new CheckNameAvailabilityWithLocationImpl(this);
    this.configurations = new ConfigurationsImpl(this);
    this.databases = new DatabasesImpl(this);
    this.firewallRules = new FirewallRulesImpl(this);
    this.servers = new ServersImpl(this);
    this.flexibleServer = new FlexibleServerImpl(this);
    this.ltrBackupOperations = new LtrBackupOperationsImpl(this);
    this.migrations = new MigrationsImpl(this);
    this.operations = new OperationsImpl(this);
    this.getPrivateDnsZoneSuffix = new GetPrivateDnsZoneSuffixImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateEndpointConnectionOperations =
      new PrivateEndpointConnectionOperationsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.quotaUsages = new QuotaUsagesImpl(this);
    this.replicas = new ReplicasImpl(this);
    this.logFiles = new LogFilesImpl(this);
    this.serverThreatProtectionSettings =
      new ServerThreatProtectionSettingsImpl(this);
    this.virtualEndpoints = new VirtualEndpointsImpl(this);
    this.virtualNetworkSubnetUsage = new VirtualNetworkSubnetUsageImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest,
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      },
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  /**
   * This method checks whether a proposed migration name is valid and available.
   * @param subscriptionId The subscription ID of the target database server.
   * @param resourceGroupName The resource group name of the target database server.
   * @param targetDbServerName The name of the target database server.
   * @param parameters The required parameters for checking if a migration name is available.
   * @param options The options parameters.
   */
  checkMigrationNameAvailability(
    subscriptionId: string,
    resourceGroupName: string,
    targetDbServerName: string,
    parameters: MigrationNameAvailabilityResource,
    options?: CheckMigrationNameAvailabilityOptionalParams,
  ): Promise<CheckMigrationNameAvailabilityResponse> {
    return this.sendOperationRequest(
      {
        subscriptionId,
        resourceGroupName,
        targetDbServerName,
        parameters,
        options,
      },
      checkMigrationNameAvailabilityOperationSpec,
    );
  }

  administrators: Administrators;
  backups: Backups;
  locationBasedCapabilities: LocationBasedCapabilities;
  serverCapabilities: ServerCapabilities;
  checkNameAvailability: CheckNameAvailability;
  checkNameAvailabilityWithLocation: CheckNameAvailabilityWithLocation;
  configurations: Configurations;
  databases: Databases;
  firewallRules: FirewallRules;
  servers: Servers;
  flexibleServer: FlexibleServer;
  ltrBackupOperations: LtrBackupOperations;
  migrations: Migrations;
  operations: Operations;
  getPrivateDnsZoneSuffix: GetPrivateDnsZoneSuffix;
  privateEndpointConnections: PrivateEndpointConnections;
  privateEndpointConnectionOperations: PrivateEndpointConnectionOperations;
  privateLinkResources: PrivateLinkResources;
  quotaUsages: QuotaUsages;
  replicas: Replicas;
  logFiles: LogFiles;
  serverThreatProtectionSettings: ServerThreatProtectionSettings;
  virtualEndpoints: VirtualEndpoints;
  virtualNetworkSubnetUsage: VirtualNetworkSubnetUsage;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkMigrationNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{targetDbServerName}/checkMigrationNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.MigrationNameAvailabilityResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId1,
    Parameters.resourceGroupName1,
    Parameters.targetDbServerName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};

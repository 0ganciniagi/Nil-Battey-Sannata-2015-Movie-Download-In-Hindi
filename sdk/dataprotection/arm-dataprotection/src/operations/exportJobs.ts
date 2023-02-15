/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ExportJobs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataProtectionClient } from "../dataProtectionClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ExportJobsTriggerOptionalParams,
  ExportJobsTriggerResponse
} from "../models";

/** Class containing ExportJobs operations. */
export class ExportJobsImpl implements ExportJobs {
  private readonly client: DataProtectionClient;

  /**
   * Initialize a new instance of the class ExportJobs class.
   * @param client Reference to the service client
   */
  constructor(client: DataProtectionClient) {
    this.client = client;
  }

  /**
   * Triggers export of jobs and returns an OperationID to track.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param options The options parameters.
   */
  async beginTrigger(
    resourceGroupName: string,
    vaultName: string,
    options?: ExportJobsTriggerOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ExportJobsTriggerResponse>,
      ExportJobsTriggerResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ExportJobsTriggerResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, vaultName, options },
      triggerOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Triggers export of jobs and returns an OperationID to track.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param options The options parameters.
   */
  async beginTriggerAndWait(
    resourceGroupName: string,
    vaultName: string,
    options?: ExportJobsTriggerOptionalParams
  ): Promise<ExportJobsTriggerResponse> {
    const poller = await this.beginTrigger(
      resourceGroupName,
      vaultName,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const triggerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/exportBackupJobs",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.ExportJobsTriggerHeaders
    },
    201: {
      headersMapper: Mappers.ExportJobsTriggerHeaders
    },
    202: {
      headersMapper: Mappers.ExportJobsTriggerHeaders
    },
    204: {
      headersMapper: Mappers.ExportJobsTriggerHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
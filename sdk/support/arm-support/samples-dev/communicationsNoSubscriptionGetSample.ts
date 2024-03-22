/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MicrosoftSupport } from "@azure/arm-support";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns communication details for a support ticket.
 *
 * @summary Returns communication details for a support ticket.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/preview/2023-06-01-preview/examples/GetCommunicationDetailsForSupportTicket.json
 */
async function getCommunicationDetailsForANoSubscriptionSupportTicket() {
  const supportTicketName = "testticket";
  const communicationName = "testmessage";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential);
  const result = await client.communicationsNoSubscription.get(
    supportTicketName,
    communicationName,
  );
  console.log(result);
}

async function main() {
  getCommunicationDetailsForANoSubscriptionSupportTicket();
}

main().catch(console.error);

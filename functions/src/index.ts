process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

import * as functions from 'firebase-functions'
import { WebhookClient } from 'dialogflow-fulfillment'
import meditation from './intents/meditation'

export const dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response })

  const intentMap = new Map()
  intentMap.set('meditate', meditation(request))
  agent.handleRequest(intentMap)
})
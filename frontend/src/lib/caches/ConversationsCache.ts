import NodeCache from 'node-cache'

export const ConversationsCache = new NodeCache({ stdTTL: 60 * 60 * 24 })
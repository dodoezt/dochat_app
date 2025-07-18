import NodeCache from 'node-cache'

export const TagsCache = new NodeCache({ stdTTL: 60 * 60 })
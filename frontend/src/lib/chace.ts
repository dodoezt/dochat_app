import NodeCache from 'node-cache'

export const TagsChace = new NodeCache({ stdTTL: 60 * 60 })
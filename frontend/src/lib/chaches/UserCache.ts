import NodeCache from "node-cache";

export const UserCache = new NodeCache({stdTTL: 3600})
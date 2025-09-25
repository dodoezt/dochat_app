// ================= Enums =================
export enum MessagesStatus {
  NOT_DELIVERED = "NOT_DELIVERED",
  DELIVERED = "DELIVERED",
  SEEN = "SEEN",
}

export enum TagsTier {
  Common = "Common",
  Kinda_Cool = "Kinda Cool",   // pakai mapping @map
  Absolute_OG = "Absolute OG", // pakai mapping @map
}

export enum FriendshipsStatus {
  pending = "pending",
  accepted = "accepted",
  declined = "declined",
  blocked = "blocked",
}

export enum NotificationsType {
  FRIENDSHIPS = "FRIENDSHIPS",
}

// ================= Models =================

export interface Users {
  userId: number;
  username: string;
  provider: string;
  email?: string | null;
  email_name?: string | null;
  phone_number?: string | null;
  dial_code?: string | null;
  createdAt: Date;
  conversationMembers?: ConversationMembers[];
  friendships_friendships_userIdTousers?: Friendships[];
  friendships_friendships_friendIdTousers?: Friendships[];
  sentMessages?: Messages[];
  notifications?: Notifications[];
  user_atribut?: UserAtribut | null;
}

export interface ConversationMembers {
  id: number;
  userId: number;
  conversationId: string;
  joinedAt: Date;
  user?: Users;
  conversation?: Conversations;
}

export interface Messages {
  id: string;
  content: string;
  sentAt: Date;
  status: MessagesStatus;
  senderId: number;
  senderUsername: string;
  senderPfp_id?: string | null;
  conversationId: string;
  seen_by?: any; // Json
  sender?: Users;
  conversation?: Conversations;
}

export interface Conversations {
  id: string;
  isGroup: boolean;
  createdAt: Date;
  members?: ConversationMembers[];
  group_atributs?: GroupAtributs | null;
  messages?: Messages[];
}

export interface Tags {
  id: number;
  name: string;
  tier: TagsTier;
}

export interface UserAtribut {
  id: number;
  userId: number;
  pfp_id?: string | null;
  tags_used?: any;   // Json
  owned_tags?: any;  // Json
  pronounces?: any;  // Json
  bio?: string | null;
  users?: Users;
}

export interface Friendships {
  id: number;
  userId: number;
  friendId: number;
  status: FriendshipsStatus;
  created_at?: Date | null;
  users_friendships_userIdTousers?: Users;
  users_friendships_friendIdTousers?: Users;
}

export interface Notifications {
  id: number;
  userId: number;
  type: NotificationsType;
  content: string;
  users?: Users;
}

export interface GroupAtributs {
  id: number;
  conversationId: string;
  group_name: string;
  group_description?: string | null;
  group_pfp?: string | null;
  conversations?: Conversations;
}

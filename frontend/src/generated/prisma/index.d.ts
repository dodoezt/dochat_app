
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model conversation_members
 * 
 */
export type conversation_members = $Result.DefaultSelection<Prisma.$conversation_membersPayload>
/**
 * Model messages
 * 
 */
export type messages = $Result.DefaultSelection<Prisma.$messagesPayload>
/**
 * Model conversations
 * 
 */
export type conversations = $Result.DefaultSelection<Prisma.$conversationsPayload>
/**
 * Model tags
 * 
 */
export type tags = $Result.DefaultSelection<Prisma.$tagsPayload>
/**
 * Model user_atribut
 * 
 */
export type user_atribut = $Result.DefaultSelection<Prisma.$user_atributPayload>
/**
 * Model friendships
 * 
 */
export type friendships = $Result.DefaultSelection<Prisma.$friendshipsPayload>
/**
 * Model notifications
 * 
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>
/**
 * Model group_atributs
 * 
 */
export type group_atributs = $Result.DefaultSelection<Prisma.$group_atributsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const messages_status: {
  NOT_DELIVERED: 'NOT_DELIVERED',
  DELIVERED: 'DELIVERED',
  SEEN: 'SEEN'
};

export type messages_status = (typeof messages_status)[keyof typeof messages_status]


export const tags_tier: {
  Common: 'Common',
  Kinda_Cool: 'Kinda_Cool',
  Absolute_OG: 'Absolute_OG'
};

export type tags_tier = (typeof tags_tier)[keyof typeof tags_tier]


export const friendships_status: {
  pending: 'pending',
  accepted: 'accepted',
  declined: 'declined',
  blocked: 'blocked'
};

export type friendships_status = (typeof friendships_status)[keyof typeof friendships_status]


export const notifications_type: {
  FRIENDSHIPS: 'FRIENDSHIPS'
};

export type notifications_type = (typeof notifications_type)[keyof typeof notifications_type]

}

export type messages_status = $Enums.messages_status

export const messages_status: typeof $Enums.messages_status

export type tags_tier = $Enums.tags_tier

export const tags_tier: typeof $Enums.tags_tier

export type friendships_status = $Enums.friendships_status

export const friendships_status: typeof $Enums.friendships_status

export type notifications_type = $Enums.notifications_type

export const notifications_type: typeof $Enums.notifications_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversation_members`: Exposes CRUD operations for the **conversation_members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversation_members
    * const conversation_members = await prisma.conversation_members.findMany()
    * ```
    */
  get conversation_members(): Prisma.conversation_membersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversations`: Exposes CRUD operations for the **conversations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversations.findMany()
    * ```
    */
  get conversations(): Prisma.conversationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_atribut`: Exposes CRUD operations for the **user_atribut** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_atributs
    * const user_atributs = await prisma.user_atribut.findMany()
    * ```
    */
  get user_atribut(): Prisma.user_atributDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendships`: Exposes CRUD operations for the **friendships** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friendships
    * const friendships = await prisma.friendships.findMany()
    * ```
    */
  get friendships(): Prisma.friendshipsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group_atributs`: Exposes CRUD operations for the **group_atributs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Group_atributs
    * const group_atributs = await prisma.group_atributs.findMany()
    * ```
    */
  get group_atributs(): Prisma.group_atributsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    conversation_members: 'conversation_members',
    messages: 'messages',
    conversations: 'conversations',
    tags: 'tags',
    user_atribut: 'user_atribut',
    friendships: 'friendships',
    notifications: 'notifications',
    group_atributs: 'group_atributs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "conversation_members" | "messages" | "conversations" | "tags" | "user_atribut" | "friendships" | "notifications" | "group_atributs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      conversation_members: {
        payload: Prisma.$conversation_membersPayload<ExtArgs>
        fields: Prisma.conversation_membersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.conversation_membersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversation_membersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.conversation_membersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversation_membersPayload>
          }
          findFirst: {
            args: Prisma.conversation_membersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversation_membersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.conversation_membersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversation_membersPayload>
          }
          findMany: {
            args: Prisma.conversation_membersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversation_membersPayload>[]
          }
          create: {
            args: Prisma.conversation_membersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversation_membersPayload>
          }
          createMany: {
            args: Prisma.conversation_membersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.conversation_membersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversation_membersPayload>
          }
          update: {
            args: Prisma.conversation_membersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversation_membersPayload>
          }
          deleteMany: {
            args: Prisma.conversation_membersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.conversation_membersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.conversation_membersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversation_membersPayload>
          }
          aggregate: {
            args: Prisma.Conversation_membersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation_members>
          }
          groupBy: {
            args: Prisma.conversation_membersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Conversation_membersGroupByOutputType>[]
          }
          count: {
            args: Prisma.conversation_membersCountArgs<ExtArgs>
            result: $Utils.Optional<Conversation_membersCountAggregateOutputType> | number
          }
        }
      }
      messages: {
        payload: Prisma.$messagesPayload<ExtArgs>
        fields: Prisma.messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findFirst: {
            args: Prisma.messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findMany: {
            args: Prisma.messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          create: {
            args: Prisma.messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          createMany: {
            args: Prisma.messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          update: {
            args: Prisma.messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          deleteMany: {
            args: Prisma.messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      conversations: {
        payload: Prisma.$conversationsPayload<ExtArgs>
        fields: Prisma.conversationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.conversationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.conversationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          findFirst: {
            args: Prisma.conversationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.conversationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          findMany: {
            args: Prisma.conversationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>[]
          }
          create: {
            args: Prisma.conversationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          createMany: {
            args: Prisma.conversationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.conversationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          update: {
            args: Prisma.conversationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          deleteMany: {
            args: Prisma.conversationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.conversationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.conversationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          aggregate: {
            args: Prisma.ConversationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversations>
          }
          groupBy: {
            args: Prisma.conversationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.conversationsCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationsCountAggregateOutputType> | number
          }
        }
      }
      tags: {
        payload: Prisma.$tagsPayload<ExtArgs>
        fields: Prisma.tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findFirst: {
            args: Prisma.tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findMany: {
            args: Prisma.tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          create: {
            args: Prisma.tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          createMany: {
            args: Prisma.tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          update: {
            args: Prisma.tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          deleteMany: {
            args: Prisma.tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      user_atribut: {
        payload: Prisma.$user_atributPayload<ExtArgs>
        fields: Prisma.user_atributFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_atributFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_atributPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_atributFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_atributPayload>
          }
          findFirst: {
            args: Prisma.user_atributFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_atributPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_atributFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_atributPayload>
          }
          findMany: {
            args: Prisma.user_atributFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_atributPayload>[]
          }
          create: {
            args: Prisma.user_atributCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_atributPayload>
          }
          createMany: {
            args: Prisma.user_atributCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_atributDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_atributPayload>
          }
          update: {
            args: Prisma.user_atributUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_atributPayload>
          }
          deleteMany: {
            args: Prisma.user_atributDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_atributUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_atributUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_atributPayload>
          }
          aggregate: {
            args: Prisma.User_atributAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_atribut>
          }
          groupBy: {
            args: Prisma.user_atributGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_atributGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_atributCountArgs<ExtArgs>
            result: $Utils.Optional<User_atributCountAggregateOutputType> | number
          }
        }
      }
      friendships: {
        payload: Prisma.$friendshipsPayload<ExtArgs>
        fields: Prisma.friendshipsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.friendshipsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.friendshipsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload>
          }
          findFirst: {
            args: Prisma.friendshipsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.friendshipsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload>
          }
          findMany: {
            args: Prisma.friendshipsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload>[]
          }
          create: {
            args: Prisma.friendshipsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload>
          }
          createMany: {
            args: Prisma.friendshipsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.friendshipsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload>
          }
          update: {
            args: Prisma.friendshipsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload>
          }
          deleteMany: {
            args: Prisma.friendshipsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.friendshipsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.friendshipsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload>
          }
          aggregate: {
            args: Prisma.FriendshipsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendships>
          }
          groupBy: {
            args: Prisma.friendshipsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendshipsGroupByOutputType>[]
          }
          count: {
            args: Prisma.friendshipsCountArgs<ExtArgs>
            result: $Utils.Optional<FriendshipsCountAggregateOutputType> | number
          }
        }
      }
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>
        fields: Prisma.notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      group_atributs: {
        payload: Prisma.$group_atributsPayload<ExtArgs>
        fields: Prisma.group_atributsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.group_atributsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_atributsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.group_atributsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_atributsPayload>
          }
          findFirst: {
            args: Prisma.group_atributsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_atributsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.group_atributsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_atributsPayload>
          }
          findMany: {
            args: Prisma.group_atributsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_atributsPayload>[]
          }
          create: {
            args: Prisma.group_atributsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_atributsPayload>
          }
          createMany: {
            args: Prisma.group_atributsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.group_atributsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_atributsPayload>
          }
          update: {
            args: Prisma.group_atributsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_atributsPayload>
          }
          deleteMany: {
            args: Prisma.group_atributsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.group_atributsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.group_atributsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_atributsPayload>
          }
          aggregate: {
            args: Prisma.Group_atributsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup_atributs>
          }
          groupBy: {
            args: Prisma.group_atributsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Group_atributsGroupByOutputType>[]
          }
          count: {
            args: Prisma.group_atributsCountArgs<ExtArgs>
            result: $Utils.Optional<Group_atributsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    conversation_members?: conversation_membersOmit
    messages?: messagesOmit
    conversations?: conversationsOmit
    tags?: tagsOmit
    user_atribut?: user_atributOmit
    friendships?: friendshipsOmit
    notifications?: notificationsOmit
    group_atributs?: group_atributsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    conversationMembers: number
    friendships_friendships_userIdTousers: number
    friendships_friendships_friendIdTousers: number
    sentMessages: number
    notifications: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversationMembers?: boolean | UsersCountOutputTypeCountConversationMembersArgs
    friendships_friendships_userIdTousers?: boolean | UsersCountOutputTypeCountFriendships_friendships_userIdTousersArgs
    friendships_friendships_friendIdTousers?: boolean | UsersCountOutputTypeCountFriendships_friendships_friendIdTousersArgs
    sentMessages?: boolean | UsersCountOutputTypeCountSentMessagesArgs
    notifications?: boolean | UsersCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountConversationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversation_membersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFriendships_friendships_userIdTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendshipsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFriendships_friendships_friendIdTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendshipsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }


  /**
   * Count Type ConversationsCountOutputType
   */

  export type ConversationsCountOutputType = {
    members: number
    messages: number
  }

  export type ConversationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ConversationsCountOutputTypeCountMembersArgs
    messages?: boolean | ConversationsCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationsCountOutputType
     */
    select?: ConversationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversation_membersWhereInput
  }

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    userId: number | null
  }

  export type UsersSumAggregateOutputType = {
    userId: number | null
  }

  export type UsersMinAggregateOutputType = {
    userId: number | null
    username: string | null
    provider: string | null
    email: string | null
    email_name: string | null
    phone_number: string | null
    dial_code: string | null
    createdAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    userId: number | null
    username: string | null
    provider: string | null
    email: string | null
    email_name: string | null
    phone_number: string | null
    dial_code: string | null
    createdAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    userId: number
    username: number
    provider: number
    email: number
    email_name: number
    phone_number: number
    dial_code: number
    createdAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    userId?: true
  }

  export type UsersSumAggregateInputType = {
    userId?: true
  }

  export type UsersMinAggregateInputType = {
    userId?: true
    username?: true
    provider?: true
    email?: true
    email_name?: true
    phone_number?: true
    dial_code?: true
    createdAt?: true
  }

  export type UsersMaxAggregateInputType = {
    userId?: true
    username?: true
    provider?: true
    email?: true
    email_name?: true
    phone_number?: true
    dial_code?: true
    createdAt?: true
  }

  export type UsersCountAggregateInputType = {
    userId?: true
    username?: true
    provider?: true
    email?: true
    email_name?: true
    phone_number?: true
    dial_code?: true
    createdAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    userId: number
    username: string
    provider: string
    email: string | null
    email_name: string | null
    phone_number: string | null
    dial_code: string | null
    createdAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    provider?: boolean
    email?: boolean
    email_name?: boolean
    phone_number?: boolean
    dial_code?: boolean
    createdAt?: boolean
    conversationMembers?: boolean | users$conversationMembersArgs<ExtArgs>
    friendships_friendships_userIdTousers?: boolean | users$friendships_friendships_userIdTousersArgs<ExtArgs>
    friendships_friendships_friendIdTousers?: boolean | users$friendships_friendships_friendIdTousersArgs<ExtArgs>
    sentMessages?: boolean | users$sentMessagesArgs<ExtArgs>
    notifications?: boolean | users$notificationsArgs<ExtArgs>
    user_atribut?: boolean | users$user_atributArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    userId?: boolean
    username?: boolean
    provider?: boolean
    email?: boolean
    email_name?: boolean
    phone_number?: boolean
    dial_code?: boolean
    createdAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "username" | "provider" | "email" | "email_name" | "phone_number" | "dial_code" | "createdAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversationMembers?: boolean | users$conversationMembersArgs<ExtArgs>
    friendships_friendships_userIdTousers?: boolean | users$friendships_friendships_userIdTousersArgs<ExtArgs>
    friendships_friendships_friendIdTousers?: boolean | users$friendships_friendships_friendIdTousersArgs<ExtArgs>
    sentMessages?: boolean | users$sentMessagesArgs<ExtArgs>
    notifications?: boolean | users$notificationsArgs<ExtArgs>
    user_atribut?: boolean | users$user_atributArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      conversationMembers: Prisma.$conversation_membersPayload<ExtArgs>[]
      friendships_friendships_userIdTousers: Prisma.$friendshipsPayload<ExtArgs>[]
      friendships_friendships_friendIdTousers: Prisma.$friendshipsPayload<ExtArgs>[]
      sentMessages: Prisma.$messagesPayload<ExtArgs>[]
      notifications: Prisma.$notificationsPayload<ExtArgs>[]
      user_atribut: Prisma.$user_atributPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      username: string
      provider: string
      email: string | null
      email_name: string | null
      phone_number: string | null
      dial_code: string | null
      createdAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usersWithUserIdOnly = await prisma.users.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversationMembers<T extends users$conversationMembersArgs<ExtArgs> = {}>(args?: Subset<T, users$conversationMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversation_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendships_friendships_userIdTousers<T extends users$friendships_friendships_userIdTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$friendships_friendships_userIdTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendships_friendships_friendIdTousers<T extends users$friendships_friendships_friendIdTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$friendships_friendships_friendIdTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends users$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, users$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends users$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, users$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_atribut<T extends users$user_atributArgs<ExtArgs> = {}>(args?: Subset<T, users$user_atributArgs<ExtArgs>>): Prisma__user_atributClient<$Result.GetResult<Prisma.$user_atributPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly userId: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly provider: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly email_name: FieldRef<"users", 'String'>
    readonly phone_number: FieldRef<"users", 'String'>
    readonly dial_code: FieldRef<"users", 'String'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.conversationMembers
   */
  export type users$conversationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation_members
     */
    select?: conversation_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation_members
     */
    omit?: conversation_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversation_membersInclude<ExtArgs> | null
    where?: conversation_membersWhereInput
    orderBy?: conversation_membersOrderByWithRelationInput | conversation_membersOrderByWithRelationInput[]
    cursor?: conversation_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Conversation_membersScalarFieldEnum | Conversation_membersScalarFieldEnum[]
  }

  /**
   * users.friendships_friendships_userIdTousers
   */
  export type users$friendships_friendships_userIdTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    where?: friendshipsWhereInput
    orderBy?: friendshipsOrderByWithRelationInput | friendshipsOrderByWithRelationInput[]
    cursor?: friendshipsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipsScalarFieldEnum | FriendshipsScalarFieldEnum[]
  }

  /**
   * users.friendships_friendships_friendIdTousers
   */
  export type users$friendships_friendships_friendIdTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    where?: friendshipsWhereInput
    orderBy?: friendshipsOrderByWithRelationInput | friendshipsOrderByWithRelationInput[]
    cursor?: friendshipsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipsScalarFieldEnum | FriendshipsScalarFieldEnum[]
  }

  /**
   * users.sentMessages
   */
  export type users$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * users.notifications
   */
  export type users$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * users.user_atribut
   */
  export type users$user_atributArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_atribut
     */
    select?: user_atributSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_atribut
     */
    omit?: user_atributOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_atributInclude<ExtArgs> | null
    where?: user_atributWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model conversation_members
   */

  export type AggregateConversation_members = {
    _count: Conversation_membersCountAggregateOutputType | null
    _avg: Conversation_membersAvgAggregateOutputType | null
    _sum: Conversation_membersSumAggregateOutputType | null
    _min: Conversation_membersMinAggregateOutputType | null
    _max: Conversation_membersMaxAggregateOutputType | null
  }

  export type Conversation_membersAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Conversation_membersSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Conversation_membersMinAggregateOutputType = {
    id: number | null
    userId: number | null
    conversationId: string | null
    joinedAt: Date | null
  }

  export type Conversation_membersMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    conversationId: string | null
    joinedAt: Date | null
  }

  export type Conversation_membersCountAggregateOutputType = {
    id: number
    userId: number
    conversationId: number
    joinedAt: number
    _all: number
  }


  export type Conversation_membersAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Conversation_membersSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Conversation_membersMinAggregateInputType = {
    id?: true
    userId?: true
    conversationId?: true
    joinedAt?: true
  }

  export type Conversation_membersMaxAggregateInputType = {
    id?: true
    userId?: true
    conversationId?: true
    joinedAt?: true
  }

  export type Conversation_membersCountAggregateInputType = {
    id?: true
    userId?: true
    conversationId?: true
    joinedAt?: true
    _all?: true
  }

  export type Conversation_membersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversation_members to aggregate.
     */
    where?: conversation_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversation_members to fetch.
     */
    orderBy?: conversation_membersOrderByWithRelationInput | conversation_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: conversation_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversation_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversation_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned conversation_members
    **/
    _count?: true | Conversation_membersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Conversation_membersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Conversation_membersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Conversation_membersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Conversation_membersMaxAggregateInputType
  }

  export type GetConversation_membersAggregateType<T extends Conversation_membersAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation_members]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation_members[P]>
      : GetScalarType<T[P], AggregateConversation_members[P]>
  }




  export type conversation_membersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversation_membersWhereInput
    orderBy?: conversation_membersOrderByWithAggregationInput | conversation_membersOrderByWithAggregationInput[]
    by: Conversation_membersScalarFieldEnum[] | Conversation_membersScalarFieldEnum
    having?: conversation_membersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Conversation_membersCountAggregateInputType | true
    _avg?: Conversation_membersAvgAggregateInputType
    _sum?: Conversation_membersSumAggregateInputType
    _min?: Conversation_membersMinAggregateInputType
    _max?: Conversation_membersMaxAggregateInputType
  }

  export type Conversation_membersGroupByOutputType = {
    id: number
    userId: number
    conversationId: string
    joinedAt: Date
    _count: Conversation_membersCountAggregateOutputType | null
    _avg: Conversation_membersAvgAggregateOutputType | null
    _sum: Conversation_membersSumAggregateOutputType | null
    _min: Conversation_membersMinAggregateOutputType | null
    _max: Conversation_membersMaxAggregateOutputType | null
  }

  type GetConversation_membersGroupByPayload<T extends conversation_membersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Conversation_membersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Conversation_membersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Conversation_membersGroupByOutputType[P]>
            : GetScalarType<T[P], Conversation_membersGroupByOutputType[P]>
        }
      >
    >


  export type conversation_membersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    conversationId?: boolean
    joinedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    conversation?: boolean | conversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation_members"]>



  export type conversation_membersSelectScalar = {
    id?: boolean
    userId?: boolean
    conversationId?: boolean
    joinedAt?: boolean
  }

  export type conversation_membersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "conversationId" | "joinedAt", ExtArgs["result"]["conversation_members"]>
  export type conversation_membersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    conversation?: boolean | conversationsDefaultArgs<ExtArgs>
  }

  export type $conversation_membersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "conversation_members"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      conversation: Prisma.$conversationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      conversationId: string
      joinedAt: Date
    }, ExtArgs["result"]["conversation_members"]>
    composites: {}
  }

  type conversation_membersGetPayload<S extends boolean | null | undefined | conversation_membersDefaultArgs> = $Result.GetResult<Prisma.$conversation_membersPayload, S>

  type conversation_membersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<conversation_membersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Conversation_membersCountAggregateInputType | true
    }

  export interface conversation_membersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['conversation_members'], meta: { name: 'conversation_members' } }
    /**
     * Find zero or one Conversation_members that matches the filter.
     * @param {conversation_membersFindUniqueArgs} args - Arguments to find a Conversation_members
     * @example
     * // Get one Conversation_members
     * const conversation_members = await prisma.conversation_members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends conversation_membersFindUniqueArgs>(args: SelectSubset<T, conversation_membersFindUniqueArgs<ExtArgs>>): Prisma__conversation_membersClient<$Result.GetResult<Prisma.$conversation_membersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation_members that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {conversation_membersFindUniqueOrThrowArgs} args - Arguments to find a Conversation_members
     * @example
     * // Get one Conversation_members
     * const conversation_members = await prisma.conversation_members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends conversation_membersFindUniqueOrThrowArgs>(args: SelectSubset<T, conversation_membersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__conversation_membersClient<$Result.GetResult<Prisma.$conversation_membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversation_membersFindFirstArgs} args - Arguments to find a Conversation_members
     * @example
     * // Get one Conversation_members
     * const conversation_members = await prisma.conversation_members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends conversation_membersFindFirstArgs>(args?: SelectSubset<T, conversation_membersFindFirstArgs<ExtArgs>>): Prisma__conversation_membersClient<$Result.GetResult<Prisma.$conversation_membersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation_members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversation_membersFindFirstOrThrowArgs} args - Arguments to find a Conversation_members
     * @example
     * // Get one Conversation_members
     * const conversation_members = await prisma.conversation_members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends conversation_membersFindFirstOrThrowArgs>(args?: SelectSubset<T, conversation_membersFindFirstOrThrowArgs<ExtArgs>>): Prisma__conversation_membersClient<$Result.GetResult<Prisma.$conversation_membersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversation_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversation_membersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversation_members
     * const conversation_members = await prisma.conversation_members.findMany()
     * 
     * // Get first 10 Conversation_members
     * const conversation_members = await prisma.conversation_members.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversation_membersWithIdOnly = await prisma.conversation_members.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends conversation_membersFindManyArgs>(args?: SelectSubset<T, conversation_membersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversation_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation_members.
     * @param {conversation_membersCreateArgs} args - Arguments to create a Conversation_members.
     * @example
     * // Create one Conversation_members
     * const Conversation_members = await prisma.conversation_members.create({
     *   data: {
     *     // ... data to create a Conversation_members
     *   }
     * })
     * 
     */
    create<T extends conversation_membersCreateArgs>(args: SelectSubset<T, conversation_membersCreateArgs<ExtArgs>>): Prisma__conversation_membersClient<$Result.GetResult<Prisma.$conversation_membersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversation_members.
     * @param {conversation_membersCreateManyArgs} args - Arguments to create many Conversation_members.
     * @example
     * // Create many Conversation_members
     * const conversation_members = await prisma.conversation_members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends conversation_membersCreateManyArgs>(args?: SelectSubset<T, conversation_membersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conversation_members.
     * @param {conversation_membersDeleteArgs} args - Arguments to delete one Conversation_members.
     * @example
     * // Delete one Conversation_members
     * const Conversation_members = await prisma.conversation_members.delete({
     *   where: {
     *     // ... filter to delete one Conversation_members
     *   }
     * })
     * 
     */
    delete<T extends conversation_membersDeleteArgs>(args: SelectSubset<T, conversation_membersDeleteArgs<ExtArgs>>): Prisma__conversation_membersClient<$Result.GetResult<Prisma.$conversation_membersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation_members.
     * @param {conversation_membersUpdateArgs} args - Arguments to update one Conversation_members.
     * @example
     * // Update one Conversation_members
     * const conversation_members = await prisma.conversation_members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends conversation_membersUpdateArgs>(args: SelectSubset<T, conversation_membersUpdateArgs<ExtArgs>>): Prisma__conversation_membersClient<$Result.GetResult<Prisma.$conversation_membersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversation_members.
     * @param {conversation_membersDeleteManyArgs} args - Arguments to filter Conversation_members to delete.
     * @example
     * // Delete a few Conversation_members
     * const { count } = await prisma.conversation_members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends conversation_membersDeleteManyArgs>(args?: SelectSubset<T, conversation_membersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversation_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversation_membersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversation_members
     * const conversation_members = await prisma.conversation_members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends conversation_membersUpdateManyArgs>(args: SelectSubset<T, conversation_membersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversation_members.
     * @param {conversation_membersUpsertArgs} args - Arguments to update or create a Conversation_members.
     * @example
     * // Update or create a Conversation_members
     * const conversation_members = await prisma.conversation_members.upsert({
     *   create: {
     *     // ... data to create a Conversation_members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation_members we want to update
     *   }
     * })
     */
    upsert<T extends conversation_membersUpsertArgs>(args: SelectSubset<T, conversation_membersUpsertArgs<ExtArgs>>): Prisma__conversation_membersClient<$Result.GetResult<Prisma.$conversation_membersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversation_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversation_membersCountArgs} args - Arguments to filter Conversation_members to count.
     * @example
     * // Count the number of Conversation_members
     * const count = await prisma.conversation_members.count({
     *   where: {
     *     // ... the filter for the Conversation_members we want to count
     *   }
     * })
    **/
    count<T extends conversation_membersCountArgs>(
      args?: Subset<T, conversation_membersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Conversation_membersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Conversation_membersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Conversation_membersAggregateArgs>(args: Subset<T, Conversation_membersAggregateArgs>): Prisma.PrismaPromise<GetConversation_membersAggregateType<T>>

    /**
     * Group by Conversation_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversation_membersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends conversation_membersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: conversation_membersGroupByArgs['orderBy'] }
        : { orderBy?: conversation_membersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, conversation_membersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversation_membersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the conversation_members model
   */
  readonly fields: conversation_membersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for conversation_members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__conversation_membersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conversation<T extends conversationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, conversationsDefaultArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the conversation_members model
   */
  interface conversation_membersFieldRefs {
    readonly id: FieldRef<"conversation_members", 'Int'>
    readonly userId: FieldRef<"conversation_members", 'Int'>
    readonly conversationId: FieldRef<"conversation_members", 'String'>
    readonly joinedAt: FieldRef<"conversation_members", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * conversation_members findUnique
   */
  export type conversation_membersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation_members
     */
    select?: conversation_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation_members
     */
    omit?: conversation_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversation_membersInclude<ExtArgs> | null
    /**
     * Filter, which conversation_members to fetch.
     */
    where: conversation_membersWhereUniqueInput
  }

  /**
   * conversation_members findUniqueOrThrow
   */
  export type conversation_membersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation_members
     */
    select?: conversation_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation_members
     */
    omit?: conversation_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversation_membersInclude<ExtArgs> | null
    /**
     * Filter, which conversation_members to fetch.
     */
    where: conversation_membersWhereUniqueInput
  }

  /**
   * conversation_members findFirst
   */
  export type conversation_membersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation_members
     */
    select?: conversation_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation_members
     */
    omit?: conversation_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversation_membersInclude<ExtArgs> | null
    /**
     * Filter, which conversation_members to fetch.
     */
    where?: conversation_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversation_members to fetch.
     */
    orderBy?: conversation_membersOrderByWithRelationInput | conversation_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversation_members.
     */
    cursor?: conversation_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversation_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversation_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversation_members.
     */
    distinct?: Conversation_membersScalarFieldEnum | Conversation_membersScalarFieldEnum[]
  }

  /**
   * conversation_members findFirstOrThrow
   */
  export type conversation_membersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation_members
     */
    select?: conversation_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation_members
     */
    omit?: conversation_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversation_membersInclude<ExtArgs> | null
    /**
     * Filter, which conversation_members to fetch.
     */
    where?: conversation_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversation_members to fetch.
     */
    orderBy?: conversation_membersOrderByWithRelationInput | conversation_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversation_members.
     */
    cursor?: conversation_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversation_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversation_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversation_members.
     */
    distinct?: Conversation_membersScalarFieldEnum | Conversation_membersScalarFieldEnum[]
  }

  /**
   * conversation_members findMany
   */
  export type conversation_membersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation_members
     */
    select?: conversation_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation_members
     */
    omit?: conversation_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversation_membersInclude<ExtArgs> | null
    /**
     * Filter, which conversation_members to fetch.
     */
    where?: conversation_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversation_members to fetch.
     */
    orderBy?: conversation_membersOrderByWithRelationInput | conversation_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing conversation_members.
     */
    cursor?: conversation_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversation_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversation_members.
     */
    skip?: number
    distinct?: Conversation_membersScalarFieldEnum | Conversation_membersScalarFieldEnum[]
  }

  /**
   * conversation_members create
   */
  export type conversation_membersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation_members
     */
    select?: conversation_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation_members
     */
    omit?: conversation_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversation_membersInclude<ExtArgs> | null
    /**
     * The data needed to create a conversation_members.
     */
    data: XOR<conversation_membersCreateInput, conversation_membersUncheckedCreateInput>
  }

  /**
   * conversation_members createMany
   */
  export type conversation_membersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many conversation_members.
     */
    data: conversation_membersCreateManyInput | conversation_membersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * conversation_members update
   */
  export type conversation_membersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation_members
     */
    select?: conversation_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation_members
     */
    omit?: conversation_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversation_membersInclude<ExtArgs> | null
    /**
     * The data needed to update a conversation_members.
     */
    data: XOR<conversation_membersUpdateInput, conversation_membersUncheckedUpdateInput>
    /**
     * Choose, which conversation_members to update.
     */
    where: conversation_membersWhereUniqueInput
  }

  /**
   * conversation_members updateMany
   */
  export type conversation_membersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update conversation_members.
     */
    data: XOR<conversation_membersUpdateManyMutationInput, conversation_membersUncheckedUpdateManyInput>
    /**
     * Filter which conversation_members to update
     */
    where?: conversation_membersWhereInput
    /**
     * Limit how many conversation_members to update.
     */
    limit?: number
  }

  /**
   * conversation_members upsert
   */
  export type conversation_membersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation_members
     */
    select?: conversation_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation_members
     */
    omit?: conversation_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversation_membersInclude<ExtArgs> | null
    /**
     * The filter to search for the conversation_members to update in case it exists.
     */
    where: conversation_membersWhereUniqueInput
    /**
     * In case the conversation_members found by the `where` argument doesn't exist, create a new conversation_members with this data.
     */
    create: XOR<conversation_membersCreateInput, conversation_membersUncheckedCreateInput>
    /**
     * In case the conversation_members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<conversation_membersUpdateInput, conversation_membersUncheckedUpdateInput>
  }

  /**
   * conversation_members delete
   */
  export type conversation_membersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation_members
     */
    select?: conversation_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation_members
     */
    omit?: conversation_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversation_membersInclude<ExtArgs> | null
    /**
     * Filter which conversation_members to delete.
     */
    where: conversation_membersWhereUniqueInput
  }

  /**
   * conversation_members deleteMany
   */
  export type conversation_membersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversation_members to delete
     */
    where?: conversation_membersWhereInput
    /**
     * Limit how many conversation_members to delete.
     */
    limit?: number
  }

  /**
   * conversation_members without action
   */
  export type conversation_membersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation_members
     */
    select?: conversation_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation_members
     */
    omit?: conversation_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversation_membersInclude<ExtArgs> | null
  }


  /**
   * Model messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesAvgAggregateOutputType = {
    senderId: number | null
  }

  export type MessagesSumAggregateOutputType = {
    senderId: number | null
  }

  export type MessagesMinAggregateOutputType = {
    id: string | null
    content: string | null
    sentAt: Date | null
    status: $Enums.messages_status | null
    senderId: number | null
    senderUsername: string | null
    senderPfp_id: string | null
    conversationId: string | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: string | null
    content: string | null
    sentAt: Date | null
    status: $Enums.messages_status | null
    senderId: number | null
    senderUsername: string | null
    senderPfp_id: string | null
    conversationId: string | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    content: number
    sentAt: number
    status: number
    senderId: number
    senderUsername: number
    senderPfp_id: number
    conversationId: number
    seen_by: number
    _all: number
  }


  export type MessagesAvgAggregateInputType = {
    senderId?: true
  }

  export type MessagesSumAggregateInputType = {
    senderId?: true
  }

  export type MessagesMinAggregateInputType = {
    id?: true
    content?: true
    sentAt?: true
    status?: true
    senderId?: true
    senderUsername?: true
    senderPfp_id?: true
    conversationId?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    content?: true
    sentAt?: true
    status?: true
    senderId?: true
    senderUsername?: true
    senderPfp_id?: true
    conversationId?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    content?: true
    sentAt?: true
    status?: true
    senderId?: true
    senderUsername?: true
    senderPfp_id?: true
    conversationId?: true
    seen_by?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithAggregationInput | messagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _avg?: MessagesAvgAggregateInputType
    _sum?: MessagesSumAggregateInputType
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: string
    content: string
    sentAt: Date
    status: $Enums.messages_status
    senderId: number
    senderUsername: string
    senderPfp_id: string | null
    conversationId: string
    seen_by: JsonValue | null
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    sentAt?: boolean
    status?: boolean
    senderId?: boolean
    senderUsername?: boolean
    senderPfp_id?: boolean
    conversationId?: boolean
    seen_by?: boolean
    sender?: boolean | usersDefaultArgs<ExtArgs>
    conversation?: boolean | conversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>



  export type messagesSelectScalar = {
    id?: boolean
    content?: boolean
    sentAt?: boolean
    status?: boolean
    senderId?: boolean
    senderUsername?: boolean
    senderPfp_id?: boolean
    conversationId?: boolean
    seen_by?: boolean
  }

  export type messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "sentAt" | "status" | "senderId" | "senderUsername" | "senderPfp_id" | "conversationId" | "seen_by", ExtArgs["result"]["messages"]>
  export type messagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | usersDefaultArgs<ExtArgs>
    conversation?: boolean | conversationsDefaultArgs<ExtArgs>
  }

  export type $messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messages"
    objects: {
      sender: Prisma.$usersPayload<ExtArgs>
      conversation: Prisma.$conversationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      sentAt: Date
      status: $Enums.messages_status
      senderId: number
      senderUsername: string
      senderPfp_id: string | null
      conversationId: string
      seen_by: Prisma.JsonValue | null
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = $Result.GetResult<Prisma.$messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesFindUniqueArgs>(args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesFindFirstArgs>(args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messagesFindManyArgs>(args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends messagesCreateArgs>(args: SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesCreateManyArgs>(args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends messagesDeleteArgs>(args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesUpdateArgs>(args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDeleteManyArgs>(args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesUpdateManyArgs>(args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends messagesUpsertArgs>(args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesGroupByArgs['orderBy'] }
        : { orderBy?: messagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messages model
   */
  readonly fields: messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conversation<T extends conversationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, conversationsDefaultArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the messages model
   */
  interface messagesFieldRefs {
    readonly id: FieldRef<"messages", 'String'>
    readonly content: FieldRef<"messages", 'String'>
    readonly sentAt: FieldRef<"messages", 'DateTime'>
    readonly status: FieldRef<"messages", 'messages_status'>
    readonly senderId: FieldRef<"messages", 'Int'>
    readonly senderUsername: FieldRef<"messages", 'String'>
    readonly senderPfp_id: FieldRef<"messages", 'String'>
    readonly conversationId: FieldRef<"messages", 'String'>
    readonly seen_by: FieldRef<"messages", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * messages findUnique
   */
  export type messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findFirst
   */
  export type messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }

  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }

  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * messages without action
   */
  export type messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
  }


  /**
   * Model conversations
   */

  export type AggregateConversations = {
    _count: ConversationsCountAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  export type ConversationsMinAggregateOutputType = {
    id: string | null
    isGroup: boolean | null
    createdAt: Date | null
  }

  export type ConversationsMaxAggregateOutputType = {
    id: string | null
    isGroup: boolean | null
    createdAt: Date | null
  }

  export type ConversationsCountAggregateOutputType = {
    id: number
    isGroup: number
    createdAt: number
    _all: number
  }


  export type ConversationsMinAggregateInputType = {
    id?: true
    isGroup?: true
    createdAt?: true
  }

  export type ConversationsMaxAggregateInputType = {
    id?: true
    isGroup?: true
    createdAt?: true
  }

  export type ConversationsCountAggregateInputType = {
    id?: true
    isGroup?: true
    createdAt?: true
    _all?: true
  }

  export type ConversationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversations to aggregate.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned conversations
    **/
    _count?: true | ConversationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationsMaxAggregateInputType
  }

  export type GetConversationsAggregateType<T extends ConversationsAggregateArgs> = {
        [P in keyof T & keyof AggregateConversations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversations[P]>
      : GetScalarType<T[P], AggregateConversations[P]>
  }




  export type conversationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationsWhereInput
    orderBy?: conversationsOrderByWithAggregationInput | conversationsOrderByWithAggregationInput[]
    by: ConversationsScalarFieldEnum[] | ConversationsScalarFieldEnum
    having?: conversationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationsCountAggregateInputType | true
    _min?: ConversationsMinAggregateInputType
    _max?: ConversationsMaxAggregateInputType
  }

  export type ConversationsGroupByOutputType = {
    id: string
    isGroup: boolean
    createdAt: Date
    _count: ConversationsCountAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  type GetConversationsGroupByPayload<T extends conversationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
        }
      >
    >


  export type conversationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isGroup?: boolean
    createdAt?: boolean
    members?: boolean | conversations$membersArgs<ExtArgs>
    group_atributs?: boolean | conversations$group_atributsArgs<ExtArgs>
    messages?: boolean | conversations$messagesArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>



  export type conversationsSelectScalar = {
    id?: boolean
    isGroup?: boolean
    createdAt?: boolean
  }

  export type conversationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isGroup" | "createdAt", ExtArgs["result"]["conversations"]>
  export type conversationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | conversations$membersArgs<ExtArgs>
    group_atributs?: boolean | conversations$group_atributsArgs<ExtArgs>
    messages?: boolean | conversations$messagesArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $conversationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "conversations"
    objects: {
      members: Prisma.$conversation_membersPayload<ExtArgs>[]
      group_atributs: Prisma.$group_atributsPayload<ExtArgs> | null
      messages: Prisma.$messagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      isGroup: boolean
      createdAt: Date
    }, ExtArgs["result"]["conversations"]>
    composites: {}
  }

  type conversationsGetPayload<S extends boolean | null | undefined | conversationsDefaultArgs> = $Result.GetResult<Prisma.$conversationsPayload, S>

  type conversationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<conversationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationsCountAggregateInputType | true
    }

  export interface conversationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['conversations'], meta: { name: 'conversations' } }
    /**
     * Find zero or one Conversations that matches the filter.
     * @param {conversationsFindUniqueArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends conversationsFindUniqueArgs>(args: SelectSubset<T, conversationsFindUniqueArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {conversationsFindUniqueOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends conversationsFindUniqueOrThrowArgs>(args: SelectSubset<T, conversationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindFirstArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends conversationsFindFirstArgs>(args?: SelectSubset<T, conversationsFindFirstArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindFirstOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends conversationsFindFirstOrThrowArgs>(args?: SelectSubset<T, conversationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversations.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationsWithIdOnly = await prisma.conversations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends conversationsFindManyArgs>(args?: SelectSubset<T, conversationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversations.
     * @param {conversationsCreateArgs} args - Arguments to create a Conversations.
     * @example
     * // Create one Conversations
     * const Conversations = await prisma.conversations.create({
     *   data: {
     *     // ... data to create a Conversations
     *   }
     * })
     * 
     */
    create<T extends conversationsCreateArgs>(args: SelectSubset<T, conversationsCreateArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {conversationsCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends conversationsCreateManyArgs>(args?: SelectSubset<T, conversationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conversations.
     * @param {conversationsDeleteArgs} args - Arguments to delete one Conversations.
     * @example
     * // Delete one Conversations
     * const Conversations = await prisma.conversations.delete({
     *   where: {
     *     // ... filter to delete one Conversations
     *   }
     * })
     * 
     */
    delete<T extends conversationsDeleteArgs>(args: SelectSubset<T, conversationsDeleteArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversations.
     * @param {conversationsUpdateArgs} args - Arguments to update one Conversations.
     * @example
     * // Update one Conversations
     * const conversations = await prisma.conversations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends conversationsUpdateArgs>(args: SelectSubset<T, conversationsUpdateArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {conversationsDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends conversationsDeleteManyArgs>(args?: SelectSubset<T, conversationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends conversationsUpdateManyArgs>(args: SelectSubset<T, conversationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversations.
     * @param {conversationsUpsertArgs} args - Arguments to update or create a Conversations.
     * @example
     * // Update or create a Conversations
     * const conversations = await prisma.conversations.upsert({
     *   create: {
     *     // ... data to create a Conversations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversations we want to update
     *   }
     * })
     */
    upsert<T extends conversationsUpsertArgs>(args: SelectSubset<T, conversationsUpsertArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversations.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends conversationsCountArgs>(
      args?: Subset<T, conversationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationsAggregateArgs>(args: Subset<T, ConversationsAggregateArgs>): Prisma.PrismaPromise<GetConversationsAggregateType<T>>

    /**
     * Group by Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends conversationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: conversationsGroupByArgs['orderBy'] }
        : { orderBy?: conversationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, conversationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the conversations model
   */
  readonly fields: conversationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for conversations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__conversationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends conversations$membersArgs<ExtArgs> = {}>(args?: Subset<T, conversations$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversation_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    group_atributs<T extends conversations$group_atributsArgs<ExtArgs> = {}>(args?: Subset<T, conversations$group_atributsArgs<ExtArgs>>): Prisma__group_atributsClient<$Result.GetResult<Prisma.$group_atributsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    messages<T extends conversations$messagesArgs<ExtArgs> = {}>(args?: Subset<T, conversations$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the conversations model
   */
  interface conversationsFieldRefs {
    readonly id: FieldRef<"conversations", 'String'>
    readonly isGroup: FieldRef<"conversations", 'Boolean'>
    readonly createdAt: FieldRef<"conversations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * conversations findUnique
   */
  export type conversationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations findUniqueOrThrow
   */
  export type conversationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations findFirst
   */
  export type conversationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations findFirstOrThrow
   */
  export type conversationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations findMany
   */
  export type conversationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations create
   */
  export type conversationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The data needed to create a conversations.
     */
    data?: XOR<conversationsCreateInput, conversationsUncheckedCreateInput>
  }

  /**
   * conversations createMany
   */
  export type conversationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many conversations.
     */
    data: conversationsCreateManyInput | conversationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * conversations update
   */
  export type conversationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The data needed to update a conversations.
     */
    data: XOR<conversationsUpdateInput, conversationsUncheckedUpdateInput>
    /**
     * Choose, which conversations to update.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations updateMany
   */
  export type conversationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update conversations.
     */
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyInput>
    /**
     * Filter which conversations to update
     */
    where?: conversationsWhereInput
    /**
     * Limit how many conversations to update.
     */
    limit?: number
  }

  /**
   * conversations upsert
   */
  export type conversationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The filter to search for the conversations to update in case it exists.
     */
    where: conversationsWhereUniqueInput
    /**
     * In case the conversations found by the `where` argument doesn't exist, create a new conversations with this data.
     */
    create: XOR<conversationsCreateInput, conversationsUncheckedCreateInput>
    /**
     * In case the conversations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<conversationsUpdateInput, conversationsUncheckedUpdateInput>
  }

  /**
   * conversations delete
   */
  export type conversationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter which conversations to delete.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations deleteMany
   */
  export type conversationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversations to delete
     */
    where?: conversationsWhereInput
    /**
     * Limit how many conversations to delete.
     */
    limit?: number
  }

  /**
   * conversations.members
   */
  export type conversations$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversation_members
     */
    select?: conversation_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversation_members
     */
    omit?: conversation_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversation_membersInclude<ExtArgs> | null
    where?: conversation_membersWhereInput
    orderBy?: conversation_membersOrderByWithRelationInput | conversation_membersOrderByWithRelationInput[]
    cursor?: conversation_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Conversation_membersScalarFieldEnum | Conversation_membersScalarFieldEnum[]
  }

  /**
   * conversations.group_atributs
   */
  export type conversations$group_atributsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_atributs
     */
    select?: group_atributsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_atributs
     */
    omit?: group_atributsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_atributsInclude<ExtArgs> | null
    where?: group_atributsWhereInput
  }

  /**
   * conversations.messages
   */
  export type conversations$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * conversations without action
   */
  export type conversationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
  }


  /**
   * Model tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsAvgAggregateOutputType = {
    id: number | null
  }

  export type TagsSumAggregateOutputType = {
    id: number | null
  }

  export type TagsMinAggregateOutputType = {
    id: number | null
    name: string | null
    tier: $Enums.tags_tier | null
  }

  export type TagsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    tier: $Enums.tags_tier | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    name: number
    tier: number
    _all: number
  }


  export type TagsAvgAggregateInputType = {
    id?: true
  }

  export type TagsSumAggregateInputType = {
    id?: true
  }

  export type TagsMinAggregateInputType = {
    id?: true
    name?: true
    tier?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    name?: true
    tier?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    name?: true
    tier?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to aggregate.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithAggregationInput | tagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _avg?: TagsAvgAggregateInputType
    _sum?: TagsSumAggregateInputType
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: number
    name: string
    tier: $Enums.tags_tier
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tier?: boolean
  }, ExtArgs["result"]["tags"]>



  export type tagsSelectScalar = {
    id?: boolean
    name?: boolean
    tier?: boolean
  }

  export type tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "tier", ExtArgs["result"]["tags"]>

  export type $tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tags"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      tier: $Enums.tags_tier
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type tagsGetPayload<S extends boolean | null | undefined | tagsDefaultArgs> = $Result.GetResult<Prisma.$tagsPayload, S>

  type tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tags'], meta: { name: 'tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {tagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagsFindUniqueArgs>(args: SelectSubset<T, tagsFindUniqueArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagsFindFirstArgs>(args?: SelectSubset<T, tagsFindFirstArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tagsFindManyArgs>(args?: SelectSubset<T, tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {tagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends tagsCreateArgs>(args: SelectSubset<T, tagsCreateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagsCreateManyArgs>(args?: SelectSubset<T, tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tags.
     * @param {tagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends tagsDeleteArgs>(args: SelectSubset<T, tagsDeleteArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {tagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagsUpdateArgs>(args: SelectSubset<T, tagsUpdateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagsDeleteManyArgs>(args?: SelectSubset<T, tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagsUpdateManyArgs>(args: SelectSubset<T, tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tags.
     * @param {tagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends tagsUpsertArgs>(args: SelectSubset<T, tagsUpsertArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagsCountArgs>(
      args?: Subset<T, tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagsGroupByArgs['orderBy'] }
        : { orderBy?: tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tags model
   */
  readonly fields: tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tags model
   */
  interface tagsFieldRefs {
    readonly id: FieldRef<"tags", 'Int'>
    readonly name: FieldRef<"tags", 'String'>
    readonly tier: FieldRef<"tags", 'tags_tier'>
  }
    

  // Custom InputTypes
  /**
   * tags findUnique
   */
  export type tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findUniqueOrThrow
   */
  export type tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findFirst
   */
  export type tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findFirstOrThrow
   */
  export type tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findMany
   */
  export type tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags create
   */
  export type tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data needed to create a tags.
     */
    data: XOR<tagsCreateInput, tagsUncheckedCreateInput>
  }

  /**
   * tags createMany
   */
  export type tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags update
   */
  export type tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data needed to update a tags.
     */
    data: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
    /**
     * Choose, which tags to update.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags updateMany
   */
  export type tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags upsert
   */
  export type tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The filter to search for the tags to update in case it exists.
     */
    where: tagsWhereUniqueInput
    /**
     * In case the tags found by the `where` argument doesn't exist, create a new tags with this data.
     */
    create: XOR<tagsCreateInput, tagsUncheckedCreateInput>
    /**
     * In case the tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
  }

  /**
   * tags delete
   */
  export type tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Filter which tags to delete.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags deleteMany
   */
  export type tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tags without action
   */
  export type tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
  }


  /**
   * Model user_atribut
   */

  export type AggregateUser_atribut = {
    _count: User_atributCountAggregateOutputType | null
    _avg: User_atributAvgAggregateOutputType | null
    _sum: User_atributSumAggregateOutputType | null
    _min: User_atributMinAggregateOutputType | null
    _max: User_atributMaxAggregateOutputType | null
  }

  export type User_atributAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type User_atributSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type User_atributMinAggregateOutputType = {
    id: number | null
    userId: number | null
    pfp_id: string | null
    bio: string | null
  }

  export type User_atributMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    pfp_id: string | null
    bio: string | null
  }

  export type User_atributCountAggregateOutputType = {
    id: number
    userId: number
    pfp_id: number
    tags_used: number
    owned_tags: number
    pronounces: number
    bio: number
    _all: number
  }


  export type User_atributAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type User_atributSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type User_atributMinAggregateInputType = {
    id?: true
    userId?: true
    pfp_id?: true
    bio?: true
  }

  export type User_atributMaxAggregateInputType = {
    id?: true
    userId?: true
    pfp_id?: true
    bio?: true
  }

  export type User_atributCountAggregateInputType = {
    id?: true
    userId?: true
    pfp_id?: true
    tags_used?: true
    owned_tags?: true
    pronounces?: true
    bio?: true
    _all?: true
  }

  export type User_atributAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_atribut to aggregate.
     */
    where?: user_atributWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_atributs to fetch.
     */
    orderBy?: user_atributOrderByWithRelationInput | user_atributOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_atributWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_atributs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_atributs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_atributs
    **/
    _count?: true | User_atributCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_atributAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_atributSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_atributMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_atributMaxAggregateInputType
  }

  export type GetUser_atributAggregateType<T extends User_atributAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_atribut]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_atribut[P]>
      : GetScalarType<T[P], AggregateUser_atribut[P]>
  }




  export type user_atributGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_atributWhereInput
    orderBy?: user_atributOrderByWithAggregationInput | user_atributOrderByWithAggregationInput[]
    by: User_atributScalarFieldEnum[] | User_atributScalarFieldEnum
    having?: user_atributScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_atributCountAggregateInputType | true
    _avg?: User_atributAvgAggregateInputType
    _sum?: User_atributSumAggregateInputType
    _min?: User_atributMinAggregateInputType
    _max?: User_atributMaxAggregateInputType
  }

  export type User_atributGroupByOutputType = {
    id: number
    userId: number
    pfp_id: string | null
    tags_used: JsonValue | null
    owned_tags: JsonValue | null
    pronounces: JsonValue | null
    bio: string | null
    _count: User_atributCountAggregateOutputType | null
    _avg: User_atributAvgAggregateOutputType | null
    _sum: User_atributSumAggregateOutputType | null
    _min: User_atributMinAggregateOutputType | null
    _max: User_atributMaxAggregateOutputType | null
  }

  type GetUser_atributGroupByPayload<T extends user_atributGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_atributGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_atributGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_atributGroupByOutputType[P]>
            : GetScalarType<T[P], User_atributGroupByOutputType[P]>
        }
      >
    >


  export type user_atributSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pfp_id?: boolean
    tags_used?: boolean
    owned_tags?: boolean
    pronounces?: boolean
    bio?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_atribut"]>



  export type user_atributSelectScalar = {
    id?: boolean
    userId?: boolean
    pfp_id?: boolean
    tags_used?: boolean
    owned_tags?: boolean
    pronounces?: boolean
    bio?: boolean
  }

  export type user_atributOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "pfp_id" | "tags_used" | "owned_tags" | "pronounces" | "bio", ExtArgs["result"]["user_atribut"]>
  export type user_atributInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_atributPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_atribut"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      pfp_id: string | null
      tags_used: Prisma.JsonValue | null
      owned_tags: Prisma.JsonValue | null
      pronounces: Prisma.JsonValue | null
      bio: string | null
    }, ExtArgs["result"]["user_atribut"]>
    composites: {}
  }

  type user_atributGetPayload<S extends boolean | null | undefined | user_atributDefaultArgs> = $Result.GetResult<Prisma.$user_atributPayload, S>

  type user_atributCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_atributFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_atributCountAggregateInputType | true
    }

  export interface user_atributDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_atribut'], meta: { name: 'user_atribut' } }
    /**
     * Find zero or one User_atribut that matches the filter.
     * @param {user_atributFindUniqueArgs} args - Arguments to find a User_atribut
     * @example
     * // Get one User_atribut
     * const user_atribut = await prisma.user_atribut.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_atributFindUniqueArgs>(args: SelectSubset<T, user_atributFindUniqueArgs<ExtArgs>>): Prisma__user_atributClient<$Result.GetResult<Prisma.$user_atributPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_atribut that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_atributFindUniqueOrThrowArgs} args - Arguments to find a User_atribut
     * @example
     * // Get one User_atribut
     * const user_atribut = await prisma.user_atribut.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_atributFindUniqueOrThrowArgs>(args: SelectSubset<T, user_atributFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_atributClient<$Result.GetResult<Prisma.$user_atributPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_atribut that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_atributFindFirstArgs} args - Arguments to find a User_atribut
     * @example
     * // Get one User_atribut
     * const user_atribut = await prisma.user_atribut.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_atributFindFirstArgs>(args?: SelectSubset<T, user_atributFindFirstArgs<ExtArgs>>): Prisma__user_atributClient<$Result.GetResult<Prisma.$user_atributPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_atribut that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_atributFindFirstOrThrowArgs} args - Arguments to find a User_atribut
     * @example
     * // Get one User_atribut
     * const user_atribut = await prisma.user_atribut.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_atributFindFirstOrThrowArgs>(args?: SelectSubset<T, user_atributFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_atributClient<$Result.GetResult<Prisma.$user_atributPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_atributs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_atributFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_atributs
     * const user_atributs = await prisma.user_atribut.findMany()
     * 
     * // Get first 10 User_atributs
     * const user_atributs = await prisma.user_atribut.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_atributWithIdOnly = await prisma.user_atribut.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_atributFindManyArgs>(args?: SelectSubset<T, user_atributFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_atributPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_atribut.
     * @param {user_atributCreateArgs} args - Arguments to create a User_atribut.
     * @example
     * // Create one User_atribut
     * const User_atribut = await prisma.user_atribut.create({
     *   data: {
     *     // ... data to create a User_atribut
     *   }
     * })
     * 
     */
    create<T extends user_atributCreateArgs>(args: SelectSubset<T, user_atributCreateArgs<ExtArgs>>): Prisma__user_atributClient<$Result.GetResult<Prisma.$user_atributPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_atributs.
     * @param {user_atributCreateManyArgs} args - Arguments to create many User_atributs.
     * @example
     * // Create many User_atributs
     * const user_atribut = await prisma.user_atribut.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_atributCreateManyArgs>(args?: SelectSubset<T, user_atributCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_atribut.
     * @param {user_atributDeleteArgs} args - Arguments to delete one User_atribut.
     * @example
     * // Delete one User_atribut
     * const User_atribut = await prisma.user_atribut.delete({
     *   where: {
     *     // ... filter to delete one User_atribut
     *   }
     * })
     * 
     */
    delete<T extends user_atributDeleteArgs>(args: SelectSubset<T, user_atributDeleteArgs<ExtArgs>>): Prisma__user_atributClient<$Result.GetResult<Prisma.$user_atributPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_atribut.
     * @param {user_atributUpdateArgs} args - Arguments to update one User_atribut.
     * @example
     * // Update one User_atribut
     * const user_atribut = await prisma.user_atribut.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_atributUpdateArgs>(args: SelectSubset<T, user_atributUpdateArgs<ExtArgs>>): Prisma__user_atributClient<$Result.GetResult<Prisma.$user_atributPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_atributs.
     * @param {user_atributDeleteManyArgs} args - Arguments to filter User_atributs to delete.
     * @example
     * // Delete a few User_atributs
     * const { count } = await prisma.user_atribut.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_atributDeleteManyArgs>(args?: SelectSubset<T, user_atributDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_atributs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_atributUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_atributs
     * const user_atribut = await prisma.user_atribut.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_atributUpdateManyArgs>(args: SelectSubset<T, user_atributUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_atribut.
     * @param {user_atributUpsertArgs} args - Arguments to update or create a User_atribut.
     * @example
     * // Update or create a User_atribut
     * const user_atribut = await prisma.user_atribut.upsert({
     *   create: {
     *     // ... data to create a User_atribut
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_atribut we want to update
     *   }
     * })
     */
    upsert<T extends user_atributUpsertArgs>(args: SelectSubset<T, user_atributUpsertArgs<ExtArgs>>): Prisma__user_atributClient<$Result.GetResult<Prisma.$user_atributPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_atributs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_atributCountArgs} args - Arguments to filter User_atributs to count.
     * @example
     * // Count the number of User_atributs
     * const count = await prisma.user_atribut.count({
     *   where: {
     *     // ... the filter for the User_atributs we want to count
     *   }
     * })
    **/
    count<T extends user_atributCountArgs>(
      args?: Subset<T, user_atributCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_atributCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_atribut.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_atributAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_atributAggregateArgs>(args: Subset<T, User_atributAggregateArgs>): Prisma.PrismaPromise<GetUser_atributAggregateType<T>>

    /**
     * Group by User_atribut.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_atributGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_atributGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_atributGroupByArgs['orderBy'] }
        : { orderBy?: user_atributGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_atributGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_atributGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_atribut model
   */
  readonly fields: user_atributFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_atribut.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_atributClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_atribut model
   */
  interface user_atributFieldRefs {
    readonly id: FieldRef<"user_atribut", 'Int'>
    readonly userId: FieldRef<"user_atribut", 'Int'>
    readonly pfp_id: FieldRef<"user_atribut", 'String'>
    readonly tags_used: FieldRef<"user_atribut", 'Json'>
    readonly owned_tags: FieldRef<"user_atribut", 'Json'>
    readonly pronounces: FieldRef<"user_atribut", 'Json'>
    readonly bio: FieldRef<"user_atribut", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_atribut findUnique
   */
  export type user_atributFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_atribut
     */
    select?: user_atributSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_atribut
     */
    omit?: user_atributOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_atributInclude<ExtArgs> | null
    /**
     * Filter, which user_atribut to fetch.
     */
    where: user_atributWhereUniqueInput
  }

  /**
   * user_atribut findUniqueOrThrow
   */
  export type user_atributFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_atribut
     */
    select?: user_atributSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_atribut
     */
    omit?: user_atributOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_atributInclude<ExtArgs> | null
    /**
     * Filter, which user_atribut to fetch.
     */
    where: user_atributWhereUniqueInput
  }

  /**
   * user_atribut findFirst
   */
  export type user_atributFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_atribut
     */
    select?: user_atributSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_atribut
     */
    omit?: user_atributOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_atributInclude<ExtArgs> | null
    /**
     * Filter, which user_atribut to fetch.
     */
    where?: user_atributWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_atributs to fetch.
     */
    orderBy?: user_atributOrderByWithRelationInput | user_atributOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_atributs.
     */
    cursor?: user_atributWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_atributs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_atributs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_atributs.
     */
    distinct?: User_atributScalarFieldEnum | User_atributScalarFieldEnum[]
  }

  /**
   * user_atribut findFirstOrThrow
   */
  export type user_atributFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_atribut
     */
    select?: user_atributSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_atribut
     */
    omit?: user_atributOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_atributInclude<ExtArgs> | null
    /**
     * Filter, which user_atribut to fetch.
     */
    where?: user_atributWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_atributs to fetch.
     */
    orderBy?: user_atributOrderByWithRelationInput | user_atributOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_atributs.
     */
    cursor?: user_atributWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_atributs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_atributs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_atributs.
     */
    distinct?: User_atributScalarFieldEnum | User_atributScalarFieldEnum[]
  }

  /**
   * user_atribut findMany
   */
  export type user_atributFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_atribut
     */
    select?: user_atributSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_atribut
     */
    omit?: user_atributOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_atributInclude<ExtArgs> | null
    /**
     * Filter, which user_atributs to fetch.
     */
    where?: user_atributWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_atributs to fetch.
     */
    orderBy?: user_atributOrderByWithRelationInput | user_atributOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_atributs.
     */
    cursor?: user_atributWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_atributs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_atributs.
     */
    skip?: number
    distinct?: User_atributScalarFieldEnum | User_atributScalarFieldEnum[]
  }

  /**
   * user_atribut create
   */
  export type user_atributCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_atribut
     */
    select?: user_atributSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_atribut
     */
    omit?: user_atributOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_atributInclude<ExtArgs> | null
    /**
     * The data needed to create a user_atribut.
     */
    data: XOR<user_atributCreateInput, user_atributUncheckedCreateInput>
  }

  /**
   * user_atribut createMany
   */
  export type user_atributCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_atributs.
     */
    data: user_atributCreateManyInput | user_atributCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_atribut update
   */
  export type user_atributUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_atribut
     */
    select?: user_atributSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_atribut
     */
    omit?: user_atributOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_atributInclude<ExtArgs> | null
    /**
     * The data needed to update a user_atribut.
     */
    data: XOR<user_atributUpdateInput, user_atributUncheckedUpdateInput>
    /**
     * Choose, which user_atribut to update.
     */
    where: user_atributWhereUniqueInput
  }

  /**
   * user_atribut updateMany
   */
  export type user_atributUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_atributs.
     */
    data: XOR<user_atributUpdateManyMutationInput, user_atributUncheckedUpdateManyInput>
    /**
     * Filter which user_atributs to update
     */
    where?: user_atributWhereInput
    /**
     * Limit how many user_atributs to update.
     */
    limit?: number
  }

  /**
   * user_atribut upsert
   */
  export type user_atributUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_atribut
     */
    select?: user_atributSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_atribut
     */
    omit?: user_atributOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_atributInclude<ExtArgs> | null
    /**
     * The filter to search for the user_atribut to update in case it exists.
     */
    where: user_atributWhereUniqueInput
    /**
     * In case the user_atribut found by the `where` argument doesn't exist, create a new user_atribut with this data.
     */
    create: XOR<user_atributCreateInput, user_atributUncheckedCreateInput>
    /**
     * In case the user_atribut was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_atributUpdateInput, user_atributUncheckedUpdateInput>
  }

  /**
   * user_atribut delete
   */
  export type user_atributDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_atribut
     */
    select?: user_atributSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_atribut
     */
    omit?: user_atributOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_atributInclude<ExtArgs> | null
    /**
     * Filter which user_atribut to delete.
     */
    where: user_atributWhereUniqueInput
  }

  /**
   * user_atribut deleteMany
   */
  export type user_atributDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_atributs to delete
     */
    where?: user_atributWhereInput
    /**
     * Limit how many user_atributs to delete.
     */
    limit?: number
  }

  /**
   * user_atribut without action
   */
  export type user_atributDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_atribut
     */
    select?: user_atributSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_atribut
     */
    omit?: user_atributOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_atributInclude<ExtArgs> | null
  }


  /**
   * Model friendships
   */

  export type AggregateFriendships = {
    _count: FriendshipsCountAggregateOutputType | null
    _avg: FriendshipsAvgAggregateOutputType | null
    _sum: FriendshipsSumAggregateOutputType | null
    _min: FriendshipsMinAggregateOutputType | null
    _max: FriendshipsMaxAggregateOutputType | null
  }

  export type FriendshipsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
  }

  export type FriendshipsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
  }

  export type FriendshipsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
    status: $Enums.friendships_status | null
    created_at: Date | null
  }

  export type FriendshipsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
    status: $Enums.friendships_status | null
    created_at: Date | null
  }

  export type FriendshipsCountAggregateOutputType = {
    id: number
    userId: number
    friendId: number
    status: number
    created_at: number
    _all: number
  }


  export type FriendshipsAvgAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
  }

  export type FriendshipsSumAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
  }

  export type FriendshipsMinAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    status?: true
    created_at?: true
  }

  export type FriendshipsMaxAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    status?: true
    created_at?: true
  }

  export type FriendshipsCountAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type FriendshipsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which friendships to aggregate.
     */
    where?: friendshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friendships to fetch.
     */
    orderBy?: friendshipsOrderByWithRelationInput | friendshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: friendshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned friendships
    **/
    _count?: true | FriendshipsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendshipsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendshipsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendshipsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendshipsMaxAggregateInputType
  }

  export type GetFriendshipsAggregateType<T extends FriendshipsAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendships]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendships[P]>
      : GetScalarType<T[P], AggregateFriendships[P]>
  }




  export type friendshipsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendshipsWhereInput
    orderBy?: friendshipsOrderByWithAggregationInput | friendshipsOrderByWithAggregationInput[]
    by: FriendshipsScalarFieldEnum[] | FriendshipsScalarFieldEnum
    having?: friendshipsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendshipsCountAggregateInputType | true
    _avg?: FriendshipsAvgAggregateInputType
    _sum?: FriendshipsSumAggregateInputType
    _min?: FriendshipsMinAggregateInputType
    _max?: FriendshipsMaxAggregateInputType
  }

  export type FriendshipsGroupByOutputType = {
    id: number
    userId: number
    friendId: number
    status: $Enums.friendships_status | null
    created_at: Date | null
    _count: FriendshipsCountAggregateOutputType | null
    _avg: FriendshipsAvgAggregateOutputType | null
    _sum: FriendshipsSumAggregateOutputType | null
    _min: FriendshipsMinAggregateOutputType | null
    _max: FriendshipsMaxAggregateOutputType | null
  }

  type GetFriendshipsGroupByPayload<T extends friendshipsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendshipsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendshipsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendshipsGroupByOutputType[P]>
            : GetScalarType<T[P], FriendshipsGroupByOutputType[P]>
        }
      >
    >


  export type friendshipsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    status?: boolean
    created_at?: boolean
    users_friendships_userIdTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_friendships_friendIdTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendships"]>



  export type friendshipsSelectScalar = {
    id?: boolean
    userId?: boolean
    friendId?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type friendshipsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "friendId" | "status" | "created_at", ExtArgs["result"]["friendships"]>
  export type friendshipsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_friendships_userIdTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_friendships_friendIdTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $friendshipsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "friendships"
    objects: {
      users_friendships_userIdTousers: Prisma.$usersPayload<ExtArgs>
      users_friendships_friendIdTousers: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      friendId: number
      status: $Enums.friendships_status | null
      created_at: Date | null
    }, ExtArgs["result"]["friendships"]>
    composites: {}
  }

  type friendshipsGetPayload<S extends boolean | null | undefined | friendshipsDefaultArgs> = $Result.GetResult<Prisma.$friendshipsPayload, S>

  type friendshipsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<friendshipsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendshipsCountAggregateInputType | true
    }

  export interface friendshipsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['friendships'], meta: { name: 'friendships' } }
    /**
     * Find zero or one Friendships that matches the filter.
     * @param {friendshipsFindUniqueArgs} args - Arguments to find a Friendships
     * @example
     * // Get one Friendships
     * const friendships = await prisma.friendships.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends friendshipsFindUniqueArgs>(args: SelectSubset<T, friendshipsFindUniqueArgs<ExtArgs>>): Prisma__friendshipsClient<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friendships that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {friendshipsFindUniqueOrThrowArgs} args - Arguments to find a Friendships
     * @example
     * // Get one Friendships
     * const friendships = await prisma.friendships.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends friendshipsFindUniqueOrThrowArgs>(args: SelectSubset<T, friendshipsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__friendshipsClient<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendshipsFindFirstArgs} args - Arguments to find a Friendships
     * @example
     * // Get one Friendships
     * const friendships = await prisma.friendships.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends friendshipsFindFirstArgs>(args?: SelectSubset<T, friendshipsFindFirstArgs<ExtArgs>>): Prisma__friendshipsClient<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendships that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendshipsFindFirstOrThrowArgs} args - Arguments to find a Friendships
     * @example
     * // Get one Friendships
     * const friendships = await prisma.friendships.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends friendshipsFindFirstOrThrowArgs>(args?: SelectSubset<T, friendshipsFindFirstOrThrowArgs<ExtArgs>>): Prisma__friendshipsClient<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendshipsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friendships
     * const friendships = await prisma.friendships.findMany()
     * 
     * // Get first 10 Friendships
     * const friendships = await prisma.friendships.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendshipsWithIdOnly = await prisma.friendships.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends friendshipsFindManyArgs>(args?: SelectSubset<T, friendshipsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friendships.
     * @param {friendshipsCreateArgs} args - Arguments to create a Friendships.
     * @example
     * // Create one Friendships
     * const Friendships = await prisma.friendships.create({
     *   data: {
     *     // ... data to create a Friendships
     *   }
     * })
     * 
     */
    create<T extends friendshipsCreateArgs>(args: SelectSubset<T, friendshipsCreateArgs<ExtArgs>>): Prisma__friendshipsClient<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friendships.
     * @param {friendshipsCreateManyArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendships = await prisma.friendships.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends friendshipsCreateManyArgs>(args?: SelectSubset<T, friendshipsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Friendships.
     * @param {friendshipsDeleteArgs} args - Arguments to delete one Friendships.
     * @example
     * // Delete one Friendships
     * const Friendships = await prisma.friendships.delete({
     *   where: {
     *     // ... filter to delete one Friendships
     *   }
     * })
     * 
     */
    delete<T extends friendshipsDeleteArgs>(args: SelectSubset<T, friendshipsDeleteArgs<ExtArgs>>): Prisma__friendshipsClient<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friendships.
     * @param {friendshipsUpdateArgs} args - Arguments to update one Friendships.
     * @example
     * // Update one Friendships
     * const friendships = await prisma.friendships.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends friendshipsUpdateArgs>(args: SelectSubset<T, friendshipsUpdateArgs<ExtArgs>>): Prisma__friendshipsClient<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friendships.
     * @param {friendshipsDeleteManyArgs} args - Arguments to filter Friendships to delete.
     * @example
     * // Delete a few Friendships
     * const { count } = await prisma.friendships.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends friendshipsDeleteManyArgs>(args?: SelectSubset<T, friendshipsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendshipsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friendships
     * const friendships = await prisma.friendships.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends friendshipsUpdateManyArgs>(args: SelectSubset<T, friendshipsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Friendships.
     * @param {friendshipsUpsertArgs} args - Arguments to update or create a Friendships.
     * @example
     * // Update or create a Friendships
     * const friendships = await prisma.friendships.upsert({
     *   create: {
     *     // ... data to create a Friendships
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friendships we want to update
     *   }
     * })
     */
    upsert<T extends friendshipsUpsertArgs>(args: SelectSubset<T, friendshipsUpsertArgs<ExtArgs>>): Prisma__friendshipsClient<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendshipsCountArgs} args - Arguments to filter Friendships to count.
     * @example
     * // Count the number of Friendships
     * const count = await prisma.friendships.count({
     *   where: {
     *     // ... the filter for the Friendships we want to count
     *   }
     * })
    **/
    count<T extends friendshipsCountArgs>(
      args?: Subset<T, friendshipsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendshipsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendshipsAggregateArgs>(args: Subset<T, FriendshipsAggregateArgs>): Prisma.PrismaPromise<GetFriendshipsAggregateType<T>>

    /**
     * Group by Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendshipsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends friendshipsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: friendshipsGroupByArgs['orderBy'] }
        : { orderBy?: friendshipsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, friendshipsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendshipsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the friendships model
   */
  readonly fields: friendshipsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for friendships.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__friendshipsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_friendships_userIdTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users_friendships_friendIdTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the friendships model
   */
  interface friendshipsFieldRefs {
    readonly id: FieldRef<"friendships", 'Int'>
    readonly userId: FieldRef<"friendships", 'Int'>
    readonly friendId: FieldRef<"friendships", 'Int'>
    readonly status: FieldRef<"friendships", 'friendships_status'>
    readonly created_at: FieldRef<"friendships", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * friendships findUnique
   */
  export type friendshipsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    /**
     * Filter, which friendships to fetch.
     */
    where: friendshipsWhereUniqueInput
  }

  /**
   * friendships findUniqueOrThrow
   */
  export type friendshipsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    /**
     * Filter, which friendships to fetch.
     */
    where: friendshipsWhereUniqueInput
  }

  /**
   * friendships findFirst
   */
  export type friendshipsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    /**
     * Filter, which friendships to fetch.
     */
    where?: friendshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friendships to fetch.
     */
    orderBy?: friendshipsOrderByWithRelationInput | friendshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friendships.
     */
    cursor?: friendshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friendships.
     */
    distinct?: FriendshipsScalarFieldEnum | FriendshipsScalarFieldEnum[]
  }

  /**
   * friendships findFirstOrThrow
   */
  export type friendshipsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    /**
     * Filter, which friendships to fetch.
     */
    where?: friendshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friendships to fetch.
     */
    orderBy?: friendshipsOrderByWithRelationInput | friendshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friendships.
     */
    cursor?: friendshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friendships.
     */
    distinct?: FriendshipsScalarFieldEnum | FriendshipsScalarFieldEnum[]
  }

  /**
   * friendships findMany
   */
  export type friendshipsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    /**
     * Filter, which friendships to fetch.
     */
    where?: friendshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friendships to fetch.
     */
    orderBy?: friendshipsOrderByWithRelationInput | friendshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing friendships.
     */
    cursor?: friendshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friendships.
     */
    skip?: number
    distinct?: FriendshipsScalarFieldEnum | FriendshipsScalarFieldEnum[]
  }

  /**
   * friendships create
   */
  export type friendshipsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    /**
     * The data needed to create a friendships.
     */
    data: XOR<friendshipsCreateInput, friendshipsUncheckedCreateInput>
  }

  /**
   * friendships createMany
   */
  export type friendshipsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many friendships.
     */
    data: friendshipsCreateManyInput | friendshipsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * friendships update
   */
  export type friendshipsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    /**
     * The data needed to update a friendships.
     */
    data: XOR<friendshipsUpdateInput, friendshipsUncheckedUpdateInput>
    /**
     * Choose, which friendships to update.
     */
    where: friendshipsWhereUniqueInput
  }

  /**
   * friendships updateMany
   */
  export type friendshipsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update friendships.
     */
    data: XOR<friendshipsUpdateManyMutationInput, friendshipsUncheckedUpdateManyInput>
    /**
     * Filter which friendships to update
     */
    where?: friendshipsWhereInput
    /**
     * Limit how many friendships to update.
     */
    limit?: number
  }

  /**
   * friendships upsert
   */
  export type friendshipsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    /**
     * The filter to search for the friendships to update in case it exists.
     */
    where: friendshipsWhereUniqueInput
    /**
     * In case the friendships found by the `where` argument doesn't exist, create a new friendships with this data.
     */
    create: XOR<friendshipsCreateInput, friendshipsUncheckedCreateInput>
    /**
     * In case the friendships was found with the provided `where` argument, update it with this data.
     */
    update: XOR<friendshipsUpdateInput, friendshipsUncheckedUpdateInput>
  }

  /**
   * friendships delete
   */
  export type friendshipsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    /**
     * Filter which friendships to delete.
     */
    where: friendshipsWhereUniqueInput
  }

  /**
   * friendships deleteMany
   */
  export type friendshipsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which friendships to delete
     */
    where?: friendshipsWhereInput
    /**
     * Limit how many friendships to delete.
     */
    limit?: number
  }

  /**
   * friendships without action
   */
  export type friendshipsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
  }


  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: $Enums.notifications_type | null
    content: string | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: $Enums.notifications_type | null
    content: string | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    content: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationsMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    content?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    content?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    content?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: number
    userId: number
    type: $Enums.notifications_type
    content: string
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    content?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>



  export type notificationsSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    content?: boolean
  }

  export type notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "content", ExtArgs["result"]["notifications"]>
  export type notificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifications"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      type: $Enums.notifications_type
      content: string
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = $Result.GetResult<Prisma.$notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationsFindUniqueArgs>(args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationsFindFirstArgs>(args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationsFindManyArgs>(args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends notificationsCreateArgs>(args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationsCreateManyArgs>(args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends notificationsDeleteArgs>(args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationsUpdateArgs>(args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationsDeleteManyArgs>(args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationsUpdateManyArgs>(args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends notificationsUpsertArgs>(args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifications model
   */
  readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notifications model
   */
  interface notificationsFieldRefs {
    readonly id: FieldRef<"notifications", 'Int'>
    readonly userId: FieldRef<"notifications", 'Int'>
    readonly type: FieldRef<"notifications", 'notifications_type'>
    readonly content: FieldRef<"notifications", 'String'>
  }
    

  // Custom InputTypes
  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
  }


  /**
   * Model group_atributs
   */

  export type AggregateGroup_atributs = {
    _count: Group_atributsCountAggregateOutputType | null
    _avg: Group_atributsAvgAggregateOutputType | null
    _sum: Group_atributsSumAggregateOutputType | null
    _min: Group_atributsMinAggregateOutputType | null
    _max: Group_atributsMaxAggregateOutputType | null
  }

  export type Group_atributsAvgAggregateOutputType = {
    id: number | null
  }

  export type Group_atributsSumAggregateOutputType = {
    id: number | null
  }

  export type Group_atributsMinAggregateOutputType = {
    id: number | null
    conversationId: string | null
    group_name: string | null
    group_description: string | null
    group_pfp: string | null
  }

  export type Group_atributsMaxAggregateOutputType = {
    id: number | null
    conversationId: string | null
    group_name: string | null
    group_description: string | null
    group_pfp: string | null
  }

  export type Group_atributsCountAggregateOutputType = {
    id: number
    conversationId: number
    group_name: number
    group_description: number
    group_pfp: number
    _all: number
  }


  export type Group_atributsAvgAggregateInputType = {
    id?: true
  }

  export type Group_atributsSumAggregateInputType = {
    id?: true
  }

  export type Group_atributsMinAggregateInputType = {
    id?: true
    conversationId?: true
    group_name?: true
    group_description?: true
    group_pfp?: true
  }

  export type Group_atributsMaxAggregateInputType = {
    id?: true
    conversationId?: true
    group_name?: true
    group_description?: true
    group_pfp?: true
  }

  export type Group_atributsCountAggregateInputType = {
    id?: true
    conversationId?: true
    group_name?: true
    group_description?: true
    group_pfp?: true
    _all?: true
  }

  export type Group_atributsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group_atributs to aggregate.
     */
    where?: group_atributsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_atributs to fetch.
     */
    orderBy?: group_atributsOrderByWithRelationInput | group_atributsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: group_atributsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_atributs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_atributs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned group_atributs
    **/
    _count?: true | Group_atributsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Group_atributsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Group_atributsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Group_atributsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Group_atributsMaxAggregateInputType
  }

  export type GetGroup_atributsAggregateType<T extends Group_atributsAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup_atributs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup_atributs[P]>
      : GetScalarType<T[P], AggregateGroup_atributs[P]>
  }




  export type group_atributsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_atributsWhereInput
    orderBy?: group_atributsOrderByWithAggregationInput | group_atributsOrderByWithAggregationInput[]
    by: Group_atributsScalarFieldEnum[] | Group_atributsScalarFieldEnum
    having?: group_atributsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Group_atributsCountAggregateInputType | true
    _avg?: Group_atributsAvgAggregateInputType
    _sum?: Group_atributsSumAggregateInputType
    _min?: Group_atributsMinAggregateInputType
    _max?: Group_atributsMaxAggregateInputType
  }

  export type Group_atributsGroupByOutputType = {
    id: number
    conversationId: string
    group_name: string
    group_description: string | null
    group_pfp: string | null
    _count: Group_atributsCountAggregateOutputType | null
    _avg: Group_atributsAvgAggregateOutputType | null
    _sum: Group_atributsSumAggregateOutputType | null
    _min: Group_atributsMinAggregateOutputType | null
    _max: Group_atributsMaxAggregateOutputType | null
  }

  type GetGroup_atributsGroupByPayload<T extends group_atributsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Group_atributsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Group_atributsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Group_atributsGroupByOutputType[P]>
            : GetScalarType<T[P], Group_atributsGroupByOutputType[P]>
        }
      >
    >


  export type group_atributsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    group_name?: boolean
    group_description?: boolean
    group_pfp?: boolean
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group_atributs"]>



  export type group_atributsSelectScalar = {
    id?: boolean
    conversationId?: boolean
    group_name?: boolean
    group_description?: boolean
    group_pfp?: boolean
  }

  export type group_atributsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversationId" | "group_name" | "group_description" | "group_pfp", ExtArgs["result"]["group_atributs"]>
  export type group_atributsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | conversationsDefaultArgs<ExtArgs>
  }

  export type $group_atributsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "group_atributs"
    objects: {
      conversations: Prisma.$conversationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      conversationId: string
      group_name: string
      group_description: string | null
      group_pfp: string | null
    }, ExtArgs["result"]["group_atributs"]>
    composites: {}
  }

  type group_atributsGetPayload<S extends boolean | null | undefined | group_atributsDefaultArgs> = $Result.GetResult<Prisma.$group_atributsPayload, S>

  type group_atributsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<group_atributsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Group_atributsCountAggregateInputType | true
    }

  export interface group_atributsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['group_atributs'], meta: { name: 'group_atributs' } }
    /**
     * Find zero or one Group_atributs that matches the filter.
     * @param {group_atributsFindUniqueArgs} args - Arguments to find a Group_atributs
     * @example
     * // Get one Group_atributs
     * const group_atributs = await prisma.group_atributs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends group_atributsFindUniqueArgs>(args: SelectSubset<T, group_atributsFindUniqueArgs<ExtArgs>>): Prisma__group_atributsClient<$Result.GetResult<Prisma.$group_atributsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group_atributs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {group_atributsFindUniqueOrThrowArgs} args - Arguments to find a Group_atributs
     * @example
     * // Get one Group_atributs
     * const group_atributs = await prisma.group_atributs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends group_atributsFindUniqueOrThrowArgs>(args: SelectSubset<T, group_atributsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__group_atributsClient<$Result.GetResult<Prisma.$group_atributsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group_atributs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_atributsFindFirstArgs} args - Arguments to find a Group_atributs
     * @example
     * // Get one Group_atributs
     * const group_atributs = await prisma.group_atributs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends group_atributsFindFirstArgs>(args?: SelectSubset<T, group_atributsFindFirstArgs<ExtArgs>>): Prisma__group_atributsClient<$Result.GetResult<Prisma.$group_atributsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group_atributs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_atributsFindFirstOrThrowArgs} args - Arguments to find a Group_atributs
     * @example
     * // Get one Group_atributs
     * const group_atributs = await prisma.group_atributs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends group_atributsFindFirstOrThrowArgs>(args?: SelectSubset<T, group_atributsFindFirstOrThrowArgs<ExtArgs>>): Prisma__group_atributsClient<$Result.GetResult<Prisma.$group_atributsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Group_atributs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_atributsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Group_atributs
     * const group_atributs = await prisma.group_atributs.findMany()
     * 
     * // Get first 10 Group_atributs
     * const group_atributs = await prisma.group_atributs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const group_atributsWithIdOnly = await prisma.group_atributs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends group_atributsFindManyArgs>(args?: SelectSubset<T, group_atributsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_atributsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group_atributs.
     * @param {group_atributsCreateArgs} args - Arguments to create a Group_atributs.
     * @example
     * // Create one Group_atributs
     * const Group_atributs = await prisma.group_atributs.create({
     *   data: {
     *     // ... data to create a Group_atributs
     *   }
     * })
     * 
     */
    create<T extends group_atributsCreateArgs>(args: SelectSubset<T, group_atributsCreateArgs<ExtArgs>>): Prisma__group_atributsClient<$Result.GetResult<Prisma.$group_atributsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Group_atributs.
     * @param {group_atributsCreateManyArgs} args - Arguments to create many Group_atributs.
     * @example
     * // Create many Group_atributs
     * const group_atributs = await prisma.group_atributs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends group_atributsCreateManyArgs>(args?: SelectSubset<T, group_atributsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Group_atributs.
     * @param {group_atributsDeleteArgs} args - Arguments to delete one Group_atributs.
     * @example
     * // Delete one Group_atributs
     * const Group_atributs = await prisma.group_atributs.delete({
     *   where: {
     *     // ... filter to delete one Group_atributs
     *   }
     * })
     * 
     */
    delete<T extends group_atributsDeleteArgs>(args: SelectSubset<T, group_atributsDeleteArgs<ExtArgs>>): Prisma__group_atributsClient<$Result.GetResult<Prisma.$group_atributsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group_atributs.
     * @param {group_atributsUpdateArgs} args - Arguments to update one Group_atributs.
     * @example
     * // Update one Group_atributs
     * const group_atributs = await prisma.group_atributs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends group_atributsUpdateArgs>(args: SelectSubset<T, group_atributsUpdateArgs<ExtArgs>>): Prisma__group_atributsClient<$Result.GetResult<Prisma.$group_atributsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Group_atributs.
     * @param {group_atributsDeleteManyArgs} args - Arguments to filter Group_atributs to delete.
     * @example
     * // Delete a few Group_atributs
     * const { count } = await prisma.group_atributs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends group_atributsDeleteManyArgs>(args?: SelectSubset<T, group_atributsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Group_atributs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_atributsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Group_atributs
     * const group_atributs = await prisma.group_atributs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends group_atributsUpdateManyArgs>(args: SelectSubset<T, group_atributsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Group_atributs.
     * @param {group_atributsUpsertArgs} args - Arguments to update or create a Group_atributs.
     * @example
     * // Update or create a Group_atributs
     * const group_atributs = await prisma.group_atributs.upsert({
     *   create: {
     *     // ... data to create a Group_atributs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group_atributs we want to update
     *   }
     * })
     */
    upsert<T extends group_atributsUpsertArgs>(args: SelectSubset<T, group_atributsUpsertArgs<ExtArgs>>): Prisma__group_atributsClient<$Result.GetResult<Prisma.$group_atributsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Group_atributs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_atributsCountArgs} args - Arguments to filter Group_atributs to count.
     * @example
     * // Count the number of Group_atributs
     * const count = await prisma.group_atributs.count({
     *   where: {
     *     // ... the filter for the Group_atributs we want to count
     *   }
     * })
    **/
    count<T extends group_atributsCountArgs>(
      args?: Subset<T, group_atributsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Group_atributsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group_atributs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Group_atributsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Group_atributsAggregateArgs>(args: Subset<T, Group_atributsAggregateArgs>): Prisma.PrismaPromise<GetGroup_atributsAggregateType<T>>

    /**
     * Group by Group_atributs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_atributsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends group_atributsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: group_atributsGroupByArgs['orderBy'] }
        : { orderBy?: group_atributsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, group_atributsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroup_atributsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the group_atributs model
   */
  readonly fields: group_atributsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for group_atributs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__group_atributsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversations<T extends conversationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, conversationsDefaultArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the group_atributs model
   */
  interface group_atributsFieldRefs {
    readonly id: FieldRef<"group_atributs", 'Int'>
    readonly conversationId: FieldRef<"group_atributs", 'String'>
    readonly group_name: FieldRef<"group_atributs", 'String'>
    readonly group_description: FieldRef<"group_atributs", 'String'>
    readonly group_pfp: FieldRef<"group_atributs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * group_atributs findUnique
   */
  export type group_atributsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_atributs
     */
    select?: group_atributsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_atributs
     */
    omit?: group_atributsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_atributsInclude<ExtArgs> | null
    /**
     * Filter, which group_atributs to fetch.
     */
    where: group_atributsWhereUniqueInput
  }

  /**
   * group_atributs findUniqueOrThrow
   */
  export type group_atributsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_atributs
     */
    select?: group_atributsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_atributs
     */
    omit?: group_atributsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_atributsInclude<ExtArgs> | null
    /**
     * Filter, which group_atributs to fetch.
     */
    where: group_atributsWhereUniqueInput
  }

  /**
   * group_atributs findFirst
   */
  export type group_atributsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_atributs
     */
    select?: group_atributsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_atributs
     */
    omit?: group_atributsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_atributsInclude<ExtArgs> | null
    /**
     * Filter, which group_atributs to fetch.
     */
    where?: group_atributsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_atributs to fetch.
     */
    orderBy?: group_atributsOrderByWithRelationInput | group_atributsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for group_atributs.
     */
    cursor?: group_atributsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_atributs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_atributs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of group_atributs.
     */
    distinct?: Group_atributsScalarFieldEnum | Group_atributsScalarFieldEnum[]
  }

  /**
   * group_atributs findFirstOrThrow
   */
  export type group_atributsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_atributs
     */
    select?: group_atributsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_atributs
     */
    omit?: group_atributsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_atributsInclude<ExtArgs> | null
    /**
     * Filter, which group_atributs to fetch.
     */
    where?: group_atributsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_atributs to fetch.
     */
    orderBy?: group_atributsOrderByWithRelationInput | group_atributsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for group_atributs.
     */
    cursor?: group_atributsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_atributs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_atributs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of group_atributs.
     */
    distinct?: Group_atributsScalarFieldEnum | Group_atributsScalarFieldEnum[]
  }

  /**
   * group_atributs findMany
   */
  export type group_atributsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_atributs
     */
    select?: group_atributsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_atributs
     */
    omit?: group_atributsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_atributsInclude<ExtArgs> | null
    /**
     * Filter, which group_atributs to fetch.
     */
    where?: group_atributsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_atributs to fetch.
     */
    orderBy?: group_atributsOrderByWithRelationInput | group_atributsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing group_atributs.
     */
    cursor?: group_atributsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_atributs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_atributs.
     */
    skip?: number
    distinct?: Group_atributsScalarFieldEnum | Group_atributsScalarFieldEnum[]
  }

  /**
   * group_atributs create
   */
  export type group_atributsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_atributs
     */
    select?: group_atributsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_atributs
     */
    omit?: group_atributsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_atributsInclude<ExtArgs> | null
    /**
     * The data needed to create a group_atributs.
     */
    data: XOR<group_atributsCreateInput, group_atributsUncheckedCreateInput>
  }

  /**
   * group_atributs createMany
   */
  export type group_atributsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many group_atributs.
     */
    data: group_atributsCreateManyInput | group_atributsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * group_atributs update
   */
  export type group_atributsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_atributs
     */
    select?: group_atributsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_atributs
     */
    omit?: group_atributsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_atributsInclude<ExtArgs> | null
    /**
     * The data needed to update a group_atributs.
     */
    data: XOR<group_atributsUpdateInput, group_atributsUncheckedUpdateInput>
    /**
     * Choose, which group_atributs to update.
     */
    where: group_atributsWhereUniqueInput
  }

  /**
   * group_atributs updateMany
   */
  export type group_atributsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update group_atributs.
     */
    data: XOR<group_atributsUpdateManyMutationInput, group_atributsUncheckedUpdateManyInput>
    /**
     * Filter which group_atributs to update
     */
    where?: group_atributsWhereInput
    /**
     * Limit how many group_atributs to update.
     */
    limit?: number
  }

  /**
   * group_atributs upsert
   */
  export type group_atributsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_atributs
     */
    select?: group_atributsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_atributs
     */
    omit?: group_atributsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_atributsInclude<ExtArgs> | null
    /**
     * The filter to search for the group_atributs to update in case it exists.
     */
    where: group_atributsWhereUniqueInput
    /**
     * In case the group_atributs found by the `where` argument doesn't exist, create a new group_atributs with this data.
     */
    create: XOR<group_atributsCreateInput, group_atributsUncheckedCreateInput>
    /**
     * In case the group_atributs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<group_atributsUpdateInput, group_atributsUncheckedUpdateInput>
  }

  /**
   * group_atributs delete
   */
  export type group_atributsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_atributs
     */
    select?: group_atributsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_atributs
     */
    omit?: group_atributsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_atributsInclude<ExtArgs> | null
    /**
     * Filter which group_atributs to delete.
     */
    where: group_atributsWhereUniqueInput
  }

  /**
   * group_atributs deleteMany
   */
  export type group_atributsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group_atributs to delete
     */
    where?: group_atributsWhereInput
    /**
     * Limit how many group_atributs to delete.
     */
    limit?: number
  }

  /**
   * group_atributs without action
   */
  export type group_atributsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_atributs
     */
    select?: group_atributsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_atributs
     */
    omit?: group_atributsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_atributsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    userId: 'userId',
    username: 'username',
    provider: 'provider',
    email: 'email',
    email_name: 'email_name',
    phone_number: 'phone_number',
    dial_code: 'dial_code',
    createdAt: 'createdAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Conversation_membersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    conversationId: 'conversationId',
    joinedAt: 'joinedAt'
  };

  export type Conversation_membersScalarFieldEnum = (typeof Conversation_membersScalarFieldEnum)[keyof typeof Conversation_membersScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    content: 'content',
    sentAt: 'sentAt',
    status: 'status',
    senderId: 'senderId',
    senderUsername: 'senderUsername',
    senderPfp_id: 'senderPfp_id',
    conversationId: 'conversationId',
    seen_by: 'seen_by'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const ConversationsScalarFieldEnum: {
    id: 'id',
    isGroup: 'isGroup',
    createdAt: 'createdAt'
  };

  export type ConversationsScalarFieldEnum = (typeof ConversationsScalarFieldEnum)[keyof typeof ConversationsScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tier: 'tier'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const User_atributScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    pfp_id: 'pfp_id',
    tags_used: 'tags_used',
    owned_tags: 'owned_tags',
    pronounces: 'pronounces',
    bio: 'bio'
  };

  export type User_atributScalarFieldEnum = (typeof User_atributScalarFieldEnum)[keyof typeof User_atributScalarFieldEnum]


  export const FriendshipsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    friendId: 'friendId',
    status: 'status',
    created_at: 'created_at'
  };

  export type FriendshipsScalarFieldEnum = (typeof FriendshipsScalarFieldEnum)[keyof typeof FriendshipsScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    content: 'content'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const Group_atributsScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    group_name: 'group_name',
    group_description: 'group_description',
    group_pfp: 'group_pfp'
  };

  export type Group_atributsScalarFieldEnum = (typeof Group_atributsScalarFieldEnum)[keyof typeof Group_atributsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const usersOrderByRelevanceFieldEnum: {
    username: 'username',
    provider: 'provider',
    email: 'email',
    email_name: 'email_name',
    phone_number: 'phone_number',
    dial_code: 'dial_code'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const conversation_membersOrderByRelevanceFieldEnum: {
    conversationId: 'conversationId'
  };

  export type conversation_membersOrderByRelevanceFieldEnum = (typeof conversation_membersOrderByRelevanceFieldEnum)[keyof typeof conversation_membersOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const messagesOrderByRelevanceFieldEnum: {
    id: 'id',
    content: 'content',
    senderUsername: 'senderUsername',
    senderPfp_id: 'senderPfp_id',
    conversationId: 'conversationId'
  };

  export type messagesOrderByRelevanceFieldEnum = (typeof messagesOrderByRelevanceFieldEnum)[keyof typeof messagesOrderByRelevanceFieldEnum]


  export const conversationsOrderByRelevanceFieldEnum: {
    id: 'id'
  };

  export type conversationsOrderByRelevanceFieldEnum = (typeof conversationsOrderByRelevanceFieldEnum)[keyof typeof conversationsOrderByRelevanceFieldEnum]


  export const tagsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type tagsOrderByRelevanceFieldEnum = (typeof tagsOrderByRelevanceFieldEnum)[keyof typeof tagsOrderByRelevanceFieldEnum]


  export const user_atributOrderByRelevanceFieldEnum: {
    pfp_id: 'pfp_id',
    bio: 'bio'
  };

  export type user_atributOrderByRelevanceFieldEnum = (typeof user_atributOrderByRelevanceFieldEnum)[keyof typeof user_atributOrderByRelevanceFieldEnum]


  export const notificationsOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type notificationsOrderByRelevanceFieldEnum = (typeof notificationsOrderByRelevanceFieldEnum)[keyof typeof notificationsOrderByRelevanceFieldEnum]


  export const group_atributsOrderByRelevanceFieldEnum: {
    conversationId: 'conversationId',
    group_name: 'group_name',
    group_description: 'group_description',
    group_pfp: 'group_pfp'
  };

  export type group_atributsOrderByRelevanceFieldEnum = (typeof group_atributsOrderByRelevanceFieldEnum)[keyof typeof group_atributsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'messages_status'
   */
  export type Enummessages_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'messages_status'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'tags_tier'
   */
  export type Enumtags_tierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tags_tier'>
    


  /**
   * Reference to a field of type 'friendships_status'
   */
  export type Enumfriendships_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'friendships_status'>
    


  /**
   * Reference to a field of type 'notifications_type'
   */
  export type Enumnotifications_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notifications_type'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    userId?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    provider?: StringFilter<"users"> | string
    email?: StringNullableFilter<"users"> | string | null
    email_name?: StringNullableFilter<"users"> | string | null
    phone_number?: StringNullableFilter<"users"> | string | null
    dial_code?: StringNullableFilter<"users"> | string | null
    createdAt?: DateTimeFilter<"users"> | Date | string
    conversationMembers?: Conversation_membersListRelationFilter
    friendships_friendships_userIdTousers?: FriendshipsListRelationFilter
    friendships_friendships_friendIdTousers?: FriendshipsListRelationFilter
    sentMessages?: MessagesListRelationFilter
    notifications?: NotificationsListRelationFilter
    user_atribut?: XOR<User_atributNullableScalarRelationFilter, user_atributWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    userId?: SortOrder
    username?: SortOrder
    provider?: SortOrder
    email?: SortOrderInput | SortOrder
    email_name?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    dial_code?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    conversationMembers?: conversation_membersOrderByRelationAggregateInput
    friendships_friendships_userIdTousers?: friendshipsOrderByRelationAggregateInput
    friendships_friendships_friendIdTousers?: friendshipsOrderByRelationAggregateInput
    sentMessages?: messagesOrderByRelationAggregateInput
    notifications?: notificationsOrderByRelationAggregateInput
    user_atribut?: user_atributOrderByWithRelationInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    username?: string
    email?: string
    phone_number?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    provider?: StringFilter<"users"> | string
    email_name?: StringNullableFilter<"users"> | string | null
    dial_code?: StringNullableFilter<"users"> | string | null
    createdAt?: DateTimeFilter<"users"> | Date | string
    conversationMembers?: Conversation_membersListRelationFilter
    friendships_friendships_userIdTousers?: FriendshipsListRelationFilter
    friendships_friendships_friendIdTousers?: FriendshipsListRelationFilter
    sentMessages?: MessagesListRelationFilter
    notifications?: NotificationsListRelationFilter
    user_atribut?: XOR<User_atributNullableScalarRelationFilter, user_atributWhereInput> | null
  }, "userId" | "username" | "email" | "phone_number">

  export type usersOrderByWithAggregationInput = {
    userId?: SortOrder
    username?: SortOrder
    provider?: SortOrder
    email?: SortOrderInput | SortOrder
    email_name?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    dial_code?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    provider?: StringWithAggregatesFilter<"users"> | string
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    email_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"users"> | string | null
    dial_code?: StringNullableWithAggregatesFilter<"users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type conversation_membersWhereInput = {
    AND?: conversation_membersWhereInput | conversation_membersWhereInput[]
    OR?: conversation_membersWhereInput[]
    NOT?: conversation_membersWhereInput | conversation_membersWhereInput[]
    id?: IntFilter<"conversation_members"> | number
    userId?: IntFilter<"conversation_members"> | number
    conversationId?: StringFilter<"conversation_members"> | string
    joinedAt?: DateTimeFilter<"conversation_members"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    conversation?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
  }

  export type conversation_membersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
    joinedAt?: SortOrder
    user?: usersOrderByWithRelationInput
    conversation?: conversationsOrderByWithRelationInput
    _relevance?: conversation_membersOrderByRelevanceInput
  }

  export type conversation_membersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_conversationId?: conversation_membersUserIdConversationIdCompoundUniqueInput
    AND?: conversation_membersWhereInput | conversation_membersWhereInput[]
    OR?: conversation_membersWhereInput[]
    NOT?: conversation_membersWhereInput | conversation_membersWhereInput[]
    userId?: IntFilter<"conversation_members"> | number
    conversationId?: StringFilter<"conversation_members"> | string
    joinedAt?: DateTimeFilter<"conversation_members"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    conversation?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
  }, "id" | "userId_conversationId">

  export type conversation_membersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
    joinedAt?: SortOrder
    _count?: conversation_membersCountOrderByAggregateInput
    _avg?: conversation_membersAvgOrderByAggregateInput
    _max?: conversation_membersMaxOrderByAggregateInput
    _min?: conversation_membersMinOrderByAggregateInput
    _sum?: conversation_membersSumOrderByAggregateInput
  }

  export type conversation_membersScalarWhereWithAggregatesInput = {
    AND?: conversation_membersScalarWhereWithAggregatesInput | conversation_membersScalarWhereWithAggregatesInput[]
    OR?: conversation_membersScalarWhereWithAggregatesInput[]
    NOT?: conversation_membersScalarWhereWithAggregatesInput | conversation_membersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"conversation_members"> | number
    userId?: IntWithAggregatesFilter<"conversation_members"> | number
    conversationId?: StringWithAggregatesFilter<"conversation_members"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"conversation_members"> | Date | string
  }

  export type messagesWhereInput = {
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    id?: StringFilter<"messages"> | string
    content?: StringFilter<"messages"> | string
    sentAt?: DateTimeFilter<"messages"> | Date | string
    status?: Enummessages_statusFilter<"messages"> | $Enums.messages_status
    senderId?: IntFilter<"messages"> | number
    senderUsername?: StringFilter<"messages"> | string
    senderPfp_id?: StringNullableFilter<"messages"> | string | null
    conversationId?: StringFilter<"messages"> | string
    seen_by?: JsonNullableFilter<"messages">
    sender?: XOR<UsersScalarRelationFilter, usersWhereInput>
    conversation?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
  }

  export type messagesOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    senderUsername?: SortOrder
    senderPfp_id?: SortOrderInput | SortOrder
    conversationId?: SortOrder
    seen_by?: SortOrderInput | SortOrder
    sender?: usersOrderByWithRelationInput
    conversation?: conversationsOrderByWithRelationInput
    _relevance?: messagesOrderByRelevanceInput
  }

  export type messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    content?: StringFilter<"messages"> | string
    sentAt?: DateTimeFilter<"messages"> | Date | string
    status?: Enummessages_statusFilter<"messages"> | $Enums.messages_status
    senderId?: IntFilter<"messages"> | number
    senderUsername?: StringFilter<"messages"> | string
    senderPfp_id?: StringNullableFilter<"messages"> | string | null
    conversationId?: StringFilter<"messages"> | string
    seen_by?: JsonNullableFilter<"messages">
    sender?: XOR<UsersScalarRelationFilter, usersWhereInput>
    conversation?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
  }, "id" | "id">

  export type messagesOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    senderUsername?: SortOrder
    senderPfp_id?: SortOrderInput | SortOrder
    conversationId?: SortOrder
    seen_by?: SortOrderInput | SortOrder
    _count?: messagesCountOrderByAggregateInput
    _avg?: messagesAvgOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
    _sum?: messagesSumOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    OR?: messagesScalarWhereWithAggregatesInput[]
    NOT?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"messages"> | string
    content?: StringWithAggregatesFilter<"messages"> | string
    sentAt?: DateTimeWithAggregatesFilter<"messages"> | Date | string
    status?: Enummessages_statusWithAggregatesFilter<"messages"> | $Enums.messages_status
    senderId?: IntWithAggregatesFilter<"messages"> | number
    senderUsername?: StringWithAggregatesFilter<"messages"> | string
    senderPfp_id?: StringNullableWithAggregatesFilter<"messages"> | string | null
    conversationId?: StringWithAggregatesFilter<"messages"> | string
    seen_by?: JsonNullableWithAggregatesFilter<"messages">
  }

  export type conversationsWhereInput = {
    AND?: conversationsWhereInput | conversationsWhereInput[]
    OR?: conversationsWhereInput[]
    NOT?: conversationsWhereInput | conversationsWhereInput[]
    id?: StringFilter<"conversations"> | string
    isGroup?: BoolFilter<"conversations"> | boolean
    createdAt?: DateTimeFilter<"conversations"> | Date | string
    members?: Conversation_membersListRelationFilter
    group_atributs?: XOR<Group_atributsNullableScalarRelationFilter, group_atributsWhereInput> | null
    messages?: MessagesListRelationFilter
  }

  export type conversationsOrderByWithRelationInput = {
    id?: SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
    members?: conversation_membersOrderByRelationAggregateInput
    group_atributs?: group_atributsOrderByWithRelationInput
    messages?: messagesOrderByRelationAggregateInput
    _relevance?: conversationsOrderByRelevanceInput
  }

  export type conversationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: conversationsWhereInput | conversationsWhereInput[]
    OR?: conversationsWhereInput[]
    NOT?: conversationsWhereInput | conversationsWhereInput[]
    isGroup?: BoolFilter<"conversations"> | boolean
    createdAt?: DateTimeFilter<"conversations"> | Date | string
    members?: Conversation_membersListRelationFilter
    group_atributs?: XOR<Group_atributsNullableScalarRelationFilter, group_atributsWhereInput> | null
    messages?: MessagesListRelationFilter
  }, "id" | "id">

  export type conversationsOrderByWithAggregationInput = {
    id?: SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
    _count?: conversationsCountOrderByAggregateInput
    _max?: conversationsMaxOrderByAggregateInput
    _min?: conversationsMinOrderByAggregateInput
  }

  export type conversationsScalarWhereWithAggregatesInput = {
    AND?: conversationsScalarWhereWithAggregatesInput | conversationsScalarWhereWithAggregatesInput[]
    OR?: conversationsScalarWhereWithAggregatesInput[]
    NOT?: conversationsScalarWhereWithAggregatesInput | conversationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"conversations"> | string
    isGroup?: BoolWithAggregatesFilter<"conversations"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"conversations"> | Date | string
  }

  export type tagsWhereInput = {
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    id?: IntFilter<"tags"> | number
    name?: StringFilter<"tags"> | string
    tier?: Enumtags_tierFilter<"tags"> | $Enums.tags_tier
  }

  export type tagsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tier?: SortOrder
    _relevance?: tagsOrderByRelevanceInput
  }

  export type tagsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    tier?: Enumtags_tierFilter<"tags"> | $Enums.tags_tier
  }, "id" | "name">

  export type tagsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tier?: SortOrder
    _count?: tagsCountOrderByAggregateInput
    _avg?: tagsAvgOrderByAggregateInput
    _max?: tagsMaxOrderByAggregateInput
    _min?: tagsMinOrderByAggregateInput
    _sum?: tagsSumOrderByAggregateInput
  }

  export type tagsScalarWhereWithAggregatesInput = {
    AND?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    OR?: tagsScalarWhereWithAggregatesInput[]
    NOT?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tags"> | number
    name?: StringWithAggregatesFilter<"tags"> | string
    tier?: Enumtags_tierWithAggregatesFilter<"tags"> | $Enums.tags_tier
  }

  export type user_atributWhereInput = {
    AND?: user_atributWhereInput | user_atributWhereInput[]
    OR?: user_atributWhereInput[]
    NOT?: user_atributWhereInput | user_atributWhereInput[]
    id?: IntFilter<"user_atribut"> | number
    userId?: IntFilter<"user_atribut"> | number
    pfp_id?: StringNullableFilter<"user_atribut"> | string | null
    tags_used?: JsonNullableFilter<"user_atribut">
    owned_tags?: JsonNullableFilter<"user_atribut">
    pronounces?: JsonNullableFilter<"user_atribut">
    bio?: StringNullableFilter<"user_atribut"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_atributOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    pfp_id?: SortOrderInput | SortOrder
    tags_used?: SortOrderInput | SortOrder
    owned_tags?: SortOrderInput | SortOrder
    pronounces?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    _relevance?: user_atributOrderByRelevanceInput
  }

  export type user_atributWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: user_atributWhereInput | user_atributWhereInput[]
    OR?: user_atributWhereInput[]
    NOT?: user_atributWhereInput | user_atributWhereInput[]
    pfp_id?: StringNullableFilter<"user_atribut"> | string | null
    tags_used?: JsonNullableFilter<"user_atribut">
    owned_tags?: JsonNullableFilter<"user_atribut">
    pronounces?: JsonNullableFilter<"user_atribut">
    bio?: StringNullableFilter<"user_atribut"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "userId">

  export type user_atributOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    pfp_id?: SortOrderInput | SortOrder
    tags_used?: SortOrderInput | SortOrder
    owned_tags?: SortOrderInput | SortOrder
    pronounces?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    _count?: user_atributCountOrderByAggregateInput
    _avg?: user_atributAvgOrderByAggregateInput
    _max?: user_atributMaxOrderByAggregateInput
    _min?: user_atributMinOrderByAggregateInput
    _sum?: user_atributSumOrderByAggregateInput
  }

  export type user_atributScalarWhereWithAggregatesInput = {
    AND?: user_atributScalarWhereWithAggregatesInput | user_atributScalarWhereWithAggregatesInput[]
    OR?: user_atributScalarWhereWithAggregatesInput[]
    NOT?: user_atributScalarWhereWithAggregatesInput | user_atributScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_atribut"> | number
    userId?: IntWithAggregatesFilter<"user_atribut"> | number
    pfp_id?: StringNullableWithAggregatesFilter<"user_atribut"> | string | null
    tags_used?: JsonNullableWithAggregatesFilter<"user_atribut">
    owned_tags?: JsonNullableWithAggregatesFilter<"user_atribut">
    pronounces?: JsonNullableWithAggregatesFilter<"user_atribut">
    bio?: StringNullableWithAggregatesFilter<"user_atribut"> | string | null
  }

  export type friendshipsWhereInput = {
    AND?: friendshipsWhereInput | friendshipsWhereInput[]
    OR?: friendshipsWhereInput[]
    NOT?: friendshipsWhereInput | friendshipsWhereInput[]
    id?: IntFilter<"friendships"> | number
    userId?: IntFilter<"friendships"> | number
    friendId?: IntFilter<"friendships"> | number
    status?: Enumfriendships_statusNullableFilter<"friendships"> | $Enums.friendships_status | null
    created_at?: DateTimeNullableFilter<"friendships"> | Date | string | null
    users_friendships_userIdTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_friendships_friendIdTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type friendshipsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users_friendships_userIdTousers?: usersOrderByWithRelationInput
    users_friendships_friendIdTousers?: usersOrderByWithRelationInput
  }

  export type friendshipsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_friendId?: friendshipsUserIdFriendIdCompoundUniqueInput
    AND?: friendshipsWhereInput | friendshipsWhereInput[]
    OR?: friendshipsWhereInput[]
    NOT?: friendshipsWhereInput | friendshipsWhereInput[]
    userId?: IntFilter<"friendships"> | number
    friendId?: IntFilter<"friendships"> | number
    status?: Enumfriendships_statusNullableFilter<"friendships"> | $Enums.friendships_status | null
    created_at?: DateTimeNullableFilter<"friendships"> | Date | string | null
    users_friendships_userIdTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_friendships_friendIdTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "userId_friendId">

  export type friendshipsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: friendshipsCountOrderByAggregateInput
    _avg?: friendshipsAvgOrderByAggregateInput
    _max?: friendshipsMaxOrderByAggregateInput
    _min?: friendshipsMinOrderByAggregateInput
    _sum?: friendshipsSumOrderByAggregateInput
  }

  export type friendshipsScalarWhereWithAggregatesInput = {
    AND?: friendshipsScalarWhereWithAggregatesInput | friendshipsScalarWhereWithAggregatesInput[]
    OR?: friendshipsScalarWhereWithAggregatesInput[]
    NOT?: friendshipsScalarWhereWithAggregatesInput | friendshipsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"friendships"> | number
    userId?: IntWithAggregatesFilter<"friendships"> | number
    friendId?: IntWithAggregatesFilter<"friendships"> | number
    status?: Enumfriendships_statusNullableWithAggregatesFilter<"friendships"> | $Enums.friendships_status | null
    created_at?: DateTimeNullableWithAggregatesFilter<"friendships"> | Date | string | null
  }

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    id?: IntFilter<"notifications"> | number
    userId?: IntFilter<"notifications"> | number
    type?: Enumnotifications_typeFilter<"notifications"> | $Enums.notifications_type
    content?: StringFilter<"notifications"> | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type notificationsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    users?: usersOrderByWithRelationInput
    _relevance?: notificationsOrderByRelevanceInput
  }

  export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    userId?: IntFilter<"notifications"> | number
    type?: Enumnotifications_typeFilter<"notifications"> | $Enums.notifications_type
    content?: StringFilter<"notifications"> | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _avg?: notificationsAvgOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
    _sum?: notificationsSumOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    OR?: notificationsScalarWhereWithAggregatesInput[]
    NOT?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notifications"> | number
    userId?: IntWithAggregatesFilter<"notifications"> | number
    type?: Enumnotifications_typeWithAggregatesFilter<"notifications"> | $Enums.notifications_type
    content?: StringWithAggregatesFilter<"notifications"> | string
  }

  export type group_atributsWhereInput = {
    AND?: group_atributsWhereInput | group_atributsWhereInput[]
    OR?: group_atributsWhereInput[]
    NOT?: group_atributsWhereInput | group_atributsWhereInput[]
    id?: IntFilter<"group_atributs"> | number
    conversationId?: StringFilter<"group_atributs"> | string
    group_name?: StringFilter<"group_atributs"> | string
    group_description?: StringNullableFilter<"group_atributs"> | string | null
    group_pfp?: StringNullableFilter<"group_atributs"> | string | null
    conversations?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
  }

  export type group_atributsOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    group_name?: SortOrder
    group_description?: SortOrderInput | SortOrder
    group_pfp?: SortOrderInput | SortOrder
    conversations?: conversationsOrderByWithRelationInput
    _relevance?: group_atributsOrderByRelevanceInput
  }

  export type group_atributsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    conversationId?: string
    AND?: group_atributsWhereInput | group_atributsWhereInput[]
    OR?: group_atributsWhereInput[]
    NOT?: group_atributsWhereInput | group_atributsWhereInput[]
    group_name?: StringFilter<"group_atributs"> | string
    group_description?: StringNullableFilter<"group_atributs"> | string | null
    group_pfp?: StringNullableFilter<"group_atributs"> | string | null
    conversations?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
  }, "id" | "conversationId">

  export type group_atributsOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    group_name?: SortOrder
    group_description?: SortOrderInput | SortOrder
    group_pfp?: SortOrderInput | SortOrder
    _count?: group_atributsCountOrderByAggregateInput
    _avg?: group_atributsAvgOrderByAggregateInput
    _max?: group_atributsMaxOrderByAggregateInput
    _min?: group_atributsMinOrderByAggregateInput
    _sum?: group_atributsSumOrderByAggregateInput
  }

  export type group_atributsScalarWhereWithAggregatesInput = {
    AND?: group_atributsScalarWhereWithAggregatesInput | group_atributsScalarWhereWithAggregatesInput[]
    OR?: group_atributsScalarWhereWithAggregatesInput[]
    NOT?: group_atributsScalarWhereWithAggregatesInput | group_atributsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"group_atributs"> | number
    conversationId?: StringWithAggregatesFilter<"group_atributs"> | string
    group_name?: StringWithAggregatesFilter<"group_atributs"> | string
    group_description?: StringNullableWithAggregatesFilter<"group_atributs"> | string | null
    group_pfp?: StringNullableWithAggregatesFilter<"group_atributs"> | string | null
  }

  export type usersCreateInput = {
    username: string
    provider: string
    email?: string | null
    email_name?: string | null
    phone_number?: string | null
    dial_code?: string | null
    createdAt: Date | string
    conversationMembers?: conversation_membersCreateNestedManyWithoutUserInput
    friendships_friendships_userIdTousers?: friendshipsCreateNestedManyWithoutUsers_friendships_userIdTousersInput
    friendships_friendships_friendIdTousers?: friendshipsCreateNestedManyWithoutUsers_friendships_friendIdTousersInput
    sentMessages?: messagesCreateNestedManyWithoutSenderInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    user_atribut?: user_atributCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    userId?: number
    username: string
    provider: string
    email?: string | null
    email_name?: string | null
    phone_number?: string | null
    dial_code?: string | null
    createdAt: Date | string
    conversationMembers?: conversation_membersUncheckedCreateNestedManyWithoutUserInput
    friendships_friendships_userIdTousers?: friendshipsUncheckedCreateNestedManyWithoutUsers_friendships_userIdTousersInput
    friendships_friendships_friendIdTousers?: friendshipsUncheckedCreateNestedManyWithoutUsers_friendships_friendIdTousersInput
    sentMessages?: messagesUncheckedCreateNestedManyWithoutSenderInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    user_atribut?: user_atributUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    dial_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: conversation_membersUpdateManyWithoutUserNestedInput
    friendships_friendships_userIdTousers?: friendshipsUpdateManyWithoutUsers_friendships_userIdTousersNestedInput
    friendships_friendships_friendIdTousers?: friendshipsUpdateManyWithoutUsers_friendships_friendIdTousersNestedInput
    sentMessages?: messagesUpdateManyWithoutSenderNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    user_atribut?: user_atributUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    dial_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: conversation_membersUncheckedUpdateManyWithoutUserNestedInput
    friendships_friendships_userIdTousers?: friendshipsUncheckedUpdateManyWithoutUsers_friendships_userIdTousersNestedInput
    friendships_friendships_friendIdTousers?: friendshipsUncheckedUpdateManyWithoutUsers_friendships_friendIdTousersNestedInput
    sentMessages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    user_atribut?: user_atributUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    userId?: number
    username: string
    provider: string
    email?: string | null
    email_name?: string | null
    phone_number?: string | null
    dial_code?: string | null
    createdAt: Date | string
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    dial_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    dial_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversation_membersCreateInput = {
    joinedAt?: Date | string
    user: usersCreateNestedOneWithoutConversationMembersInput
    conversation: conversationsCreateNestedOneWithoutMembersInput
  }

  export type conversation_membersUncheckedCreateInput = {
    id?: number
    userId: number
    conversationId: string
    joinedAt?: Date | string
  }

  export type conversation_membersUpdateInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutConversationMembersNestedInput
    conversation?: conversationsUpdateOneRequiredWithoutMembersNestedInput
  }

  export type conversation_membersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    conversationId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversation_membersCreateManyInput = {
    id?: number
    userId: number
    conversationId: string
    joinedAt?: Date | string
  }

  export type conversation_membersUpdateManyMutationInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversation_membersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    conversationId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesCreateInput = {
    id: string
    content: string
    sentAt?: Date | string
    status?: $Enums.messages_status
    senderUsername: string
    senderPfp_id?: string | null
    seen_by?: NullableJsonNullValueInput | InputJsonValue
    sender: usersCreateNestedOneWithoutSentMessagesInput
    conversation: conversationsCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateInput = {
    id: string
    content: string
    sentAt?: Date | string
    status?: $Enums.messages_status
    senderId: number
    senderUsername: string
    senderPfp_id?: string | null
    conversationId: string
    seen_by?: NullableJsonNullValueInput | InputJsonValue
  }

  export type messagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enummessages_statusFieldUpdateOperationsInput | $Enums.messages_status
    senderUsername?: StringFieldUpdateOperationsInput | string
    senderPfp_id?: NullableStringFieldUpdateOperationsInput | string | null
    seen_by?: NullableJsonNullValueInput | InputJsonValue
    sender?: usersUpdateOneRequiredWithoutSentMessagesNestedInput
    conversation?: conversationsUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enummessages_statusFieldUpdateOperationsInput | $Enums.messages_status
    senderId?: IntFieldUpdateOperationsInput | number
    senderUsername?: StringFieldUpdateOperationsInput | string
    senderPfp_id?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: StringFieldUpdateOperationsInput | string
    seen_by?: NullableJsonNullValueInput | InputJsonValue
  }

  export type messagesCreateManyInput = {
    id: string
    content: string
    sentAt?: Date | string
    status?: $Enums.messages_status
    senderId: number
    senderUsername: string
    senderPfp_id?: string | null
    conversationId: string
    seen_by?: NullableJsonNullValueInput | InputJsonValue
  }

  export type messagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enummessages_statusFieldUpdateOperationsInput | $Enums.messages_status
    senderUsername?: StringFieldUpdateOperationsInput | string
    senderPfp_id?: NullableStringFieldUpdateOperationsInput | string | null
    seen_by?: NullableJsonNullValueInput | InputJsonValue
  }

  export type messagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enummessages_statusFieldUpdateOperationsInput | $Enums.messages_status
    senderId?: IntFieldUpdateOperationsInput | number
    senderUsername?: StringFieldUpdateOperationsInput | string
    senderPfp_id?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: StringFieldUpdateOperationsInput | string
    seen_by?: NullableJsonNullValueInput | InputJsonValue
  }

  export type conversationsCreateInput = {
    id?: string
    isGroup?: boolean
    createdAt?: Date | string
    members?: conversation_membersCreateNestedManyWithoutConversationInput
    group_atributs?: group_atributsCreateNestedOneWithoutConversationsInput
    messages?: messagesCreateNestedManyWithoutConversationInput
  }

  export type conversationsUncheckedCreateInput = {
    id?: string
    isGroup?: boolean
    createdAt?: Date | string
    members?: conversation_membersUncheckedCreateNestedManyWithoutConversationInput
    group_atributs?: group_atributsUncheckedCreateNestedOneWithoutConversationsInput
    messages?: messagesUncheckedCreateNestedManyWithoutConversationInput
  }

  export type conversationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: conversation_membersUpdateManyWithoutConversationNestedInput
    group_atributs?: group_atributsUpdateOneWithoutConversationsNestedInput
    messages?: messagesUpdateManyWithoutConversationNestedInput
  }

  export type conversationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: conversation_membersUncheckedUpdateManyWithoutConversationNestedInput
    group_atributs?: group_atributsUncheckedUpdateOneWithoutConversationsNestedInput
    messages?: messagesUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type conversationsCreateManyInput = {
    id?: string
    isGroup?: boolean
    createdAt?: Date | string
  }

  export type conversationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tagsCreateInput = {
    name: string
    tier?: $Enums.tags_tier
  }

  export type tagsUncheckedCreateInput = {
    id?: number
    name: string
    tier?: $Enums.tags_tier
  }

  export type tagsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tier?: Enumtags_tierFieldUpdateOperationsInput | $Enums.tags_tier
  }

  export type tagsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tier?: Enumtags_tierFieldUpdateOperationsInput | $Enums.tags_tier
  }

  export type tagsCreateManyInput = {
    id?: number
    name: string
    tier?: $Enums.tags_tier
  }

  export type tagsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    tier?: Enumtags_tierFieldUpdateOperationsInput | $Enums.tags_tier
  }

  export type tagsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tier?: Enumtags_tierFieldUpdateOperationsInput | $Enums.tags_tier
  }

  export type user_atributCreateInput = {
    pfp_id?: string | null
    tags_used?: NullableJsonNullValueInput | InputJsonValue
    owned_tags?: NullableJsonNullValueInput | InputJsonValue
    pronounces?: NullableJsonNullValueInput | InputJsonValue
    bio?: string | null
    users: usersCreateNestedOneWithoutUser_atributInput
  }

  export type user_atributUncheckedCreateInput = {
    id?: number
    userId: number
    pfp_id?: string | null
    tags_used?: NullableJsonNullValueInput | InputJsonValue
    owned_tags?: NullableJsonNullValueInput | InputJsonValue
    pronounces?: NullableJsonNullValueInput | InputJsonValue
    bio?: string | null
  }

  export type user_atributUpdateInput = {
    pfp_id?: NullableStringFieldUpdateOperationsInput | string | null
    tags_used?: NullableJsonNullValueInput | InputJsonValue
    owned_tags?: NullableJsonNullValueInput | InputJsonValue
    pronounces?: NullableJsonNullValueInput | InputJsonValue
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutUser_atributNestedInput
  }

  export type user_atributUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    pfp_id?: NullableStringFieldUpdateOperationsInput | string | null
    tags_used?: NullableJsonNullValueInput | InputJsonValue
    owned_tags?: NullableJsonNullValueInput | InputJsonValue
    pronounces?: NullableJsonNullValueInput | InputJsonValue
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_atributCreateManyInput = {
    id?: number
    userId: number
    pfp_id?: string | null
    tags_used?: NullableJsonNullValueInput | InputJsonValue
    owned_tags?: NullableJsonNullValueInput | InputJsonValue
    pronounces?: NullableJsonNullValueInput | InputJsonValue
    bio?: string | null
  }

  export type user_atributUpdateManyMutationInput = {
    pfp_id?: NullableStringFieldUpdateOperationsInput | string | null
    tags_used?: NullableJsonNullValueInput | InputJsonValue
    owned_tags?: NullableJsonNullValueInput | InputJsonValue
    pronounces?: NullableJsonNullValueInput | InputJsonValue
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_atributUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    pfp_id?: NullableStringFieldUpdateOperationsInput | string | null
    tags_used?: NullableJsonNullValueInput | InputJsonValue
    owned_tags?: NullableJsonNullValueInput | InputJsonValue
    pronounces?: NullableJsonNullValueInput | InputJsonValue
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type friendshipsCreateInput = {
    status?: $Enums.friendships_status | null
    created_at?: Date | string | null
    users_friendships_userIdTousers: usersCreateNestedOneWithoutFriendships_friendships_userIdTousersInput
    users_friendships_friendIdTousers: usersCreateNestedOneWithoutFriendships_friendships_friendIdTousersInput
  }

  export type friendshipsUncheckedCreateInput = {
    id?: number
    userId: number
    friendId: number
    status?: $Enums.friendships_status | null
    created_at?: Date | string | null
  }

  export type friendshipsUpdateInput = {
    status?: NullableEnumfriendships_statusFieldUpdateOperationsInput | $Enums.friendships_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_friendships_userIdTousers?: usersUpdateOneRequiredWithoutFriendships_friendships_userIdTousersNestedInput
    users_friendships_friendIdTousers?: usersUpdateOneRequiredWithoutFriendships_friendships_friendIdTousersNestedInput
  }

  export type friendshipsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumfriendships_statusFieldUpdateOperationsInput | $Enums.friendships_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type friendshipsCreateManyInput = {
    id?: number
    userId: number
    friendId: number
    status?: $Enums.friendships_status | null
    created_at?: Date | string | null
  }

  export type friendshipsUpdateManyMutationInput = {
    status?: NullableEnumfriendships_statusFieldUpdateOperationsInput | $Enums.friendships_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type friendshipsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumfriendships_statusFieldUpdateOperationsInput | $Enums.friendships_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsCreateInput = {
    type: $Enums.notifications_type
    content: string
    users: usersCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateInput = {
    id?: number
    userId: number
    type: $Enums.notifications_type
    content: string
  }

  export type notificationsUpdateInput = {
    type?: Enumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type
    content?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: Enumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type
    content?: StringFieldUpdateOperationsInput | string
  }

  export type notificationsCreateManyInput = {
    id?: number
    userId: number
    type: $Enums.notifications_type
    content: string
  }

  export type notificationsUpdateManyMutationInput = {
    type?: Enumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type
    content?: StringFieldUpdateOperationsInput | string
  }

  export type notificationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: Enumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type
    content?: StringFieldUpdateOperationsInput | string
  }

  export type group_atributsCreateInput = {
    group_name?: string
    group_description?: string | null
    group_pfp?: string | null
    conversations: conversationsCreateNestedOneWithoutGroup_atributsInput
  }

  export type group_atributsUncheckedCreateInput = {
    id?: number
    conversationId: string
    group_name?: string
    group_description?: string | null
    group_pfp?: string | null
  }

  export type group_atributsUpdateInput = {
    group_name?: StringFieldUpdateOperationsInput | string
    group_description?: NullableStringFieldUpdateOperationsInput | string | null
    group_pfp?: NullableStringFieldUpdateOperationsInput | string | null
    conversations?: conversationsUpdateOneRequiredWithoutGroup_atributsNestedInput
  }

  export type group_atributsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_description?: NullableStringFieldUpdateOperationsInput | string | null
    group_pfp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type group_atributsCreateManyInput = {
    id?: number
    conversationId: string
    group_name?: string
    group_description?: string | null
    group_pfp?: string | null
  }

  export type group_atributsUpdateManyMutationInput = {
    group_name?: StringFieldUpdateOperationsInput | string
    group_description?: NullableStringFieldUpdateOperationsInput | string | null
    group_pfp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type group_atributsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_description?: NullableStringFieldUpdateOperationsInput | string | null
    group_pfp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Conversation_membersListRelationFilter = {
    every?: conversation_membersWhereInput
    some?: conversation_membersWhereInput
    none?: conversation_membersWhereInput
  }

  export type FriendshipsListRelationFilter = {
    every?: friendshipsWhereInput
    some?: friendshipsWhereInput
    none?: friendshipsWhereInput
  }

  export type MessagesListRelationFilter = {
    every?: messagesWhereInput
    some?: messagesWhereInput
    none?: messagesWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: notificationsWhereInput
    some?: notificationsWhereInput
    none?: notificationsWhereInput
  }

  export type User_atributNullableScalarRelationFilter = {
    is?: user_atributWhereInput | null
    isNot?: user_atributWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type conversation_membersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type friendshipsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type messagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    provider?: SortOrder
    email?: SortOrder
    email_name?: SortOrder
    phone_number?: SortOrder
    dial_code?: SortOrder
    createdAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    provider?: SortOrder
    email?: SortOrder
    email_name?: SortOrder
    phone_number?: SortOrder
    dial_code?: SortOrder
    createdAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    provider?: SortOrder
    email?: SortOrder
    email_name?: SortOrder
    phone_number?: SortOrder
    dial_code?: SortOrder
    createdAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type ConversationsScalarRelationFilter = {
    is?: conversationsWhereInput
    isNot?: conversationsWhereInput
  }

  export type conversation_membersOrderByRelevanceInput = {
    fields: conversation_membersOrderByRelevanceFieldEnum | conversation_membersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type conversation_membersUserIdConversationIdCompoundUniqueInput = {
    userId: number
    conversationId: string
  }

  export type conversation_membersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
    joinedAt?: SortOrder
  }

  export type conversation_membersAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type conversation_membersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
    joinedAt?: SortOrder
  }

  export type conversation_membersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
    joinedAt?: SortOrder
  }

  export type conversation_membersSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type Enummessages_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.messages_status | Enummessages_statusFieldRefInput<$PrismaModel>
    in?: $Enums.messages_status[]
    notIn?: $Enums.messages_status[]
    not?: NestedEnummessages_statusFilter<$PrismaModel> | $Enums.messages_status
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type messagesOrderByRelevanceInput = {
    fields: messagesOrderByRelevanceFieldEnum | messagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type messagesCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    senderUsername?: SortOrder
    senderPfp_id?: SortOrder
    conversationId?: SortOrder
    seen_by?: SortOrder
  }

  export type messagesAvgOrderByAggregateInput = {
    senderId?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    senderUsername?: SortOrder
    senderPfp_id?: SortOrder
    conversationId?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    senderUsername?: SortOrder
    senderPfp_id?: SortOrder
    conversationId?: SortOrder
  }

  export type messagesSumOrderByAggregateInput = {
    senderId?: SortOrder
  }

  export type Enummessages_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.messages_status | Enummessages_statusFieldRefInput<$PrismaModel>
    in?: $Enums.messages_status[]
    notIn?: $Enums.messages_status[]
    not?: NestedEnummessages_statusWithAggregatesFilter<$PrismaModel> | $Enums.messages_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummessages_statusFilter<$PrismaModel>
    _max?: NestedEnummessages_statusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Group_atributsNullableScalarRelationFilter = {
    is?: group_atributsWhereInput | null
    isNot?: group_atributsWhereInput | null
  }

  export type conversationsOrderByRelevanceInput = {
    fields: conversationsOrderByRelevanceFieldEnum | conversationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type conversationsCountOrderByAggregateInput = {
    id?: SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
  }

  export type conversationsMaxOrderByAggregateInput = {
    id?: SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
  }

  export type conversationsMinOrderByAggregateInput = {
    id?: SortOrder
    isGroup?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Enumtags_tierFilter<$PrismaModel = never> = {
    equals?: $Enums.tags_tier | Enumtags_tierFieldRefInput<$PrismaModel>
    in?: $Enums.tags_tier[]
    notIn?: $Enums.tags_tier[]
    not?: NestedEnumtags_tierFilter<$PrismaModel> | $Enums.tags_tier
  }

  export type tagsOrderByRelevanceInput = {
    fields: tagsOrderByRelevanceFieldEnum | tagsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tagsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tier?: SortOrder
  }

  export type tagsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tagsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tier?: SortOrder
  }

  export type tagsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tier?: SortOrder
  }

  export type tagsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumtags_tierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tags_tier | Enumtags_tierFieldRefInput<$PrismaModel>
    in?: $Enums.tags_tier[]
    notIn?: $Enums.tags_tier[]
    not?: NestedEnumtags_tierWithAggregatesFilter<$PrismaModel> | $Enums.tags_tier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtags_tierFilter<$PrismaModel>
    _max?: NestedEnumtags_tierFilter<$PrismaModel>
  }

  export type user_atributOrderByRelevanceInput = {
    fields: user_atributOrderByRelevanceFieldEnum | user_atributOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_atributCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pfp_id?: SortOrder
    tags_used?: SortOrder
    owned_tags?: SortOrder
    pronounces?: SortOrder
    bio?: SortOrder
  }

  export type user_atributAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type user_atributMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pfp_id?: SortOrder
    bio?: SortOrder
  }

  export type user_atributMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pfp_id?: SortOrder
    bio?: SortOrder
  }

  export type user_atributSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type Enumfriendships_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.friendships_status | Enumfriendships_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.friendships_status[] | null
    notIn?: $Enums.friendships_status[] | null
    not?: NestedEnumfriendships_statusNullableFilter<$PrismaModel> | $Enums.friendships_status | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type friendshipsUserIdFriendIdCompoundUniqueInput = {
    userId: number
    friendId: number
  }

  export type friendshipsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type friendshipsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
  }

  export type friendshipsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type friendshipsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type friendshipsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
  }

  export type Enumfriendships_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.friendships_status | Enumfriendships_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.friendships_status[] | null
    notIn?: $Enums.friendships_status[] | null
    not?: NestedEnumfriendships_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.friendships_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumfriendships_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumfriendships_statusNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumnotifications_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.notifications_type | Enumnotifications_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notifications_type[]
    notIn?: $Enums.notifications_type[]
    not?: NestedEnumnotifications_typeFilter<$PrismaModel> | $Enums.notifications_type
  }

  export type notificationsOrderByRelevanceInput = {
    fields: notificationsOrderByRelevanceFieldEnum | notificationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    content?: SortOrder
  }

  export type notificationsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    content?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    content?: SortOrder
  }

  export type notificationsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type Enumnotifications_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notifications_type | Enumnotifications_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notifications_type[]
    notIn?: $Enums.notifications_type[]
    not?: NestedEnumnotifications_typeWithAggregatesFilter<$PrismaModel> | $Enums.notifications_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnotifications_typeFilter<$PrismaModel>
    _max?: NestedEnumnotifications_typeFilter<$PrismaModel>
  }

  export type group_atributsOrderByRelevanceInput = {
    fields: group_atributsOrderByRelevanceFieldEnum | group_atributsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type group_atributsCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    group_name?: SortOrder
    group_description?: SortOrder
    group_pfp?: SortOrder
  }

  export type group_atributsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type group_atributsMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    group_name?: SortOrder
    group_description?: SortOrder
    group_pfp?: SortOrder
  }

  export type group_atributsMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    group_name?: SortOrder
    group_description?: SortOrder
    group_pfp?: SortOrder
  }

  export type group_atributsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type conversation_membersCreateNestedManyWithoutUserInput = {
    create?: XOR<conversation_membersCreateWithoutUserInput, conversation_membersUncheckedCreateWithoutUserInput> | conversation_membersCreateWithoutUserInput[] | conversation_membersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: conversation_membersCreateOrConnectWithoutUserInput | conversation_membersCreateOrConnectWithoutUserInput[]
    createMany?: conversation_membersCreateManyUserInputEnvelope
    connect?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
  }

  export type friendshipsCreateNestedManyWithoutUsers_friendships_userIdTousersInput = {
    create?: XOR<friendshipsCreateWithoutUsers_friendships_userIdTousersInput, friendshipsUncheckedCreateWithoutUsers_friendships_userIdTousersInput> | friendshipsCreateWithoutUsers_friendships_userIdTousersInput[] | friendshipsUncheckedCreateWithoutUsers_friendships_userIdTousersInput[]
    connectOrCreate?: friendshipsCreateOrConnectWithoutUsers_friendships_userIdTousersInput | friendshipsCreateOrConnectWithoutUsers_friendships_userIdTousersInput[]
    createMany?: friendshipsCreateManyUsers_friendships_userIdTousersInputEnvelope
    connect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
  }

  export type friendshipsCreateNestedManyWithoutUsers_friendships_friendIdTousersInput = {
    create?: XOR<friendshipsCreateWithoutUsers_friendships_friendIdTousersInput, friendshipsUncheckedCreateWithoutUsers_friendships_friendIdTousersInput> | friendshipsCreateWithoutUsers_friendships_friendIdTousersInput[] | friendshipsUncheckedCreateWithoutUsers_friendships_friendIdTousersInput[]
    connectOrCreate?: friendshipsCreateOrConnectWithoutUsers_friendships_friendIdTousersInput | friendshipsCreateOrConnectWithoutUsers_friendships_friendIdTousersInput[]
    createMany?: friendshipsCreateManyUsers_friendships_friendIdTousersInputEnvelope
    connect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
  }

  export type messagesCreateNestedManyWithoutSenderInput = {
    create?: XOR<messagesCreateWithoutSenderInput, messagesUncheckedCreateWithoutSenderInput> | messagesCreateWithoutSenderInput[] | messagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutSenderInput | messagesCreateOrConnectWithoutSenderInput[]
    createMany?: messagesCreateManySenderInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type notificationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput> | notificationsCreateWithoutUsersInput[] | notificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput | notificationsCreateOrConnectWithoutUsersInput[]
    createMany?: notificationsCreateManyUsersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type user_atributCreateNestedOneWithoutUsersInput = {
    create?: XOR<user_atributCreateWithoutUsersInput, user_atributUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_atributCreateOrConnectWithoutUsersInput
    connect?: user_atributWhereUniqueInput
  }

  export type conversation_membersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<conversation_membersCreateWithoutUserInput, conversation_membersUncheckedCreateWithoutUserInput> | conversation_membersCreateWithoutUserInput[] | conversation_membersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: conversation_membersCreateOrConnectWithoutUserInput | conversation_membersCreateOrConnectWithoutUserInput[]
    createMany?: conversation_membersCreateManyUserInputEnvelope
    connect?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
  }

  export type friendshipsUncheckedCreateNestedManyWithoutUsers_friendships_userIdTousersInput = {
    create?: XOR<friendshipsCreateWithoutUsers_friendships_userIdTousersInput, friendshipsUncheckedCreateWithoutUsers_friendships_userIdTousersInput> | friendshipsCreateWithoutUsers_friendships_userIdTousersInput[] | friendshipsUncheckedCreateWithoutUsers_friendships_userIdTousersInput[]
    connectOrCreate?: friendshipsCreateOrConnectWithoutUsers_friendships_userIdTousersInput | friendshipsCreateOrConnectWithoutUsers_friendships_userIdTousersInput[]
    createMany?: friendshipsCreateManyUsers_friendships_userIdTousersInputEnvelope
    connect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
  }

  export type friendshipsUncheckedCreateNestedManyWithoutUsers_friendships_friendIdTousersInput = {
    create?: XOR<friendshipsCreateWithoutUsers_friendships_friendIdTousersInput, friendshipsUncheckedCreateWithoutUsers_friendships_friendIdTousersInput> | friendshipsCreateWithoutUsers_friendships_friendIdTousersInput[] | friendshipsUncheckedCreateWithoutUsers_friendships_friendIdTousersInput[]
    connectOrCreate?: friendshipsCreateOrConnectWithoutUsers_friendships_friendIdTousersInput | friendshipsCreateOrConnectWithoutUsers_friendships_friendIdTousersInput[]
    createMany?: friendshipsCreateManyUsers_friendships_friendIdTousersInputEnvelope
    connect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<messagesCreateWithoutSenderInput, messagesUncheckedCreateWithoutSenderInput> | messagesCreateWithoutSenderInput[] | messagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutSenderInput | messagesCreateOrConnectWithoutSenderInput[]
    createMany?: messagesCreateManySenderInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type notificationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput> | notificationsCreateWithoutUsersInput[] | notificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput | notificationsCreateOrConnectWithoutUsersInput[]
    createMany?: notificationsCreateManyUsersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type user_atributUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<user_atributCreateWithoutUsersInput, user_atributUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_atributCreateOrConnectWithoutUsersInput
    connect?: user_atributWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type conversation_membersUpdateManyWithoutUserNestedInput = {
    create?: XOR<conversation_membersCreateWithoutUserInput, conversation_membersUncheckedCreateWithoutUserInput> | conversation_membersCreateWithoutUserInput[] | conversation_membersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: conversation_membersCreateOrConnectWithoutUserInput | conversation_membersCreateOrConnectWithoutUserInput[]
    upsert?: conversation_membersUpsertWithWhereUniqueWithoutUserInput | conversation_membersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: conversation_membersCreateManyUserInputEnvelope
    set?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
    disconnect?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
    delete?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
    connect?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
    update?: conversation_membersUpdateWithWhereUniqueWithoutUserInput | conversation_membersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: conversation_membersUpdateManyWithWhereWithoutUserInput | conversation_membersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: conversation_membersScalarWhereInput | conversation_membersScalarWhereInput[]
  }

  export type friendshipsUpdateManyWithoutUsers_friendships_userIdTousersNestedInput = {
    create?: XOR<friendshipsCreateWithoutUsers_friendships_userIdTousersInput, friendshipsUncheckedCreateWithoutUsers_friendships_userIdTousersInput> | friendshipsCreateWithoutUsers_friendships_userIdTousersInput[] | friendshipsUncheckedCreateWithoutUsers_friendships_userIdTousersInput[]
    connectOrCreate?: friendshipsCreateOrConnectWithoutUsers_friendships_userIdTousersInput | friendshipsCreateOrConnectWithoutUsers_friendships_userIdTousersInput[]
    upsert?: friendshipsUpsertWithWhereUniqueWithoutUsers_friendships_userIdTousersInput | friendshipsUpsertWithWhereUniqueWithoutUsers_friendships_userIdTousersInput[]
    createMany?: friendshipsCreateManyUsers_friendships_userIdTousersInputEnvelope
    set?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    disconnect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    delete?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    connect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    update?: friendshipsUpdateWithWhereUniqueWithoutUsers_friendships_userIdTousersInput | friendshipsUpdateWithWhereUniqueWithoutUsers_friendships_userIdTousersInput[]
    updateMany?: friendshipsUpdateManyWithWhereWithoutUsers_friendships_userIdTousersInput | friendshipsUpdateManyWithWhereWithoutUsers_friendships_userIdTousersInput[]
    deleteMany?: friendshipsScalarWhereInput | friendshipsScalarWhereInput[]
  }

  export type friendshipsUpdateManyWithoutUsers_friendships_friendIdTousersNestedInput = {
    create?: XOR<friendshipsCreateWithoutUsers_friendships_friendIdTousersInput, friendshipsUncheckedCreateWithoutUsers_friendships_friendIdTousersInput> | friendshipsCreateWithoutUsers_friendships_friendIdTousersInput[] | friendshipsUncheckedCreateWithoutUsers_friendships_friendIdTousersInput[]
    connectOrCreate?: friendshipsCreateOrConnectWithoutUsers_friendships_friendIdTousersInput | friendshipsCreateOrConnectWithoutUsers_friendships_friendIdTousersInput[]
    upsert?: friendshipsUpsertWithWhereUniqueWithoutUsers_friendships_friendIdTousersInput | friendshipsUpsertWithWhereUniqueWithoutUsers_friendships_friendIdTousersInput[]
    createMany?: friendshipsCreateManyUsers_friendships_friendIdTousersInputEnvelope
    set?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    disconnect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    delete?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    connect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    update?: friendshipsUpdateWithWhereUniqueWithoutUsers_friendships_friendIdTousersInput | friendshipsUpdateWithWhereUniqueWithoutUsers_friendships_friendIdTousersInput[]
    updateMany?: friendshipsUpdateManyWithWhereWithoutUsers_friendships_friendIdTousersInput | friendshipsUpdateManyWithWhereWithoutUsers_friendships_friendIdTousersInput[]
    deleteMany?: friendshipsScalarWhereInput | friendshipsScalarWhereInput[]
  }

  export type messagesUpdateManyWithoutSenderNestedInput = {
    create?: XOR<messagesCreateWithoutSenderInput, messagesUncheckedCreateWithoutSenderInput> | messagesCreateWithoutSenderInput[] | messagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutSenderInput | messagesCreateOrConnectWithoutSenderInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutSenderInput | messagesUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: messagesCreateManySenderInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutSenderInput | messagesUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutSenderInput | messagesUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type notificationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput> | notificationsCreateWithoutUsersInput[] | notificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput | notificationsCreateOrConnectWithoutUsersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsersInput | notificationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: notificationsCreateManyUsersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsersInput | notificationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsersInput | notificationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type user_atributUpdateOneWithoutUsersNestedInput = {
    create?: XOR<user_atributCreateWithoutUsersInput, user_atributUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_atributCreateOrConnectWithoutUsersInput
    upsert?: user_atributUpsertWithoutUsersInput
    disconnect?: user_atributWhereInput | boolean
    delete?: user_atributWhereInput | boolean
    connect?: user_atributWhereUniqueInput
    update?: XOR<XOR<user_atributUpdateToOneWithWhereWithoutUsersInput, user_atributUpdateWithoutUsersInput>, user_atributUncheckedUpdateWithoutUsersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type conversation_membersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<conversation_membersCreateWithoutUserInput, conversation_membersUncheckedCreateWithoutUserInput> | conversation_membersCreateWithoutUserInput[] | conversation_membersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: conversation_membersCreateOrConnectWithoutUserInput | conversation_membersCreateOrConnectWithoutUserInput[]
    upsert?: conversation_membersUpsertWithWhereUniqueWithoutUserInput | conversation_membersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: conversation_membersCreateManyUserInputEnvelope
    set?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
    disconnect?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
    delete?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
    connect?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
    update?: conversation_membersUpdateWithWhereUniqueWithoutUserInput | conversation_membersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: conversation_membersUpdateManyWithWhereWithoutUserInput | conversation_membersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: conversation_membersScalarWhereInput | conversation_membersScalarWhereInput[]
  }

  export type friendshipsUncheckedUpdateManyWithoutUsers_friendships_userIdTousersNestedInput = {
    create?: XOR<friendshipsCreateWithoutUsers_friendships_userIdTousersInput, friendshipsUncheckedCreateWithoutUsers_friendships_userIdTousersInput> | friendshipsCreateWithoutUsers_friendships_userIdTousersInput[] | friendshipsUncheckedCreateWithoutUsers_friendships_userIdTousersInput[]
    connectOrCreate?: friendshipsCreateOrConnectWithoutUsers_friendships_userIdTousersInput | friendshipsCreateOrConnectWithoutUsers_friendships_userIdTousersInput[]
    upsert?: friendshipsUpsertWithWhereUniqueWithoutUsers_friendships_userIdTousersInput | friendshipsUpsertWithWhereUniqueWithoutUsers_friendships_userIdTousersInput[]
    createMany?: friendshipsCreateManyUsers_friendships_userIdTousersInputEnvelope
    set?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    disconnect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    delete?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    connect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    update?: friendshipsUpdateWithWhereUniqueWithoutUsers_friendships_userIdTousersInput | friendshipsUpdateWithWhereUniqueWithoutUsers_friendships_userIdTousersInput[]
    updateMany?: friendshipsUpdateManyWithWhereWithoutUsers_friendships_userIdTousersInput | friendshipsUpdateManyWithWhereWithoutUsers_friendships_userIdTousersInput[]
    deleteMany?: friendshipsScalarWhereInput | friendshipsScalarWhereInput[]
  }

  export type friendshipsUncheckedUpdateManyWithoutUsers_friendships_friendIdTousersNestedInput = {
    create?: XOR<friendshipsCreateWithoutUsers_friendships_friendIdTousersInput, friendshipsUncheckedCreateWithoutUsers_friendships_friendIdTousersInput> | friendshipsCreateWithoutUsers_friendships_friendIdTousersInput[] | friendshipsUncheckedCreateWithoutUsers_friendships_friendIdTousersInput[]
    connectOrCreate?: friendshipsCreateOrConnectWithoutUsers_friendships_friendIdTousersInput | friendshipsCreateOrConnectWithoutUsers_friendships_friendIdTousersInput[]
    upsert?: friendshipsUpsertWithWhereUniqueWithoutUsers_friendships_friendIdTousersInput | friendshipsUpsertWithWhereUniqueWithoutUsers_friendships_friendIdTousersInput[]
    createMany?: friendshipsCreateManyUsers_friendships_friendIdTousersInputEnvelope
    set?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    disconnect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    delete?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    connect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    update?: friendshipsUpdateWithWhereUniqueWithoutUsers_friendships_friendIdTousersInput | friendshipsUpdateWithWhereUniqueWithoutUsers_friendships_friendIdTousersInput[]
    updateMany?: friendshipsUpdateManyWithWhereWithoutUsers_friendships_friendIdTousersInput | friendshipsUpdateManyWithWhereWithoutUsers_friendships_friendIdTousersInput[]
    deleteMany?: friendshipsScalarWhereInput | friendshipsScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<messagesCreateWithoutSenderInput, messagesUncheckedCreateWithoutSenderInput> | messagesCreateWithoutSenderInput[] | messagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutSenderInput | messagesCreateOrConnectWithoutSenderInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutSenderInput | messagesUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: messagesCreateManySenderInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutSenderInput | messagesUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutSenderInput | messagesUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type notificationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput> | notificationsCreateWithoutUsersInput[] | notificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsersInput | notificationsCreateOrConnectWithoutUsersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsersInput | notificationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: notificationsCreateManyUsersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsersInput | notificationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsersInput | notificationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type user_atributUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<user_atributCreateWithoutUsersInput, user_atributUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_atributCreateOrConnectWithoutUsersInput
    upsert?: user_atributUpsertWithoutUsersInput
    disconnect?: user_atributWhereInput | boolean
    delete?: user_atributWhereInput | boolean
    connect?: user_atributWhereUniqueInput
    update?: XOR<XOR<user_atributUpdateToOneWithWhereWithoutUsersInput, user_atributUpdateWithoutUsersInput>, user_atributUncheckedUpdateWithoutUsersInput>
  }

  export type usersCreateNestedOneWithoutConversationMembersInput = {
    create?: XOR<usersCreateWithoutConversationMembersInput, usersUncheckedCreateWithoutConversationMembersInput>
    connectOrCreate?: usersCreateOrConnectWithoutConversationMembersInput
    connect?: usersWhereUniqueInput
  }

  export type conversationsCreateNestedOneWithoutMembersInput = {
    create?: XOR<conversationsCreateWithoutMembersInput, conversationsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutMembersInput
    connect?: conversationsWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutConversationMembersNestedInput = {
    create?: XOR<usersCreateWithoutConversationMembersInput, usersUncheckedCreateWithoutConversationMembersInput>
    connectOrCreate?: usersCreateOrConnectWithoutConversationMembersInput
    upsert?: usersUpsertWithoutConversationMembersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutConversationMembersInput, usersUpdateWithoutConversationMembersInput>, usersUncheckedUpdateWithoutConversationMembersInput>
  }

  export type conversationsUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<conversationsCreateWithoutMembersInput, conversationsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutMembersInput
    upsert?: conversationsUpsertWithoutMembersInput
    connect?: conversationsWhereUniqueInput
    update?: XOR<XOR<conversationsUpdateToOneWithWhereWithoutMembersInput, conversationsUpdateWithoutMembersInput>, conversationsUncheckedUpdateWithoutMembersInput>
  }

  export type usersCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<usersCreateWithoutSentMessagesInput, usersUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSentMessagesInput
    connect?: usersWhereUniqueInput
  }

  export type conversationsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutMessagesInput
    connect?: conversationsWhereUniqueInput
  }

  export type Enummessages_statusFieldUpdateOperationsInput = {
    set?: $Enums.messages_status
  }

  export type usersUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<usersCreateWithoutSentMessagesInput, usersUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSentMessagesInput
    upsert?: usersUpsertWithoutSentMessagesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSentMessagesInput, usersUpdateWithoutSentMessagesInput>, usersUncheckedUpdateWithoutSentMessagesInput>
  }

  export type conversationsUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutMessagesInput
    upsert?: conversationsUpsertWithoutMessagesInput
    connect?: conversationsWhereUniqueInput
    update?: XOR<XOR<conversationsUpdateToOneWithWhereWithoutMessagesInput, conversationsUpdateWithoutMessagesInput>, conversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type conversation_membersCreateNestedManyWithoutConversationInput = {
    create?: XOR<conversation_membersCreateWithoutConversationInput, conversation_membersUncheckedCreateWithoutConversationInput> | conversation_membersCreateWithoutConversationInput[] | conversation_membersUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: conversation_membersCreateOrConnectWithoutConversationInput | conversation_membersCreateOrConnectWithoutConversationInput[]
    createMany?: conversation_membersCreateManyConversationInputEnvelope
    connect?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
  }

  export type group_atributsCreateNestedOneWithoutConversationsInput = {
    create?: XOR<group_atributsCreateWithoutConversationsInput, group_atributsUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: group_atributsCreateOrConnectWithoutConversationsInput
    connect?: group_atributsWhereUniqueInput
  }

  export type messagesCreateNestedManyWithoutConversationInput = {
    create?: XOR<messagesCreateWithoutConversationInput, messagesUncheckedCreateWithoutConversationInput> | messagesCreateWithoutConversationInput[] | messagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationInput | messagesCreateOrConnectWithoutConversationInput[]
    createMany?: messagesCreateManyConversationInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type conversation_membersUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<conversation_membersCreateWithoutConversationInput, conversation_membersUncheckedCreateWithoutConversationInput> | conversation_membersCreateWithoutConversationInput[] | conversation_membersUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: conversation_membersCreateOrConnectWithoutConversationInput | conversation_membersCreateOrConnectWithoutConversationInput[]
    createMany?: conversation_membersCreateManyConversationInputEnvelope
    connect?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
  }

  export type group_atributsUncheckedCreateNestedOneWithoutConversationsInput = {
    create?: XOR<group_atributsCreateWithoutConversationsInput, group_atributsUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: group_atributsCreateOrConnectWithoutConversationsInput
    connect?: group_atributsWhereUniqueInput
  }

  export type messagesUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<messagesCreateWithoutConversationInput, messagesUncheckedCreateWithoutConversationInput> | messagesCreateWithoutConversationInput[] | messagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationInput | messagesCreateOrConnectWithoutConversationInput[]
    createMany?: messagesCreateManyConversationInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type conversation_membersUpdateManyWithoutConversationNestedInput = {
    create?: XOR<conversation_membersCreateWithoutConversationInput, conversation_membersUncheckedCreateWithoutConversationInput> | conversation_membersCreateWithoutConversationInput[] | conversation_membersUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: conversation_membersCreateOrConnectWithoutConversationInput | conversation_membersCreateOrConnectWithoutConversationInput[]
    upsert?: conversation_membersUpsertWithWhereUniqueWithoutConversationInput | conversation_membersUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: conversation_membersCreateManyConversationInputEnvelope
    set?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
    disconnect?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
    delete?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
    connect?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
    update?: conversation_membersUpdateWithWhereUniqueWithoutConversationInput | conversation_membersUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: conversation_membersUpdateManyWithWhereWithoutConversationInput | conversation_membersUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: conversation_membersScalarWhereInput | conversation_membersScalarWhereInput[]
  }

  export type group_atributsUpdateOneWithoutConversationsNestedInput = {
    create?: XOR<group_atributsCreateWithoutConversationsInput, group_atributsUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: group_atributsCreateOrConnectWithoutConversationsInput
    upsert?: group_atributsUpsertWithoutConversationsInput
    disconnect?: group_atributsWhereInput | boolean
    delete?: group_atributsWhereInput | boolean
    connect?: group_atributsWhereUniqueInput
    update?: XOR<XOR<group_atributsUpdateToOneWithWhereWithoutConversationsInput, group_atributsUpdateWithoutConversationsInput>, group_atributsUncheckedUpdateWithoutConversationsInput>
  }

  export type messagesUpdateManyWithoutConversationNestedInput = {
    create?: XOR<messagesCreateWithoutConversationInput, messagesUncheckedCreateWithoutConversationInput> | messagesCreateWithoutConversationInput[] | messagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationInput | messagesCreateOrConnectWithoutConversationInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutConversationInput | messagesUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: messagesCreateManyConversationInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutConversationInput | messagesUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutConversationInput | messagesUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type conversation_membersUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<conversation_membersCreateWithoutConversationInput, conversation_membersUncheckedCreateWithoutConversationInput> | conversation_membersCreateWithoutConversationInput[] | conversation_membersUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: conversation_membersCreateOrConnectWithoutConversationInput | conversation_membersCreateOrConnectWithoutConversationInput[]
    upsert?: conversation_membersUpsertWithWhereUniqueWithoutConversationInput | conversation_membersUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: conversation_membersCreateManyConversationInputEnvelope
    set?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
    disconnect?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
    delete?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
    connect?: conversation_membersWhereUniqueInput | conversation_membersWhereUniqueInput[]
    update?: conversation_membersUpdateWithWhereUniqueWithoutConversationInput | conversation_membersUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: conversation_membersUpdateManyWithWhereWithoutConversationInput | conversation_membersUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: conversation_membersScalarWhereInput | conversation_membersScalarWhereInput[]
  }

  export type group_atributsUncheckedUpdateOneWithoutConversationsNestedInput = {
    create?: XOR<group_atributsCreateWithoutConversationsInput, group_atributsUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: group_atributsCreateOrConnectWithoutConversationsInput
    upsert?: group_atributsUpsertWithoutConversationsInput
    disconnect?: group_atributsWhereInput | boolean
    delete?: group_atributsWhereInput | boolean
    connect?: group_atributsWhereUniqueInput
    update?: XOR<XOR<group_atributsUpdateToOneWithWhereWithoutConversationsInput, group_atributsUpdateWithoutConversationsInput>, group_atributsUncheckedUpdateWithoutConversationsInput>
  }

  export type messagesUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<messagesCreateWithoutConversationInput, messagesUncheckedCreateWithoutConversationInput> | messagesCreateWithoutConversationInput[] | messagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationInput | messagesCreateOrConnectWithoutConversationInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutConversationInput | messagesUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: messagesCreateManyConversationInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutConversationInput | messagesUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutConversationInput | messagesUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type Enumtags_tierFieldUpdateOperationsInput = {
    set?: $Enums.tags_tier
  }

  export type usersCreateNestedOneWithoutUser_atributInput = {
    create?: XOR<usersCreateWithoutUser_atributInput, usersUncheckedCreateWithoutUser_atributInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_atributInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutUser_atributNestedInput = {
    create?: XOR<usersCreateWithoutUser_atributInput, usersUncheckedCreateWithoutUser_atributInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_atributInput
    upsert?: usersUpsertWithoutUser_atributInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_atributInput, usersUpdateWithoutUser_atributInput>, usersUncheckedUpdateWithoutUser_atributInput>
  }

  export type usersCreateNestedOneWithoutFriendships_friendships_userIdTousersInput = {
    create?: XOR<usersCreateWithoutFriendships_friendships_userIdTousersInput, usersUncheckedCreateWithoutFriendships_friendships_userIdTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutFriendships_friendships_userIdTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutFriendships_friendships_friendIdTousersInput = {
    create?: XOR<usersCreateWithoutFriendships_friendships_friendIdTousersInput, usersUncheckedCreateWithoutFriendships_friendships_friendIdTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutFriendships_friendships_friendIdTousersInput
    connect?: usersWhereUniqueInput
  }

  export type NullableEnumfriendships_statusFieldUpdateOperationsInput = {
    set?: $Enums.friendships_status | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutFriendships_friendships_userIdTousersNestedInput = {
    create?: XOR<usersCreateWithoutFriendships_friendships_userIdTousersInput, usersUncheckedCreateWithoutFriendships_friendships_userIdTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutFriendships_friendships_userIdTousersInput
    upsert?: usersUpsertWithoutFriendships_friendships_userIdTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFriendships_friendships_userIdTousersInput, usersUpdateWithoutFriendships_friendships_userIdTousersInput>, usersUncheckedUpdateWithoutFriendships_friendships_userIdTousersInput>
  }

  export type usersUpdateOneRequiredWithoutFriendships_friendships_friendIdTousersNestedInput = {
    create?: XOR<usersCreateWithoutFriendships_friendships_friendIdTousersInput, usersUncheckedCreateWithoutFriendships_friendships_friendIdTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutFriendships_friendships_friendIdTousersInput
    upsert?: usersUpsertWithoutFriendships_friendships_friendIdTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFriendships_friendships_friendIdTousersInput, usersUpdateWithoutFriendships_friendships_friendIdTousersInput>, usersUncheckedUpdateWithoutFriendships_friendships_friendIdTousersInput>
  }

  export type usersCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotificationsInput
    connect?: usersWhereUniqueInput
  }

  export type Enumnotifications_typeFieldUpdateOperationsInput = {
    set?: $Enums.notifications_type
  }

  export type usersUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotificationsInput
    upsert?: usersUpsertWithoutNotificationsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutNotificationsInput, usersUpdateWithoutNotificationsInput>, usersUncheckedUpdateWithoutNotificationsInput>
  }

  export type conversationsCreateNestedOneWithoutGroup_atributsInput = {
    create?: XOR<conversationsCreateWithoutGroup_atributsInput, conversationsUncheckedCreateWithoutGroup_atributsInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutGroup_atributsInput
    connect?: conversationsWhereUniqueInput
  }

  export type conversationsUpdateOneRequiredWithoutGroup_atributsNestedInput = {
    create?: XOR<conversationsCreateWithoutGroup_atributsInput, conversationsUncheckedCreateWithoutGroup_atributsInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutGroup_atributsInput
    upsert?: conversationsUpsertWithoutGroup_atributsInput
    connect?: conversationsWhereUniqueInput
    update?: XOR<XOR<conversationsUpdateToOneWithWhereWithoutGroup_atributsInput, conversationsUpdateWithoutGroup_atributsInput>, conversationsUncheckedUpdateWithoutGroup_atributsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnummessages_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.messages_status | Enummessages_statusFieldRefInput<$PrismaModel>
    in?: $Enums.messages_status[]
    notIn?: $Enums.messages_status[]
    not?: NestedEnummessages_statusFilter<$PrismaModel> | $Enums.messages_status
  }

  export type NestedEnummessages_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.messages_status | Enummessages_statusFieldRefInput<$PrismaModel>
    in?: $Enums.messages_status[]
    notIn?: $Enums.messages_status[]
    not?: NestedEnummessages_statusWithAggregatesFilter<$PrismaModel> | $Enums.messages_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummessages_statusFilter<$PrismaModel>
    _max?: NestedEnummessages_statusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumtags_tierFilter<$PrismaModel = never> = {
    equals?: $Enums.tags_tier | Enumtags_tierFieldRefInput<$PrismaModel>
    in?: $Enums.tags_tier[]
    notIn?: $Enums.tags_tier[]
    not?: NestedEnumtags_tierFilter<$PrismaModel> | $Enums.tags_tier
  }

  export type NestedEnumtags_tierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tags_tier | Enumtags_tierFieldRefInput<$PrismaModel>
    in?: $Enums.tags_tier[]
    notIn?: $Enums.tags_tier[]
    not?: NestedEnumtags_tierWithAggregatesFilter<$PrismaModel> | $Enums.tags_tier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtags_tierFilter<$PrismaModel>
    _max?: NestedEnumtags_tierFilter<$PrismaModel>
  }

  export type NestedEnumfriendships_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.friendships_status | Enumfriendships_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.friendships_status[] | null
    notIn?: $Enums.friendships_status[] | null
    not?: NestedEnumfriendships_statusNullableFilter<$PrismaModel> | $Enums.friendships_status | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumfriendships_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.friendships_status | Enumfriendships_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.friendships_status[] | null
    notIn?: $Enums.friendships_status[] | null
    not?: NestedEnumfriendships_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.friendships_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumfriendships_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumfriendships_statusNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumnotifications_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.notifications_type | Enumnotifications_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notifications_type[]
    notIn?: $Enums.notifications_type[]
    not?: NestedEnumnotifications_typeFilter<$PrismaModel> | $Enums.notifications_type
  }

  export type NestedEnumnotifications_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notifications_type | Enumnotifications_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notifications_type[]
    notIn?: $Enums.notifications_type[]
    not?: NestedEnumnotifications_typeWithAggregatesFilter<$PrismaModel> | $Enums.notifications_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnotifications_typeFilter<$PrismaModel>
    _max?: NestedEnumnotifications_typeFilter<$PrismaModel>
  }

  export type conversation_membersCreateWithoutUserInput = {
    joinedAt?: Date | string
    conversation: conversationsCreateNestedOneWithoutMembersInput
  }

  export type conversation_membersUncheckedCreateWithoutUserInput = {
    id?: number
    conversationId: string
    joinedAt?: Date | string
  }

  export type conversation_membersCreateOrConnectWithoutUserInput = {
    where: conversation_membersWhereUniqueInput
    create: XOR<conversation_membersCreateWithoutUserInput, conversation_membersUncheckedCreateWithoutUserInput>
  }

  export type conversation_membersCreateManyUserInputEnvelope = {
    data: conversation_membersCreateManyUserInput | conversation_membersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type friendshipsCreateWithoutUsers_friendships_userIdTousersInput = {
    status?: $Enums.friendships_status | null
    created_at?: Date | string | null
    users_friendships_friendIdTousers: usersCreateNestedOneWithoutFriendships_friendships_friendIdTousersInput
  }

  export type friendshipsUncheckedCreateWithoutUsers_friendships_userIdTousersInput = {
    id?: number
    friendId: number
    status?: $Enums.friendships_status | null
    created_at?: Date | string | null
  }

  export type friendshipsCreateOrConnectWithoutUsers_friendships_userIdTousersInput = {
    where: friendshipsWhereUniqueInput
    create: XOR<friendshipsCreateWithoutUsers_friendships_userIdTousersInput, friendshipsUncheckedCreateWithoutUsers_friendships_userIdTousersInput>
  }

  export type friendshipsCreateManyUsers_friendships_userIdTousersInputEnvelope = {
    data: friendshipsCreateManyUsers_friendships_userIdTousersInput | friendshipsCreateManyUsers_friendships_userIdTousersInput[]
    skipDuplicates?: boolean
  }

  export type friendshipsCreateWithoutUsers_friendships_friendIdTousersInput = {
    status?: $Enums.friendships_status | null
    created_at?: Date | string | null
    users_friendships_userIdTousers: usersCreateNestedOneWithoutFriendships_friendships_userIdTousersInput
  }

  export type friendshipsUncheckedCreateWithoutUsers_friendships_friendIdTousersInput = {
    id?: number
    userId: number
    status?: $Enums.friendships_status | null
    created_at?: Date | string | null
  }

  export type friendshipsCreateOrConnectWithoutUsers_friendships_friendIdTousersInput = {
    where: friendshipsWhereUniqueInput
    create: XOR<friendshipsCreateWithoutUsers_friendships_friendIdTousersInput, friendshipsUncheckedCreateWithoutUsers_friendships_friendIdTousersInput>
  }

  export type friendshipsCreateManyUsers_friendships_friendIdTousersInputEnvelope = {
    data: friendshipsCreateManyUsers_friendships_friendIdTousersInput | friendshipsCreateManyUsers_friendships_friendIdTousersInput[]
    skipDuplicates?: boolean
  }

  export type messagesCreateWithoutSenderInput = {
    id: string
    content: string
    sentAt?: Date | string
    status?: $Enums.messages_status
    senderUsername: string
    senderPfp_id?: string | null
    seen_by?: NullableJsonNullValueInput | InputJsonValue
    conversation: conversationsCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutSenderInput = {
    id: string
    content: string
    sentAt?: Date | string
    status?: $Enums.messages_status
    senderUsername: string
    senderPfp_id?: string | null
    conversationId: string
    seen_by?: NullableJsonNullValueInput | InputJsonValue
  }

  export type messagesCreateOrConnectWithoutSenderInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutSenderInput, messagesUncheckedCreateWithoutSenderInput>
  }

  export type messagesCreateManySenderInputEnvelope = {
    data: messagesCreateManySenderInput | messagesCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutUsersInput = {
    type: $Enums.notifications_type
    content: string
  }

  export type notificationsUncheckedCreateWithoutUsersInput = {
    id?: number
    type: $Enums.notifications_type
    content: string
  }

  export type notificationsCreateOrConnectWithoutUsersInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput>
  }

  export type notificationsCreateManyUsersInputEnvelope = {
    data: notificationsCreateManyUsersInput | notificationsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_atributCreateWithoutUsersInput = {
    pfp_id?: string | null
    tags_used?: NullableJsonNullValueInput | InputJsonValue
    owned_tags?: NullableJsonNullValueInput | InputJsonValue
    pronounces?: NullableJsonNullValueInput | InputJsonValue
    bio?: string | null
  }

  export type user_atributUncheckedCreateWithoutUsersInput = {
    id?: number
    pfp_id?: string | null
    tags_used?: NullableJsonNullValueInput | InputJsonValue
    owned_tags?: NullableJsonNullValueInput | InputJsonValue
    pronounces?: NullableJsonNullValueInput | InputJsonValue
    bio?: string | null
  }

  export type user_atributCreateOrConnectWithoutUsersInput = {
    where: user_atributWhereUniqueInput
    create: XOR<user_atributCreateWithoutUsersInput, user_atributUncheckedCreateWithoutUsersInput>
  }

  export type conversation_membersUpsertWithWhereUniqueWithoutUserInput = {
    where: conversation_membersWhereUniqueInput
    update: XOR<conversation_membersUpdateWithoutUserInput, conversation_membersUncheckedUpdateWithoutUserInput>
    create: XOR<conversation_membersCreateWithoutUserInput, conversation_membersUncheckedCreateWithoutUserInput>
  }

  export type conversation_membersUpdateWithWhereUniqueWithoutUserInput = {
    where: conversation_membersWhereUniqueInput
    data: XOR<conversation_membersUpdateWithoutUserInput, conversation_membersUncheckedUpdateWithoutUserInput>
  }

  export type conversation_membersUpdateManyWithWhereWithoutUserInput = {
    where: conversation_membersScalarWhereInput
    data: XOR<conversation_membersUpdateManyMutationInput, conversation_membersUncheckedUpdateManyWithoutUserInput>
  }

  export type conversation_membersScalarWhereInput = {
    AND?: conversation_membersScalarWhereInput | conversation_membersScalarWhereInput[]
    OR?: conversation_membersScalarWhereInput[]
    NOT?: conversation_membersScalarWhereInput | conversation_membersScalarWhereInput[]
    id?: IntFilter<"conversation_members"> | number
    userId?: IntFilter<"conversation_members"> | number
    conversationId?: StringFilter<"conversation_members"> | string
    joinedAt?: DateTimeFilter<"conversation_members"> | Date | string
  }

  export type friendshipsUpsertWithWhereUniqueWithoutUsers_friendships_userIdTousersInput = {
    where: friendshipsWhereUniqueInput
    update: XOR<friendshipsUpdateWithoutUsers_friendships_userIdTousersInput, friendshipsUncheckedUpdateWithoutUsers_friendships_userIdTousersInput>
    create: XOR<friendshipsCreateWithoutUsers_friendships_userIdTousersInput, friendshipsUncheckedCreateWithoutUsers_friendships_userIdTousersInput>
  }

  export type friendshipsUpdateWithWhereUniqueWithoutUsers_friendships_userIdTousersInput = {
    where: friendshipsWhereUniqueInput
    data: XOR<friendshipsUpdateWithoutUsers_friendships_userIdTousersInput, friendshipsUncheckedUpdateWithoutUsers_friendships_userIdTousersInput>
  }

  export type friendshipsUpdateManyWithWhereWithoutUsers_friendships_userIdTousersInput = {
    where: friendshipsScalarWhereInput
    data: XOR<friendshipsUpdateManyMutationInput, friendshipsUncheckedUpdateManyWithoutUsers_friendships_userIdTousersInput>
  }

  export type friendshipsScalarWhereInput = {
    AND?: friendshipsScalarWhereInput | friendshipsScalarWhereInput[]
    OR?: friendshipsScalarWhereInput[]
    NOT?: friendshipsScalarWhereInput | friendshipsScalarWhereInput[]
    id?: IntFilter<"friendships"> | number
    userId?: IntFilter<"friendships"> | number
    friendId?: IntFilter<"friendships"> | number
    status?: Enumfriendships_statusNullableFilter<"friendships"> | $Enums.friendships_status | null
    created_at?: DateTimeNullableFilter<"friendships"> | Date | string | null
  }

  export type friendshipsUpsertWithWhereUniqueWithoutUsers_friendships_friendIdTousersInput = {
    where: friendshipsWhereUniqueInput
    update: XOR<friendshipsUpdateWithoutUsers_friendships_friendIdTousersInput, friendshipsUncheckedUpdateWithoutUsers_friendships_friendIdTousersInput>
    create: XOR<friendshipsCreateWithoutUsers_friendships_friendIdTousersInput, friendshipsUncheckedCreateWithoutUsers_friendships_friendIdTousersInput>
  }

  export type friendshipsUpdateWithWhereUniqueWithoutUsers_friendships_friendIdTousersInput = {
    where: friendshipsWhereUniqueInput
    data: XOR<friendshipsUpdateWithoutUsers_friendships_friendIdTousersInput, friendshipsUncheckedUpdateWithoutUsers_friendships_friendIdTousersInput>
  }

  export type friendshipsUpdateManyWithWhereWithoutUsers_friendships_friendIdTousersInput = {
    where: friendshipsScalarWhereInput
    data: XOR<friendshipsUpdateManyMutationInput, friendshipsUncheckedUpdateManyWithoutUsers_friendships_friendIdTousersInput>
  }

  export type messagesUpsertWithWhereUniqueWithoutSenderInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutSenderInput, messagesUncheckedUpdateWithoutSenderInput>
    create: XOR<messagesCreateWithoutSenderInput, messagesUncheckedCreateWithoutSenderInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutSenderInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutSenderInput, messagesUncheckedUpdateWithoutSenderInput>
  }

  export type messagesUpdateManyWithWhereWithoutSenderInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutSenderInput>
  }

  export type messagesScalarWhereInput = {
    AND?: messagesScalarWhereInput | messagesScalarWhereInput[]
    OR?: messagesScalarWhereInput[]
    NOT?: messagesScalarWhereInput | messagesScalarWhereInput[]
    id?: StringFilter<"messages"> | string
    content?: StringFilter<"messages"> | string
    sentAt?: DateTimeFilter<"messages"> | Date | string
    status?: Enummessages_statusFilter<"messages"> | $Enums.messages_status
    senderId?: IntFilter<"messages"> | number
    senderUsername?: StringFilter<"messages"> | string
    senderPfp_id?: StringNullableFilter<"messages"> | string | null
    conversationId?: StringFilter<"messages"> | string
    seen_by?: JsonNullableFilter<"messages">
  }

  export type notificationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutUsersInput, notificationsUncheckedUpdateWithoutUsersInput>
    create: XOR<notificationsCreateWithoutUsersInput, notificationsUncheckedCreateWithoutUsersInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutUsersInput, notificationsUncheckedUpdateWithoutUsersInput>
  }

  export type notificationsUpdateManyWithWhereWithoutUsersInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutUsersInput>
  }

  export type notificationsScalarWhereInput = {
    AND?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    OR?: notificationsScalarWhereInput[]
    NOT?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    id?: IntFilter<"notifications"> | number
    userId?: IntFilter<"notifications"> | number
    type?: Enumnotifications_typeFilter<"notifications"> | $Enums.notifications_type
    content?: StringFilter<"notifications"> | string
  }

  export type user_atributUpsertWithoutUsersInput = {
    update: XOR<user_atributUpdateWithoutUsersInput, user_atributUncheckedUpdateWithoutUsersInput>
    create: XOR<user_atributCreateWithoutUsersInput, user_atributUncheckedCreateWithoutUsersInput>
    where?: user_atributWhereInput
  }

  export type user_atributUpdateToOneWithWhereWithoutUsersInput = {
    where?: user_atributWhereInput
    data: XOR<user_atributUpdateWithoutUsersInput, user_atributUncheckedUpdateWithoutUsersInput>
  }

  export type user_atributUpdateWithoutUsersInput = {
    pfp_id?: NullableStringFieldUpdateOperationsInput | string | null
    tags_used?: NullableJsonNullValueInput | InputJsonValue
    owned_tags?: NullableJsonNullValueInput | InputJsonValue
    pronounces?: NullableJsonNullValueInput | InputJsonValue
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_atributUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    pfp_id?: NullableStringFieldUpdateOperationsInput | string | null
    tags_used?: NullableJsonNullValueInput | InputJsonValue
    owned_tags?: NullableJsonNullValueInput | InputJsonValue
    pronounces?: NullableJsonNullValueInput | InputJsonValue
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateWithoutConversationMembersInput = {
    username: string
    provider: string
    email?: string | null
    email_name?: string | null
    phone_number?: string | null
    dial_code?: string | null
    createdAt: Date | string
    friendships_friendships_userIdTousers?: friendshipsCreateNestedManyWithoutUsers_friendships_userIdTousersInput
    friendships_friendships_friendIdTousers?: friendshipsCreateNestedManyWithoutUsers_friendships_friendIdTousersInput
    sentMessages?: messagesCreateNestedManyWithoutSenderInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    user_atribut?: user_atributCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutConversationMembersInput = {
    userId?: number
    username: string
    provider: string
    email?: string | null
    email_name?: string | null
    phone_number?: string | null
    dial_code?: string | null
    createdAt: Date | string
    friendships_friendships_userIdTousers?: friendshipsUncheckedCreateNestedManyWithoutUsers_friendships_userIdTousersInput
    friendships_friendships_friendIdTousers?: friendshipsUncheckedCreateNestedManyWithoutUsers_friendships_friendIdTousersInput
    sentMessages?: messagesUncheckedCreateNestedManyWithoutSenderInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    user_atribut?: user_atributUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutConversationMembersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutConversationMembersInput, usersUncheckedCreateWithoutConversationMembersInput>
  }

  export type conversationsCreateWithoutMembersInput = {
    id?: string
    isGroup?: boolean
    createdAt?: Date | string
    group_atributs?: group_atributsCreateNestedOneWithoutConversationsInput
    messages?: messagesCreateNestedManyWithoutConversationInput
  }

  export type conversationsUncheckedCreateWithoutMembersInput = {
    id?: string
    isGroup?: boolean
    createdAt?: Date | string
    group_atributs?: group_atributsUncheckedCreateNestedOneWithoutConversationsInput
    messages?: messagesUncheckedCreateNestedManyWithoutConversationInput
  }

  export type conversationsCreateOrConnectWithoutMembersInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutMembersInput, conversationsUncheckedCreateWithoutMembersInput>
  }

  export type usersUpsertWithoutConversationMembersInput = {
    update: XOR<usersUpdateWithoutConversationMembersInput, usersUncheckedUpdateWithoutConversationMembersInput>
    create: XOR<usersCreateWithoutConversationMembersInput, usersUncheckedCreateWithoutConversationMembersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutConversationMembersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutConversationMembersInput, usersUncheckedUpdateWithoutConversationMembersInput>
  }

  export type usersUpdateWithoutConversationMembersInput = {
    username?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    dial_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friendships_friendships_userIdTousers?: friendshipsUpdateManyWithoutUsers_friendships_userIdTousersNestedInput
    friendships_friendships_friendIdTousers?: friendshipsUpdateManyWithoutUsers_friendships_friendIdTousersNestedInput
    sentMessages?: messagesUpdateManyWithoutSenderNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    user_atribut?: user_atributUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutConversationMembersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    dial_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friendships_friendships_userIdTousers?: friendshipsUncheckedUpdateManyWithoutUsers_friendships_userIdTousersNestedInput
    friendships_friendships_friendIdTousers?: friendshipsUncheckedUpdateManyWithoutUsers_friendships_friendIdTousersNestedInput
    sentMessages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    user_atribut?: user_atributUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type conversationsUpsertWithoutMembersInput = {
    update: XOR<conversationsUpdateWithoutMembersInput, conversationsUncheckedUpdateWithoutMembersInput>
    create: XOR<conversationsCreateWithoutMembersInput, conversationsUncheckedCreateWithoutMembersInput>
    where?: conversationsWhereInput
  }

  export type conversationsUpdateToOneWithWhereWithoutMembersInput = {
    where?: conversationsWhereInput
    data: XOR<conversationsUpdateWithoutMembersInput, conversationsUncheckedUpdateWithoutMembersInput>
  }

  export type conversationsUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group_atributs?: group_atributsUpdateOneWithoutConversationsNestedInput
    messages?: messagesUpdateManyWithoutConversationNestedInput
  }

  export type conversationsUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group_atributs?: group_atributsUncheckedUpdateOneWithoutConversationsNestedInput
    messages?: messagesUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type usersCreateWithoutSentMessagesInput = {
    username: string
    provider: string
    email?: string | null
    email_name?: string | null
    phone_number?: string | null
    dial_code?: string | null
    createdAt: Date | string
    conversationMembers?: conversation_membersCreateNestedManyWithoutUserInput
    friendships_friendships_userIdTousers?: friendshipsCreateNestedManyWithoutUsers_friendships_userIdTousersInput
    friendships_friendships_friendIdTousers?: friendshipsCreateNestedManyWithoutUsers_friendships_friendIdTousersInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    user_atribut?: user_atributCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSentMessagesInput = {
    userId?: number
    username: string
    provider: string
    email?: string | null
    email_name?: string | null
    phone_number?: string | null
    dial_code?: string | null
    createdAt: Date | string
    conversationMembers?: conversation_membersUncheckedCreateNestedManyWithoutUserInput
    friendships_friendships_userIdTousers?: friendshipsUncheckedCreateNestedManyWithoutUsers_friendships_userIdTousersInput
    friendships_friendships_friendIdTousers?: friendshipsUncheckedCreateNestedManyWithoutUsers_friendships_friendIdTousersInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    user_atribut?: user_atributUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSentMessagesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSentMessagesInput, usersUncheckedCreateWithoutSentMessagesInput>
  }

  export type conversationsCreateWithoutMessagesInput = {
    id?: string
    isGroup?: boolean
    createdAt?: Date | string
    members?: conversation_membersCreateNestedManyWithoutConversationInput
    group_atributs?: group_atributsCreateNestedOneWithoutConversationsInput
  }

  export type conversationsUncheckedCreateWithoutMessagesInput = {
    id?: string
    isGroup?: boolean
    createdAt?: Date | string
    members?: conversation_membersUncheckedCreateNestedManyWithoutConversationInput
    group_atributs?: group_atributsUncheckedCreateNestedOneWithoutConversationsInput
  }

  export type conversationsCreateOrConnectWithoutMessagesInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
  }

  export type usersUpsertWithoutSentMessagesInput = {
    update: XOR<usersUpdateWithoutSentMessagesInput, usersUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<usersCreateWithoutSentMessagesInput, usersUncheckedCreateWithoutSentMessagesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSentMessagesInput, usersUncheckedUpdateWithoutSentMessagesInput>
  }

  export type usersUpdateWithoutSentMessagesInput = {
    username?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    dial_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: conversation_membersUpdateManyWithoutUserNestedInput
    friendships_friendships_userIdTousers?: friendshipsUpdateManyWithoutUsers_friendships_userIdTousersNestedInput
    friendships_friendships_friendIdTousers?: friendshipsUpdateManyWithoutUsers_friendships_friendIdTousersNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    user_atribut?: user_atributUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSentMessagesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    dial_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: conversation_membersUncheckedUpdateManyWithoutUserNestedInput
    friendships_friendships_userIdTousers?: friendshipsUncheckedUpdateManyWithoutUsers_friendships_userIdTousersNestedInput
    friendships_friendships_friendIdTousers?: friendshipsUncheckedUpdateManyWithoutUsers_friendships_friendIdTousersNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    user_atribut?: user_atributUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type conversationsUpsertWithoutMessagesInput = {
    update: XOR<conversationsUpdateWithoutMessagesInput, conversationsUncheckedUpdateWithoutMessagesInput>
    create: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    where?: conversationsWhereInput
  }

  export type conversationsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: conversationsWhereInput
    data: XOR<conversationsUpdateWithoutMessagesInput, conversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type conversationsUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: conversation_membersUpdateManyWithoutConversationNestedInput
    group_atributs?: group_atributsUpdateOneWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: conversation_membersUncheckedUpdateManyWithoutConversationNestedInput
    group_atributs?: group_atributsUncheckedUpdateOneWithoutConversationsNestedInput
  }

  export type conversation_membersCreateWithoutConversationInput = {
    joinedAt?: Date | string
    user: usersCreateNestedOneWithoutConversationMembersInput
  }

  export type conversation_membersUncheckedCreateWithoutConversationInput = {
    id?: number
    userId: number
    joinedAt?: Date | string
  }

  export type conversation_membersCreateOrConnectWithoutConversationInput = {
    where: conversation_membersWhereUniqueInput
    create: XOR<conversation_membersCreateWithoutConversationInput, conversation_membersUncheckedCreateWithoutConversationInput>
  }

  export type conversation_membersCreateManyConversationInputEnvelope = {
    data: conversation_membersCreateManyConversationInput | conversation_membersCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type group_atributsCreateWithoutConversationsInput = {
    group_name?: string
    group_description?: string | null
    group_pfp?: string | null
  }

  export type group_atributsUncheckedCreateWithoutConversationsInput = {
    id?: number
    group_name?: string
    group_description?: string | null
    group_pfp?: string | null
  }

  export type group_atributsCreateOrConnectWithoutConversationsInput = {
    where: group_atributsWhereUniqueInput
    create: XOR<group_atributsCreateWithoutConversationsInput, group_atributsUncheckedCreateWithoutConversationsInput>
  }

  export type messagesCreateWithoutConversationInput = {
    id: string
    content: string
    sentAt?: Date | string
    status?: $Enums.messages_status
    senderUsername: string
    senderPfp_id?: string | null
    seen_by?: NullableJsonNullValueInput | InputJsonValue
    sender: usersCreateNestedOneWithoutSentMessagesInput
  }

  export type messagesUncheckedCreateWithoutConversationInput = {
    id: string
    content: string
    sentAt?: Date | string
    status?: $Enums.messages_status
    senderId: number
    senderUsername: string
    senderPfp_id?: string | null
    seen_by?: NullableJsonNullValueInput | InputJsonValue
  }

  export type messagesCreateOrConnectWithoutConversationInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutConversationInput, messagesUncheckedCreateWithoutConversationInput>
  }

  export type messagesCreateManyConversationInputEnvelope = {
    data: messagesCreateManyConversationInput | messagesCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type conversation_membersUpsertWithWhereUniqueWithoutConversationInput = {
    where: conversation_membersWhereUniqueInput
    update: XOR<conversation_membersUpdateWithoutConversationInput, conversation_membersUncheckedUpdateWithoutConversationInput>
    create: XOR<conversation_membersCreateWithoutConversationInput, conversation_membersUncheckedCreateWithoutConversationInput>
  }

  export type conversation_membersUpdateWithWhereUniqueWithoutConversationInput = {
    where: conversation_membersWhereUniqueInput
    data: XOR<conversation_membersUpdateWithoutConversationInput, conversation_membersUncheckedUpdateWithoutConversationInput>
  }

  export type conversation_membersUpdateManyWithWhereWithoutConversationInput = {
    where: conversation_membersScalarWhereInput
    data: XOR<conversation_membersUpdateManyMutationInput, conversation_membersUncheckedUpdateManyWithoutConversationInput>
  }

  export type group_atributsUpsertWithoutConversationsInput = {
    update: XOR<group_atributsUpdateWithoutConversationsInput, group_atributsUncheckedUpdateWithoutConversationsInput>
    create: XOR<group_atributsCreateWithoutConversationsInput, group_atributsUncheckedCreateWithoutConversationsInput>
    where?: group_atributsWhereInput
  }

  export type group_atributsUpdateToOneWithWhereWithoutConversationsInput = {
    where?: group_atributsWhereInput
    data: XOR<group_atributsUpdateWithoutConversationsInput, group_atributsUncheckedUpdateWithoutConversationsInput>
  }

  export type group_atributsUpdateWithoutConversationsInput = {
    group_name?: StringFieldUpdateOperationsInput | string
    group_description?: NullableStringFieldUpdateOperationsInput | string | null
    group_pfp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type group_atributsUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    group_name?: StringFieldUpdateOperationsInput | string
    group_description?: NullableStringFieldUpdateOperationsInput | string | null
    group_pfp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messagesUpsertWithWhereUniqueWithoutConversationInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutConversationInput, messagesUncheckedUpdateWithoutConversationInput>
    create: XOR<messagesCreateWithoutConversationInput, messagesUncheckedCreateWithoutConversationInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutConversationInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutConversationInput, messagesUncheckedUpdateWithoutConversationInput>
  }

  export type messagesUpdateManyWithWhereWithoutConversationInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutConversationInput>
  }

  export type usersCreateWithoutUser_atributInput = {
    username: string
    provider: string
    email?: string | null
    email_name?: string | null
    phone_number?: string | null
    dial_code?: string | null
    createdAt: Date | string
    conversationMembers?: conversation_membersCreateNestedManyWithoutUserInput
    friendships_friendships_userIdTousers?: friendshipsCreateNestedManyWithoutUsers_friendships_userIdTousersInput
    friendships_friendships_friendIdTousers?: friendshipsCreateNestedManyWithoutUsers_friendships_friendIdTousersInput
    sentMessages?: messagesCreateNestedManyWithoutSenderInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_atributInput = {
    userId?: number
    username: string
    provider: string
    email?: string | null
    email_name?: string | null
    phone_number?: string | null
    dial_code?: string | null
    createdAt: Date | string
    conversationMembers?: conversation_membersUncheckedCreateNestedManyWithoutUserInput
    friendships_friendships_userIdTousers?: friendshipsUncheckedCreateNestedManyWithoutUsers_friendships_userIdTousersInput
    friendships_friendships_friendIdTousers?: friendshipsUncheckedCreateNestedManyWithoutUsers_friendships_friendIdTousersInput
    sentMessages?: messagesUncheckedCreateNestedManyWithoutSenderInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_atributInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_atributInput, usersUncheckedCreateWithoutUser_atributInput>
  }

  export type usersUpsertWithoutUser_atributInput = {
    update: XOR<usersUpdateWithoutUser_atributInput, usersUncheckedUpdateWithoutUser_atributInput>
    create: XOR<usersCreateWithoutUser_atributInput, usersUncheckedCreateWithoutUser_atributInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_atributInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_atributInput, usersUncheckedUpdateWithoutUser_atributInput>
  }

  export type usersUpdateWithoutUser_atributInput = {
    username?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    dial_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: conversation_membersUpdateManyWithoutUserNestedInput
    friendships_friendships_userIdTousers?: friendshipsUpdateManyWithoutUsers_friendships_userIdTousersNestedInput
    friendships_friendships_friendIdTousers?: friendshipsUpdateManyWithoutUsers_friendships_friendIdTousersNestedInput
    sentMessages?: messagesUpdateManyWithoutSenderNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_atributInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    dial_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: conversation_membersUncheckedUpdateManyWithoutUserNestedInput
    friendships_friendships_userIdTousers?: friendshipsUncheckedUpdateManyWithoutUsers_friendships_userIdTousersNestedInput
    friendships_friendships_friendIdTousers?: friendshipsUncheckedUpdateManyWithoutUsers_friendships_friendIdTousersNestedInput
    sentMessages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutFriendships_friendships_userIdTousersInput = {
    username: string
    provider: string
    email?: string | null
    email_name?: string | null
    phone_number?: string | null
    dial_code?: string | null
    createdAt: Date | string
    conversationMembers?: conversation_membersCreateNestedManyWithoutUserInput
    friendships_friendships_friendIdTousers?: friendshipsCreateNestedManyWithoutUsers_friendships_friendIdTousersInput
    sentMessages?: messagesCreateNestedManyWithoutSenderInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    user_atribut?: user_atributCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutFriendships_friendships_userIdTousersInput = {
    userId?: number
    username: string
    provider: string
    email?: string | null
    email_name?: string | null
    phone_number?: string | null
    dial_code?: string | null
    createdAt: Date | string
    conversationMembers?: conversation_membersUncheckedCreateNestedManyWithoutUserInput
    friendships_friendships_friendIdTousers?: friendshipsUncheckedCreateNestedManyWithoutUsers_friendships_friendIdTousersInput
    sentMessages?: messagesUncheckedCreateNestedManyWithoutSenderInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    user_atribut?: user_atributUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutFriendships_friendships_userIdTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFriendships_friendships_userIdTousersInput, usersUncheckedCreateWithoutFriendships_friendships_userIdTousersInput>
  }

  export type usersCreateWithoutFriendships_friendships_friendIdTousersInput = {
    username: string
    provider: string
    email?: string | null
    email_name?: string | null
    phone_number?: string | null
    dial_code?: string | null
    createdAt: Date | string
    conversationMembers?: conversation_membersCreateNestedManyWithoutUserInput
    friendships_friendships_userIdTousers?: friendshipsCreateNestedManyWithoutUsers_friendships_userIdTousersInput
    sentMessages?: messagesCreateNestedManyWithoutSenderInput
    notifications?: notificationsCreateNestedManyWithoutUsersInput
    user_atribut?: user_atributCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutFriendships_friendships_friendIdTousersInput = {
    userId?: number
    username: string
    provider: string
    email?: string | null
    email_name?: string | null
    phone_number?: string | null
    dial_code?: string | null
    createdAt: Date | string
    conversationMembers?: conversation_membersUncheckedCreateNestedManyWithoutUserInput
    friendships_friendships_userIdTousers?: friendshipsUncheckedCreateNestedManyWithoutUsers_friendships_userIdTousersInput
    sentMessages?: messagesUncheckedCreateNestedManyWithoutSenderInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUsersInput
    user_atribut?: user_atributUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutFriendships_friendships_friendIdTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFriendships_friendships_friendIdTousersInput, usersUncheckedCreateWithoutFriendships_friendships_friendIdTousersInput>
  }

  export type usersUpsertWithoutFriendships_friendships_userIdTousersInput = {
    update: XOR<usersUpdateWithoutFriendships_friendships_userIdTousersInput, usersUncheckedUpdateWithoutFriendships_friendships_userIdTousersInput>
    create: XOR<usersCreateWithoutFriendships_friendships_userIdTousersInput, usersUncheckedCreateWithoutFriendships_friendships_userIdTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFriendships_friendships_userIdTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFriendships_friendships_userIdTousersInput, usersUncheckedUpdateWithoutFriendships_friendships_userIdTousersInput>
  }

  export type usersUpdateWithoutFriendships_friendships_userIdTousersInput = {
    username?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    dial_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: conversation_membersUpdateManyWithoutUserNestedInput
    friendships_friendships_friendIdTousers?: friendshipsUpdateManyWithoutUsers_friendships_friendIdTousersNestedInput
    sentMessages?: messagesUpdateManyWithoutSenderNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    user_atribut?: user_atributUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutFriendships_friendships_userIdTousersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    dial_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: conversation_membersUncheckedUpdateManyWithoutUserNestedInput
    friendships_friendships_friendIdTousers?: friendshipsUncheckedUpdateManyWithoutUsers_friendships_friendIdTousersNestedInput
    sentMessages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    user_atribut?: user_atributUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersUpsertWithoutFriendships_friendships_friendIdTousersInput = {
    update: XOR<usersUpdateWithoutFriendships_friendships_friendIdTousersInput, usersUncheckedUpdateWithoutFriendships_friendships_friendIdTousersInput>
    create: XOR<usersCreateWithoutFriendships_friendships_friendIdTousersInput, usersUncheckedCreateWithoutFriendships_friendships_friendIdTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFriendships_friendships_friendIdTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFriendships_friendships_friendIdTousersInput, usersUncheckedUpdateWithoutFriendships_friendships_friendIdTousersInput>
  }

  export type usersUpdateWithoutFriendships_friendships_friendIdTousersInput = {
    username?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    dial_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: conversation_membersUpdateManyWithoutUserNestedInput
    friendships_friendships_userIdTousers?: friendshipsUpdateManyWithoutUsers_friendships_userIdTousersNestedInput
    sentMessages?: messagesUpdateManyWithoutSenderNestedInput
    notifications?: notificationsUpdateManyWithoutUsersNestedInput
    user_atribut?: user_atributUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutFriendships_friendships_friendIdTousersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    dial_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: conversation_membersUncheckedUpdateManyWithoutUserNestedInput
    friendships_friendships_userIdTousers?: friendshipsUncheckedUpdateManyWithoutUsers_friendships_userIdTousersNestedInput
    sentMessages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUsersNestedInput
    user_atribut?: user_atributUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateWithoutNotificationsInput = {
    username: string
    provider: string
    email?: string | null
    email_name?: string | null
    phone_number?: string | null
    dial_code?: string | null
    createdAt: Date | string
    conversationMembers?: conversation_membersCreateNestedManyWithoutUserInput
    friendships_friendships_userIdTousers?: friendshipsCreateNestedManyWithoutUsers_friendships_userIdTousersInput
    friendships_friendships_friendIdTousers?: friendshipsCreateNestedManyWithoutUsers_friendships_friendIdTousersInput
    sentMessages?: messagesCreateNestedManyWithoutSenderInput
    user_atribut?: user_atributCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutNotificationsInput = {
    userId?: number
    username: string
    provider: string
    email?: string | null
    email_name?: string | null
    phone_number?: string | null
    dial_code?: string | null
    createdAt: Date | string
    conversationMembers?: conversation_membersUncheckedCreateNestedManyWithoutUserInput
    friendships_friendships_userIdTousers?: friendshipsUncheckedCreateNestedManyWithoutUsers_friendships_userIdTousersInput
    friendships_friendships_friendIdTousers?: friendshipsUncheckedCreateNestedManyWithoutUsers_friendships_friendIdTousersInput
    sentMessages?: messagesUncheckedCreateNestedManyWithoutSenderInput
    user_atribut?: user_atributUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutNotificationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
  }

  export type usersUpsertWithoutNotificationsInput = {
    update: XOR<usersUpdateWithoutNotificationsInput, usersUncheckedUpdateWithoutNotificationsInput>
    create: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutNotificationsInput, usersUncheckedUpdateWithoutNotificationsInput>
  }

  export type usersUpdateWithoutNotificationsInput = {
    username?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    dial_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: conversation_membersUpdateManyWithoutUserNestedInput
    friendships_friendships_userIdTousers?: friendshipsUpdateManyWithoutUsers_friendships_userIdTousersNestedInput
    friendships_friendships_friendIdTousers?: friendshipsUpdateManyWithoutUsers_friendships_friendIdTousersNestedInput
    sentMessages?: messagesUpdateManyWithoutSenderNestedInput
    user_atribut?: user_atributUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutNotificationsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    email_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    dial_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: conversation_membersUncheckedUpdateManyWithoutUserNestedInput
    friendships_friendships_userIdTousers?: friendshipsUncheckedUpdateManyWithoutUsers_friendships_userIdTousersNestedInput
    friendships_friendships_friendIdTousers?: friendshipsUncheckedUpdateManyWithoutUsers_friendships_friendIdTousersNestedInput
    sentMessages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
    user_atribut?: user_atributUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type conversationsCreateWithoutGroup_atributsInput = {
    id?: string
    isGroup?: boolean
    createdAt?: Date | string
    members?: conversation_membersCreateNestedManyWithoutConversationInput
    messages?: messagesCreateNestedManyWithoutConversationInput
  }

  export type conversationsUncheckedCreateWithoutGroup_atributsInput = {
    id?: string
    isGroup?: boolean
    createdAt?: Date | string
    members?: conversation_membersUncheckedCreateNestedManyWithoutConversationInput
    messages?: messagesUncheckedCreateNestedManyWithoutConversationInput
  }

  export type conversationsCreateOrConnectWithoutGroup_atributsInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutGroup_atributsInput, conversationsUncheckedCreateWithoutGroup_atributsInput>
  }

  export type conversationsUpsertWithoutGroup_atributsInput = {
    update: XOR<conversationsUpdateWithoutGroup_atributsInput, conversationsUncheckedUpdateWithoutGroup_atributsInput>
    create: XOR<conversationsCreateWithoutGroup_atributsInput, conversationsUncheckedCreateWithoutGroup_atributsInput>
    where?: conversationsWhereInput
  }

  export type conversationsUpdateToOneWithWhereWithoutGroup_atributsInput = {
    where?: conversationsWhereInput
    data: XOR<conversationsUpdateWithoutGroup_atributsInput, conversationsUncheckedUpdateWithoutGroup_atributsInput>
  }

  export type conversationsUpdateWithoutGroup_atributsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: conversation_membersUpdateManyWithoutConversationNestedInput
    messages?: messagesUpdateManyWithoutConversationNestedInput
  }

  export type conversationsUncheckedUpdateWithoutGroup_atributsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: conversation_membersUncheckedUpdateManyWithoutConversationNestedInput
    messages?: messagesUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type conversation_membersCreateManyUserInput = {
    id?: number
    conversationId: string
    joinedAt?: Date | string
  }

  export type friendshipsCreateManyUsers_friendships_userIdTousersInput = {
    id?: number
    friendId: number
    status?: $Enums.friendships_status | null
    created_at?: Date | string | null
  }

  export type friendshipsCreateManyUsers_friendships_friendIdTousersInput = {
    id?: number
    userId: number
    status?: $Enums.friendships_status | null
    created_at?: Date | string | null
  }

  export type messagesCreateManySenderInput = {
    id: string
    content: string
    sentAt?: Date | string
    status?: $Enums.messages_status
    senderUsername: string
    senderPfp_id?: string | null
    conversationId: string
    seen_by?: NullableJsonNullValueInput | InputJsonValue
  }

  export type notificationsCreateManyUsersInput = {
    id?: number
    type: $Enums.notifications_type
    content: string
  }

  export type conversation_membersUpdateWithoutUserInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: conversationsUpdateOneRequiredWithoutMembersNestedInput
  }

  export type conversation_membersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversation_membersUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendshipsUpdateWithoutUsers_friendships_userIdTousersInput = {
    status?: NullableEnumfriendships_statusFieldUpdateOperationsInput | $Enums.friendships_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_friendships_friendIdTousers?: usersUpdateOneRequiredWithoutFriendships_friendships_friendIdTousersNestedInput
  }

  export type friendshipsUncheckedUpdateWithoutUsers_friendships_userIdTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumfriendships_statusFieldUpdateOperationsInput | $Enums.friendships_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type friendshipsUncheckedUpdateManyWithoutUsers_friendships_userIdTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumfriendships_statusFieldUpdateOperationsInput | $Enums.friendships_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type friendshipsUpdateWithoutUsers_friendships_friendIdTousersInput = {
    status?: NullableEnumfriendships_statusFieldUpdateOperationsInput | $Enums.friendships_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_friendships_userIdTousers?: usersUpdateOneRequiredWithoutFriendships_friendships_userIdTousersNestedInput
  }

  export type friendshipsUncheckedUpdateWithoutUsers_friendships_friendIdTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumfriendships_statusFieldUpdateOperationsInput | $Enums.friendships_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type friendshipsUncheckedUpdateManyWithoutUsers_friendships_friendIdTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumfriendships_statusFieldUpdateOperationsInput | $Enums.friendships_status | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messagesUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enummessages_statusFieldUpdateOperationsInput | $Enums.messages_status
    senderUsername?: StringFieldUpdateOperationsInput | string
    senderPfp_id?: NullableStringFieldUpdateOperationsInput | string | null
    seen_by?: NullableJsonNullValueInput | InputJsonValue
    conversation?: conversationsUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enummessages_statusFieldUpdateOperationsInput | $Enums.messages_status
    senderUsername?: StringFieldUpdateOperationsInput | string
    senderPfp_id?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: StringFieldUpdateOperationsInput | string
    seen_by?: NullableJsonNullValueInput | InputJsonValue
  }

  export type messagesUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enummessages_statusFieldUpdateOperationsInput | $Enums.messages_status
    senderUsername?: StringFieldUpdateOperationsInput | string
    senderPfp_id?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: StringFieldUpdateOperationsInput | string
    seen_by?: NullableJsonNullValueInput | InputJsonValue
  }

  export type notificationsUpdateWithoutUsersInput = {
    type?: Enumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type
    content?: StringFieldUpdateOperationsInput | string
  }

  export type notificationsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type
    content?: StringFieldUpdateOperationsInput | string
  }

  export type notificationsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enumnotifications_typeFieldUpdateOperationsInput | $Enums.notifications_type
    content?: StringFieldUpdateOperationsInput | string
  }

  export type conversation_membersCreateManyConversationInput = {
    id?: number
    userId: number
    joinedAt?: Date | string
  }

  export type messagesCreateManyConversationInput = {
    id: string
    content: string
    sentAt?: Date | string
    status?: $Enums.messages_status
    senderId: number
    senderUsername: string
    senderPfp_id?: string | null
    seen_by?: NullableJsonNullValueInput | InputJsonValue
  }

  export type conversation_membersUpdateWithoutConversationInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutConversationMembersNestedInput
  }

  export type conversation_membersUncheckedUpdateWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversation_membersUncheckedUpdateManyWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enummessages_statusFieldUpdateOperationsInput | $Enums.messages_status
    senderUsername?: StringFieldUpdateOperationsInput | string
    senderPfp_id?: NullableStringFieldUpdateOperationsInput | string | null
    seen_by?: NullableJsonNullValueInput | InputJsonValue
    sender?: usersUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enummessages_statusFieldUpdateOperationsInput | $Enums.messages_status
    senderId?: IntFieldUpdateOperationsInput | number
    senderUsername?: StringFieldUpdateOperationsInput | string
    senderPfp_id?: NullableStringFieldUpdateOperationsInput | string | null
    seen_by?: NullableJsonNullValueInput | InputJsonValue
  }

  export type messagesUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enummessages_statusFieldUpdateOperationsInput | $Enums.messages_status
    senderId?: IntFieldUpdateOperationsInput | number
    senderUsername?: StringFieldUpdateOperationsInput | string
    senderPfp_id?: NullableStringFieldUpdateOperationsInput | string | null
    seen_by?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
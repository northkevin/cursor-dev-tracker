
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
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model FileChange
 * 
 */
export type FileChange = $Result.DefaultSelection<Prisma.$FileChangePayload>
/**
 * Model AIInteraction
 * 
 */
export type AIInteraction = $Result.DefaultSelection<Prisma.$AIInteractionPayload>
/**
 * Model Command
 * 
 */
export type Command = $Result.DefaultSelection<Prisma.$CommandPayload>
/**
 * Model GitOperation
 * 
 */
export type GitOperation = $Result.DefaultSelection<Prisma.$GitOperationPayload>
/**
 * Model BuildOperation
 * 
 */
export type BuildOperation = $Result.DefaultSelection<Prisma.$BuildOperationPayload>
/**
 * Model TestOperation
 * 
 */
export type TestOperation = $Result.DefaultSelection<Prisma.$TestOperationPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sessions
 * const sessions = await prisma.session.findMany()
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
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.fileChange`: Exposes CRUD operations for the **FileChange** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileChanges
    * const fileChanges = await prisma.fileChange.findMany()
    * ```
    */
  get fileChange(): Prisma.FileChangeDelegate<ExtArgs>;

  /**
   * `prisma.aIInteraction`: Exposes CRUD operations for the **AIInteraction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIInteractions
    * const aIInteractions = await prisma.aIInteraction.findMany()
    * ```
    */
  get aIInteraction(): Prisma.AIInteractionDelegate<ExtArgs>;

  /**
   * `prisma.command`: Exposes CRUD operations for the **Command** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commands
    * const commands = await prisma.command.findMany()
    * ```
    */
  get command(): Prisma.CommandDelegate<ExtArgs>;

  /**
   * `prisma.gitOperation`: Exposes CRUD operations for the **GitOperation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GitOperations
    * const gitOperations = await prisma.gitOperation.findMany()
    * ```
    */
  get gitOperation(): Prisma.GitOperationDelegate<ExtArgs>;

  /**
   * `prisma.buildOperation`: Exposes CRUD operations for the **BuildOperation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BuildOperations
    * const buildOperations = await prisma.buildOperation.findMany()
    * ```
    */
  get buildOperation(): Prisma.BuildOperationDelegate<ExtArgs>;

  /**
   * `prisma.testOperation`: Exposes CRUD operations for the **TestOperation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestOperations
    * const testOperations = await prisma.testOperation.findMany()
    * ```
    */
  get testOperation(): Prisma.TestOperationDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Session: 'Session',
    FileChange: 'FileChange',
    AIInteraction: 'AIInteraction',
    Command: 'Command',
    GitOperation: 'GitOperation',
    BuildOperation: 'BuildOperation',
    TestOperation: 'TestOperation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "session" | "fileChange" | "aIInteraction" | "command" | "gitOperation" | "buildOperation" | "testOperation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      FileChange: {
        payload: Prisma.$FileChangePayload<ExtArgs>
        fields: Prisma.FileChangeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileChangeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileChangePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileChangeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileChangePayload>
          }
          findFirst: {
            args: Prisma.FileChangeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileChangePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileChangeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileChangePayload>
          }
          findMany: {
            args: Prisma.FileChangeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileChangePayload>[]
          }
          create: {
            args: Prisma.FileChangeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileChangePayload>
          }
          createMany: {
            args: Prisma.FileChangeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileChangeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileChangePayload>[]
          }
          delete: {
            args: Prisma.FileChangeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileChangePayload>
          }
          update: {
            args: Prisma.FileChangeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileChangePayload>
          }
          deleteMany: {
            args: Prisma.FileChangeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileChangeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FileChangeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileChangePayload>
          }
          aggregate: {
            args: Prisma.FileChangeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileChange>
          }
          groupBy: {
            args: Prisma.FileChangeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileChangeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileChangeCountArgs<ExtArgs>
            result: $Utils.Optional<FileChangeCountAggregateOutputType> | number
          }
        }
      }
      AIInteraction: {
        payload: Prisma.$AIInteractionPayload<ExtArgs>
        fields: Prisma.AIInteractionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIInteractionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIInteractionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload>
          }
          findFirst: {
            args: Prisma.AIInteractionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIInteractionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload>
          }
          findMany: {
            args: Prisma.AIInteractionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload>[]
          }
          create: {
            args: Prisma.AIInteractionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload>
          }
          createMany: {
            args: Prisma.AIInteractionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIInteractionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload>[]
          }
          delete: {
            args: Prisma.AIInteractionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload>
          }
          update: {
            args: Prisma.AIInteractionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload>
          }
          deleteMany: {
            args: Prisma.AIInteractionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIInteractionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AIInteractionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload>
          }
          aggregate: {
            args: Prisma.AIInteractionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIInteraction>
          }
          groupBy: {
            args: Prisma.AIInteractionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIInteractionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIInteractionCountArgs<ExtArgs>
            result: $Utils.Optional<AIInteractionCountAggregateOutputType> | number
          }
        }
      }
      Command: {
        payload: Prisma.$CommandPayload<ExtArgs>
        fields: Prisma.CommandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>
          }
          findFirst: {
            args: Prisma.CommandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>
          }
          findMany: {
            args: Prisma.CommandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>[]
          }
          create: {
            args: Prisma.CommandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>
          }
          createMany: {
            args: Prisma.CommandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>[]
          }
          delete: {
            args: Prisma.CommandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>
          }
          update: {
            args: Prisma.CommandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>
          }
          deleteMany: {
            args: Prisma.CommandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>
          }
          aggregate: {
            args: Prisma.CommandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommand>
          }
          groupBy: {
            args: Prisma.CommandGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommandGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommandCountArgs<ExtArgs>
            result: $Utils.Optional<CommandCountAggregateOutputType> | number
          }
        }
      }
      GitOperation: {
        payload: Prisma.$GitOperationPayload<ExtArgs>
        fields: Prisma.GitOperationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GitOperationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitOperationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GitOperationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitOperationPayload>
          }
          findFirst: {
            args: Prisma.GitOperationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitOperationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GitOperationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitOperationPayload>
          }
          findMany: {
            args: Prisma.GitOperationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitOperationPayload>[]
          }
          create: {
            args: Prisma.GitOperationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitOperationPayload>
          }
          createMany: {
            args: Prisma.GitOperationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GitOperationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitOperationPayload>[]
          }
          delete: {
            args: Prisma.GitOperationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitOperationPayload>
          }
          update: {
            args: Prisma.GitOperationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitOperationPayload>
          }
          deleteMany: {
            args: Prisma.GitOperationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GitOperationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GitOperationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitOperationPayload>
          }
          aggregate: {
            args: Prisma.GitOperationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGitOperation>
          }
          groupBy: {
            args: Prisma.GitOperationGroupByArgs<ExtArgs>
            result: $Utils.Optional<GitOperationGroupByOutputType>[]
          }
          count: {
            args: Prisma.GitOperationCountArgs<ExtArgs>
            result: $Utils.Optional<GitOperationCountAggregateOutputType> | number
          }
        }
      }
      BuildOperation: {
        payload: Prisma.$BuildOperationPayload<ExtArgs>
        fields: Prisma.BuildOperationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuildOperationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildOperationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuildOperationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildOperationPayload>
          }
          findFirst: {
            args: Prisma.BuildOperationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildOperationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuildOperationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildOperationPayload>
          }
          findMany: {
            args: Prisma.BuildOperationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildOperationPayload>[]
          }
          create: {
            args: Prisma.BuildOperationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildOperationPayload>
          }
          createMany: {
            args: Prisma.BuildOperationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BuildOperationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildOperationPayload>[]
          }
          delete: {
            args: Prisma.BuildOperationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildOperationPayload>
          }
          update: {
            args: Prisma.BuildOperationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildOperationPayload>
          }
          deleteMany: {
            args: Prisma.BuildOperationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuildOperationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BuildOperationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildOperationPayload>
          }
          aggregate: {
            args: Prisma.BuildOperationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuildOperation>
          }
          groupBy: {
            args: Prisma.BuildOperationGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuildOperationGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuildOperationCountArgs<ExtArgs>
            result: $Utils.Optional<BuildOperationCountAggregateOutputType> | number
          }
        }
      }
      TestOperation: {
        payload: Prisma.$TestOperationPayload<ExtArgs>
        fields: Prisma.TestOperationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestOperationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestOperationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestOperationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestOperationPayload>
          }
          findFirst: {
            args: Prisma.TestOperationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestOperationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestOperationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestOperationPayload>
          }
          findMany: {
            args: Prisma.TestOperationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestOperationPayload>[]
          }
          create: {
            args: Prisma.TestOperationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestOperationPayload>
          }
          createMany: {
            args: Prisma.TestOperationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestOperationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestOperationPayload>[]
          }
          delete: {
            args: Prisma.TestOperationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestOperationPayload>
          }
          update: {
            args: Prisma.TestOperationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestOperationPayload>
          }
          deleteMany: {
            args: Prisma.TestOperationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestOperationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestOperationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestOperationPayload>
          }
          aggregate: {
            args: Prisma.TestOperationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestOperation>
          }
          groupBy: {
            args: Prisma.TestOperationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestOperationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestOperationCountArgs<ExtArgs>
            result: $Utils.Optional<TestOperationCountAggregateOutputType> | number
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
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    fileChanges: number
    aiInteractions: number
    commands: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fileChanges?: boolean | SessionCountOutputTypeCountFileChangesArgs
    aiInteractions?: boolean | SessionCountOutputTypeCountAiInteractionsArgs
    commands?: boolean | SessionCountOutputTypeCountCommandsArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountFileChangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileChangeWhereInput
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountAiInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIInteractionWhereInput
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountCommandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    startTime: Date | null
    endTime: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    startTime: Date | null
    endTime: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    startTime: number
    endTime: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    startTime: Date
    endTime: Date | null
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    fileChanges?: boolean | Session$fileChangesArgs<ExtArgs>
    aiInteractions?: boolean | Session$aiInteractionsArgs<ExtArgs>
    commands?: boolean | Session$commandsArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    startTime?: boolean
    endTime?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fileChanges?: boolean | Session$fileChangesArgs<ExtArgs>
    aiInteractions?: boolean | Session$aiInteractionsArgs<ExtArgs>
    commands?: boolean | Session$commandsArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      fileChanges: Prisma.$FileChangePayload<ExtArgs>[]
      aiInteractions: Prisma.$AIInteractionPayload<ExtArgs>[]
      commands: Prisma.$CommandPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startTime: Date
      endTime: Date | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fileChanges<T extends Session$fileChangesArgs<ExtArgs> = {}>(args?: Subset<T, Session$fileChangesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileChangePayload<ExtArgs>, T, "findMany"> | Null>
    aiInteractions<T extends Session$aiInteractionsArgs<ExtArgs> = {}>(args?: Subset<T, Session$aiInteractionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "findMany"> | Null>
    commands<T extends Session$commandsArgs<ExtArgs> = {}>(args?: Subset<T, Session$commandsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly startTime: FieldRef<"Session", 'DateTime'>
    readonly endTime: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data?: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session.fileChanges
   */
  export type Session$fileChangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileChange
     */
    select?: FileChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileChangeInclude<ExtArgs> | null
    where?: FileChangeWhereInput
    orderBy?: FileChangeOrderByWithRelationInput | FileChangeOrderByWithRelationInput[]
    cursor?: FileChangeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileChangeScalarFieldEnum | FileChangeScalarFieldEnum[]
  }

  /**
   * Session.aiInteractions
   */
  export type Session$aiInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    where?: AIInteractionWhereInput
    orderBy?: AIInteractionOrderByWithRelationInput | AIInteractionOrderByWithRelationInput[]
    cursor?: AIInteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIInteractionScalarFieldEnum | AIInteractionScalarFieldEnum[]
  }

  /**
   * Session.commands
   */
  export type Session$commandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    where?: CommandWhereInput
    orderBy?: CommandOrderByWithRelationInput | CommandOrderByWithRelationInput[]
    cursor?: CommandWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandScalarFieldEnum | CommandScalarFieldEnum[]
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model FileChange
   */

  export type AggregateFileChange = {
    _count: FileChangeCountAggregateOutputType | null
    _min: FileChangeMinAggregateOutputType | null
    _max: FileChangeMaxAggregateOutputType | null
  }

  export type FileChangeMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    timestamp: Date | null
    filePath: string | null
    changeType: string | null
  }

  export type FileChangeMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    timestamp: Date | null
    filePath: string | null
    changeType: string | null
  }

  export type FileChangeCountAggregateOutputType = {
    id: number
    sessionId: number
    timestamp: number
    filePath: number
    changeType: number
    _all: number
  }


  export type FileChangeMinAggregateInputType = {
    id?: true
    sessionId?: true
    timestamp?: true
    filePath?: true
    changeType?: true
  }

  export type FileChangeMaxAggregateInputType = {
    id?: true
    sessionId?: true
    timestamp?: true
    filePath?: true
    changeType?: true
  }

  export type FileChangeCountAggregateInputType = {
    id?: true
    sessionId?: true
    timestamp?: true
    filePath?: true
    changeType?: true
    _all?: true
  }

  export type FileChangeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileChange to aggregate.
     */
    where?: FileChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileChanges to fetch.
     */
    orderBy?: FileChangeOrderByWithRelationInput | FileChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileChanges
    **/
    _count?: true | FileChangeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileChangeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileChangeMaxAggregateInputType
  }

  export type GetFileChangeAggregateType<T extends FileChangeAggregateArgs> = {
        [P in keyof T & keyof AggregateFileChange]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileChange[P]>
      : GetScalarType<T[P], AggregateFileChange[P]>
  }




  export type FileChangeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileChangeWhereInput
    orderBy?: FileChangeOrderByWithAggregationInput | FileChangeOrderByWithAggregationInput[]
    by: FileChangeScalarFieldEnum[] | FileChangeScalarFieldEnum
    having?: FileChangeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileChangeCountAggregateInputType | true
    _min?: FileChangeMinAggregateInputType
    _max?: FileChangeMaxAggregateInputType
  }

  export type FileChangeGroupByOutputType = {
    id: string
    sessionId: string
    timestamp: Date
    filePath: string
    changeType: string
    _count: FileChangeCountAggregateOutputType | null
    _min: FileChangeMinAggregateOutputType | null
    _max: FileChangeMaxAggregateOutputType | null
  }

  type GetFileChangeGroupByPayload<T extends FileChangeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileChangeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileChangeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileChangeGroupByOutputType[P]>
            : GetScalarType<T[P], FileChangeGroupByOutputType[P]>
        }
      >
    >


  export type FileChangeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    timestamp?: boolean
    filePath?: boolean
    changeType?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileChange"]>

  export type FileChangeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    timestamp?: boolean
    filePath?: boolean
    changeType?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileChange"]>

  export type FileChangeSelectScalar = {
    id?: boolean
    sessionId?: boolean
    timestamp?: boolean
    filePath?: boolean
    changeType?: boolean
  }

  export type FileChangeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type FileChangeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }

  export type $FileChangePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileChange"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      timestamp: Date
      filePath: string
      changeType: string
    }, ExtArgs["result"]["fileChange"]>
    composites: {}
  }

  type FileChangeGetPayload<S extends boolean | null | undefined | FileChangeDefaultArgs> = $Result.GetResult<Prisma.$FileChangePayload, S>

  type FileChangeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FileChangeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FileChangeCountAggregateInputType | true
    }

  export interface FileChangeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileChange'], meta: { name: 'FileChange' } }
    /**
     * Find zero or one FileChange that matches the filter.
     * @param {FileChangeFindUniqueArgs} args - Arguments to find a FileChange
     * @example
     * // Get one FileChange
     * const fileChange = await prisma.fileChange.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileChangeFindUniqueArgs>(args: SelectSubset<T, FileChangeFindUniqueArgs<ExtArgs>>): Prisma__FileChangeClient<$Result.GetResult<Prisma.$FileChangePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FileChange that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FileChangeFindUniqueOrThrowArgs} args - Arguments to find a FileChange
     * @example
     * // Get one FileChange
     * const fileChange = await prisma.fileChange.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileChangeFindUniqueOrThrowArgs>(args: SelectSubset<T, FileChangeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileChangeClient<$Result.GetResult<Prisma.$FileChangePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FileChange that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileChangeFindFirstArgs} args - Arguments to find a FileChange
     * @example
     * // Get one FileChange
     * const fileChange = await prisma.fileChange.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileChangeFindFirstArgs>(args?: SelectSubset<T, FileChangeFindFirstArgs<ExtArgs>>): Prisma__FileChangeClient<$Result.GetResult<Prisma.$FileChangePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FileChange that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileChangeFindFirstOrThrowArgs} args - Arguments to find a FileChange
     * @example
     * // Get one FileChange
     * const fileChange = await prisma.fileChange.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileChangeFindFirstOrThrowArgs>(args?: SelectSubset<T, FileChangeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileChangeClient<$Result.GetResult<Prisma.$FileChangePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FileChanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileChangeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileChanges
     * const fileChanges = await prisma.fileChange.findMany()
     * 
     * // Get first 10 FileChanges
     * const fileChanges = await prisma.fileChange.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileChangeWithIdOnly = await prisma.fileChange.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileChangeFindManyArgs>(args?: SelectSubset<T, FileChangeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileChangePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FileChange.
     * @param {FileChangeCreateArgs} args - Arguments to create a FileChange.
     * @example
     * // Create one FileChange
     * const FileChange = await prisma.fileChange.create({
     *   data: {
     *     // ... data to create a FileChange
     *   }
     * })
     * 
     */
    create<T extends FileChangeCreateArgs>(args: SelectSubset<T, FileChangeCreateArgs<ExtArgs>>): Prisma__FileChangeClient<$Result.GetResult<Prisma.$FileChangePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FileChanges.
     * @param {FileChangeCreateManyArgs} args - Arguments to create many FileChanges.
     * @example
     * // Create many FileChanges
     * const fileChange = await prisma.fileChange.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileChangeCreateManyArgs>(args?: SelectSubset<T, FileChangeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileChanges and returns the data saved in the database.
     * @param {FileChangeCreateManyAndReturnArgs} args - Arguments to create many FileChanges.
     * @example
     * // Create many FileChanges
     * const fileChange = await prisma.fileChange.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileChanges and only return the `id`
     * const fileChangeWithIdOnly = await prisma.fileChange.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileChangeCreateManyAndReturnArgs>(args?: SelectSubset<T, FileChangeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileChangePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FileChange.
     * @param {FileChangeDeleteArgs} args - Arguments to delete one FileChange.
     * @example
     * // Delete one FileChange
     * const FileChange = await prisma.fileChange.delete({
     *   where: {
     *     // ... filter to delete one FileChange
     *   }
     * })
     * 
     */
    delete<T extends FileChangeDeleteArgs>(args: SelectSubset<T, FileChangeDeleteArgs<ExtArgs>>): Prisma__FileChangeClient<$Result.GetResult<Prisma.$FileChangePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FileChange.
     * @param {FileChangeUpdateArgs} args - Arguments to update one FileChange.
     * @example
     * // Update one FileChange
     * const fileChange = await prisma.fileChange.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileChangeUpdateArgs>(args: SelectSubset<T, FileChangeUpdateArgs<ExtArgs>>): Prisma__FileChangeClient<$Result.GetResult<Prisma.$FileChangePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FileChanges.
     * @param {FileChangeDeleteManyArgs} args - Arguments to filter FileChanges to delete.
     * @example
     * // Delete a few FileChanges
     * const { count } = await prisma.fileChange.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileChangeDeleteManyArgs>(args?: SelectSubset<T, FileChangeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileChanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileChangeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileChanges
     * const fileChange = await prisma.fileChange.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileChangeUpdateManyArgs>(args: SelectSubset<T, FileChangeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FileChange.
     * @param {FileChangeUpsertArgs} args - Arguments to update or create a FileChange.
     * @example
     * // Update or create a FileChange
     * const fileChange = await prisma.fileChange.upsert({
     *   create: {
     *     // ... data to create a FileChange
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileChange we want to update
     *   }
     * })
     */
    upsert<T extends FileChangeUpsertArgs>(args: SelectSubset<T, FileChangeUpsertArgs<ExtArgs>>): Prisma__FileChangeClient<$Result.GetResult<Prisma.$FileChangePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FileChanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileChangeCountArgs} args - Arguments to filter FileChanges to count.
     * @example
     * // Count the number of FileChanges
     * const count = await prisma.fileChange.count({
     *   where: {
     *     // ... the filter for the FileChanges we want to count
     *   }
     * })
    **/
    count<T extends FileChangeCountArgs>(
      args?: Subset<T, FileChangeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileChangeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileChange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileChangeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileChangeAggregateArgs>(args: Subset<T, FileChangeAggregateArgs>): Prisma.PrismaPromise<GetFileChangeAggregateType<T>>

    /**
     * Group by FileChange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileChangeGroupByArgs} args - Group by arguments.
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
      T extends FileChangeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileChangeGroupByArgs['orderBy'] }
        : { orderBy?: FileChangeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileChangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileChangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileChange model
   */
  readonly fields: FileChangeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileChange.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileChangeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the FileChange model
   */ 
  interface FileChangeFieldRefs {
    readonly id: FieldRef<"FileChange", 'String'>
    readonly sessionId: FieldRef<"FileChange", 'String'>
    readonly timestamp: FieldRef<"FileChange", 'DateTime'>
    readonly filePath: FieldRef<"FileChange", 'String'>
    readonly changeType: FieldRef<"FileChange", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FileChange findUnique
   */
  export type FileChangeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileChange
     */
    select?: FileChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileChangeInclude<ExtArgs> | null
    /**
     * Filter, which FileChange to fetch.
     */
    where: FileChangeWhereUniqueInput
  }

  /**
   * FileChange findUniqueOrThrow
   */
  export type FileChangeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileChange
     */
    select?: FileChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileChangeInclude<ExtArgs> | null
    /**
     * Filter, which FileChange to fetch.
     */
    where: FileChangeWhereUniqueInput
  }

  /**
   * FileChange findFirst
   */
  export type FileChangeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileChange
     */
    select?: FileChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileChangeInclude<ExtArgs> | null
    /**
     * Filter, which FileChange to fetch.
     */
    where?: FileChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileChanges to fetch.
     */
    orderBy?: FileChangeOrderByWithRelationInput | FileChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileChanges.
     */
    cursor?: FileChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileChanges.
     */
    distinct?: FileChangeScalarFieldEnum | FileChangeScalarFieldEnum[]
  }

  /**
   * FileChange findFirstOrThrow
   */
  export type FileChangeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileChange
     */
    select?: FileChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileChangeInclude<ExtArgs> | null
    /**
     * Filter, which FileChange to fetch.
     */
    where?: FileChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileChanges to fetch.
     */
    orderBy?: FileChangeOrderByWithRelationInput | FileChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileChanges.
     */
    cursor?: FileChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileChanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileChanges.
     */
    distinct?: FileChangeScalarFieldEnum | FileChangeScalarFieldEnum[]
  }

  /**
   * FileChange findMany
   */
  export type FileChangeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileChange
     */
    select?: FileChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileChangeInclude<ExtArgs> | null
    /**
     * Filter, which FileChanges to fetch.
     */
    where?: FileChangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileChanges to fetch.
     */
    orderBy?: FileChangeOrderByWithRelationInput | FileChangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileChanges.
     */
    cursor?: FileChangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileChanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileChanges.
     */
    skip?: number
    distinct?: FileChangeScalarFieldEnum | FileChangeScalarFieldEnum[]
  }

  /**
   * FileChange create
   */
  export type FileChangeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileChange
     */
    select?: FileChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileChangeInclude<ExtArgs> | null
    /**
     * The data needed to create a FileChange.
     */
    data: XOR<FileChangeCreateInput, FileChangeUncheckedCreateInput>
  }

  /**
   * FileChange createMany
   */
  export type FileChangeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileChanges.
     */
    data: FileChangeCreateManyInput | FileChangeCreateManyInput[]
  }

  /**
   * FileChange createManyAndReturn
   */
  export type FileChangeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileChange
     */
    select?: FileChangeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FileChanges.
     */
    data: FileChangeCreateManyInput | FileChangeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileChangeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileChange update
   */
  export type FileChangeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileChange
     */
    select?: FileChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileChangeInclude<ExtArgs> | null
    /**
     * The data needed to update a FileChange.
     */
    data: XOR<FileChangeUpdateInput, FileChangeUncheckedUpdateInput>
    /**
     * Choose, which FileChange to update.
     */
    where: FileChangeWhereUniqueInput
  }

  /**
   * FileChange updateMany
   */
  export type FileChangeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileChanges.
     */
    data: XOR<FileChangeUpdateManyMutationInput, FileChangeUncheckedUpdateManyInput>
    /**
     * Filter which FileChanges to update
     */
    where?: FileChangeWhereInput
  }

  /**
   * FileChange upsert
   */
  export type FileChangeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileChange
     */
    select?: FileChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileChangeInclude<ExtArgs> | null
    /**
     * The filter to search for the FileChange to update in case it exists.
     */
    where: FileChangeWhereUniqueInput
    /**
     * In case the FileChange found by the `where` argument doesn't exist, create a new FileChange with this data.
     */
    create: XOR<FileChangeCreateInput, FileChangeUncheckedCreateInput>
    /**
     * In case the FileChange was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileChangeUpdateInput, FileChangeUncheckedUpdateInput>
  }

  /**
   * FileChange delete
   */
  export type FileChangeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileChange
     */
    select?: FileChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileChangeInclude<ExtArgs> | null
    /**
     * Filter which FileChange to delete.
     */
    where: FileChangeWhereUniqueInput
  }

  /**
   * FileChange deleteMany
   */
  export type FileChangeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileChanges to delete
     */
    where?: FileChangeWhereInput
  }

  /**
   * FileChange without action
   */
  export type FileChangeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileChange
     */
    select?: FileChangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileChangeInclude<ExtArgs> | null
  }


  /**
   * Model AIInteraction
   */

  export type AggregateAIInteraction = {
    _count: AIInteractionCountAggregateOutputType | null
    _min: AIInteractionMinAggregateOutputType | null
    _max: AIInteractionMaxAggregateOutputType | null
  }

  export type AIInteractionMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    timestamp: Date | null
    prompt: string | null
    response: string | null
  }

  export type AIInteractionMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    timestamp: Date | null
    prompt: string | null
    response: string | null
  }

  export type AIInteractionCountAggregateOutputType = {
    id: number
    sessionId: number
    timestamp: number
    prompt: number
    response: number
    _all: number
  }


  export type AIInteractionMinAggregateInputType = {
    id?: true
    sessionId?: true
    timestamp?: true
    prompt?: true
    response?: true
  }

  export type AIInteractionMaxAggregateInputType = {
    id?: true
    sessionId?: true
    timestamp?: true
    prompt?: true
    response?: true
  }

  export type AIInteractionCountAggregateInputType = {
    id?: true
    sessionId?: true
    timestamp?: true
    prompt?: true
    response?: true
    _all?: true
  }

  export type AIInteractionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIInteraction to aggregate.
     */
    where?: AIInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInteractions to fetch.
     */
    orderBy?: AIInteractionOrderByWithRelationInput | AIInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIInteractions
    **/
    _count?: true | AIInteractionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIInteractionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIInteractionMaxAggregateInputType
  }

  export type GetAIInteractionAggregateType<T extends AIInteractionAggregateArgs> = {
        [P in keyof T & keyof AggregateAIInteraction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIInteraction[P]>
      : GetScalarType<T[P], AggregateAIInteraction[P]>
  }




  export type AIInteractionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIInteractionWhereInput
    orderBy?: AIInteractionOrderByWithAggregationInput | AIInteractionOrderByWithAggregationInput[]
    by: AIInteractionScalarFieldEnum[] | AIInteractionScalarFieldEnum
    having?: AIInteractionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIInteractionCountAggregateInputType | true
    _min?: AIInteractionMinAggregateInputType
    _max?: AIInteractionMaxAggregateInputType
  }

  export type AIInteractionGroupByOutputType = {
    id: string
    sessionId: string
    timestamp: Date
    prompt: string
    response: string
    _count: AIInteractionCountAggregateOutputType | null
    _min: AIInteractionMinAggregateOutputType | null
    _max: AIInteractionMaxAggregateOutputType | null
  }

  type GetAIInteractionGroupByPayload<T extends AIInteractionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIInteractionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIInteractionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIInteractionGroupByOutputType[P]>
            : GetScalarType<T[P], AIInteractionGroupByOutputType[P]>
        }
      >
    >


  export type AIInteractionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    timestamp?: boolean
    prompt?: boolean
    response?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIInteraction"]>

  export type AIInteractionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    timestamp?: boolean
    prompt?: boolean
    response?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIInteraction"]>

  export type AIInteractionSelectScalar = {
    id?: boolean
    sessionId?: boolean
    timestamp?: boolean
    prompt?: boolean
    response?: boolean
  }

  export type AIInteractionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type AIInteractionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }

  export type $AIInteractionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIInteraction"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      timestamp: Date
      prompt: string
      response: string
    }, ExtArgs["result"]["aIInteraction"]>
    composites: {}
  }

  type AIInteractionGetPayload<S extends boolean | null | undefined | AIInteractionDefaultArgs> = $Result.GetResult<Prisma.$AIInteractionPayload, S>

  type AIInteractionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AIInteractionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AIInteractionCountAggregateInputType | true
    }

  export interface AIInteractionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIInteraction'], meta: { name: 'AIInteraction' } }
    /**
     * Find zero or one AIInteraction that matches the filter.
     * @param {AIInteractionFindUniqueArgs} args - Arguments to find a AIInteraction
     * @example
     * // Get one AIInteraction
     * const aIInteraction = await prisma.aIInteraction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIInteractionFindUniqueArgs>(args: SelectSubset<T, AIInteractionFindUniqueArgs<ExtArgs>>): Prisma__AIInteractionClient<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AIInteraction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AIInteractionFindUniqueOrThrowArgs} args - Arguments to find a AIInteraction
     * @example
     * // Get one AIInteraction
     * const aIInteraction = await prisma.aIInteraction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIInteractionFindUniqueOrThrowArgs>(args: SelectSubset<T, AIInteractionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIInteractionClient<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AIInteraction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionFindFirstArgs} args - Arguments to find a AIInteraction
     * @example
     * // Get one AIInteraction
     * const aIInteraction = await prisma.aIInteraction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIInteractionFindFirstArgs>(args?: SelectSubset<T, AIInteractionFindFirstArgs<ExtArgs>>): Prisma__AIInteractionClient<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AIInteraction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionFindFirstOrThrowArgs} args - Arguments to find a AIInteraction
     * @example
     * // Get one AIInteraction
     * const aIInteraction = await prisma.aIInteraction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIInteractionFindFirstOrThrowArgs>(args?: SelectSubset<T, AIInteractionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIInteractionClient<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AIInteractions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIInteractions
     * const aIInteractions = await prisma.aIInteraction.findMany()
     * 
     * // Get first 10 AIInteractions
     * const aIInteractions = await prisma.aIInteraction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIInteractionWithIdOnly = await prisma.aIInteraction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIInteractionFindManyArgs>(args?: SelectSubset<T, AIInteractionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AIInteraction.
     * @param {AIInteractionCreateArgs} args - Arguments to create a AIInteraction.
     * @example
     * // Create one AIInteraction
     * const AIInteraction = await prisma.aIInteraction.create({
     *   data: {
     *     // ... data to create a AIInteraction
     *   }
     * })
     * 
     */
    create<T extends AIInteractionCreateArgs>(args: SelectSubset<T, AIInteractionCreateArgs<ExtArgs>>): Prisma__AIInteractionClient<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AIInteractions.
     * @param {AIInteractionCreateManyArgs} args - Arguments to create many AIInteractions.
     * @example
     * // Create many AIInteractions
     * const aIInteraction = await prisma.aIInteraction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIInteractionCreateManyArgs>(args?: SelectSubset<T, AIInteractionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIInteractions and returns the data saved in the database.
     * @param {AIInteractionCreateManyAndReturnArgs} args - Arguments to create many AIInteractions.
     * @example
     * // Create many AIInteractions
     * const aIInteraction = await prisma.aIInteraction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIInteractions and only return the `id`
     * const aIInteractionWithIdOnly = await prisma.aIInteraction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIInteractionCreateManyAndReturnArgs>(args?: SelectSubset<T, AIInteractionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AIInteraction.
     * @param {AIInteractionDeleteArgs} args - Arguments to delete one AIInteraction.
     * @example
     * // Delete one AIInteraction
     * const AIInteraction = await prisma.aIInteraction.delete({
     *   where: {
     *     // ... filter to delete one AIInteraction
     *   }
     * })
     * 
     */
    delete<T extends AIInteractionDeleteArgs>(args: SelectSubset<T, AIInteractionDeleteArgs<ExtArgs>>): Prisma__AIInteractionClient<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AIInteraction.
     * @param {AIInteractionUpdateArgs} args - Arguments to update one AIInteraction.
     * @example
     * // Update one AIInteraction
     * const aIInteraction = await prisma.aIInteraction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIInteractionUpdateArgs>(args: SelectSubset<T, AIInteractionUpdateArgs<ExtArgs>>): Prisma__AIInteractionClient<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AIInteractions.
     * @param {AIInteractionDeleteManyArgs} args - Arguments to filter AIInteractions to delete.
     * @example
     * // Delete a few AIInteractions
     * const { count } = await prisma.aIInteraction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIInteractionDeleteManyArgs>(args?: SelectSubset<T, AIInteractionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIInteractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIInteractions
     * const aIInteraction = await prisma.aIInteraction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIInteractionUpdateManyArgs>(args: SelectSubset<T, AIInteractionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AIInteraction.
     * @param {AIInteractionUpsertArgs} args - Arguments to update or create a AIInteraction.
     * @example
     * // Update or create a AIInteraction
     * const aIInteraction = await prisma.aIInteraction.upsert({
     *   create: {
     *     // ... data to create a AIInteraction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIInteraction we want to update
     *   }
     * })
     */
    upsert<T extends AIInteractionUpsertArgs>(args: SelectSubset<T, AIInteractionUpsertArgs<ExtArgs>>): Prisma__AIInteractionClient<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AIInteractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionCountArgs} args - Arguments to filter AIInteractions to count.
     * @example
     * // Count the number of AIInteractions
     * const count = await prisma.aIInteraction.count({
     *   where: {
     *     // ... the filter for the AIInteractions we want to count
     *   }
     * })
    **/
    count<T extends AIInteractionCountArgs>(
      args?: Subset<T, AIInteractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIInteractionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIInteraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AIInteractionAggregateArgs>(args: Subset<T, AIInteractionAggregateArgs>): Prisma.PrismaPromise<GetAIInteractionAggregateType<T>>

    /**
     * Group by AIInteraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionGroupByArgs} args - Group by arguments.
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
      T extends AIInteractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIInteractionGroupByArgs['orderBy'] }
        : { orderBy?: AIInteractionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AIInteractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIInteractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIInteraction model
   */
  readonly fields: AIInteractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIInteraction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIInteractionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AIInteraction model
   */ 
  interface AIInteractionFieldRefs {
    readonly id: FieldRef<"AIInteraction", 'String'>
    readonly sessionId: FieldRef<"AIInteraction", 'String'>
    readonly timestamp: FieldRef<"AIInteraction", 'DateTime'>
    readonly prompt: FieldRef<"AIInteraction", 'String'>
    readonly response: FieldRef<"AIInteraction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AIInteraction findUnique
   */
  export type AIInteractionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    /**
     * Filter, which AIInteraction to fetch.
     */
    where: AIInteractionWhereUniqueInput
  }

  /**
   * AIInteraction findUniqueOrThrow
   */
  export type AIInteractionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    /**
     * Filter, which AIInteraction to fetch.
     */
    where: AIInteractionWhereUniqueInput
  }

  /**
   * AIInteraction findFirst
   */
  export type AIInteractionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    /**
     * Filter, which AIInteraction to fetch.
     */
    where?: AIInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInteractions to fetch.
     */
    orderBy?: AIInteractionOrderByWithRelationInput | AIInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIInteractions.
     */
    cursor?: AIInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIInteractions.
     */
    distinct?: AIInteractionScalarFieldEnum | AIInteractionScalarFieldEnum[]
  }

  /**
   * AIInteraction findFirstOrThrow
   */
  export type AIInteractionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    /**
     * Filter, which AIInteraction to fetch.
     */
    where?: AIInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInteractions to fetch.
     */
    orderBy?: AIInteractionOrderByWithRelationInput | AIInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIInteractions.
     */
    cursor?: AIInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIInteractions.
     */
    distinct?: AIInteractionScalarFieldEnum | AIInteractionScalarFieldEnum[]
  }

  /**
   * AIInteraction findMany
   */
  export type AIInteractionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    /**
     * Filter, which AIInteractions to fetch.
     */
    where?: AIInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInteractions to fetch.
     */
    orderBy?: AIInteractionOrderByWithRelationInput | AIInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIInteractions.
     */
    cursor?: AIInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInteractions.
     */
    skip?: number
    distinct?: AIInteractionScalarFieldEnum | AIInteractionScalarFieldEnum[]
  }

  /**
   * AIInteraction create
   */
  export type AIInteractionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    /**
     * The data needed to create a AIInteraction.
     */
    data: XOR<AIInteractionCreateInput, AIInteractionUncheckedCreateInput>
  }

  /**
   * AIInteraction createMany
   */
  export type AIInteractionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIInteractions.
     */
    data: AIInteractionCreateManyInput | AIInteractionCreateManyInput[]
  }

  /**
   * AIInteraction createManyAndReturn
   */
  export type AIInteractionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AIInteractions.
     */
    data: AIInteractionCreateManyInput | AIInteractionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIInteraction update
   */
  export type AIInteractionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    /**
     * The data needed to update a AIInteraction.
     */
    data: XOR<AIInteractionUpdateInput, AIInteractionUncheckedUpdateInput>
    /**
     * Choose, which AIInteraction to update.
     */
    where: AIInteractionWhereUniqueInput
  }

  /**
   * AIInteraction updateMany
   */
  export type AIInteractionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIInteractions.
     */
    data: XOR<AIInteractionUpdateManyMutationInput, AIInteractionUncheckedUpdateManyInput>
    /**
     * Filter which AIInteractions to update
     */
    where?: AIInteractionWhereInput
  }

  /**
   * AIInteraction upsert
   */
  export type AIInteractionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    /**
     * The filter to search for the AIInteraction to update in case it exists.
     */
    where: AIInteractionWhereUniqueInput
    /**
     * In case the AIInteraction found by the `where` argument doesn't exist, create a new AIInteraction with this data.
     */
    create: XOR<AIInteractionCreateInput, AIInteractionUncheckedCreateInput>
    /**
     * In case the AIInteraction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIInteractionUpdateInput, AIInteractionUncheckedUpdateInput>
  }

  /**
   * AIInteraction delete
   */
  export type AIInteractionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    /**
     * Filter which AIInteraction to delete.
     */
    where: AIInteractionWhereUniqueInput
  }

  /**
   * AIInteraction deleteMany
   */
  export type AIInteractionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIInteractions to delete
     */
    where?: AIInteractionWhereInput
  }

  /**
   * AIInteraction without action
   */
  export type AIInteractionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
  }


  /**
   * Model Command
   */

  export type AggregateCommand = {
    _count: CommandCountAggregateOutputType | null
    _min: CommandMinAggregateOutputType | null
    _max: CommandMaxAggregateOutputType | null
  }

  export type CommandMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    timestamp: Date | null
    command: string | null
    type: string | null
  }

  export type CommandMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    timestamp: Date | null
    command: string | null
    type: string | null
  }

  export type CommandCountAggregateOutputType = {
    id: number
    sessionId: number
    timestamp: number
    command: number
    type: number
    _all: number
  }


  export type CommandMinAggregateInputType = {
    id?: true
    sessionId?: true
    timestamp?: true
    command?: true
    type?: true
  }

  export type CommandMaxAggregateInputType = {
    id?: true
    sessionId?: true
    timestamp?: true
    command?: true
    type?: true
  }

  export type CommandCountAggregateInputType = {
    id?: true
    sessionId?: true
    timestamp?: true
    command?: true
    type?: true
    _all?: true
  }

  export type CommandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Command to aggregate.
     */
    where?: CommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commands to fetch.
     */
    orderBy?: CommandOrderByWithRelationInput | CommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commands
    **/
    _count?: true | CommandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommandMaxAggregateInputType
  }

  export type GetCommandAggregateType<T extends CommandAggregateArgs> = {
        [P in keyof T & keyof AggregateCommand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommand[P]>
      : GetScalarType<T[P], AggregateCommand[P]>
  }




  export type CommandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandWhereInput
    orderBy?: CommandOrderByWithAggregationInput | CommandOrderByWithAggregationInput[]
    by: CommandScalarFieldEnum[] | CommandScalarFieldEnum
    having?: CommandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommandCountAggregateInputType | true
    _min?: CommandMinAggregateInputType
    _max?: CommandMaxAggregateInputType
  }

  export type CommandGroupByOutputType = {
    id: string
    sessionId: string
    timestamp: Date
    command: string
    type: string
    _count: CommandCountAggregateOutputType | null
    _min: CommandMinAggregateOutputType | null
    _max: CommandMaxAggregateOutputType | null
  }

  type GetCommandGroupByPayload<T extends CommandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommandGroupByOutputType[P]>
            : GetScalarType<T[P], CommandGroupByOutputType[P]>
        }
      >
    >


  export type CommandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    timestamp?: boolean
    command?: boolean
    type?: boolean
    gitData?: boolean | Command$gitDataArgs<ExtArgs>
    buildData?: boolean | Command$buildDataArgs<ExtArgs>
    testData?: boolean | Command$testDataArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["command"]>

  export type CommandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    timestamp?: boolean
    command?: boolean
    type?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["command"]>

  export type CommandSelectScalar = {
    id?: boolean
    sessionId?: boolean
    timestamp?: boolean
    command?: boolean
    type?: boolean
  }

  export type CommandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gitData?: boolean | Command$gitDataArgs<ExtArgs>
    buildData?: boolean | Command$buildDataArgs<ExtArgs>
    testData?: boolean | Command$testDataArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type CommandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }

  export type $CommandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Command"
    objects: {
      gitData: Prisma.$GitOperationPayload<ExtArgs> | null
      buildData: Prisma.$BuildOperationPayload<ExtArgs> | null
      testData: Prisma.$TestOperationPayload<ExtArgs> | null
      session: Prisma.$SessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      timestamp: Date
      command: string
      type: string
    }, ExtArgs["result"]["command"]>
    composites: {}
  }

  type CommandGetPayload<S extends boolean | null | undefined | CommandDefaultArgs> = $Result.GetResult<Prisma.$CommandPayload, S>

  type CommandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommandFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommandCountAggregateInputType | true
    }

  export interface CommandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Command'], meta: { name: 'Command' } }
    /**
     * Find zero or one Command that matches the filter.
     * @param {CommandFindUniqueArgs} args - Arguments to find a Command
     * @example
     * // Get one Command
     * const command = await prisma.command.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommandFindUniqueArgs>(args: SelectSubset<T, CommandFindUniqueArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Command that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CommandFindUniqueOrThrowArgs} args - Arguments to find a Command
     * @example
     * // Get one Command
     * const command = await prisma.command.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommandFindUniqueOrThrowArgs>(args: SelectSubset<T, CommandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Command that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandFindFirstArgs} args - Arguments to find a Command
     * @example
     * // Get one Command
     * const command = await prisma.command.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommandFindFirstArgs>(args?: SelectSubset<T, CommandFindFirstArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Command that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandFindFirstOrThrowArgs} args - Arguments to find a Command
     * @example
     * // Get one Command
     * const command = await prisma.command.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommandFindFirstOrThrowArgs>(args?: SelectSubset<T, CommandFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Commands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commands
     * const commands = await prisma.command.findMany()
     * 
     * // Get first 10 Commands
     * const commands = await prisma.command.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commandWithIdOnly = await prisma.command.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommandFindManyArgs>(args?: SelectSubset<T, CommandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Command.
     * @param {CommandCreateArgs} args - Arguments to create a Command.
     * @example
     * // Create one Command
     * const Command = await prisma.command.create({
     *   data: {
     *     // ... data to create a Command
     *   }
     * })
     * 
     */
    create<T extends CommandCreateArgs>(args: SelectSubset<T, CommandCreateArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Commands.
     * @param {CommandCreateManyArgs} args - Arguments to create many Commands.
     * @example
     * // Create many Commands
     * const command = await prisma.command.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommandCreateManyArgs>(args?: SelectSubset<T, CommandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commands and returns the data saved in the database.
     * @param {CommandCreateManyAndReturnArgs} args - Arguments to create many Commands.
     * @example
     * // Create many Commands
     * const command = await prisma.command.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commands and only return the `id`
     * const commandWithIdOnly = await prisma.command.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommandCreateManyAndReturnArgs>(args?: SelectSubset<T, CommandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Command.
     * @param {CommandDeleteArgs} args - Arguments to delete one Command.
     * @example
     * // Delete one Command
     * const Command = await prisma.command.delete({
     *   where: {
     *     // ... filter to delete one Command
     *   }
     * })
     * 
     */
    delete<T extends CommandDeleteArgs>(args: SelectSubset<T, CommandDeleteArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Command.
     * @param {CommandUpdateArgs} args - Arguments to update one Command.
     * @example
     * // Update one Command
     * const command = await prisma.command.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommandUpdateArgs>(args: SelectSubset<T, CommandUpdateArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Commands.
     * @param {CommandDeleteManyArgs} args - Arguments to filter Commands to delete.
     * @example
     * // Delete a few Commands
     * const { count } = await prisma.command.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommandDeleteManyArgs>(args?: SelectSubset<T, CommandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commands
     * const command = await prisma.command.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommandUpdateManyArgs>(args: SelectSubset<T, CommandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Command.
     * @param {CommandUpsertArgs} args - Arguments to update or create a Command.
     * @example
     * // Update or create a Command
     * const command = await prisma.command.upsert({
     *   create: {
     *     // ... data to create a Command
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Command we want to update
     *   }
     * })
     */
    upsert<T extends CommandUpsertArgs>(args: SelectSubset<T, CommandUpsertArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandCountArgs} args - Arguments to filter Commands to count.
     * @example
     * // Count the number of Commands
     * const count = await prisma.command.count({
     *   where: {
     *     // ... the filter for the Commands we want to count
     *   }
     * })
    **/
    count<T extends CommandCountArgs>(
      args?: Subset<T, CommandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Command.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommandAggregateArgs>(args: Subset<T, CommandAggregateArgs>): Prisma.PrismaPromise<GetCommandAggregateType<T>>

    /**
     * Group by Command.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandGroupByArgs} args - Group by arguments.
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
      T extends CommandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommandGroupByArgs['orderBy'] }
        : { orderBy?: CommandGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Command model
   */
  readonly fields: CommandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Command.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gitData<T extends Command$gitDataArgs<ExtArgs> = {}>(args?: Subset<T, Command$gitDataArgs<ExtArgs>>): Prisma__GitOperationClient<$Result.GetResult<Prisma.$GitOperationPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    buildData<T extends Command$buildDataArgs<ExtArgs> = {}>(args?: Subset<T, Command$buildDataArgs<ExtArgs>>): Prisma__BuildOperationClient<$Result.GetResult<Prisma.$BuildOperationPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    testData<T extends Command$testDataArgs<ExtArgs> = {}>(args?: Subset<T, Command$testDataArgs<ExtArgs>>): Prisma__TestOperationClient<$Result.GetResult<Prisma.$TestOperationPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Command model
   */ 
  interface CommandFieldRefs {
    readonly id: FieldRef<"Command", 'String'>
    readonly sessionId: FieldRef<"Command", 'String'>
    readonly timestamp: FieldRef<"Command", 'DateTime'>
    readonly command: FieldRef<"Command", 'String'>
    readonly type: FieldRef<"Command", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Command findUnique
   */
  export type CommandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * Filter, which Command to fetch.
     */
    where: CommandWhereUniqueInput
  }

  /**
   * Command findUniqueOrThrow
   */
  export type CommandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * Filter, which Command to fetch.
     */
    where: CommandWhereUniqueInput
  }

  /**
   * Command findFirst
   */
  export type CommandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * Filter, which Command to fetch.
     */
    where?: CommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commands to fetch.
     */
    orderBy?: CommandOrderByWithRelationInput | CommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commands.
     */
    cursor?: CommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commands.
     */
    distinct?: CommandScalarFieldEnum | CommandScalarFieldEnum[]
  }

  /**
   * Command findFirstOrThrow
   */
  export type CommandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * Filter, which Command to fetch.
     */
    where?: CommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commands to fetch.
     */
    orderBy?: CommandOrderByWithRelationInput | CommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commands.
     */
    cursor?: CommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commands.
     */
    distinct?: CommandScalarFieldEnum | CommandScalarFieldEnum[]
  }

  /**
   * Command findMany
   */
  export type CommandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * Filter, which Commands to fetch.
     */
    where?: CommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commands to fetch.
     */
    orderBy?: CommandOrderByWithRelationInput | CommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commands.
     */
    cursor?: CommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commands.
     */
    skip?: number
    distinct?: CommandScalarFieldEnum | CommandScalarFieldEnum[]
  }

  /**
   * Command create
   */
  export type CommandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * The data needed to create a Command.
     */
    data: XOR<CommandCreateInput, CommandUncheckedCreateInput>
  }

  /**
   * Command createMany
   */
  export type CommandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commands.
     */
    data: CommandCreateManyInput | CommandCreateManyInput[]
  }

  /**
   * Command createManyAndReturn
   */
  export type CommandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Commands.
     */
    data: CommandCreateManyInput | CommandCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Command update
   */
  export type CommandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * The data needed to update a Command.
     */
    data: XOR<CommandUpdateInput, CommandUncheckedUpdateInput>
    /**
     * Choose, which Command to update.
     */
    where: CommandWhereUniqueInput
  }

  /**
   * Command updateMany
   */
  export type CommandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commands.
     */
    data: XOR<CommandUpdateManyMutationInput, CommandUncheckedUpdateManyInput>
    /**
     * Filter which Commands to update
     */
    where?: CommandWhereInput
  }

  /**
   * Command upsert
   */
  export type CommandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * The filter to search for the Command to update in case it exists.
     */
    where: CommandWhereUniqueInput
    /**
     * In case the Command found by the `where` argument doesn't exist, create a new Command with this data.
     */
    create: XOR<CommandCreateInput, CommandUncheckedCreateInput>
    /**
     * In case the Command was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommandUpdateInput, CommandUncheckedUpdateInput>
  }

  /**
   * Command delete
   */
  export type CommandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * Filter which Command to delete.
     */
    where: CommandWhereUniqueInput
  }

  /**
   * Command deleteMany
   */
  export type CommandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commands to delete
     */
    where?: CommandWhereInput
  }

  /**
   * Command.gitData
   */
  export type Command$gitDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitOperation
     */
    select?: GitOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitOperationInclude<ExtArgs> | null
    where?: GitOperationWhereInput
  }

  /**
   * Command.buildData
   */
  export type Command$buildDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildOperation
     */
    select?: BuildOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildOperationInclude<ExtArgs> | null
    where?: BuildOperationWhereInput
  }

  /**
   * Command.testData
   */
  export type Command$testDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestOperation
     */
    select?: TestOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestOperationInclude<ExtArgs> | null
    where?: TestOperationWhereInput
  }

  /**
   * Command without action
   */
  export type CommandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
  }


  /**
   * Model GitOperation
   */

  export type AggregateGitOperation = {
    _count: GitOperationCountAggregateOutputType | null
    _min: GitOperationMinAggregateOutputType | null
    _max: GitOperationMaxAggregateOutputType | null
  }

  export type GitOperationMinAggregateOutputType = {
    id: string | null
    commandId: string | null
    operation: string | null
    branch: string | null
    commitHash: string | null
    filesChanged: string | null
  }

  export type GitOperationMaxAggregateOutputType = {
    id: string | null
    commandId: string | null
    operation: string | null
    branch: string | null
    commitHash: string | null
    filesChanged: string | null
  }

  export type GitOperationCountAggregateOutputType = {
    id: number
    commandId: number
    operation: number
    branch: number
    commitHash: number
    filesChanged: number
    _all: number
  }


  export type GitOperationMinAggregateInputType = {
    id?: true
    commandId?: true
    operation?: true
    branch?: true
    commitHash?: true
    filesChanged?: true
  }

  export type GitOperationMaxAggregateInputType = {
    id?: true
    commandId?: true
    operation?: true
    branch?: true
    commitHash?: true
    filesChanged?: true
  }

  export type GitOperationCountAggregateInputType = {
    id?: true
    commandId?: true
    operation?: true
    branch?: true
    commitHash?: true
    filesChanged?: true
    _all?: true
  }

  export type GitOperationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GitOperation to aggregate.
     */
    where?: GitOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitOperations to fetch.
     */
    orderBy?: GitOperationOrderByWithRelationInput | GitOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GitOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GitOperations
    **/
    _count?: true | GitOperationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GitOperationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GitOperationMaxAggregateInputType
  }

  export type GetGitOperationAggregateType<T extends GitOperationAggregateArgs> = {
        [P in keyof T & keyof AggregateGitOperation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGitOperation[P]>
      : GetScalarType<T[P], AggregateGitOperation[P]>
  }




  export type GitOperationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitOperationWhereInput
    orderBy?: GitOperationOrderByWithAggregationInput | GitOperationOrderByWithAggregationInput[]
    by: GitOperationScalarFieldEnum[] | GitOperationScalarFieldEnum
    having?: GitOperationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GitOperationCountAggregateInputType | true
    _min?: GitOperationMinAggregateInputType
    _max?: GitOperationMaxAggregateInputType
  }

  export type GitOperationGroupByOutputType = {
    id: string
    commandId: string
    operation: string
    branch: string
    commitHash: string | null
    filesChanged: string | null
    _count: GitOperationCountAggregateOutputType | null
    _min: GitOperationMinAggregateOutputType | null
    _max: GitOperationMaxAggregateOutputType | null
  }

  type GetGitOperationGroupByPayload<T extends GitOperationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GitOperationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GitOperationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GitOperationGroupByOutputType[P]>
            : GetScalarType<T[P], GitOperationGroupByOutputType[P]>
        }
      >
    >


  export type GitOperationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commandId?: boolean
    operation?: boolean
    branch?: boolean
    commitHash?: boolean
    filesChanged?: boolean
    command?: boolean | CommandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gitOperation"]>

  export type GitOperationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commandId?: boolean
    operation?: boolean
    branch?: boolean
    commitHash?: boolean
    filesChanged?: boolean
    command?: boolean | CommandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gitOperation"]>

  export type GitOperationSelectScalar = {
    id?: boolean
    commandId?: boolean
    operation?: boolean
    branch?: boolean
    commitHash?: boolean
    filesChanged?: boolean
  }

  export type GitOperationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    command?: boolean | CommandDefaultArgs<ExtArgs>
  }
  export type GitOperationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    command?: boolean | CommandDefaultArgs<ExtArgs>
  }

  export type $GitOperationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GitOperation"
    objects: {
      command: Prisma.$CommandPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      commandId: string
      operation: string
      branch: string
      commitHash: string | null
      filesChanged: string | null
    }, ExtArgs["result"]["gitOperation"]>
    composites: {}
  }

  type GitOperationGetPayload<S extends boolean | null | undefined | GitOperationDefaultArgs> = $Result.GetResult<Prisma.$GitOperationPayload, S>

  type GitOperationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GitOperationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GitOperationCountAggregateInputType | true
    }

  export interface GitOperationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GitOperation'], meta: { name: 'GitOperation' } }
    /**
     * Find zero or one GitOperation that matches the filter.
     * @param {GitOperationFindUniqueArgs} args - Arguments to find a GitOperation
     * @example
     * // Get one GitOperation
     * const gitOperation = await prisma.gitOperation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GitOperationFindUniqueArgs>(args: SelectSubset<T, GitOperationFindUniqueArgs<ExtArgs>>): Prisma__GitOperationClient<$Result.GetResult<Prisma.$GitOperationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GitOperation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GitOperationFindUniqueOrThrowArgs} args - Arguments to find a GitOperation
     * @example
     * // Get one GitOperation
     * const gitOperation = await prisma.gitOperation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GitOperationFindUniqueOrThrowArgs>(args: SelectSubset<T, GitOperationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GitOperationClient<$Result.GetResult<Prisma.$GitOperationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GitOperation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitOperationFindFirstArgs} args - Arguments to find a GitOperation
     * @example
     * // Get one GitOperation
     * const gitOperation = await prisma.gitOperation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GitOperationFindFirstArgs>(args?: SelectSubset<T, GitOperationFindFirstArgs<ExtArgs>>): Prisma__GitOperationClient<$Result.GetResult<Prisma.$GitOperationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GitOperation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitOperationFindFirstOrThrowArgs} args - Arguments to find a GitOperation
     * @example
     * // Get one GitOperation
     * const gitOperation = await prisma.gitOperation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GitOperationFindFirstOrThrowArgs>(args?: SelectSubset<T, GitOperationFindFirstOrThrowArgs<ExtArgs>>): Prisma__GitOperationClient<$Result.GetResult<Prisma.$GitOperationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GitOperations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitOperationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GitOperations
     * const gitOperations = await prisma.gitOperation.findMany()
     * 
     * // Get first 10 GitOperations
     * const gitOperations = await prisma.gitOperation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gitOperationWithIdOnly = await prisma.gitOperation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GitOperationFindManyArgs>(args?: SelectSubset<T, GitOperationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitOperationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GitOperation.
     * @param {GitOperationCreateArgs} args - Arguments to create a GitOperation.
     * @example
     * // Create one GitOperation
     * const GitOperation = await prisma.gitOperation.create({
     *   data: {
     *     // ... data to create a GitOperation
     *   }
     * })
     * 
     */
    create<T extends GitOperationCreateArgs>(args: SelectSubset<T, GitOperationCreateArgs<ExtArgs>>): Prisma__GitOperationClient<$Result.GetResult<Prisma.$GitOperationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GitOperations.
     * @param {GitOperationCreateManyArgs} args - Arguments to create many GitOperations.
     * @example
     * // Create many GitOperations
     * const gitOperation = await prisma.gitOperation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GitOperationCreateManyArgs>(args?: SelectSubset<T, GitOperationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GitOperations and returns the data saved in the database.
     * @param {GitOperationCreateManyAndReturnArgs} args - Arguments to create many GitOperations.
     * @example
     * // Create many GitOperations
     * const gitOperation = await prisma.gitOperation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GitOperations and only return the `id`
     * const gitOperationWithIdOnly = await prisma.gitOperation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GitOperationCreateManyAndReturnArgs>(args?: SelectSubset<T, GitOperationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitOperationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GitOperation.
     * @param {GitOperationDeleteArgs} args - Arguments to delete one GitOperation.
     * @example
     * // Delete one GitOperation
     * const GitOperation = await prisma.gitOperation.delete({
     *   where: {
     *     // ... filter to delete one GitOperation
     *   }
     * })
     * 
     */
    delete<T extends GitOperationDeleteArgs>(args: SelectSubset<T, GitOperationDeleteArgs<ExtArgs>>): Prisma__GitOperationClient<$Result.GetResult<Prisma.$GitOperationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GitOperation.
     * @param {GitOperationUpdateArgs} args - Arguments to update one GitOperation.
     * @example
     * // Update one GitOperation
     * const gitOperation = await prisma.gitOperation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GitOperationUpdateArgs>(args: SelectSubset<T, GitOperationUpdateArgs<ExtArgs>>): Prisma__GitOperationClient<$Result.GetResult<Prisma.$GitOperationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GitOperations.
     * @param {GitOperationDeleteManyArgs} args - Arguments to filter GitOperations to delete.
     * @example
     * // Delete a few GitOperations
     * const { count } = await prisma.gitOperation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GitOperationDeleteManyArgs>(args?: SelectSubset<T, GitOperationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GitOperations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitOperationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GitOperations
     * const gitOperation = await prisma.gitOperation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GitOperationUpdateManyArgs>(args: SelectSubset<T, GitOperationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GitOperation.
     * @param {GitOperationUpsertArgs} args - Arguments to update or create a GitOperation.
     * @example
     * // Update or create a GitOperation
     * const gitOperation = await prisma.gitOperation.upsert({
     *   create: {
     *     // ... data to create a GitOperation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GitOperation we want to update
     *   }
     * })
     */
    upsert<T extends GitOperationUpsertArgs>(args: SelectSubset<T, GitOperationUpsertArgs<ExtArgs>>): Prisma__GitOperationClient<$Result.GetResult<Prisma.$GitOperationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GitOperations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitOperationCountArgs} args - Arguments to filter GitOperations to count.
     * @example
     * // Count the number of GitOperations
     * const count = await prisma.gitOperation.count({
     *   where: {
     *     // ... the filter for the GitOperations we want to count
     *   }
     * })
    **/
    count<T extends GitOperationCountArgs>(
      args?: Subset<T, GitOperationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GitOperationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GitOperation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitOperationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GitOperationAggregateArgs>(args: Subset<T, GitOperationAggregateArgs>): Prisma.PrismaPromise<GetGitOperationAggregateType<T>>

    /**
     * Group by GitOperation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitOperationGroupByArgs} args - Group by arguments.
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
      T extends GitOperationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GitOperationGroupByArgs['orderBy'] }
        : { orderBy?: GitOperationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GitOperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGitOperationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GitOperation model
   */
  readonly fields: GitOperationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GitOperation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GitOperationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    command<T extends CommandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommandDefaultArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the GitOperation model
   */ 
  interface GitOperationFieldRefs {
    readonly id: FieldRef<"GitOperation", 'String'>
    readonly commandId: FieldRef<"GitOperation", 'String'>
    readonly operation: FieldRef<"GitOperation", 'String'>
    readonly branch: FieldRef<"GitOperation", 'String'>
    readonly commitHash: FieldRef<"GitOperation", 'String'>
    readonly filesChanged: FieldRef<"GitOperation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GitOperation findUnique
   */
  export type GitOperationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitOperation
     */
    select?: GitOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitOperationInclude<ExtArgs> | null
    /**
     * Filter, which GitOperation to fetch.
     */
    where: GitOperationWhereUniqueInput
  }

  /**
   * GitOperation findUniqueOrThrow
   */
  export type GitOperationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitOperation
     */
    select?: GitOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitOperationInclude<ExtArgs> | null
    /**
     * Filter, which GitOperation to fetch.
     */
    where: GitOperationWhereUniqueInput
  }

  /**
   * GitOperation findFirst
   */
  export type GitOperationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitOperation
     */
    select?: GitOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitOperationInclude<ExtArgs> | null
    /**
     * Filter, which GitOperation to fetch.
     */
    where?: GitOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitOperations to fetch.
     */
    orderBy?: GitOperationOrderByWithRelationInput | GitOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GitOperations.
     */
    cursor?: GitOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GitOperations.
     */
    distinct?: GitOperationScalarFieldEnum | GitOperationScalarFieldEnum[]
  }

  /**
   * GitOperation findFirstOrThrow
   */
  export type GitOperationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitOperation
     */
    select?: GitOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitOperationInclude<ExtArgs> | null
    /**
     * Filter, which GitOperation to fetch.
     */
    where?: GitOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitOperations to fetch.
     */
    orderBy?: GitOperationOrderByWithRelationInput | GitOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GitOperations.
     */
    cursor?: GitOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GitOperations.
     */
    distinct?: GitOperationScalarFieldEnum | GitOperationScalarFieldEnum[]
  }

  /**
   * GitOperation findMany
   */
  export type GitOperationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitOperation
     */
    select?: GitOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitOperationInclude<ExtArgs> | null
    /**
     * Filter, which GitOperations to fetch.
     */
    where?: GitOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitOperations to fetch.
     */
    orderBy?: GitOperationOrderByWithRelationInput | GitOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GitOperations.
     */
    cursor?: GitOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitOperations.
     */
    skip?: number
    distinct?: GitOperationScalarFieldEnum | GitOperationScalarFieldEnum[]
  }

  /**
   * GitOperation create
   */
  export type GitOperationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitOperation
     */
    select?: GitOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitOperationInclude<ExtArgs> | null
    /**
     * The data needed to create a GitOperation.
     */
    data: XOR<GitOperationCreateInput, GitOperationUncheckedCreateInput>
  }

  /**
   * GitOperation createMany
   */
  export type GitOperationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GitOperations.
     */
    data: GitOperationCreateManyInput | GitOperationCreateManyInput[]
  }

  /**
   * GitOperation createManyAndReturn
   */
  export type GitOperationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitOperation
     */
    select?: GitOperationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GitOperations.
     */
    data: GitOperationCreateManyInput | GitOperationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitOperationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GitOperation update
   */
  export type GitOperationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitOperation
     */
    select?: GitOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitOperationInclude<ExtArgs> | null
    /**
     * The data needed to update a GitOperation.
     */
    data: XOR<GitOperationUpdateInput, GitOperationUncheckedUpdateInput>
    /**
     * Choose, which GitOperation to update.
     */
    where: GitOperationWhereUniqueInput
  }

  /**
   * GitOperation updateMany
   */
  export type GitOperationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GitOperations.
     */
    data: XOR<GitOperationUpdateManyMutationInput, GitOperationUncheckedUpdateManyInput>
    /**
     * Filter which GitOperations to update
     */
    where?: GitOperationWhereInput
  }

  /**
   * GitOperation upsert
   */
  export type GitOperationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitOperation
     */
    select?: GitOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitOperationInclude<ExtArgs> | null
    /**
     * The filter to search for the GitOperation to update in case it exists.
     */
    where: GitOperationWhereUniqueInput
    /**
     * In case the GitOperation found by the `where` argument doesn't exist, create a new GitOperation with this data.
     */
    create: XOR<GitOperationCreateInput, GitOperationUncheckedCreateInput>
    /**
     * In case the GitOperation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GitOperationUpdateInput, GitOperationUncheckedUpdateInput>
  }

  /**
   * GitOperation delete
   */
  export type GitOperationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitOperation
     */
    select?: GitOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitOperationInclude<ExtArgs> | null
    /**
     * Filter which GitOperation to delete.
     */
    where: GitOperationWhereUniqueInput
  }

  /**
   * GitOperation deleteMany
   */
  export type GitOperationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GitOperations to delete
     */
    where?: GitOperationWhereInput
  }

  /**
   * GitOperation without action
   */
  export type GitOperationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitOperation
     */
    select?: GitOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitOperationInclude<ExtArgs> | null
  }


  /**
   * Model BuildOperation
   */

  export type AggregateBuildOperation = {
    _count: BuildOperationCountAggregateOutputType | null
    _avg: BuildOperationAvgAggregateOutputType | null
    _sum: BuildOperationSumAggregateOutputType | null
    _min: BuildOperationMinAggregateOutputType | null
    _max: BuildOperationMaxAggregateOutputType | null
  }

  export type BuildOperationAvgAggregateOutputType = {
    duration: number | null
  }

  export type BuildOperationSumAggregateOutputType = {
    duration: number | null
  }

  export type BuildOperationMinAggregateOutputType = {
    id: string | null
    commandId: string | null
    environment: string | null
    framework: string | null
    success: boolean | null
    duration: number | null
    errors: string | null
    warnings: string | null
    outputLog: string | null
  }

  export type BuildOperationMaxAggregateOutputType = {
    id: string | null
    commandId: string | null
    environment: string | null
    framework: string | null
    success: boolean | null
    duration: number | null
    errors: string | null
    warnings: string | null
    outputLog: string | null
  }

  export type BuildOperationCountAggregateOutputType = {
    id: number
    commandId: number
    environment: number
    framework: number
    success: number
    duration: number
    errors: number
    warnings: number
    outputLog: number
    _all: number
  }


  export type BuildOperationAvgAggregateInputType = {
    duration?: true
  }

  export type BuildOperationSumAggregateInputType = {
    duration?: true
  }

  export type BuildOperationMinAggregateInputType = {
    id?: true
    commandId?: true
    environment?: true
    framework?: true
    success?: true
    duration?: true
    errors?: true
    warnings?: true
    outputLog?: true
  }

  export type BuildOperationMaxAggregateInputType = {
    id?: true
    commandId?: true
    environment?: true
    framework?: true
    success?: true
    duration?: true
    errors?: true
    warnings?: true
    outputLog?: true
  }

  export type BuildOperationCountAggregateInputType = {
    id?: true
    commandId?: true
    environment?: true
    framework?: true
    success?: true
    duration?: true
    errors?: true
    warnings?: true
    outputLog?: true
    _all?: true
  }

  export type BuildOperationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuildOperation to aggregate.
     */
    where?: BuildOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildOperations to fetch.
     */
    orderBy?: BuildOperationOrderByWithRelationInput | BuildOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuildOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BuildOperations
    **/
    _count?: true | BuildOperationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuildOperationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuildOperationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildOperationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildOperationMaxAggregateInputType
  }

  export type GetBuildOperationAggregateType<T extends BuildOperationAggregateArgs> = {
        [P in keyof T & keyof AggregateBuildOperation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuildOperation[P]>
      : GetScalarType<T[P], AggregateBuildOperation[P]>
  }




  export type BuildOperationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildOperationWhereInput
    orderBy?: BuildOperationOrderByWithAggregationInput | BuildOperationOrderByWithAggregationInput[]
    by: BuildOperationScalarFieldEnum[] | BuildOperationScalarFieldEnum
    having?: BuildOperationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildOperationCountAggregateInputType | true
    _avg?: BuildOperationAvgAggregateInputType
    _sum?: BuildOperationSumAggregateInputType
    _min?: BuildOperationMinAggregateInputType
    _max?: BuildOperationMaxAggregateInputType
  }

  export type BuildOperationGroupByOutputType = {
    id: string
    commandId: string
    environment: string
    framework: string
    success: boolean
    duration: number
    errors: string | null
    warnings: string | null
    outputLog: string | null
    _count: BuildOperationCountAggregateOutputType | null
    _avg: BuildOperationAvgAggregateOutputType | null
    _sum: BuildOperationSumAggregateOutputType | null
    _min: BuildOperationMinAggregateOutputType | null
    _max: BuildOperationMaxAggregateOutputType | null
  }

  type GetBuildOperationGroupByPayload<T extends BuildOperationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuildOperationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildOperationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildOperationGroupByOutputType[P]>
            : GetScalarType<T[P], BuildOperationGroupByOutputType[P]>
        }
      >
    >


  export type BuildOperationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commandId?: boolean
    environment?: boolean
    framework?: boolean
    success?: boolean
    duration?: boolean
    errors?: boolean
    warnings?: boolean
    outputLog?: boolean
    command?: boolean | CommandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buildOperation"]>

  export type BuildOperationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commandId?: boolean
    environment?: boolean
    framework?: boolean
    success?: boolean
    duration?: boolean
    errors?: boolean
    warnings?: boolean
    outputLog?: boolean
    command?: boolean | CommandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buildOperation"]>

  export type BuildOperationSelectScalar = {
    id?: boolean
    commandId?: boolean
    environment?: boolean
    framework?: boolean
    success?: boolean
    duration?: boolean
    errors?: boolean
    warnings?: boolean
    outputLog?: boolean
  }

  export type BuildOperationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    command?: boolean | CommandDefaultArgs<ExtArgs>
  }
  export type BuildOperationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    command?: boolean | CommandDefaultArgs<ExtArgs>
  }

  export type $BuildOperationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BuildOperation"
    objects: {
      command: Prisma.$CommandPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      commandId: string
      environment: string
      framework: string
      success: boolean
      duration: number
      errors: string | null
      warnings: string | null
      outputLog: string | null
    }, ExtArgs["result"]["buildOperation"]>
    composites: {}
  }

  type BuildOperationGetPayload<S extends boolean | null | undefined | BuildOperationDefaultArgs> = $Result.GetResult<Prisma.$BuildOperationPayload, S>

  type BuildOperationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BuildOperationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BuildOperationCountAggregateInputType | true
    }

  export interface BuildOperationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BuildOperation'], meta: { name: 'BuildOperation' } }
    /**
     * Find zero or one BuildOperation that matches the filter.
     * @param {BuildOperationFindUniqueArgs} args - Arguments to find a BuildOperation
     * @example
     * // Get one BuildOperation
     * const buildOperation = await prisma.buildOperation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuildOperationFindUniqueArgs>(args: SelectSubset<T, BuildOperationFindUniqueArgs<ExtArgs>>): Prisma__BuildOperationClient<$Result.GetResult<Prisma.$BuildOperationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BuildOperation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BuildOperationFindUniqueOrThrowArgs} args - Arguments to find a BuildOperation
     * @example
     * // Get one BuildOperation
     * const buildOperation = await prisma.buildOperation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuildOperationFindUniqueOrThrowArgs>(args: SelectSubset<T, BuildOperationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuildOperationClient<$Result.GetResult<Prisma.$BuildOperationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BuildOperation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildOperationFindFirstArgs} args - Arguments to find a BuildOperation
     * @example
     * // Get one BuildOperation
     * const buildOperation = await prisma.buildOperation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuildOperationFindFirstArgs>(args?: SelectSubset<T, BuildOperationFindFirstArgs<ExtArgs>>): Prisma__BuildOperationClient<$Result.GetResult<Prisma.$BuildOperationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BuildOperation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildOperationFindFirstOrThrowArgs} args - Arguments to find a BuildOperation
     * @example
     * // Get one BuildOperation
     * const buildOperation = await prisma.buildOperation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuildOperationFindFirstOrThrowArgs>(args?: SelectSubset<T, BuildOperationFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuildOperationClient<$Result.GetResult<Prisma.$BuildOperationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BuildOperations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildOperationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BuildOperations
     * const buildOperations = await prisma.buildOperation.findMany()
     * 
     * // Get first 10 BuildOperations
     * const buildOperations = await prisma.buildOperation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buildOperationWithIdOnly = await prisma.buildOperation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BuildOperationFindManyArgs>(args?: SelectSubset<T, BuildOperationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildOperationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BuildOperation.
     * @param {BuildOperationCreateArgs} args - Arguments to create a BuildOperation.
     * @example
     * // Create one BuildOperation
     * const BuildOperation = await prisma.buildOperation.create({
     *   data: {
     *     // ... data to create a BuildOperation
     *   }
     * })
     * 
     */
    create<T extends BuildOperationCreateArgs>(args: SelectSubset<T, BuildOperationCreateArgs<ExtArgs>>): Prisma__BuildOperationClient<$Result.GetResult<Prisma.$BuildOperationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BuildOperations.
     * @param {BuildOperationCreateManyArgs} args - Arguments to create many BuildOperations.
     * @example
     * // Create many BuildOperations
     * const buildOperation = await prisma.buildOperation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuildOperationCreateManyArgs>(args?: SelectSubset<T, BuildOperationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BuildOperations and returns the data saved in the database.
     * @param {BuildOperationCreateManyAndReturnArgs} args - Arguments to create many BuildOperations.
     * @example
     * // Create many BuildOperations
     * const buildOperation = await prisma.buildOperation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BuildOperations and only return the `id`
     * const buildOperationWithIdOnly = await prisma.buildOperation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BuildOperationCreateManyAndReturnArgs>(args?: SelectSubset<T, BuildOperationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildOperationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BuildOperation.
     * @param {BuildOperationDeleteArgs} args - Arguments to delete one BuildOperation.
     * @example
     * // Delete one BuildOperation
     * const BuildOperation = await prisma.buildOperation.delete({
     *   where: {
     *     // ... filter to delete one BuildOperation
     *   }
     * })
     * 
     */
    delete<T extends BuildOperationDeleteArgs>(args: SelectSubset<T, BuildOperationDeleteArgs<ExtArgs>>): Prisma__BuildOperationClient<$Result.GetResult<Prisma.$BuildOperationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BuildOperation.
     * @param {BuildOperationUpdateArgs} args - Arguments to update one BuildOperation.
     * @example
     * // Update one BuildOperation
     * const buildOperation = await prisma.buildOperation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuildOperationUpdateArgs>(args: SelectSubset<T, BuildOperationUpdateArgs<ExtArgs>>): Prisma__BuildOperationClient<$Result.GetResult<Prisma.$BuildOperationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BuildOperations.
     * @param {BuildOperationDeleteManyArgs} args - Arguments to filter BuildOperations to delete.
     * @example
     * // Delete a few BuildOperations
     * const { count } = await prisma.buildOperation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuildOperationDeleteManyArgs>(args?: SelectSubset<T, BuildOperationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BuildOperations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildOperationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BuildOperations
     * const buildOperation = await prisma.buildOperation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuildOperationUpdateManyArgs>(args: SelectSubset<T, BuildOperationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BuildOperation.
     * @param {BuildOperationUpsertArgs} args - Arguments to update or create a BuildOperation.
     * @example
     * // Update or create a BuildOperation
     * const buildOperation = await prisma.buildOperation.upsert({
     *   create: {
     *     // ... data to create a BuildOperation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BuildOperation we want to update
     *   }
     * })
     */
    upsert<T extends BuildOperationUpsertArgs>(args: SelectSubset<T, BuildOperationUpsertArgs<ExtArgs>>): Prisma__BuildOperationClient<$Result.GetResult<Prisma.$BuildOperationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BuildOperations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildOperationCountArgs} args - Arguments to filter BuildOperations to count.
     * @example
     * // Count the number of BuildOperations
     * const count = await prisma.buildOperation.count({
     *   where: {
     *     // ... the filter for the BuildOperations we want to count
     *   }
     * })
    **/
    count<T extends BuildOperationCountArgs>(
      args?: Subset<T, BuildOperationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildOperationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BuildOperation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildOperationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BuildOperationAggregateArgs>(args: Subset<T, BuildOperationAggregateArgs>): Prisma.PrismaPromise<GetBuildOperationAggregateType<T>>

    /**
     * Group by BuildOperation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildOperationGroupByArgs} args - Group by arguments.
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
      T extends BuildOperationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuildOperationGroupByArgs['orderBy'] }
        : { orderBy?: BuildOperationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BuildOperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildOperationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BuildOperation model
   */
  readonly fields: BuildOperationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BuildOperation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuildOperationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    command<T extends CommandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommandDefaultArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the BuildOperation model
   */ 
  interface BuildOperationFieldRefs {
    readonly id: FieldRef<"BuildOperation", 'String'>
    readonly commandId: FieldRef<"BuildOperation", 'String'>
    readonly environment: FieldRef<"BuildOperation", 'String'>
    readonly framework: FieldRef<"BuildOperation", 'String'>
    readonly success: FieldRef<"BuildOperation", 'Boolean'>
    readonly duration: FieldRef<"BuildOperation", 'Int'>
    readonly errors: FieldRef<"BuildOperation", 'String'>
    readonly warnings: FieldRef<"BuildOperation", 'String'>
    readonly outputLog: FieldRef<"BuildOperation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BuildOperation findUnique
   */
  export type BuildOperationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildOperation
     */
    select?: BuildOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildOperationInclude<ExtArgs> | null
    /**
     * Filter, which BuildOperation to fetch.
     */
    where: BuildOperationWhereUniqueInput
  }

  /**
   * BuildOperation findUniqueOrThrow
   */
  export type BuildOperationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildOperation
     */
    select?: BuildOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildOperationInclude<ExtArgs> | null
    /**
     * Filter, which BuildOperation to fetch.
     */
    where: BuildOperationWhereUniqueInput
  }

  /**
   * BuildOperation findFirst
   */
  export type BuildOperationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildOperation
     */
    select?: BuildOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildOperationInclude<ExtArgs> | null
    /**
     * Filter, which BuildOperation to fetch.
     */
    where?: BuildOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildOperations to fetch.
     */
    orderBy?: BuildOperationOrderByWithRelationInput | BuildOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuildOperations.
     */
    cursor?: BuildOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuildOperations.
     */
    distinct?: BuildOperationScalarFieldEnum | BuildOperationScalarFieldEnum[]
  }

  /**
   * BuildOperation findFirstOrThrow
   */
  export type BuildOperationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildOperation
     */
    select?: BuildOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildOperationInclude<ExtArgs> | null
    /**
     * Filter, which BuildOperation to fetch.
     */
    where?: BuildOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildOperations to fetch.
     */
    orderBy?: BuildOperationOrderByWithRelationInput | BuildOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuildOperations.
     */
    cursor?: BuildOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuildOperations.
     */
    distinct?: BuildOperationScalarFieldEnum | BuildOperationScalarFieldEnum[]
  }

  /**
   * BuildOperation findMany
   */
  export type BuildOperationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildOperation
     */
    select?: BuildOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildOperationInclude<ExtArgs> | null
    /**
     * Filter, which BuildOperations to fetch.
     */
    where?: BuildOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildOperations to fetch.
     */
    orderBy?: BuildOperationOrderByWithRelationInput | BuildOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BuildOperations.
     */
    cursor?: BuildOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildOperations.
     */
    skip?: number
    distinct?: BuildOperationScalarFieldEnum | BuildOperationScalarFieldEnum[]
  }

  /**
   * BuildOperation create
   */
  export type BuildOperationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildOperation
     */
    select?: BuildOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildOperationInclude<ExtArgs> | null
    /**
     * The data needed to create a BuildOperation.
     */
    data: XOR<BuildOperationCreateInput, BuildOperationUncheckedCreateInput>
  }

  /**
   * BuildOperation createMany
   */
  export type BuildOperationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BuildOperations.
     */
    data: BuildOperationCreateManyInput | BuildOperationCreateManyInput[]
  }

  /**
   * BuildOperation createManyAndReturn
   */
  export type BuildOperationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildOperation
     */
    select?: BuildOperationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BuildOperations.
     */
    data: BuildOperationCreateManyInput | BuildOperationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildOperationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BuildOperation update
   */
  export type BuildOperationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildOperation
     */
    select?: BuildOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildOperationInclude<ExtArgs> | null
    /**
     * The data needed to update a BuildOperation.
     */
    data: XOR<BuildOperationUpdateInput, BuildOperationUncheckedUpdateInput>
    /**
     * Choose, which BuildOperation to update.
     */
    where: BuildOperationWhereUniqueInput
  }

  /**
   * BuildOperation updateMany
   */
  export type BuildOperationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BuildOperations.
     */
    data: XOR<BuildOperationUpdateManyMutationInput, BuildOperationUncheckedUpdateManyInput>
    /**
     * Filter which BuildOperations to update
     */
    where?: BuildOperationWhereInput
  }

  /**
   * BuildOperation upsert
   */
  export type BuildOperationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildOperation
     */
    select?: BuildOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildOperationInclude<ExtArgs> | null
    /**
     * The filter to search for the BuildOperation to update in case it exists.
     */
    where: BuildOperationWhereUniqueInput
    /**
     * In case the BuildOperation found by the `where` argument doesn't exist, create a new BuildOperation with this data.
     */
    create: XOR<BuildOperationCreateInput, BuildOperationUncheckedCreateInput>
    /**
     * In case the BuildOperation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuildOperationUpdateInput, BuildOperationUncheckedUpdateInput>
  }

  /**
   * BuildOperation delete
   */
  export type BuildOperationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildOperation
     */
    select?: BuildOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildOperationInclude<ExtArgs> | null
    /**
     * Filter which BuildOperation to delete.
     */
    where: BuildOperationWhereUniqueInput
  }

  /**
   * BuildOperation deleteMany
   */
  export type BuildOperationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuildOperations to delete
     */
    where?: BuildOperationWhereInput
  }

  /**
   * BuildOperation without action
   */
  export type BuildOperationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildOperation
     */
    select?: BuildOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildOperationInclude<ExtArgs> | null
  }


  /**
   * Model TestOperation
   */

  export type AggregateTestOperation = {
    _count: TestOperationCountAggregateOutputType | null
    _avg: TestOperationAvgAggregateOutputType | null
    _sum: TestOperationSumAggregateOutputType | null
    _min: TestOperationMinAggregateOutputType | null
    _max: TestOperationMaxAggregateOutputType | null
  }

  export type TestOperationAvgAggregateOutputType = {
    duration: number | null
    totalTests: number | null
    passedTests: number | null
    failedTests: number | null
    skippedTests: number | null
  }

  export type TestOperationSumAggregateOutputType = {
    duration: number | null
    totalTests: number | null
    passedTests: number | null
    failedTests: number | null
    skippedTests: number | null
  }

  export type TestOperationMinAggregateOutputType = {
    id: string | null
    commandId: string | null
    framework: string | null
    success: boolean | null
    duration: number | null
    totalTests: number | null
    passedTests: number | null
    failedTests: number | null
    skippedTests: number | null
    errors: string | null
    outputLog: string | null
  }

  export type TestOperationMaxAggregateOutputType = {
    id: string | null
    commandId: string | null
    framework: string | null
    success: boolean | null
    duration: number | null
    totalTests: number | null
    passedTests: number | null
    failedTests: number | null
    skippedTests: number | null
    errors: string | null
    outputLog: string | null
  }

  export type TestOperationCountAggregateOutputType = {
    id: number
    commandId: number
    framework: number
    success: number
    duration: number
    totalTests: number
    passedTests: number
    failedTests: number
    skippedTests: number
    errors: number
    outputLog: number
    _all: number
  }


  export type TestOperationAvgAggregateInputType = {
    duration?: true
    totalTests?: true
    passedTests?: true
    failedTests?: true
    skippedTests?: true
  }

  export type TestOperationSumAggregateInputType = {
    duration?: true
    totalTests?: true
    passedTests?: true
    failedTests?: true
    skippedTests?: true
  }

  export type TestOperationMinAggregateInputType = {
    id?: true
    commandId?: true
    framework?: true
    success?: true
    duration?: true
    totalTests?: true
    passedTests?: true
    failedTests?: true
    skippedTests?: true
    errors?: true
    outputLog?: true
  }

  export type TestOperationMaxAggregateInputType = {
    id?: true
    commandId?: true
    framework?: true
    success?: true
    duration?: true
    totalTests?: true
    passedTests?: true
    failedTests?: true
    skippedTests?: true
    errors?: true
    outputLog?: true
  }

  export type TestOperationCountAggregateInputType = {
    id?: true
    commandId?: true
    framework?: true
    success?: true
    duration?: true
    totalTests?: true
    passedTests?: true
    failedTests?: true
    skippedTests?: true
    errors?: true
    outputLog?: true
    _all?: true
  }

  export type TestOperationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestOperation to aggregate.
     */
    where?: TestOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestOperations to fetch.
     */
    orderBy?: TestOperationOrderByWithRelationInput | TestOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestOperations
    **/
    _count?: true | TestOperationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestOperationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestOperationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestOperationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestOperationMaxAggregateInputType
  }

  export type GetTestOperationAggregateType<T extends TestOperationAggregateArgs> = {
        [P in keyof T & keyof AggregateTestOperation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestOperation[P]>
      : GetScalarType<T[P], AggregateTestOperation[P]>
  }




  export type TestOperationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestOperationWhereInput
    orderBy?: TestOperationOrderByWithAggregationInput | TestOperationOrderByWithAggregationInput[]
    by: TestOperationScalarFieldEnum[] | TestOperationScalarFieldEnum
    having?: TestOperationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestOperationCountAggregateInputType | true
    _avg?: TestOperationAvgAggregateInputType
    _sum?: TestOperationSumAggregateInputType
    _min?: TestOperationMinAggregateInputType
    _max?: TestOperationMaxAggregateInputType
  }

  export type TestOperationGroupByOutputType = {
    id: string
    commandId: string
    framework: string
    success: boolean
    duration: number
    totalTests: number
    passedTests: number
    failedTests: number
    skippedTests: number
    errors: string | null
    outputLog: string | null
    _count: TestOperationCountAggregateOutputType | null
    _avg: TestOperationAvgAggregateOutputType | null
    _sum: TestOperationSumAggregateOutputType | null
    _min: TestOperationMinAggregateOutputType | null
    _max: TestOperationMaxAggregateOutputType | null
  }

  type GetTestOperationGroupByPayload<T extends TestOperationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestOperationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestOperationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestOperationGroupByOutputType[P]>
            : GetScalarType<T[P], TestOperationGroupByOutputType[P]>
        }
      >
    >


  export type TestOperationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commandId?: boolean
    framework?: boolean
    success?: boolean
    duration?: boolean
    totalTests?: boolean
    passedTests?: boolean
    failedTests?: boolean
    skippedTests?: boolean
    errors?: boolean
    outputLog?: boolean
    command?: boolean | CommandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testOperation"]>

  export type TestOperationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commandId?: boolean
    framework?: boolean
    success?: boolean
    duration?: boolean
    totalTests?: boolean
    passedTests?: boolean
    failedTests?: boolean
    skippedTests?: boolean
    errors?: boolean
    outputLog?: boolean
    command?: boolean | CommandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testOperation"]>

  export type TestOperationSelectScalar = {
    id?: boolean
    commandId?: boolean
    framework?: boolean
    success?: boolean
    duration?: boolean
    totalTests?: boolean
    passedTests?: boolean
    failedTests?: boolean
    skippedTests?: boolean
    errors?: boolean
    outputLog?: boolean
  }

  export type TestOperationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    command?: boolean | CommandDefaultArgs<ExtArgs>
  }
  export type TestOperationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    command?: boolean | CommandDefaultArgs<ExtArgs>
  }

  export type $TestOperationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestOperation"
    objects: {
      command: Prisma.$CommandPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      commandId: string
      framework: string
      success: boolean
      duration: number
      totalTests: number
      passedTests: number
      failedTests: number
      skippedTests: number
      errors: string | null
      outputLog: string | null
    }, ExtArgs["result"]["testOperation"]>
    composites: {}
  }

  type TestOperationGetPayload<S extends boolean | null | undefined | TestOperationDefaultArgs> = $Result.GetResult<Prisma.$TestOperationPayload, S>

  type TestOperationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TestOperationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TestOperationCountAggregateInputType | true
    }

  export interface TestOperationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestOperation'], meta: { name: 'TestOperation' } }
    /**
     * Find zero or one TestOperation that matches the filter.
     * @param {TestOperationFindUniqueArgs} args - Arguments to find a TestOperation
     * @example
     * // Get one TestOperation
     * const testOperation = await prisma.testOperation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestOperationFindUniqueArgs>(args: SelectSubset<T, TestOperationFindUniqueArgs<ExtArgs>>): Prisma__TestOperationClient<$Result.GetResult<Prisma.$TestOperationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TestOperation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TestOperationFindUniqueOrThrowArgs} args - Arguments to find a TestOperation
     * @example
     * // Get one TestOperation
     * const testOperation = await prisma.testOperation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestOperationFindUniqueOrThrowArgs>(args: SelectSubset<T, TestOperationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestOperationClient<$Result.GetResult<Prisma.$TestOperationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TestOperation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestOperationFindFirstArgs} args - Arguments to find a TestOperation
     * @example
     * // Get one TestOperation
     * const testOperation = await prisma.testOperation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestOperationFindFirstArgs>(args?: SelectSubset<T, TestOperationFindFirstArgs<ExtArgs>>): Prisma__TestOperationClient<$Result.GetResult<Prisma.$TestOperationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TestOperation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestOperationFindFirstOrThrowArgs} args - Arguments to find a TestOperation
     * @example
     * // Get one TestOperation
     * const testOperation = await prisma.testOperation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestOperationFindFirstOrThrowArgs>(args?: SelectSubset<T, TestOperationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestOperationClient<$Result.GetResult<Prisma.$TestOperationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TestOperations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestOperationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestOperations
     * const testOperations = await prisma.testOperation.findMany()
     * 
     * // Get first 10 TestOperations
     * const testOperations = await prisma.testOperation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testOperationWithIdOnly = await prisma.testOperation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestOperationFindManyArgs>(args?: SelectSubset<T, TestOperationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestOperationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TestOperation.
     * @param {TestOperationCreateArgs} args - Arguments to create a TestOperation.
     * @example
     * // Create one TestOperation
     * const TestOperation = await prisma.testOperation.create({
     *   data: {
     *     // ... data to create a TestOperation
     *   }
     * })
     * 
     */
    create<T extends TestOperationCreateArgs>(args: SelectSubset<T, TestOperationCreateArgs<ExtArgs>>): Prisma__TestOperationClient<$Result.GetResult<Prisma.$TestOperationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TestOperations.
     * @param {TestOperationCreateManyArgs} args - Arguments to create many TestOperations.
     * @example
     * // Create many TestOperations
     * const testOperation = await prisma.testOperation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestOperationCreateManyArgs>(args?: SelectSubset<T, TestOperationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestOperations and returns the data saved in the database.
     * @param {TestOperationCreateManyAndReturnArgs} args - Arguments to create many TestOperations.
     * @example
     * // Create many TestOperations
     * const testOperation = await prisma.testOperation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestOperations and only return the `id`
     * const testOperationWithIdOnly = await prisma.testOperation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestOperationCreateManyAndReturnArgs>(args?: SelectSubset<T, TestOperationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestOperationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TestOperation.
     * @param {TestOperationDeleteArgs} args - Arguments to delete one TestOperation.
     * @example
     * // Delete one TestOperation
     * const TestOperation = await prisma.testOperation.delete({
     *   where: {
     *     // ... filter to delete one TestOperation
     *   }
     * })
     * 
     */
    delete<T extends TestOperationDeleteArgs>(args: SelectSubset<T, TestOperationDeleteArgs<ExtArgs>>): Prisma__TestOperationClient<$Result.GetResult<Prisma.$TestOperationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TestOperation.
     * @param {TestOperationUpdateArgs} args - Arguments to update one TestOperation.
     * @example
     * // Update one TestOperation
     * const testOperation = await prisma.testOperation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestOperationUpdateArgs>(args: SelectSubset<T, TestOperationUpdateArgs<ExtArgs>>): Prisma__TestOperationClient<$Result.GetResult<Prisma.$TestOperationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TestOperations.
     * @param {TestOperationDeleteManyArgs} args - Arguments to filter TestOperations to delete.
     * @example
     * // Delete a few TestOperations
     * const { count } = await prisma.testOperation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestOperationDeleteManyArgs>(args?: SelectSubset<T, TestOperationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestOperations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestOperationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestOperations
     * const testOperation = await prisma.testOperation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestOperationUpdateManyArgs>(args: SelectSubset<T, TestOperationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestOperation.
     * @param {TestOperationUpsertArgs} args - Arguments to update or create a TestOperation.
     * @example
     * // Update or create a TestOperation
     * const testOperation = await prisma.testOperation.upsert({
     *   create: {
     *     // ... data to create a TestOperation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestOperation we want to update
     *   }
     * })
     */
    upsert<T extends TestOperationUpsertArgs>(args: SelectSubset<T, TestOperationUpsertArgs<ExtArgs>>): Prisma__TestOperationClient<$Result.GetResult<Prisma.$TestOperationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TestOperations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestOperationCountArgs} args - Arguments to filter TestOperations to count.
     * @example
     * // Count the number of TestOperations
     * const count = await prisma.testOperation.count({
     *   where: {
     *     // ... the filter for the TestOperations we want to count
     *   }
     * })
    **/
    count<T extends TestOperationCountArgs>(
      args?: Subset<T, TestOperationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestOperationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestOperation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestOperationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestOperationAggregateArgs>(args: Subset<T, TestOperationAggregateArgs>): Prisma.PrismaPromise<GetTestOperationAggregateType<T>>

    /**
     * Group by TestOperation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestOperationGroupByArgs} args - Group by arguments.
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
      T extends TestOperationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestOperationGroupByArgs['orderBy'] }
        : { orderBy?: TestOperationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestOperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestOperationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestOperation model
   */
  readonly fields: TestOperationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestOperation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestOperationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    command<T extends CommandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommandDefaultArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TestOperation model
   */ 
  interface TestOperationFieldRefs {
    readonly id: FieldRef<"TestOperation", 'String'>
    readonly commandId: FieldRef<"TestOperation", 'String'>
    readonly framework: FieldRef<"TestOperation", 'String'>
    readonly success: FieldRef<"TestOperation", 'Boolean'>
    readonly duration: FieldRef<"TestOperation", 'Int'>
    readonly totalTests: FieldRef<"TestOperation", 'Int'>
    readonly passedTests: FieldRef<"TestOperation", 'Int'>
    readonly failedTests: FieldRef<"TestOperation", 'Int'>
    readonly skippedTests: FieldRef<"TestOperation", 'Int'>
    readonly errors: FieldRef<"TestOperation", 'String'>
    readonly outputLog: FieldRef<"TestOperation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TestOperation findUnique
   */
  export type TestOperationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestOperation
     */
    select?: TestOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestOperationInclude<ExtArgs> | null
    /**
     * Filter, which TestOperation to fetch.
     */
    where: TestOperationWhereUniqueInput
  }

  /**
   * TestOperation findUniqueOrThrow
   */
  export type TestOperationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestOperation
     */
    select?: TestOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestOperationInclude<ExtArgs> | null
    /**
     * Filter, which TestOperation to fetch.
     */
    where: TestOperationWhereUniqueInput
  }

  /**
   * TestOperation findFirst
   */
  export type TestOperationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestOperation
     */
    select?: TestOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestOperationInclude<ExtArgs> | null
    /**
     * Filter, which TestOperation to fetch.
     */
    where?: TestOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestOperations to fetch.
     */
    orderBy?: TestOperationOrderByWithRelationInput | TestOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestOperations.
     */
    cursor?: TestOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestOperations.
     */
    distinct?: TestOperationScalarFieldEnum | TestOperationScalarFieldEnum[]
  }

  /**
   * TestOperation findFirstOrThrow
   */
  export type TestOperationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestOperation
     */
    select?: TestOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestOperationInclude<ExtArgs> | null
    /**
     * Filter, which TestOperation to fetch.
     */
    where?: TestOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestOperations to fetch.
     */
    orderBy?: TestOperationOrderByWithRelationInput | TestOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestOperations.
     */
    cursor?: TestOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestOperations.
     */
    distinct?: TestOperationScalarFieldEnum | TestOperationScalarFieldEnum[]
  }

  /**
   * TestOperation findMany
   */
  export type TestOperationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestOperation
     */
    select?: TestOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestOperationInclude<ExtArgs> | null
    /**
     * Filter, which TestOperations to fetch.
     */
    where?: TestOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestOperations to fetch.
     */
    orderBy?: TestOperationOrderByWithRelationInput | TestOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestOperations.
     */
    cursor?: TestOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestOperations.
     */
    skip?: number
    distinct?: TestOperationScalarFieldEnum | TestOperationScalarFieldEnum[]
  }

  /**
   * TestOperation create
   */
  export type TestOperationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestOperation
     */
    select?: TestOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestOperationInclude<ExtArgs> | null
    /**
     * The data needed to create a TestOperation.
     */
    data: XOR<TestOperationCreateInput, TestOperationUncheckedCreateInput>
  }

  /**
   * TestOperation createMany
   */
  export type TestOperationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestOperations.
     */
    data: TestOperationCreateManyInput | TestOperationCreateManyInput[]
  }

  /**
   * TestOperation createManyAndReturn
   */
  export type TestOperationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestOperation
     */
    select?: TestOperationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TestOperations.
     */
    data: TestOperationCreateManyInput | TestOperationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestOperationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestOperation update
   */
  export type TestOperationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestOperation
     */
    select?: TestOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestOperationInclude<ExtArgs> | null
    /**
     * The data needed to update a TestOperation.
     */
    data: XOR<TestOperationUpdateInput, TestOperationUncheckedUpdateInput>
    /**
     * Choose, which TestOperation to update.
     */
    where: TestOperationWhereUniqueInput
  }

  /**
   * TestOperation updateMany
   */
  export type TestOperationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestOperations.
     */
    data: XOR<TestOperationUpdateManyMutationInput, TestOperationUncheckedUpdateManyInput>
    /**
     * Filter which TestOperations to update
     */
    where?: TestOperationWhereInput
  }

  /**
   * TestOperation upsert
   */
  export type TestOperationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestOperation
     */
    select?: TestOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestOperationInclude<ExtArgs> | null
    /**
     * The filter to search for the TestOperation to update in case it exists.
     */
    where: TestOperationWhereUniqueInput
    /**
     * In case the TestOperation found by the `where` argument doesn't exist, create a new TestOperation with this data.
     */
    create: XOR<TestOperationCreateInput, TestOperationUncheckedCreateInput>
    /**
     * In case the TestOperation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestOperationUpdateInput, TestOperationUncheckedUpdateInput>
  }

  /**
   * TestOperation delete
   */
  export type TestOperationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestOperation
     */
    select?: TestOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestOperationInclude<ExtArgs> | null
    /**
     * Filter which TestOperation to delete.
     */
    where: TestOperationWhereUniqueInput
  }

  /**
   * TestOperation deleteMany
   */
  export type TestOperationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestOperations to delete
     */
    where?: TestOperationWhereInput
  }

  /**
   * TestOperation without action
   */
  export type TestOperationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestOperation
     */
    select?: TestOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestOperationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SessionScalarFieldEnum: {
    id: 'id',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const FileChangeScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    timestamp: 'timestamp',
    filePath: 'filePath',
    changeType: 'changeType'
  };

  export type FileChangeScalarFieldEnum = (typeof FileChangeScalarFieldEnum)[keyof typeof FileChangeScalarFieldEnum]


  export const AIInteractionScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    timestamp: 'timestamp',
    prompt: 'prompt',
    response: 'response'
  };

  export type AIInteractionScalarFieldEnum = (typeof AIInteractionScalarFieldEnum)[keyof typeof AIInteractionScalarFieldEnum]


  export const CommandScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    timestamp: 'timestamp',
    command: 'command',
    type: 'type'
  };

  export type CommandScalarFieldEnum = (typeof CommandScalarFieldEnum)[keyof typeof CommandScalarFieldEnum]


  export const GitOperationScalarFieldEnum: {
    id: 'id',
    commandId: 'commandId',
    operation: 'operation',
    branch: 'branch',
    commitHash: 'commitHash',
    filesChanged: 'filesChanged'
  };

  export type GitOperationScalarFieldEnum = (typeof GitOperationScalarFieldEnum)[keyof typeof GitOperationScalarFieldEnum]


  export const BuildOperationScalarFieldEnum: {
    id: 'id',
    commandId: 'commandId',
    environment: 'environment',
    framework: 'framework',
    success: 'success',
    duration: 'duration',
    errors: 'errors',
    warnings: 'warnings',
    outputLog: 'outputLog'
  };

  export type BuildOperationScalarFieldEnum = (typeof BuildOperationScalarFieldEnum)[keyof typeof BuildOperationScalarFieldEnum]


  export const TestOperationScalarFieldEnum: {
    id: 'id',
    commandId: 'commandId',
    framework: 'framework',
    success: 'success',
    duration: 'duration',
    totalTests: 'totalTests',
    passedTests: 'passedTests',
    failedTests: 'failedTests',
    skippedTests: 'skippedTests',
    errors: 'errors',
    outputLog: 'outputLog'
  };

  export type TestOperationScalarFieldEnum = (typeof TestOperationScalarFieldEnum)[keyof typeof TestOperationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    startTime?: DateTimeFilter<"Session"> | Date | string
    endTime?: DateTimeNullableFilter<"Session"> | Date | string | null
    fileChanges?: FileChangeListRelationFilter
    aiInteractions?: AIInteractionListRelationFilter
    commands?: CommandListRelationFilter
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    fileChanges?: FileChangeOrderByRelationAggregateInput
    aiInteractions?: AIInteractionOrderByRelationAggregateInput
    commands?: CommandOrderByRelationAggregateInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    startTime?: DateTimeFilter<"Session"> | Date | string
    endTime?: DateTimeNullableFilter<"Session"> | Date | string | null
    fileChanges?: FileChangeListRelationFilter
    aiInteractions?: AIInteractionListRelationFilter
    commands?: CommandListRelationFilter
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    startTime?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
  }

  export type FileChangeWhereInput = {
    AND?: FileChangeWhereInput | FileChangeWhereInput[]
    OR?: FileChangeWhereInput[]
    NOT?: FileChangeWhereInput | FileChangeWhereInput[]
    id?: StringFilter<"FileChange"> | string
    sessionId?: StringFilter<"FileChange"> | string
    timestamp?: DateTimeFilter<"FileChange"> | Date | string
    filePath?: StringFilter<"FileChange"> | string
    changeType?: StringFilter<"FileChange"> | string
    session?: XOR<SessionRelationFilter, SessionWhereInput>
  }

  export type FileChangeOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    filePath?: SortOrder
    changeType?: SortOrder
    session?: SessionOrderByWithRelationInput
  }

  export type FileChangeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FileChangeWhereInput | FileChangeWhereInput[]
    OR?: FileChangeWhereInput[]
    NOT?: FileChangeWhereInput | FileChangeWhereInput[]
    sessionId?: StringFilter<"FileChange"> | string
    timestamp?: DateTimeFilter<"FileChange"> | Date | string
    filePath?: StringFilter<"FileChange"> | string
    changeType?: StringFilter<"FileChange"> | string
    session?: XOR<SessionRelationFilter, SessionWhereInput>
  }, "id">

  export type FileChangeOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    filePath?: SortOrder
    changeType?: SortOrder
    _count?: FileChangeCountOrderByAggregateInput
    _max?: FileChangeMaxOrderByAggregateInput
    _min?: FileChangeMinOrderByAggregateInput
  }

  export type FileChangeScalarWhereWithAggregatesInput = {
    AND?: FileChangeScalarWhereWithAggregatesInput | FileChangeScalarWhereWithAggregatesInput[]
    OR?: FileChangeScalarWhereWithAggregatesInput[]
    NOT?: FileChangeScalarWhereWithAggregatesInput | FileChangeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FileChange"> | string
    sessionId?: StringWithAggregatesFilter<"FileChange"> | string
    timestamp?: DateTimeWithAggregatesFilter<"FileChange"> | Date | string
    filePath?: StringWithAggregatesFilter<"FileChange"> | string
    changeType?: StringWithAggregatesFilter<"FileChange"> | string
  }

  export type AIInteractionWhereInput = {
    AND?: AIInteractionWhereInput | AIInteractionWhereInput[]
    OR?: AIInteractionWhereInput[]
    NOT?: AIInteractionWhereInput | AIInteractionWhereInput[]
    id?: StringFilter<"AIInteraction"> | string
    sessionId?: StringFilter<"AIInteraction"> | string
    timestamp?: DateTimeFilter<"AIInteraction"> | Date | string
    prompt?: StringFilter<"AIInteraction"> | string
    response?: StringFilter<"AIInteraction"> | string
    session?: XOR<SessionRelationFilter, SessionWhereInput>
  }

  export type AIInteractionOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    session?: SessionOrderByWithRelationInput
  }

  export type AIInteractionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIInteractionWhereInput | AIInteractionWhereInput[]
    OR?: AIInteractionWhereInput[]
    NOT?: AIInteractionWhereInput | AIInteractionWhereInput[]
    sessionId?: StringFilter<"AIInteraction"> | string
    timestamp?: DateTimeFilter<"AIInteraction"> | Date | string
    prompt?: StringFilter<"AIInteraction"> | string
    response?: StringFilter<"AIInteraction"> | string
    session?: XOR<SessionRelationFilter, SessionWhereInput>
  }, "id">

  export type AIInteractionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    _count?: AIInteractionCountOrderByAggregateInput
    _max?: AIInteractionMaxOrderByAggregateInput
    _min?: AIInteractionMinOrderByAggregateInput
  }

  export type AIInteractionScalarWhereWithAggregatesInput = {
    AND?: AIInteractionScalarWhereWithAggregatesInput | AIInteractionScalarWhereWithAggregatesInput[]
    OR?: AIInteractionScalarWhereWithAggregatesInput[]
    NOT?: AIInteractionScalarWhereWithAggregatesInput | AIInteractionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIInteraction"> | string
    sessionId?: StringWithAggregatesFilter<"AIInteraction"> | string
    timestamp?: DateTimeWithAggregatesFilter<"AIInteraction"> | Date | string
    prompt?: StringWithAggregatesFilter<"AIInteraction"> | string
    response?: StringWithAggregatesFilter<"AIInteraction"> | string
  }

  export type CommandWhereInput = {
    AND?: CommandWhereInput | CommandWhereInput[]
    OR?: CommandWhereInput[]
    NOT?: CommandWhereInput | CommandWhereInput[]
    id?: StringFilter<"Command"> | string
    sessionId?: StringFilter<"Command"> | string
    timestamp?: DateTimeFilter<"Command"> | Date | string
    command?: StringFilter<"Command"> | string
    type?: StringFilter<"Command"> | string
    gitData?: XOR<GitOperationNullableRelationFilter, GitOperationWhereInput> | null
    buildData?: XOR<BuildOperationNullableRelationFilter, BuildOperationWhereInput> | null
    testData?: XOR<TestOperationNullableRelationFilter, TestOperationWhereInput> | null
    session?: XOR<SessionRelationFilter, SessionWhereInput>
  }

  export type CommandOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    command?: SortOrder
    type?: SortOrder
    gitData?: GitOperationOrderByWithRelationInput
    buildData?: BuildOperationOrderByWithRelationInput
    testData?: TestOperationOrderByWithRelationInput
    session?: SessionOrderByWithRelationInput
  }

  export type CommandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommandWhereInput | CommandWhereInput[]
    OR?: CommandWhereInput[]
    NOT?: CommandWhereInput | CommandWhereInput[]
    sessionId?: StringFilter<"Command"> | string
    timestamp?: DateTimeFilter<"Command"> | Date | string
    command?: StringFilter<"Command"> | string
    type?: StringFilter<"Command"> | string
    gitData?: XOR<GitOperationNullableRelationFilter, GitOperationWhereInput> | null
    buildData?: XOR<BuildOperationNullableRelationFilter, BuildOperationWhereInput> | null
    testData?: XOR<TestOperationNullableRelationFilter, TestOperationWhereInput> | null
    session?: XOR<SessionRelationFilter, SessionWhereInput>
  }, "id">

  export type CommandOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    command?: SortOrder
    type?: SortOrder
    _count?: CommandCountOrderByAggregateInput
    _max?: CommandMaxOrderByAggregateInput
    _min?: CommandMinOrderByAggregateInput
  }

  export type CommandScalarWhereWithAggregatesInput = {
    AND?: CommandScalarWhereWithAggregatesInput | CommandScalarWhereWithAggregatesInput[]
    OR?: CommandScalarWhereWithAggregatesInput[]
    NOT?: CommandScalarWhereWithAggregatesInput | CommandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Command"> | string
    sessionId?: StringWithAggregatesFilter<"Command"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Command"> | Date | string
    command?: StringWithAggregatesFilter<"Command"> | string
    type?: StringWithAggregatesFilter<"Command"> | string
  }

  export type GitOperationWhereInput = {
    AND?: GitOperationWhereInput | GitOperationWhereInput[]
    OR?: GitOperationWhereInput[]
    NOT?: GitOperationWhereInput | GitOperationWhereInput[]
    id?: StringFilter<"GitOperation"> | string
    commandId?: StringFilter<"GitOperation"> | string
    operation?: StringFilter<"GitOperation"> | string
    branch?: StringFilter<"GitOperation"> | string
    commitHash?: StringNullableFilter<"GitOperation"> | string | null
    filesChanged?: StringNullableFilter<"GitOperation"> | string | null
    command?: XOR<CommandRelationFilter, CommandWhereInput>
  }

  export type GitOperationOrderByWithRelationInput = {
    id?: SortOrder
    commandId?: SortOrder
    operation?: SortOrder
    branch?: SortOrder
    commitHash?: SortOrderInput | SortOrder
    filesChanged?: SortOrderInput | SortOrder
    command?: CommandOrderByWithRelationInput
  }

  export type GitOperationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    commandId?: string
    AND?: GitOperationWhereInput | GitOperationWhereInput[]
    OR?: GitOperationWhereInput[]
    NOT?: GitOperationWhereInput | GitOperationWhereInput[]
    operation?: StringFilter<"GitOperation"> | string
    branch?: StringFilter<"GitOperation"> | string
    commitHash?: StringNullableFilter<"GitOperation"> | string | null
    filesChanged?: StringNullableFilter<"GitOperation"> | string | null
    command?: XOR<CommandRelationFilter, CommandWhereInput>
  }, "id" | "commandId">

  export type GitOperationOrderByWithAggregationInput = {
    id?: SortOrder
    commandId?: SortOrder
    operation?: SortOrder
    branch?: SortOrder
    commitHash?: SortOrderInput | SortOrder
    filesChanged?: SortOrderInput | SortOrder
    _count?: GitOperationCountOrderByAggregateInput
    _max?: GitOperationMaxOrderByAggregateInput
    _min?: GitOperationMinOrderByAggregateInput
  }

  export type GitOperationScalarWhereWithAggregatesInput = {
    AND?: GitOperationScalarWhereWithAggregatesInput | GitOperationScalarWhereWithAggregatesInput[]
    OR?: GitOperationScalarWhereWithAggregatesInput[]
    NOT?: GitOperationScalarWhereWithAggregatesInput | GitOperationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GitOperation"> | string
    commandId?: StringWithAggregatesFilter<"GitOperation"> | string
    operation?: StringWithAggregatesFilter<"GitOperation"> | string
    branch?: StringWithAggregatesFilter<"GitOperation"> | string
    commitHash?: StringNullableWithAggregatesFilter<"GitOperation"> | string | null
    filesChanged?: StringNullableWithAggregatesFilter<"GitOperation"> | string | null
  }

  export type BuildOperationWhereInput = {
    AND?: BuildOperationWhereInput | BuildOperationWhereInput[]
    OR?: BuildOperationWhereInput[]
    NOT?: BuildOperationWhereInput | BuildOperationWhereInput[]
    id?: StringFilter<"BuildOperation"> | string
    commandId?: StringFilter<"BuildOperation"> | string
    environment?: StringFilter<"BuildOperation"> | string
    framework?: StringFilter<"BuildOperation"> | string
    success?: BoolFilter<"BuildOperation"> | boolean
    duration?: IntFilter<"BuildOperation"> | number
    errors?: StringNullableFilter<"BuildOperation"> | string | null
    warnings?: StringNullableFilter<"BuildOperation"> | string | null
    outputLog?: StringNullableFilter<"BuildOperation"> | string | null
    command?: XOR<CommandRelationFilter, CommandWhereInput>
  }

  export type BuildOperationOrderByWithRelationInput = {
    id?: SortOrder
    commandId?: SortOrder
    environment?: SortOrder
    framework?: SortOrder
    success?: SortOrder
    duration?: SortOrder
    errors?: SortOrderInput | SortOrder
    warnings?: SortOrderInput | SortOrder
    outputLog?: SortOrderInput | SortOrder
    command?: CommandOrderByWithRelationInput
  }

  export type BuildOperationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    commandId?: string
    AND?: BuildOperationWhereInput | BuildOperationWhereInput[]
    OR?: BuildOperationWhereInput[]
    NOT?: BuildOperationWhereInput | BuildOperationWhereInput[]
    environment?: StringFilter<"BuildOperation"> | string
    framework?: StringFilter<"BuildOperation"> | string
    success?: BoolFilter<"BuildOperation"> | boolean
    duration?: IntFilter<"BuildOperation"> | number
    errors?: StringNullableFilter<"BuildOperation"> | string | null
    warnings?: StringNullableFilter<"BuildOperation"> | string | null
    outputLog?: StringNullableFilter<"BuildOperation"> | string | null
    command?: XOR<CommandRelationFilter, CommandWhereInput>
  }, "id" | "commandId">

  export type BuildOperationOrderByWithAggregationInput = {
    id?: SortOrder
    commandId?: SortOrder
    environment?: SortOrder
    framework?: SortOrder
    success?: SortOrder
    duration?: SortOrder
    errors?: SortOrderInput | SortOrder
    warnings?: SortOrderInput | SortOrder
    outputLog?: SortOrderInput | SortOrder
    _count?: BuildOperationCountOrderByAggregateInput
    _avg?: BuildOperationAvgOrderByAggregateInput
    _max?: BuildOperationMaxOrderByAggregateInput
    _min?: BuildOperationMinOrderByAggregateInput
    _sum?: BuildOperationSumOrderByAggregateInput
  }

  export type BuildOperationScalarWhereWithAggregatesInput = {
    AND?: BuildOperationScalarWhereWithAggregatesInput | BuildOperationScalarWhereWithAggregatesInput[]
    OR?: BuildOperationScalarWhereWithAggregatesInput[]
    NOT?: BuildOperationScalarWhereWithAggregatesInput | BuildOperationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BuildOperation"> | string
    commandId?: StringWithAggregatesFilter<"BuildOperation"> | string
    environment?: StringWithAggregatesFilter<"BuildOperation"> | string
    framework?: StringWithAggregatesFilter<"BuildOperation"> | string
    success?: BoolWithAggregatesFilter<"BuildOperation"> | boolean
    duration?: IntWithAggregatesFilter<"BuildOperation"> | number
    errors?: StringNullableWithAggregatesFilter<"BuildOperation"> | string | null
    warnings?: StringNullableWithAggregatesFilter<"BuildOperation"> | string | null
    outputLog?: StringNullableWithAggregatesFilter<"BuildOperation"> | string | null
  }

  export type TestOperationWhereInput = {
    AND?: TestOperationWhereInput | TestOperationWhereInput[]
    OR?: TestOperationWhereInput[]
    NOT?: TestOperationWhereInput | TestOperationWhereInput[]
    id?: StringFilter<"TestOperation"> | string
    commandId?: StringFilter<"TestOperation"> | string
    framework?: StringFilter<"TestOperation"> | string
    success?: BoolFilter<"TestOperation"> | boolean
    duration?: IntFilter<"TestOperation"> | number
    totalTests?: IntFilter<"TestOperation"> | number
    passedTests?: IntFilter<"TestOperation"> | number
    failedTests?: IntFilter<"TestOperation"> | number
    skippedTests?: IntFilter<"TestOperation"> | number
    errors?: StringNullableFilter<"TestOperation"> | string | null
    outputLog?: StringNullableFilter<"TestOperation"> | string | null
    command?: XOR<CommandRelationFilter, CommandWhereInput>
  }

  export type TestOperationOrderByWithRelationInput = {
    id?: SortOrder
    commandId?: SortOrder
    framework?: SortOrder
    success?: SortOrder
    duration?: SortOrder
    totalTests?: SortOrder
    passedTests?: SortOrder
    failedTests?: SortOrder
    skippedTests?: SortOrder
    errors?: SortOrderInput | SortOrder
    outputLog?: SortOrderInput | SortOrder
    command?: CommandOrderByWithRelationInput
  }

  export type TestOperationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    commandId?: string
    AND?: TestOperationWhereInput | TestOperationWhereInput[]
    OR?: TestOperationWhereInput[]
    NOT?: TestOperationWhereInput | TestOperationWhereInput[]
    framework?: StringFilter<"TestOperation"> | string
    success?: BoolFilter<"TestOperation"> | boolean
    duration?: IntFilter<"TestOperation"> | number
    totalTests?: IntFilter<"TestOperation"> | number
    passedTests?: IntFilter<"TestOperation"> | number
    failedTests?: IntFilter<"TestOperation"> | number
    skippedTests?: IntFilter<"TestOperation"> | number
    errors?: StringNullableFilter<"TestOperation"> | string | null
    outputLog?: StringNullableFilter<"TestOperation"> | string | null
    command?: XOR<CommandRelationFilter, CommandWhereInput>
  }, "id" | "commandId">

  export type TestOperationOrderByWithAggregationInput = {
    id?: SortOrder
    commandId?: SortOrder
    framework?: SortOrder
    success?: SortOrder
    duration?: SortOrder
    totalTests?: SortOrder
    passedTests?: SortOrder
    failedTests?: SortOrder
    skippedTests?: SortOrder
    errors?: SortOrderInput | SortOrder
    outputLog?: SortOrderInput | SortOrder
    _count?: TestOperationCountOrderByAggregateInput
    _avg?: TestOperationAvgOrderByAggregateInput
    _max?: TestOperationMaxOrderByAggregateInput
    _min?: TestOperationMinOrderByAggregateInput
    _sum?: TestOperationSumOrderByAggregateInput
  }

  export type TestOperationScalarWhereWithAggregatesInput = {
    AND?: TestOperationScalarWhereWithAggregatesInput | TestOperationScalarWhereWithAggregatesInput[]
    OR?: TestOperationScalarWhereWithAggregatesInput[]
    NOT?: TestOperationScalarWhereWithAggregatesInput | TestOperationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestOperation"> | string
    commandId?: StringWithAggregatesFilter<"TestOperation"> | string
    framework?: StringWithAggregatesFilter<"TestOperation"> | string
    success?: BoolWithAggregatesFilter<"TestOperation"> | boolean
    duration?: IntWithAggregatesFilter<"TestOperation"> | number
    totalTests?: IntWithAggregatesFilter<"TestOperation"> | number
    passedTests?: IntWithAggregatesFilter<"TestOperation"> | number
    failedTests?: IntWithAggregatesFilter<"TestOperation"> | number
    skippedTests?: IntWithAggregatesFilter<"TestOperation"> | number
    errors?: StringNullableWithAggregatesFilter<"TestOperation"> | string | null
    outputLog?: StringNullableWithAggregatesFilter<"TestOperation"> | string | null
  }

  export type SessionCreateInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    fileChanges?: FileChangeCreateNestedManyWithoutSessionInput
    aiInteractions?: AIInteractionCreateNestedManyWithoutSessionInput
    commands?: CommandCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    fileChanges?: FileChangeUncheckedCreateNestedManyWithoutSessionInput
    aiInteractions?: AIInteractionUncheckedCreateNestedManyWithoutSessionInput
    commands?: CommandUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileChanges?: FileChangeUpdateManyWithoutSessionNestedInput
    aiInteractions?: AIInteractionUpdateManyWithoutSessionNestedInput
    commands?: CommandUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileChanges?: FileChangeUncheckedUpdateManyWithoutSessionNestedInput
    aiInteractions?: AIInteractionUncheckedUpdateManyWithoutSessionNestedInput
    commands?: CommandUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileChangeCreateInput = {
    id?: string
    timestamp?: Date | string
    filePath: string
    changeType: string
    session: SessionCreateNestedOneWithoutFileChangesInput
  }

  export type FileChangeUncheckedCreateInput = {
    id?: string
    sessionId: string
    timestamp?: Date | string
    filePath: string
    changeType: string
  }

  export type FileChangeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    filePath?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
    session?: SessionUpdateOneRequiredWithoutFileChangesNestedInput
  }

  export type FileChangeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    filePath?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
  }

  export type FileChangeCreateManyInput = {
    id?: string
    sessionId: string
    timestamp?: Date | string
    filePath: string
    changeType: string
  }

  export type FileChangeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    filePath?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
  }

  export type FileChangeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    filePath?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
  }

  export type AIInteractionCreateInput = {
    id?: string
    timestamp?: Date | string
    prompt: string
    response: string
    session: SessionCreateNestedOneWithoutAiInteractionsInput
  }

  export type AIInteractionUncheckedCreateInput = {
    id?: string
    sessionId: string
    timestamp?: Date | string
    prompt: string
    response: string
  }

  export type AIInteractionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    session?: SessionUpdateOneRequiredWithoutAiInteractionsNestedInput
  }

  export type AIInteractionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
  }

  export type AIInteractionCreateManyInput = {
    id?: string
    sessionId: string
    timestamp?: Date | string
    prompt: string
    response: string
  }

  export type AIInteractionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
  }

  export type AIInteractionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
  }

  export type CommandCreateInput = {
    id?: string
    timestamp?: Date | string
    command: string
    type: string
    gitData?: GitOperationCreateNestedOneWithoutCommandInput
    buildData?: BuildOperationCreateNestedOneWithoutCommandInput
    testData?: TestOperationCreateNestedOneWithoutCommandInput
    session: SessionCreateNestedOneWithoutCommandsInput
  }

  export type CommandUncheckedCreateInput = {
    id?: string
    sessionId: string
    timestamp?: Date | string
    command: string
    type: string
    gitData?: GitOperationUncheckedCreateNestedOneWithoutCommandInput
    buildData?: BuildOperationUncheckedCreateNestedOneWithoutCommandInput
    testData?: TestOperationUncheckedCreateNestedOneWithoutCommandInput
  }

  export type CommandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    command?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gitData?: GitOperationUpdateOneWithoutCommandNestedInput
    buildData?: BuildOperationUpdateOneWithoutCommandNestedInput
    testData?: TestOperationUpdateOneWithoutCommandNestedInput
    session?: SessionUpdateOneRequiredWithoutCommandsNestedInput
  }

  export type CommandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    command?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gitData?: GitOperationUncheckedUpdateOneWithoutCommandNestedInput
    buildData?: BuildOperationUncheckedUpdateOneWithoutCommandNestedInput
    testData?: TestOperationUncheckedUpdateOneWithoutCommandNestedInput
  }

  export type CommandCreateManyInput = {
    id?: string
    sessionId: string
    timestamp?: Date | string
    command: string
    type: string
  }

  export type CommandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    command?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CommandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    command?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type GitOperationCreateInput = {
    id?: string
    operation: string
    branch: string
    commitHash?: string | null
    filesChanged?: string | null
    command: CommandCreateNestedOneWithoutGitDataInput
  }

  export type GitOperationUncheckedCreateInput = {
    id?: string
    commandId: string
    operation: string
    branch: string
    commitHash?: string | null
    filesChanged?: string | null
  }

  export type GitOperationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    filesChanged?: NullableStringFieldUpdateOperationsInput | string | null
    command?: CommandUpdateOneRequiredWithoutGitDataNestedInput
  }

  export type GitOperationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    commandId?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    filesChanged?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GitOperationCreateManyInput = {
    id?: string
    commandId: string
    operation: string
    branch: string
    commitHash?: string | null
    filesChanged?: string | null
  }

  export type GitOperationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    filesChanged?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GitOperationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    commandId?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    filesChanged?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BuildOperationCreateInput = {
    id?: string
    environment: string
    framework: string
    success: boolean
    duration: number
    errors?: string | null
    warnings?: string | null
    outputLog?: string | null
    command: CommandCreateNestedOneWithoutBuildDataInput
  }

  export type BuildOperationUncheckedCreateInput = {
    id?: string
    commandId: string
    environment: string
    framework: string
    success: boolean
    duration: number
    errors?: string | null
    warnings?: string | null
    outputLog?: string | null
  }

  export type BuildOperationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    warnings?: NullableStringFieldUpdateOperationsInput | string | null
    outputLog?: NullableStringFieldUpdateOperationsInput | string | null
    command?: CommandUpdateOneRequiredWithoutBuildDataNestedInput
  }

  export type BuildOperationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    commandId?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    warnings?: NullableStringFieldUpdateOperationsInput | string | null
    outputLog?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BuildOperationCreateManyInput = {
    id?: string
    commandId: string
    environment: string
    framework: string
    success: boolean
    duration: number
    errors?: string | null
    warnings?: string | null
    outputLog?: string | null
  }

  export type BuildOperationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    warnings?: NullableStringFieldUpdateOperationsInput | string | null
    outputLog?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BuildOperationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    commandId?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    warnings?: NullableStringFieldUpdateOperationsInput | string | null
    outputLog?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestOperationCreateInput = {
    id?: string
    framework: string
    success: boolean
    duration: number
    totalTests: number
    passedTests: number
    failedTests: number
    skippedTests: number
    errors?: string | null
    outputLog?: string | null
    command: CommandCreateNestedOneWithoutTestDataInput
  }

  export type TestOperationUncheckedCreateInput = {
    id?: string
    commandId: string
    framework: string
    success: boolean
    duration: number
    totalTests: number
    passedTests: number
    failedTests: number
    skippedTests: number
    errors?: string | null
    outputLog?: string | null
  }

  export type TestOperationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    totalTests?: IntFieldUpdateOperationsInput | number
    passedTests?: IntFieldUpdateOperationsInput | number
    failedTests?: IntFieldUpdateOperationsInput | number
    skippedTests?: IntFieldUpdateOperationsInput | number
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    outputLog?: NullableStringFieldUpdateOperationsInput | string | null
    command?: CommandUpdateOneRequiredWithoutTestDataNestedInput
  }

  export type TestOperationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    commandId?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    totalTests?: IntFieldUpdateOperationsInput | number
    passedTests?: IntFieldUpdateOperationsInput | number
    failedTests?: IntFieldUpdateOperationsInput | number
    skippedTests?: IntFieldUpdateOperationsInput | number
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    outputLog?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestOperationCreateManyInput = {
    id?: string
    commandId: string
    framework: string
    success: boolean
    duration: number
    totalTests: number
    passedTests: number
    failedTests: number
    skippedTests: number
    errors?: string | null
    outputLog?: string | null
  }

  export type TestOperationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    totalTests?: IntFieldUpdateOperationsInput | number
    passedTests?: IntFieldUpdateOperationsInput | number
    failedTests?: IntFieldUpdateOperationsInput | number
    skippedTests?: IntFieldUpdateOperationsInput | number
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    outputLog?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestOperationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    commandId?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    totalTests?: IntFieldUpdateOperationsInput | number
    passedTests?: IntFieldUpdateOperationsInput | number
    failedTests?: IntFieldUpdateOperationsInput | number
    skippedTests?: IntFieldUpdateOperationsInput | number
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    outputLog?: NullableStringFieldUpdateOperationsInput | string | null
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
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type FileChangeListRelationFilter = {
    every?: FileChangeWhereInput
    some?: FileChangeWhereInput
    none?: FileChangeWhereInput
  }

  export type AIInteractionListRelationFilter = {
    every?: AIInteractionWhereInput
    some?: AIInteractionWhereInput
    none?: AIInteractionWhereInput
  }

  export type CommandListRelationFilter = {
    every?: CommandWhereInput
    some?: CommandWhereInput
    none?: CommandWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FileChangeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AIInteractionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommandOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type SessionRelationFilter = {
    is?: SessionWhereInput
    isNot?: SessionWhereInput
  }

  export type FileChangeCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    filePath?: SortOrder
    changeType?: SortOrder
  }

  export type FileChangeMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    filePath?: SortOrder
    changeType?: SortOrder
  }

  export type FileChangeMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    filePath?: SortOrder
    changeType?: SortOrder
  }

  export type AIInteractionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
  }

  export type AIInteractionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
  }

  export type AIInteractionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
  }

  export type GitOperationNullableRelationFilter = {
    is?: GitOperationWhereInput | null
    isNot?: GitOperationWhereInput | null
  }

  export type BuildOperationNullableRelationFilter = {
    is?: BuildOperationWhereInput | null
    isNot?: BuildOperationWhereInput | null
  }

  export type TestOperationNullableRelationFilter = {
    is?: TestOperationWhereInput | null
    isNot?: TestOperationWhereInput | null
  }

  export type CommandCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    command?: SortOrder
    type?: SortOrder
  }

  export type CommandMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    command?: SortOrder
    type?: SortOrder
  }

  export type CommandMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    command?: SortOrder
    type?: SortOrder
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CommandRelationFilter = {
    is?: CommandWhereInput
    isNot?: CommandWhereInput
  }

  export type GitOperationCountOrderByAggregateInput = {
    id?: SortOrder
    commandId?: SortOrder
    operation?: SortOrder
    branch?: SortOrder
    commitHash?: SortOrder
    filesChanged?: SortOrder
  }

  export type GitOperationMaxOrderByAggregateInput = {
    id?: SortOrder
    commandId?: SortOrder
    operation?: SortOrder
    branch?: SortOrder
    commitHash?: SortOrder
    filesChanged?: SortOrder
  }

  export type GitOperationMinOrderByAggregateInput = {
    id?: SortOrder
    commandId?: SortOrder
    operation?: SortOrder
    branch?: SortOrder
    commitHash?: SortOrder
    filesChanged?: SortOrder
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type BuildOperationCountOrderByAggregateInput = {
    id?: SortOrder
    commandId?: SortOrder
    environment?: SortOrder
    framework?: SortOrder
    success?: SortOrder
    duration?: SortOrder
    errors?: SortOrder
    warnings?: SortOrder
    outputLog?: SortOrder
  }

  export type BuildOperationAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type BuildOperationMaxOrderByAggregateInput = {
    id?: SortOrder
    commandId?: SortOrder
    environment?: SortOrder
    framework?: SortOrder
    success?: SortOrder
    duration?: SortOrder
    errors?: SortOrder
    warnings?: SortOrder
    outputLog?: SortOrder
  }

  export type BuildOperationMinOrderByAggregateInput = {
    id?: SortOrder
    commandId?: SortOrder
    environment?: SortOrder
    framework?: SortOrder
    success?: SortOrder
    duration?: SortOrder
    errors?: SortOrder
    warnings?: SortOrder
    outputLog?: SortOrder
  }

  export type BuildOperationSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TestOperationCountOrderByAggregateInput = {
    id?: SortOrder
    commandId?: SortOrder
    framework?: SortOrder
    success?: SortOrder
    duration?: SortOrder
    totalTests?: SortOrder
    passedTests?: SortOrder
    failedTests?: SortOrder
    skippedTests?: SortOrder
    errors?: SortOrder
    outputLog?: SortOrder
  }

  export type TestOperationAvgOrderByAggregateInput = {
    duration?: SortOrder
    totalTests?: SortOrder
    passedTests?: SortOrder
    failedTests?: SortOrder
    skippedTests?: SortOrder
  }

  export type TestOperationMaxOrderByAggregateInput = {
    id?: SortOrder
    commandId?: SortOrder
    framework?: SortOrder
    success?: SortOrder
    duration?: SortOrder
    totalTests?: SortOrder
    passedTests?: SortOrder
    failedTests?: SortOrder
    skippedTests?: SortOrder
    errors?: SortOrder
    outputLog?: SortOrder
  }

  export type TestOperationMinOrderByAggregateInput = {
    id?: SortOrder
    commandId?: SortOrder
    framework?: SortOrder
    success?: SortOrder
    duration?: SortOrder
    totalTests?: SortOrder
    passedTests?: SortOrder
    failedTests?: SortOrder
    skippedTests?: SortOrder
    errors?: SortOrder
    outputLog?: SortOrder
  }

  export type TestOperationSumOrderByAggregateInput = {
    duration?: SortOrder
    totalTests?: SortOrder
    passedTests?: SortOrder
    failedTests?: SortOrder
    skippedTests?: SortOrder
  }

  export type FileChangeCreateNestedManyWithoutSessionInput = {
    create?: XOR<FileChangeCreateWithoutSessionInput, FileChangeUncheckedCreateWithoutSessionInput> | FileChangeCreateWithoutSessionInput[] | FileChangeUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FileChangeCreateOrConnectWithoutSessionInput | FileChangeCreateOrConnectWithoutSessionInput[]
    createMany?: FileChangeCreateManySessionInputEnvelope
    connect?: FileChangeWhereUniqueInput | FileChangeWhereUniqueInput[]
  }

  export type AIInteractionCreateNestedManyWithoutSessionInput = {
    create?: XOR<AIInteractionCreateWithoutSessionInput, AIInteractionUncheckedCreateWithoutSessionInput> | AIInteractionCreateWithoutSessionInput[] | AIInteractionUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AIInteractionCreateOrConnectWithoutSessionInput | AIInteractionCreateOrConnectWithoutSessionInput[]
    createMany?: AIInteractionCreateManySessionInputEnvelope
    connect?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
  }

  export type CommandCreateNestedManyWithoutSessionInput = {
    create?: XOR<CommandCreateWithoutSessionInput, CommandUncheckedCreateWithoutSessionInput> | CommandCreateWithoutSessionInput[] | CommandUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutSessionInput | CommandCreateOrConnectWithoutSessionInput[]
    createMany?: CommandCreateManySessionInputEnvelope
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
  }

  export type FileChangeUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<FileChangeCreateWithoutSessionInput, FileChangeUncheckedCreateWithoutSessionInput> | FileChangeCreateWithoutSessionInput[] | FileChangeUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FileChangeCreateOrConnectWithoutSessionInput | FileChangeCreateOrConnectWithoutSessionInput[]
    createMany?: FileChangeCreateManySessionInputEnvelope
    connect?: FileChangeWhereUniqueInput | FileChangeWhereUniqueInput[]
  }

  export type AIInteractionUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<AIInteractionCreateWithoutSessionInput, AIInteractionUncheckedCreateWithoutSessionInput> | AIInteractionCreateWithoutSessionInput[] | AIInteractionUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AIInteractionCreateOrConnectWithoutSessionInput | AIInteractionCreateOrConnectWithoutSessionInput[]
    createMany?: AIInteractionCreateManySessionInputEnvelope
    connect?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
  }

  export type CommandUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<CommandCreateWithoutSessionInput, CommandUncheckedCreateWithoutSessionInput> | CommandCreateWithoutSessionInput[] | CommandUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutSessionInput | CommandCreateOrConnectWithoutSessionInput[]
    createMany?: CommandCreateManySessionInputEnvelope
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FileChangeUpdateManyWithoutSessionNestedInput = {
    create?: XOR<FileChangeCreateWithoutSessionInput, FileChangeUncheckedCreateWithoutSessionInput> | FileChangeCreateWithoutSessionInput[] | FileChangeUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FileChangeCreateOrConnectWithoutSessionInput | FileChangeCreateOrConnectWithoutSessionInput[]
    upsert?: FileChangeUpsertWithWhereUniqueWithoutSessionInput | FileChangeUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: FileChangeCreateManySessionInputEnvelope
    set?: FileChangeWhereUniqueInput | FileChangeWhereUniqueInput[]
    disconnect?: FileChangeWhereUniqueInput | FileChangeWhereUniqueInput[]
    delete?: FileChangeWhereUniqueInput | FileChangeWhereUniqueInput[]
    connect?: FileChangeWhereUniqueInput | FileChangeWhereUniqueInput[]
    update?: FileChangeUpdateWithWhereUniqueWithoutSessionInput | FileChangeUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: FileChangeUpdateManyWithWhereWithoutSessionInput | FileChangeUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: FileChangeScalarWhereInput | FileChangeScalarWhereInput[]
  }

  export type AIInteractionUpdateManyWithoutSessionNestedInput = {
    create?: XOR<AIInteractionCreateWithoutSessionInput, AIInteractionUncheckedCreateWithoutSessionInput> | AIInteractionCreateWithoutSessionInput[] | AIInteractionUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AIInteractionCreateOrConnectWithoutSessionInput | AIInteractionCreateOrConnectWithoutSessionInput[]
    upsert?: AIInteractionUpsertWithWhereUniqueWithoutSessionInput | AIInteractionUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: AIInteractionCreateManySessionInputEnvelope
    set?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
    disconnect?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
    delete?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
    connect?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
    update?: AIInteractionUpdateWithWhereUniqueWithoutSessionInput | AIInteractionUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: AIInteractionUpdateManyWithWhereWithoutSessionInput | AIInteractionUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: AIInteractionScalarWhereInput | AIInteractionScalarWhereInput[]
  }

  export type CommandUpdateManyWithoutSessionNestedInput = {
    create?: XOR<CommandCreateWithoutSessionInput, CommandUncheckedCreateWithoutSessionInput> | CommandCreateWithoutSessionInput[] | CommandUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutSessionInput | CommandCreateOrConnectWithoutSessionInput[]
    upsert?: CommandUpsertWithWhereUniqueWithoutSessionInput | CommandUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: CommandCreateManySessionInputEnvelope
    set?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    disconnect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    delete?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    update?: CommandUpdateWithWhereUniqueWithoutSessionInput | CommandUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: CommandUpdateManyWithWhereWithoutSessionInput | CommandUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: CommandScalarWhereInput | CommandScalarWhereInput[]
  }

  export type FileChangeUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<FileChangeCreateWithoutSessionInput, FileChangeUncheckedCreateWithoutSessionInput> | FileChangeCreateWithoutSessionInput[] | FileChangeUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FileChangeCreateOrConnectWithoutSessionInput | FileChangeCreateOrConnectWithoutSessionInput[]
    upsert?: FileChangeUpsertWithWhereUniqueWithoutSessionInput | FileChangeUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: FileChangeCreateManySessionInputEnvelope
    set?: FileChangeWhereUniqueInput | FileChangeWhereUniqueInput[]
    disconnect?: FileChangeWhereUniqueInput | FileChangeWhereUniqueInput[]
    delete?: FileChangeWhereUniqueInput | FileChangeWhereUniqueInput[]
    connect?: FileChangeWhereUniqueInput | FileChangeWhereUniqueInput[]
    update?: FileChangeUpdateWithWhereUniqueWithoutSessionInput | FileChangeUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: FileChangeUpdateManyWithWhereWithoutSessionInput | FileChangeUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: FileChangeScalarWhereInput | FileChangeScalarWhereInput[]
  }

  export type AIInteractionUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<AIInteractionCreateWithoutSessionInput, AIInteractionUncheckedCreateWithoutSessionInput> | AIInteractionCreateWithoutSessionInput[] | AIInteractionUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AIInteractionCreateOrConnectWithoutSessionInput | AIInteractionCreateOrConnectWithoutSessionInput[]
    upsert?: AIInteractionUpsertWithWhereUniqueWithoutSessionInput | AIInteractionUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: AIInteractionCreateManySessionInputEnvelope
    set?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
    disconnect?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
    delete?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
    connect?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
    update?: AIInteractionUpdateWithWhereUniqueWithoutSessionInput | AIInteractionUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: AIInteractionUpdateManyWithWhereWithoutSessionInput | AIInteractionUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: AIInteractionScalarWhereInput | AIInteractionScalarWhereInput[]
  }

  export type CommandUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<CommandCreateWithoutSessionInput, CommandUncheckedCreateWithoutSessionInput> | CommandCreateWithoutSessionInput[] | CommandUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutSessionInput | CommandCreateOrConnectWithoutSessionInput[]
    upsert?: CommandUpsertWithWhereUniqueWithoutSessionInput | CommandUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: CommandCreateManySessionInputEnvelope
    set?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    disconnect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    delete?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    update?: CommandUpdateWithWhereUniqueWithoutSessionInput | CommandUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: CommandUpdateManyWithWhereWithoutSessionInput | CommandUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: CommandScalarWhereInput | CommandScalarWhereInput[]
  }

  export type SessionCreateNestedOneWithoutFileChangesInput = {
    create?: XOR<SessionCreateWithoutFileChangesInput, SessionUncheckedCreateWithoutFileChangesInput>
    connectOrCreate?: SessionCreateOrConnectWithoutFileChangesInput
    connect?: SessionWhereUniqueInput
  }

  export type SessionUpdateOneRequiredWithoutFileChangesNestedInput = {
    create?: XOR<SessionCreateWithoutFileChangesInput, SessionUncheckedCreateWithoutFileChangesInput>
    connectOrCreate?: SessionCreateOrConnectWithoutFileChangesInput
    upsert?: SessionUpsertWithoutFileChangesInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutFileChangesInput, SessionUpdateWithoutFileChangesInput>, SessionUncheckedUpdateWithoutFileChangesInput>
  }

  export type SessionCreateNestedOneWithoutAiInteractionsInput = {
    create?: XOR<SessionCreateWithoutAiInteractionsInput, SessionUncheckedCreateWithoutAiInteractionsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutAiInteractionsInput
    connect?: SessionWhereUniqueInput
  }

  export type SessionUpdateOneRequiredWithoutAiInteractionsNestedInput = {
    create?: XOR<SessionCreateWithoutAiInteractionsInput, SessionUncheckedCreateWithoutAiInteractionsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutAiInteractionsInput
    upsert?: SessionUpsertWithoutAiInteractionsInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutAiInteractionsInput, SessionUpdateWithoutAiInteractionsInput>, SessionUncheckedUpdateWithoutAiInteractionsInput>
  }

  export type GitOperationCreateNestedOneWithoutCommandInput = {
    create?: XOR<GitOperationCreateWithoutCommandInput, GitOperationUncheckedCreateWithoutCommandInput>
    connectOrCreate?: GitOperationCreateOrConnectWithoutCommandInput
    connect?: GitOperationWhereUniqueInput
  }

  export type BuildOperationCreateNestedOneWithoutCommandInput = {
    create?: XOR<BuildOperationCreateWithoutCommandInput, BuildOperationUncheckedCreateWithoutCommandInput>
    connectOrCreate?: BuildOperationCreateOrConnectWithoutCommandInput
    connect?: BuildOperationWhereUniqueInput
  }

  export type TestOperationCreateNestedOneWithoutCommandInput = {
    create?: XOR<TestOperationCreateWithoutCommandInput, TestOperationUncheckedCreateWithoutCommandInput>
    connectOrCreate?: TestOperationCreateOrConnectWithoutCommandInput
    connect?: TestOperationWhereUniqueInput
  }

  export type SessionCreateNestedOneWithoutCommandsInput = {
    create?: XOR<SessionCreateWithoutCommandsInput, SessionUncheckedCreateWithoutCommandsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutCommandsInput
    connect?: SessionWhereUniqueInput
  }

  export type GitOperationUncheckedCreateNestedOneWithoutCommandInput = {
    create?: XOR<GitOperationCreateWithoutCommandInput, GitOperationUncheckedCreateWithoutCommandInput>
    connectOrCreate?: GitOperationCreateOrConnectWithoutCommandInput
    connect?: GitOperationWhereUniqueInput
  }

  export type BuildOperationUncheckedCreateNestedOneWithoutCommandInput = {
    create?: XOR<BuildOperationCreateWithoutCommandInput, BuildOperationUncheckedCreateWithoutCommandInput>
    connectOrCreate?: BuildOperationCreateOrConnectWithoutCommandInput
    connect?: BuildOperationWhereUniqueInput
  }

  export type TestOperationUncheckedCreateNestedOneWithoutCommandInput = {
    create?: XOR<TestOperationCreateWithoutCommandInput, TestOperationUncheckedCreateWithoutCommandInput>
    connectOrCreate?: TestOperationCreateOrConnectWithoutCommandInput
    connect?: TestOperationWhereUniqueInput
  }

  export type GitOperationUpdateOneWithoutCommandNestedInput = {
    create?: XOR<GitOperationCreateWithoutCommandInput, GitOperationUncheckedCreateWithoutCommandInput>
    connectOrCreate?: GitOperationCreateOrConnectWithoutCommandInput
    upsert?: GitOperationUpsertWithoutCommandInput
    disconnect?: GitOperationWhereInput | boolean
    delete?: GitOperationWhereInput | boolean
    connect?: GitOperationWhereUniqueInput
    update?: XOR<XOR<GitOperationUpdateToOneWithWhereWithoutCommandInput, GitOperationUpdateWithoutCommandInput>, GitOperationUncheckedUpdateWithoutCommandInput>
  }

  export type BuildOperationUpdateOneWithoutCommandNestedInput = {
    create?: XOR<BuildOperationCreateWithoutCommandInput, BuildOperationUncheckedCreateWithoutCommandInput>
    connectOrCreate?: BuildOperationCreateOrConnectWithoutCommandInput
    upsert?: BuildOperationUpsertWithoutCommandInput
    disconnect?: BuildOperationWhereInput | boolean
    delete?: BuildOperationWhereInput | boolean
    connect?: BuildOperationWhereUniqueInput
    update?: XOR<XOR<BuildOperationUpdateToOneWithWhereWithoutCommandInput, BuildOperationUpdateWithoutCommandInput>, BuildOperationUncheckedUpdateWithoutCommandInput>
  }

  export type TestOperationUpdateOneWithoutCommandNestedInput = {
    create?: XOR<TestOperationCreateWithoutCommandInput, TestOperationUncheckedCreateWithoutCommandInput>
    connectOrCreate?: TestOperationCreateOrConnectWithoutCommandInput
    upsert?: TestOperationUpsertWithoutCommandInput
    disconnect?: TestOperationWhereInput | boolean
    delete?: TestOperationWhereInput | boolean
    connect?: TestOperationWhereUniqueInput
    update?: XOR<XOR<TestOperationUpdateToOneWithWhereWithoutCommandInput, TestOperationUpdateWithoutCommandInput>, TestOperationUncheckedUpdateWithoutCommandInput>
  }

  export type SessionUpdateOneRequiredWithoutCommandsNestedInput = {
    create?: XOR<SessionCreateWithoutCommandsInput, SessionUncheckedCreateWithoutCommandsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutCommandsInput
    upsert?: SessionUpsertWithoutCommandsInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutCommandsInput, SessionUpdateWithoutCommandsInput>, SessionUncheckedUpdateWithoutCommandsInput>
  }

  export type GitOperationUncheckedUpdateOneWithoutCommandNestedInput = {
    create?: XOR<GitOperationCreateWithoutCommandInput, GitOperationUncheckedCreateWithoutCommandInput>
    connectOrCreate?: GitOperationCreateOrConnectWithoutCommandInput
    upsert?: GitOperationUpsertWithoutCommandInput
    disconnect?: GitOperationWhereInput | boolean
    delete?: GitOperationWhereInput | boolean
    connect?: GitOperationWhereUniqueInput
    update?: XOR<XOR<GitOperationUpdateToOneWithWhereWithoutCommandInput, GitOperationUpdateWithoutCommandInput>, GitOperationUncheckedUpdateWithoutCommandInput>
  }

  export type BuildOperationUncheckedUpdateOneWithoutCommandNestedInput = {
    create?: XOR<BuildOperationCreateWithoutCommandInput, BuildOperationUncheckedCreateWithoutCommandInput>
    connectOrCreate?: BuildOperationCreateOrConnectWithoutCommandInput
    upsert?: BuildOperationUpsertWithoutCommandInput
    disconnect?: BuildOperationWhereInput | boolean
    delete?: BuildOperationWhereInput | boolean
    connect?: BuildOperationWhereUniqueInput
    update?: XOR<XOR<BuildOperationUpdateToOneWithWhereWithoutCommandInput, BuildOperationUpdateWithoutCommandInput>, BuildOperationUncheckedUpdateWithoutCommandInput>
  }

  export type TestOperationUncheckedUpdateOneWithoutCommandNestedInput = {
    create?: XOR<TestOperationCreateWithoutCommandInput, TestOperationUncheckedCreateWithoutCommandInput>
    connectOrCreate?: TestOperationCreateOrConnectWithoutCommandInput
    upsert?: TestOperationUpsertWithoutCommandInput
    disconnect?: TestOperationWhereInput | boolean
    delete?: TestOperationWhereInput | boolean
    connect?: TestOperationWhereUniqueInput
    update?: XOR<XOR<TestOperationUpdateToOneWithWhereWithoutCommandInput, TestOperationUpdateWithoutCommandInput>, TestOperationUncheckedUpdateWithoutCommandInput>
  }

  export type CommandCreateNestedOneWithoutGitDataInput = {
    create?: XOR<CommandCreateWithoutGitDataInput, CommandUncheckedCreateWithoutGitDataInput>
    connectOrCreate?: CommandCreateOrConnectWithoutGitDataInput
    connect?: CommandWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CommandUpdateOneRequiredWithoutGitDataNestedInput = {
    create?: XOR<CommandCreateWithoutGitDataInput, CommandUncheckedCreateWithoutGitDataInput>
    connectOrCreate?: CommandCreateOrConnectWithoutGitDataInput
    upsert?: CommandUpsertWithoutGitDataInput
    connect?: CommandWhereUniqueInput
    update?: XOR<XOR<CommandUpdateToOneWithWhereWithoutGitDataInput, CommandUpdateWithoutGitDataInput>, CommandUncheckedUpdateWithoutGitDataInput>
  }

  export type CommandCreateNestedOneWithoutBuildDataInput = {
    create?: XOR<CommandCreateWithoutBuildDataInput, CommandUncheckedCreateWithoutBuildDataInput>
    connectOrCreate?: CommandCreateOrConnectWithoutBuildDataInput
    connect?: CommandWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommandUpdateOneRequiredWithoutBuildDataNestedInput = {
    create?: XOR<CommandCreateWithoutBuildDataInput, CommandUncheckedCreateWithoutBuildDataInput>
    connectOrCreate?: CommandCreateOrConnectWithoutBuildDataInput
    upsert?: CommandUpsertWithoutBuildDataInput
    connect?: CommandWhereUniqueInput
    update?: XOR<XOR<CommandUpdateToOneWithWhereWithoutBuildDataInput, CommandUpdateWithoutBuildDataInput>, CommandUncheckedUpdateWithoutBuildDataInput>
  }

  export type CommandCreateNestedOneWithoutTestDataInput = {
    create?: XOR<CommandCreateWithoutTestDataInput, CommandUncheckedCreateWithoutTestDataInput>
    connectOrCreate?: CommandCreateOrConnectWithoutTestDataInput
    connect?: CommandWhereUniqueInput
  }

  export type CommandUpdateOneRequiredWithoutTestDataNestedInput = {
    create?: XOR<CommandCreateWithoutTestDataInput, CommandUncheckedCreateWithoutTestDataInput>
    connectOrCreate?: CommandCreateOrConnectWithoutTestDataInput
    upsert?: CommandUpsertWithoutTestDataInput
    connect?: CommandWhereUniqueInput
    update?: XOR<XOR<CommandUpdateToOneWithWhereWithoutTestDataInput, CommandUpdateWithoutTestDataInput>, CommandUncheckedUpdateWithoutTestDataInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type FileChangeCreateWithoutSessionInput = {
    id?: string
    timestamp?: Date | string
    filePath: string
    changeType: string
  }

  export type FileChangeUncheckedCreateWithoutSessionInput = {
    id?: string
    timestamp?: Date | string
    filePath: string
    changeType: string
  }

  export type FileChangeCreateOrConnectWithoutSessionInput = {
    where: FileChangeWhereUniqueInput
    create: XOR<FileChangeCreateWithoutSessionInput, FileChangeUncheckedCreateWithoutSessionInput>
  }

  export type FileChangeCreateManySessionInputEnvelope = {
    data: FileChangeCreateManySessionInput | FileChangeCreateManySessionInput[]
  }

  export type AIInteractionCreateWithoutSessionInput = {
    id?: string
    timestamp?: Date | string
    prompt: string
    response: string
  }

  export type AIInteractionUncheckedCreateWithoutSessionInput = {
    id?: string
    timestamp?: Date | string
    prompt: string
    response: string
  }

  export type AIInteractionCreateOrConnectWithoutSessionInput = {
    where: AIInteractionWhereUniqueInput
    create: XOR<AIInteractionCreateWithoutSessionInput, AIInteractionUncheckedCreateWithoutSessionInput>
  }

  export type AIInteractionCreateManySessionInputEnvelope = {
    data: AIInteractionCreateManySessionInput | AIInteractionCreateManySessionInput[]
  }

  export type CommandCreateWithoutSessionInput = {
    id?: string
    timestamp?: Date | string
    command: string
    type: string
    gitData?: GitOperationCreateNestedOneWithoutCommandInput
    buildData?: BuildOperationCreateNestedOneWithoutCommandInput
    testData?: TestOperationCreateNestedOneWithoutCommandInput
  }

  export type CommandUncheckedCreateWithoutSessionInput = {
    id?: string
    timestamp?: Date | string
    command: string
    type: string
    gitData?: GitOperationUncheckedCreateNestedOneWithoutCommandInput
    buildData?: BuildOperationUncheckedCreateNestedOneWithoutCommandInput
    testData?: TestOperationUncheckedCreateNestedOneWithoutCommandInput
  }

  export type CommandCreateOrConnectWithoutSessionInput = {
    where: CommandWhereUniqueInput
    create: XOR<CommandCreateWithoutSessionInput, CommandUncheckedCreateWithoutSessionInput>
  }

  export type CommandCreateManySessionInputEnvelope = {
    data: CommandCreateManySessionInput | CommandCreateManySessionInput[]
  }

  export type FileChangeUpsertWithWhereUniqueWithoutSessionInput = {
    where: FileChangeWhereUniqueInput
    update: XOR<FileChangeUpdateWithoutSessionInput, FileChangeUncheckedUpdateWithoutSessionInput>
    create: XOR<FileChangeCreateWithoutSessionInput, FileChangeUncheckedCreateWithoutSessionInput>
  }

  export type FileChangeUpdateWithWhereUniqueWithoutSessionInput = {
    where: FileChangeWhereUniqueInput
    data: XOR<FileChangeUpdateWithoutSessionInput, FileChangeUncheckedUpdateWithoutSessionInput>
  }

  export type FileChangeUpdateManyWithWhereWithoutSessionInput = {
    where: FileChangeScalarWhereInput
    data: XOR<FileChangeUpdateManyMutationInput, FileChangeUncheckedUpdateManyWithoutSessionInput>
  }

  export type FileChangeScalarWhereInput = {
    AND?: FileChangeScalarWhereInput | FileChangeScalarWhereInput[]
    OR?: FileChangeScalarWhereInput[]
    NOT?: FileChangeScalarWhereInput | FileChangeScalarWhereInput[]
    id?: StringFilter<"FileChange"> | string
    sessionId?: StringFilter<"FileChange"> | string
    timestamp?: DateTimeFilter<"FileChange"> | Date | string
    filePath?: StringFilter<"FileChange"> | string
    changeType?: StringFilter<"FileChange"> | string
  }

  export type AIInteractionUpsertWithWhereUniqueWithoutSessionInput = {
    where: AIInteractionWhereUniqueInput
    update: XOR<AIInteractionUpdateWithoutSessionInput, AIInteractionUncheckedUpdateWithoutSessionInput>
    create: XOR<AIInteractionCreateWithoutSessionInput, AIInteractionUncheckedCreateWithoutSessionInput>
  }

  export type AIInteractionUpdateWithWhereUniqueWithoutSessionInput = {
    where: AIInteractionWhereUniqueInput
    data: XOR<AIInteractionUpdateWithoutSessionInput, AIInteractionUncheckedUpdateWithoutSessionInput>
  }

  export type AIInteractionUpdateManyWithWhereWithoutSessionInput = {
    where: AIInteractionScalarWhereInput
    data: XOR<AIInteractionUpdateManyMutationInput, AIInteractionUncheckedUpdateManyWithoutSessionInput>
  }

  export type AIInteractionScalarWhereInput = {
    AND?: AIInteractionScalarWhereInput | AIInteractionScalarWhereInput[]
    OR?: AIInteractionScalarWhereInput[]
    NOT?: AIInteractionScalarWhereInput | AIInteractionScalarWhereInput[]
    id?: StringFilter<"AIInteraction"> | string
    sessionId?: StringFilter<"AIInteraction"> | string
    timestamp?: DateTimeFilter<"AIInteraction"> | Date | string
    prompt?: StringFilter<"AIInteraction"> | string
    response?: StringFilter<"AIInteraction"> | string
  }

  export type CommandUpsertWithWhereUniqueWithoutSessionInput = {
    where: CommandWhereUniqueInput
    update: XOR<CommandUpdateWithoutSessionInput, CommandUncheckedUpdateWithoutSessionInput>
    create: XOR<CommandCreateWithoutSessionInput, CommandUncheckedCreateWithoutSessionInput>
  }

  export type CommandUpdateWithWhereUniqueWithoutSessionInput = {
    where: CommandWhereUniqueInput
    data: XOR<CommandUpdateWithoutSessionInput, CommandUncheckedUpdateWithoutSessionInput>
  }

  export type CommandUpdateManyWithWhereWithoutSessionInput = {
    where: CommandScalarWhereInput
    data: XOR<CommandUpdateManyMutationInput, CommandUncheckedUpdateManyWithoutSessionInput>
  }

  export type CommandScalarWhereInput = {
    AND?: CommandScalarWhereInput | CommandScalarWhereInput[]
    OR?: CommandScalarWhereInput[]
    NOT?: CommandScalarWhereInput | CommandScalarWhereInput[]
    id?: StringFilter<"Command"> | string
    sessionId?: StringFilter<"Command"> | string
    timestamp?: DateTimeFilter<"Command"> | Date | string
    command?: StringFilter<"Command"> | string
    type?: StringFilter<"Command"> | string
  }

  export type SessionCreateWithoutFileChangesInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    aiInteractions?: AIInteractionCreateNestedManyWithoutSessionInput
    commands?: CommandCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutFileChangesInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    aiInteractions?: AIInteractionUncheckedCreateNestedManyWithoutSessionInput
    commands?: CommandUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutFileChangesInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutFileChangesInput, SessionUncheckedCreateWithoutFileChangesInput>
  }

  export type SessionUpsertWithoutFileChangesInput = {
    update: XOR<SessionUpdateWithoutFileChangesInput, SessionUncheckedUpdateWithoutFileChangesInput>
    create: XOR<SessionCreateWithoutFileChangesInput, SessionUncheckedCreateWithoutFileChangesInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutFileChangesInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutFileChangesInput, SessionUncheckedUpdateWithoutFileChangesInput>
  }

  export type SessionUpdateWithoutFileChangesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiInteractions?: AIInteractionUpdateManyWithoutSessionNestedInput
    commands?: CommandUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutFileChangesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiInteractions?: AIInteractionUncheckedUpdateManyWithoutSessionNestedInput
    commands?: CommandUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateWithoutAiInteractionsInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    fileChanges?: FileChangeCreateNestedManyWithoutSessionInput
    commands?: CommandCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutAiInteractionsInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    fileChanges?: FileChangeUncheckedCreateNestedManyWithoutSessionInput
    commands?: CommandUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutAiInteractionsInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutAiInteractionsInput, SessionUncheckedCreateWithoutAiInteractionsInput>
  }

  export type SessionUpsertWithoutAiInteractionsInput = {
    update: XOR<SessionUpdateWithoutAiInteractionsInput, SessionUncheckedUpdateWithoutAiInteractionsInput>
    create: XOR<SessionCreateWithoutAiInteractionsInput, SessionUncheckedCreateWithoutAiInteractionsInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutAiInteractionsInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutAiInteractionsInput, SessionUncheckedUpdateWithoutAiInteractionsInput>
  }

  export type SessionUpdateWithoutAiInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileChanges?: FileChangeUpdateManyWithoutSessionNestedInput
    commands?: CommandUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutAiInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileChanges?: FileChangeUncheckedUpdateManyWithoutSessionNestedInput
    commands?: CommandUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type GitOperationCreateWithoutCommandInput = {
    id?: string
    operation: string
    branch: string
    commitHash?: string | null
    filesChanged?: string | null
  }

  export type GitOperationUncheckedCreateWithoutCommandInput = {
    id?: string
    operation: string
    branch: string
    commitHash?: string | null
    filesChanged?: string | null
  }

  export type GitOperationCreateOrConnectWithoutCommandInput = {
    where: GitOperationWhereUniqueInput
    create: XOR<GitOperationCreateWithoutCommandInput, GitOperationUncheckedCreateWithoutCommandInput>
  }

  export type BuildOperationCreateWithoutCommandInput = {
    id?: string
    environment: string
    framework: string
    success: boolean
    duration: number
    errors?: string | null
    warnings?: string | null
    outputLog?: string | null
  }

  export type BuildOperationUncheckedCreateWithoutCommandInput = {
    id?: string
    environment: string
    framework: string
    success: boolean
    duration: number
    errors?: string | null
    warnings?: string | null
    outputLog?: string | null
  }

  export type BuildOperationCreateOrConnectWithoutCommandInput = {
    where: BuildOperationWhereUniqueInput
    create: XOR<BuildOperationCreateWithoutCommandInput, BuildOperationUncheckedCreateWithoutCommandInput>
  }

  export type TestOperationCreateWithoutCommandInput = {
    id?: string
    framework: string
    success: boolean
    duration: number
    totalTests: number
    passedTests: number
    failedTests: number
    skippedTests: number
    errors?: string | null
    outputLog?: string | null
  }

  export type TestOperationUncheckedCreateWithoutCommandInput = {
    id?: string
    framework: string
    success: boolean
    duration: number
    totalTests: number
    passedTests: number
    failedTests: number
    skippedTests: number
    errors?: string | null
    outputLog?: string | null
  }

  export type TestOperationCreateOrConnectWithoutCommandInput = {
    where: TestOperationWhereUniqueInput
    create: XOR<TestOperationCreateWithoutCommandInput, TestOperationUncheckedCreateWithoutCommandInput>
  }

  export type SessionCreateWithoutCommandsInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    fileChanges?: FileChangeCreateNestedManyWithoutSessionInput
    aiInteractions?: AIInteractionCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutCommandsInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    fileChanges?: FileChangeUncheckedCreateNestedManyWithoutSessionInput
    aiInteractions?: AIInteractionUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutCommandsInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutCommandsInput, SessionUncheckedCreateWithoutCommandsInput>
  }

  export type GitOperationUpsertWithoutCommandInput = {
    update: XOR<GitOperationUpdateWithoutCommandInput, GitOperationUncheckedUpdateWithoutCommandInput>
    create: XOR<GitOperationCreateWithoutCommandInput, GitOperationUncheckedCreateWithoutCommandInput>
    where?: GitOperationWhereInput
  }

  export type GitOperationUpdateToOneWithWhereWithoutCommandInput = {
    where?: GitOperationWhereInput
    data: XOR<GitOperationUpdateWithoutCommandInput, GitOperationUncheckedUpdateWithoutCommandInput>
  }

  export type GitOperationUpdateWithoutCommandInput = {
    id?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    filesChanged?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GitOperationUncheckedUpdateWithoutCommandInput = {
    id?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    filesChanged?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BuildOperationUpsertWithoutCommandInput = {
    update: XOR<BuildOperationUpdateWithoutCommandInput, BuildOperationUncheckedUpdateWithoutCommandInput>
    create: XOR<BuildOperationCreateWithoutCommandInput, BuildOperationUncheckedCreateWithoutCommandInput>
    where?: BuildOperationWhereInput
  }

  export type BuildOperationUpdateToOneWithWhereWithoutCommandInput = {
    where?: BuildOperationWhereInput
    data: XOR<BuildOperationUpdateWithoutCommandInput, BuildOperationUncheckedUpdateWithoutCommandInput>
  }

  export type BuildOperationUpdateWithoutCommandInput = {
    id?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    warnings?: NullableStringFieldUpdateOperationsInput | string | null
    outputLog?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BuildOperationUncheckedUpdateWithoutCommandInput = {
    id?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    warnings?: NullableStringFieldUpdateOperationsInput | string | null
    outputLog?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestOperationUpsertWithoutCommandInput = {
    update: XOR<TestOperationUpdateWithoutCommandInput, TestOperationUncheckedUpdateWithoutCommandInput>
    create: XOR<TestOperationCreateWithoutCommandInput, TestOperationUncheckedCreateWithoutCommandInput>
    where?: TestOperationWhereInput
  }

  export type TestOperationUpdateToOneWithWhereWithoutCommandInput = {
    where?: TestOperationWhereInput
    data: XOR<TestOperationUpdateWithoutCommandInput, TestOperationUncheckedUpdateWithoutCommandInput>
  }

  export type TestOperationUpdateWithoutCommandInput = {
    id?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    totalTests?: IntFieldUpdateOperationsInput | number
    passedTests?: IntFieldUpdateOperationsInput | number
    failedTests?: IntFieldUpdateOperationsInput | number
    skippedTests?: IntFieldUpdateOperationsInput | number
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    outputLog?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestOperationUncheckedUpdateWithoutCommandInput = {
    id?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    totalTests?: IntFieldUpdateOperationsInput | number
    passedTests?: IntFieldUpdateOperationsInput | number
    failedTests?: IntFieldUpdateOperationsInput | number
    skippedTests?: IntFieldUpdateOperationsInput | number
    errors?: NullableStringFieldUpdateOperationsInput | string | null
    outputLog?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpsertWithoutCommandsInput = {
    update: XOR<SessionUpdateWithoutCommandsInput, SessionUncheckedUpdateWithoutCommandsInput>
    create: XOR<SessionCreateWithoutCommandsInput, SessionUncheckedCreateWithoutCommandsInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutCommandsInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutCommandsInput, SessionUncheckedUpdateWithoutCommandsInput>
  }

  export type SessionUpdateWithoutCommandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileChanges?: FileChangeUpdateManyWithoutSessionNestedInput
    aiInteractions?: AIInteractionUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutCommandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileChanges?: FileChangeUncheckedUpdateManyWithoutSessionNestedInput
    aiInteractions?: AIInteractionUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type CommandCreateWithoutGitDataInput = {
    id?: string
    timestamp?: Date | string
    command: string
    type: string
    buildData?: BuildOperationCreateNestedOneWithoutCommandInput
    testData?: TestOperationCreateNestedOneWithoutCommandInput
    session: SessionCreateNestedOneWithoutCommandsInput
  }

  export type CommandUncheckedCreateWithoutGitDataInput = {
    id?: string
    sessionId: string
    timestamp?: Date | string
    command: string
    type: string
    buildData?: BuildOperationUncheckedCreateNestedOneWithoutCommandInput
    testData?: TestOperationUncheckedCreateNestedOneWithoutCommandInput
  }

  export type CommandCreateOrConnectWithoutGitDataInput = {
    where: CommandWhereUniqueInput
    create: XOR<CommandCreateWithoutGitDataInput, CommandUncheckedCreateWithoutGitDataInput>
  }

  export type CommandUpsertWithoutGitDataInput = {
    update: XOR<CommandUpdateWithoutGitDataInput, CommandUncheckedUpdateWithoutGitDataInput>
    create: XOR<CommandCreateWithoutGitDataInput, CommandUncheckedCreateWithoutGitDataInput>
    where?: CommandWhereInput
  }

  export type CommandUpdateToOneWithWhereWithoutGitDataInput = {
    where?: CommandWhereInput
    data: XOR<CommandUpdateWithoutGitDataInput, CommandUncheckedUpdateWithoutGitDataInput>
  }

  export type CommandUpdateWithoutGitDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    command?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    buildData?: BuildOperationUpdateOneWithoutCommandNestedInput
    testData?: TestOperationUpdateOneWithoutCommandNestedInput
    session?: SessionUpdateOneRequiredWithoutCommandsNestedInput
  }

  export type CommandUncheckedUpdateWithoutGitDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    command?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    buildData?: BuildOperationUncheckedUpdateOneWithoutCommandNestedInput
    testData?: TestOperationUncheckedUpdateOneWithoutCommandNestedInput
  }

  export type CommandCreateWithoutBuildDataInput = {
    id?: string
    timestamp?: Date | string
    command: string
    type: string
    gitData?: GitOperationCreateNestedOneWithoutCommandInput
    testData?: TestOperationCreateNestedOneWithoutCommandInput
    session: SessionCreateNestedOneWithoutCommandsInput
  }

  export type CommandUncheckedCreateWithoutBuildDataInput = {
    id?: string
    sessionId: string
    timestamp?: Date | string
    command: string
    type: string
    gitData?: GitOperationUncheckedCreateNestedOneWithoutCommandInput
    testData?: TestOperationUncheckedCreateNestedOneWithoutCommandInput
  }

  export type CommandCreateOrConnectWithoutBuildDataInput = {
    where: CommandWhereUniqueInput
    create: XOR<CommandCreateWithoutBuildDataInput, CommandUncheckedCreateWithoutBuildDataInput>
  }

  export type CommandUpsertWithoutBuildDataInput = {
    update: XOR<CommandUpdateWithoutBuildDataInput, CommandUncheckedUpdateWithoutBuildDataInput>
    create: XOR<CommandCreateWithoutBuildDataInput, CommandUncheckedCreateWithoutBuildDataInput>
    where?: CommandWhereInput
  }

  export type CommandUpdateToOneWithWhereWithoutBuildDataInput = {
    where?: CommandWhereInput
    data: XOR<CommandUpdateWithoutBuildDataInput, CommandUncheckedUpdateWithoutBuildDataInput>
  }

  export type CommandUpdateWithoutBuildDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    command?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gitData?: GitOperationUpdateOneWithoutCommandNestedInput
    testData?: TestOperationUpdateOneWithoutCommandNestedInput
    session?: SessionUpdateOneRequiredWithoutCommandsNestedInput
  }

  export type CommandUncheckedUpdateWithoutBuildDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    command?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gitData?: GitOperationUncheckedUpdateOneWithoutCommandNestedInput
    testData?: TestOperationUncheckedUpdateOneWithoutCommandNestedInput
  }

  export type CommandCreateWithoutTestDataInput = {
    id?: string
    timestamp?: Date | string
    command: string
    type: string
    gitData?: GitOperationCreateNestedOneWithoutCommandInput
    buildData?: BuildOperationCreateNestedOneWithoutCommandInput
    session: SessionCreateNestedOneWithoutCommandsInput
  }

  export type CommandUncheckedCreateWithoutTestDataInput = {
    id?: string
    sessionId: string
    timestamp?: Date | string
    command: string
    type: string
    gitData?: GitOperationUncheckedCreateNestedOneWithoutCommandInput
    buildData?: BuildOperationUncheckedCreateNestedOneWithoutCommandInput
  }

  export type CommandCreateOrConnectWithoutTestDataInput = {
    where: CommandWhereUniqueInput
    create: XOR<CommandCreateWithoutTestDataInput, CommandUncheckedCreateWithoutTestDataInput>
  }

  export type CommandUpsertWithoutTestDataInput = {
    update: XOR<CommandUpdateWithoutTestDataInput, CommandUncheckedUpdateWithoutTestDataInput>
    create: XOR<CommandCreateWithoutTestDataInput, CommandUncheckedCreateWithoutTestDataInput>
    where?: CommandWhereInput
  }

  export type CommandUpdateToOneWithWhereWithoutTestDataInput = {
    where?: CommandWhereInput
    data: XOR<CommandUpdateWithoutTestDataInput, CommandUncheckedUpdateWithoutTestDataInput>
  }

  export type CommandUpdateWithoutTestDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    command?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gitData?: GitOperationUpdateOneWithoutCommandNestedInput
    buildData?: BuildOperationUpdateOneWithoutCommandNestedInput
    session?: SessionUpdateOneRequiredWithoutCommandsNestedInput
  }

  export type CommandUncheckedUpdateWithoutTestDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    command?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gitData?: GitOperationUncheckedUpdateOneWithoutCommandNestedInput
    buildData?: BuildOperationUncheckedUpdateOneWithoutCommandNestedInput
  }

  export type FileChangeCreateManySessionInput = {
    id?: string
    timestamp?: Date | string
    filePath: string
    changeType: string
  }

  export type AIInteractionCreateManySessionInput = {
    id?: string
    timestamp?: Date | string
    prompt: string
    response: string
  }

  export type CommandCreateManySessionInput = {
    id?: string
    timestamp?: Date | string
    command: string
    type: string
  }

  export type FileChangeUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    filePath?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
  }

  export type FileChangeUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    filePath?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
  }

  export type FileChangeUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    filePath?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
  }

  export type AIInteractionUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
  }

  export type AIInteractionUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
  }

  export type AIInteractionUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
  }

  export type CommandUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    command?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gitData?: GitOperationUpdateOneWithoutCommandNestedInput
    buildData?: BuildOperationUpdateOneWithoutCommandNestedInput
    testData?: TestOperationUpdateOneWithoutCommandNestedInput
  }

  export type CommandUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    command?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gitData?: GitOperationUncheckedUpdateOneWithoutCommandNestedInput
    buildData?: BuildOperationUncheckedUpdateOneWithoutCommandNestedInput
    testData?: TestOperationUncheckedUpdateOneWithoutCommandNestedInput
  }

  export type CommandUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    command?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SessionCountOutputTypeDefaultArgs instead
     */
    export type SessionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FileChangeDefaultArgs instead
     */
    export type FileChangeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FileChangeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AIInteractionDefaultArgs instead
     */
    export type AIInteractionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AIInteractionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommandDefaultArgs instead
     */
    export type CommandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommandDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GitOperationDefaultArgs instead
     */
    export type GitOperationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GitOperationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BuildOperationDefaultArgs instead
     */
    export type BuildOperationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BuildOperationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestOperationDefaultArgs instead
     */
    export type TestOperationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TestOperationDefaultArgs<ExtArgs>

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
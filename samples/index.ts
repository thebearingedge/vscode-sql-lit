const tagged = sql`
  select *
    from "todos"
`

const interpolated = sql`
  with "selected" as (
    ${sql`select 1 as "one"`}
  )
  select "s"."one"
    from "selected" as "s"
   where "s"."one" = ${parseInt('1', 0)}
`

declare const client: {
  sql: typeof sql
  db: typeof sql
}

const sqlTagMethod = client.sql`
  select 1 as "one"
`

const dbTagMethod = client.db`
  select 1 as "one"
`

type Person = {}
type IdentifierSqlTokenType = {}

declare const sql: {
  <T>(strings: TemplateStringsArray, ...values: any[]): T
  identifier: (names: string[]) => IdentifierSqlTokenType
  Person: (strings: TemplateStringsArray, ...values: any[]) => Person
  type: (schema: any) => (strings: TemplateStringsArray, ...values: any[]) => Person
}

const typed = sql<[{ one: number }]>`select 1 as "one"`

const slonik = sql`
  select 1
    from ${sql.identifier(['bar', 'baz'])}
`

const slonikTypegen = sql.Person`select * from person limit 2`;

declare const personSchema: {}

const slonikZod = sql.type(personSchema)`
  select "id",
         "username"
    from "person"
`

const plpgsql = sql`
  create function util._trigger_timestamps() returns trigger as $$
    begin
      if (tg_op = 'UPDATE' and new *<> old) then
        new."createdAt" := old."createdAt";
        new."updatedAt" := current_timestamp;
      elsif (tg_op = 'INSERT') then
        new."createdAt" := current_timestamp;
        new."updatedAt" := current_timestamp;
      end if;
      return new;
    end;
  $$ language plpgsql;
`

declare const DATABASE_EXTENSIONS_SCHEMA_NAME: string

const rawCommentPrefixed = /* sql */`
  begin
    return trim(
      both '-' from regexp_replace(
        lower("${DATABASE_EXTENSIONS_SCHEMA_NAME}".unaccent(trim(v))),
        '[^a-z0-9_-]+', '-', 'gi'
      )
    );
  end;
`

declare const sqlWrite: typeof sql
declare const dbReplica: typeof sql

const sqlPrefix = sqlWrite`select * from "foo"`
const dbPrefix = dbReplica`select * from "foo"`

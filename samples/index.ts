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

declare function sql<_>(strings: TemplateStringsArray, ...values: any[]): _

const typed = sql<{ one: number }>`select 1 as "one"`

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

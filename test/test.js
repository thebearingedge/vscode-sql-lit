;(async () => {
  await sql`
    with "selected" as (
      ${sql`select 1 as "one"`}
    )
    select "s"."one"
      from "selected" as "s"
     where "s"."one" = ${1}
  `
  await sql`select 1 as "one"`
  await sql`
    create temporary table "todos" (
      "todoId"      serial,
      "task"        text           not null,
      "isCompleted" boolean        not null default false,
      "updatedAt"   timestamptz(6) not null default now()
    ) on commit drop
  `
  const todo = { task: 'do it' }
  await sql`insert into "todos" ${sql.insert(todo)}`
})()

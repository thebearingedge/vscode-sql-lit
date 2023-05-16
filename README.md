# vscode-sql-lit

Syntax highlighting for SQL tagged template literals in JavaScript and TypeScript.

Pairs nicely with the following packages:

- [`postgres`](https://www.npmjs.com/package/postgres)
- [`slonik`](https://www.npmjs.com/package/slonik)
- [`@slonik/typegen`](https://www.npmjs.com/package/@slonik/typegen)
- [`sql-template-strings`](https://www.npmjs.com/package/sql-template-strings)

## Main Features

SQL syntax highlighting is triggered in a couple of ways:

- tagged template literals via a `sql*` or `db*` identifier
- a `.sql` or `.db` method invoked as a template tag
- template literal strings with a `/* sql */` or `/* db */` comment prefix

## Samples

### Basic Tag

![Basic Tag](https://github.com/thebearingedge/vscode-sql-lit/raw/master/images/tagged.png)

### Tag Method

![Tag Method](https://github.com/thebearingedge/vscode-sql-lit/raw/master/images/tag-method.png)

### Interpolated Values

![Interpolated Values](https://github.com/thebearingedge/vscode-sql-lit/raw/master/images/interpolated.png)

### TypeScript

![Type Argument](https://github.com/thebearingedge/vscode-sql-lit/raw/master/images/typed.png)

### PL/PgSQL

![PL/PgSQL](https://github.com/thebearingedge/vscode-sql-lit/raw/master/images/plpgsql.png)

### Slonik

![Slonik Methods](https://github.com/thebearingedge/vscode-sql-lit/raw/master/images/slonik.png)

### Slonik Typegen

![Slonik Typegen](https://github.com/thebearingedge/vscode-sql-lit/raw/master/images/slonik-typegen.png)

### Slonik Validation

![Slonik Validation](https://github.com/thebearingedge/vscode-sql-lit/raw/master/images/slonik-zod.png)

### Template Comment Prefix

![Template Comment Prefix](https://github.com/thebearingedge/vscode-sql-lit/raw/master/images/raw-comment-prefixed.png)

## File Types

- .js
- .jsx
- .ts
- .tsx
- .vue

## Advanced Language Support

None. This extension only offers syntax highlighting.

Be sure to follow best practices documented in your database driver package of choice to mitigate [sql injection](https://owasp.org/www-community/attacks/SQL_Injection) vulnerabilities!

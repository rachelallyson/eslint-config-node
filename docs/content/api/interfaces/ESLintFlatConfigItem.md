[**@rachelallyson/eslint-config-node v1.0.0**](../README.md)

***

[@rachelallyson/eslint-config-node](../globals.md) / ESLintFlatConfigItem

# Interface: ESLintFlatConfigItem

Defined in: index.d.ts:15

Minimal shape of an ESLint v9 flat config item used for docs typing.

## Properties

### files?

> `optional` **files**: `string`[]

Defined in: index.d.ts:17

Optional file globs the config applies to (e.g. ["*.ts"]).

***

### ignores?

> `optional` **ignores**: `string`[]

Defined in: index.d.ts:19

Optional ignore globs that should be excluded (e.g. ["dist/**"]).

***

### languageOptions?

> `optional` **languageOptions**: `Record`\<`string`, `unknown`\>

Defined in: index.d.ts:21

Parser and language options for this config block.

***

### plugins?

> `optional` **plugins**: `Record`\<`string`, `unknown`\>

Defined in: index.d.ts:23

Plugin registrations available to `rules`.

***

### rules?

> `optional` **rules**: `Record`\<`string`, `unknown`\>

Defined in: index.d.ts:25

Rule name to setting map. Later configs override earlier ones.

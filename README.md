<!--
@Author: Zhang Yingya(hzzhangyingya) <zyy>
@Date:   2016-07-26T09:40:38+08:00
@Email:  zyy7259@gmail.com
@Last modified by:   zyy
@Last modified time: 2016-07-26T11:25:42+08:00
-->

# eslint-config-standard-browser
ESLint Shareable Config for browser in JavaScript Standard Style

## no-unused-vars

`no-unused-vars` has no effect when used with the `node` or `commonjs` environments or when `ecmaFeatures.modules` is true. See:
- https://github.com/eslint/eslint/commit/6c04d518c6c64bcd6b79f1ea482dd6cc45598bd4
- https://github.com/eslint/eslint/issues/1200

So I made the following changes.

- `delete config.parserOptions.sourceType`
- change env `node` to `browser`

At first, I want to extends eslint-config-standard and override the env. But failed because we can not override env now. See https://github.com/eslint/eslint/issues/2614

And also I config `no-unused-vars` to check only locally-declared variables. See http://eslint.org/docs/rules/no-unused-vars

```
{
  "rules": {
    "no-unused-vars": ["error", { "vars": "local", "args": "after-used" }]
  }
}
```

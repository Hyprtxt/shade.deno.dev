# fresh project

This was for A Shade Beyond LLC. If you feel like this violates your copyright
please contact [Taylor](https://hyprtxt.deno.dev) and I will disapper it.

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

### Testing

```
deno test -A
```

This will launch the puppeteer tests.

### Secrets for GitHub Actions

Use this command to get the secret contents

```
base64 -i .env.github | pbcopy
```

secret name should be `ENV_GITHUB_ACTIONS`

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/0134220067cf404ea59ed88a49d9bab8)](https://www.codacy.com/gh/97Afolabi/tql-pipeline/dashboard?utm_source=github.com\&utm_medium=referral\&utm_content=97Afolabi/tql-pipeline\&utm_campaign=Badge_Grade)

# Backend Assessment

Build and deploy a very simple API that does the following

1.  Calculate and return the age of a person, given their date of birth (dob) as query parameters to `GET /howold`

2.  Limit calls to `GET /howold` and prevent excessive usage from potentially ill-configured or malicious integrators. Only allow a maximum of 3 calls per second for each API client/caller

See full details and instructions in this [Google Doc](https://docs.google.com/document/d/1ma5vKz0j34gwI9WYrZddMM1ENlQddGOVFJ5qdSq2QlQ)

## Implementation

Install packages with:

```bash
yarn install
```

Set preferred port in `.env` file or use default port, `3310`

### Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e
```

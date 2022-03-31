- I decided on Express to achieve quick setup of a Node server, accepting the lack of native async/await support. http-errors and morgan were similarly chosen for speed of development.
- I decided on sqlite3 to interact with my SQLite database because of its lightweight nature, accepting the lack of native async/await support.
- I decided on cross-env to set environment variables in a way that's friendly to both Windows and non-Windows machines, accepting the inefficiency of an extra package.
- I decided on eslint, eslint-config-airbnb-base, and eslint-config-airbnb-typescript to maintain a consistent style, and eslint-plugin-import to maintain a consistent style while using import/export statements.
- I decided on jest and ts-jest to run unit/integration tests and collect test coverage.
- I decided on rimraf to remove old files at build time.
- I decided on supertest to quickly mock the server app.
- I decided on typescript to get type-checking.
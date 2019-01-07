# Next-SMRT

Next.js Styled Components, Material-ui, Redux, Typescript

## Example TODO List App
![Example To Do App](https://csprance.com/shots/2018-08-12_80391bbd-a273-454b-9d85-f45c0bca6d37.png)

## Features
### Uses
 - [next@7](https://github.com/zeit/next.js)
 - [react@16](https://github.com/facebook/react)
 - [redux@4](https://github.com/reduxjs/redux)
 - [redux-thunk](https://github.com/reduxjs/redux-thunk)
 - [typescript](https://github.com/Microsoft/TypeScript)
 - [typesafe-actions](https://github.com/piotrwitek/typesafe-actions)
 - custom next server using [express](https://github.com/expressjs/express)
 

### using cdn
 - material-icons font
 - roboto-font

## installation

```sh
git clone https://github.com/csprance/next-smrt.git
```

## setup

set SEO variables

> src/constants/env.ts

```typescript
// for meta tag <og & twitter>
export const SITE_NAME = ''
export const SITE_TITLE = ''
export const SITE_DESCRIPTION = ''
export const SITE_IMAGE = ''
```

---

## env

### development

#### installation

```
npm install
npm run start:dev # run
```

#### test

```
npm run test # test
npm run test:watch
npm run test:coverage # report coverage
```

### production

```
npm install
npm run build # create .next directory
npm start # start server
```

or

```
npm install
npm run build # create .next directory
npm run export # create .out directory
```

## license

UNLICENSE

## changelog
### 0.0.7

- Changed some redux boilerplate stuff got rid of uneeded deps
### 0.0.6

- Updated a bunch of dependencies and adjusted configs to suit.
### 0.0.3

- Changed to redux 4 next7

### 0.0.2

- Updated deps and added in docker configs

### 0.0.1

- Initial Commit
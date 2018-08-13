# Next-SMRT

Next.js Styled Components, Material-ui, Redux, Typescript

## Example TODO List App
![Example To Do App](https://csprance.com/shots/2018-08-12_80391bbd-a273-454b-9d85-f45c0bca6d37.png)

## Features
### Uses
 - next@6
 - react@16
 - redux-thunk
 - redux-persist@4
 - typescript
 - custom next server using express
 

### using cdn
 - material-icons font
 - roboto-font

## installation

```sh
git clone https://github.com/csprance/next-smrt
```

## setup

set SEO variables

> src/constants/env.ts

```typescript
export const DEV = process.env.NODE_ENV !== 'production'

// for meta tag <og & twitter>
export const SITE_NAME = ''
export const SITE_TITLE = ''
export const SITE_DESCRIPTION = ''
export const SITE_IMAGE = ''
```

if each variable evaluated false, it does not load related library


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

### 0.0.2

- Updated deps and added in docker configs

### 0.0.1

- Initial Commit
![Example To Do App](public/static/site-image.png)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Next-SMRT
> Next.js, Styled Components, Material-UI, Redux (With Redux-Toolkit), Typescript

A lot of the next.js examples have some of those features but not all together. So I decided to roll them all into one boilerplate.

I use it to kickstart everything I do now. Works great in production and comes with docker batteries included.

## Example TODO List App
![Example To Do App](https://csprance.com/shots/2019-07-21_642df2a7-ae0d-4f07-80b5-b05c7cbd0555.png)

## Features
### Uses
 - [next@10](https://github.com/zeit/next.js)
 - [react@17](https://github.com/facebook/react)
 - [typescript](https://github.com/Microsoft/TypeScript)
 - [redux-toolkit](https://github.com/reduxjs/redux-toolkit)
 - [redux-persist](https://github.com/rt2zz/redux-persist)
 - [Jest](https://github.com/facebook/jest)
 - [Storybook](https://github.com/storybookjs/storybook)
 

### Using cdn
 - material-icons font
 - roboto-font

## Installation

```sh
git clone https://github.com/csprance/next-smrt.git
```
or just click the `Use This Template` button above.

## Setup

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

## Environment Install Instructions

### Development

#### Installation

```
npm install
npm run dev # run
```

#### Test

```
npm run test # test
npm run test:watch
npm run test:coverage # report coverage
```

### Production

```
npm install
npm run build # create .next directory
npm start # start server
```

# Docker
> Assumes [traefik](https://traefik.io) is running
* run `docker-compose up -d --build`
* Visit `http://next-smrt.localhost` 


Check out the other docker-compose files for more uses and the `Dockerfile` for the image 
that will be built to run the app
 
## License

UNLICENSE

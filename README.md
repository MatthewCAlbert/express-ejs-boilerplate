# Express-EJS My Personal Boilerplate

## Using
- ExpressJs
- [EJS](https://ejs.co/) (added custom extends function)
- [Joi](https://joi.dev/api/) as validator
- SASS middleware
- CSRF (csurf) enabled
- JWT (jsonwebtoken) optional
- [LowDB](https://github.com/typicode/lowdb) (json based DB) optional
- [Mocha](https://mochajs.org/) Testing
- MVC Pattern

## Info
- When using lowdb, if you want to use something like nodemon when developing, please consider set LOWDB_DEVELOPMENT_DIR to outside the folder and set LOWDB_PRODUCTION_DIR as you wish.

## Removing LowDB
> Delete utils/lowdb.js, models/[lowdb related], controllers/[lowdb related], and finally remove lowdb package.

## Folder Structure
```
|- public
|- test
|- db (lowdb default)
|- src
  |- css (sass sources)
  |- handlers
  |- middlewares
  |- models
  |- controllers
  |- routes
  |- views
    |- components
    |- pages
```

## Planned
- JS Obfuscator Gulp Pipeline
- idk
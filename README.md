## publish a library on NPM

- ng new applibs --createApplication=false
- cd applibs
- ng generate library testLightCalendar
- file folder structure
  - applibs
    - projects
      - test-light-calendar
        - src
          - public-api.ts
- ng build testLightCalendar --prod
  - without [--prod] option, when you publish you libray ,you will encounter a publish error "Trying to publish a package that has been compiled by Ivy"
- cd dist
- cd test-light-calendar
- npm login
- npm publish
  - when you publish the package the second time
  - npm version patch | minor |..
  - npm publish

## consumed this library in other angular app.

- npm i test-light-calendar
- app.module.ts
  - import { TestLightCalendarModule } from 'test-light-calendar';
  - @NgModule({
    imports: [ TestLightCalendarModule]
- in component
  - .html, use selector
  - <lib-testLightCalendar></lib-testLightCalendar>

## we can pass parameters to module using forRoot

- add Inject in service.ts
  - ![forRoot1](./assets/forRoot_1.png)
- add static forRoot in module.ts

  - ![forRoot2](./assets/forRoot_2.png)

- when we consume the library, use moduleName.forRoot({..}) in app.module.ts
  - ![forRoot2](./assets/consume3_forRoot.png)

## proofs

![before publish](./assets/beforepublish.png)
![publish1](./assets/publish1.png)
![publish2](./assets/publish2.png)
![consume1](./assets/consume1.png)
![consume2](./assets/consume2.png)

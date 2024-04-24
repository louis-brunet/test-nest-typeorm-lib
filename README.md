## Error

```bash
yarn &&
yarn workspace mylib run build &&
yarn workspace myapp run build &&
NODE_ENV=development yarn workspace myapp run start
```

Gives the following error:
```
[Nest] 56740  - 04/24/2024, 11:35:23 AM   ERROR [ExceptionHandler] Nest can't resolve dependencies of the TypeOrmCoreModule (TypeOrmModuleOptions, ?). Please make sure that the argument ModuleRef at index [1] is available in the TypeOrmCoreModule context.

Potential solutions:
- Is TypeOrmCoreModule a valid NestJS module?
- If ModuleRef is a provider, is it part of the current TypeOrmCoreModule?
- If ModuleRef is exported from a separate @Module, is that module imported within TypeOrmCoreModule?
  @Module({
    imports: [ /* the Module containing ModuleRef */ ]
  })
```

## Expected behaviour

Something like `missing environment variable DATABASE_*`.


## Potential fixes
Need only one instance of (source: [docs](https://docs.nestjs.com/faq/common-errors#cannot-resolve-dependency-error), [github issue](https://github.com/nestjs/nest/issues/10414))

Options:
- add shared @nestjs/* deps in root package.json ;
- .yarnrc.yml: `nmHoistingLimits: none`;
- use nest [monorepo](https://docs.nestjs.com/cli/monorepo)  managed by nest cli


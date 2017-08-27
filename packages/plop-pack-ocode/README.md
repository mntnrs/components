# Plop Pack OCode

A set of templates for creating new components.

# Usage

Run `yarn plop` in the root of the repo and follow the instructions.

```
➜ yarn plop
yarn plop v0.27.5
$ plop
? [PLOP] Please choose a generator. (Use arrow keys)
❯ new-compound-component
  new-base-component
```

# Generators

## new-base-component

Meant to be the lowest level of components. A button which is
set up to be directly configurable through props and does not export
any variants, sizes, etc is a good
example. [@ocode/button](../button).

## new-compound-component

A compound component is made up of other components or exports a set
of configured base components. The configuration often comes from the
theming solution. [@ocode/buttons](../buttons) is a good example of
this.

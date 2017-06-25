# Observable Code UI

# Philosophy

Observable Code UIs are:

1. Fast
2. Usable
3. The Best Interface is None at All

## Fast

Our users are discerning with respect to page load speed and
interaction speed. They use devices that we don't expect them to use
(such as Raspberry Pis) in harsh environments (such as airplane
WiFi).

* Pages load quickly.
* CLI progress bars are async
* We use Preact for filesize savings

Being Fast is balanced with Developer Experience when building UIs. It
does not matter if we are fast if the UI doesn't exist or can't be
changed due to how it is constructed.

## Enabling

Our users have heavy pre-built habits for getting work done, such as
exclusively using a terminal. Our users care about the ergonomics of
CLI commands, keyboards, and chairs.

* Satisfies WCAG AA Standards
* Multiple (T/G)UIs rather than one "Home Base" Web UI
* We are additions to workflow, not replacements

# Developing Apps

If you want to develop an application and also work on components at
the same time it can be useful to use lerna to bootstrap the
application and the components at the same time.

## Cloning an Application

The components repo (this one) `.gitignore`s any package with an `x-`
prefix so we'll clone the app into `x-app` and run the lerna bootstrap
on the full set of packages which includes the components and the
app.

```
git clone observable-code/app packages/x-app
npm run bootstrap
```

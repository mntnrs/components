# Observable Code UI

# Philosophy

Observable Code UIs are:

1. Fast
2. Usable
3. The Best Interface is None at All

# Fast

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

# Enabling

Our users have heavy pre-built habits for getting work done, such as
exclusively using a terminal. Our users care about the ergonomics of
CLI commands, keyboards, and chairs.

* Satisfies WCAG AA Standards
* Multiple (T/G)UIs rather than one "Home Base" Web UI
* We are additions to workflow, not replacements

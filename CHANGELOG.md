## [2.2.2] - 2018-04-09

### Changed
- Fix context with which the away handler is called

## [2.2.1] - 2018-04-08

### Changed
- Fix regression, fallback to `.contains` if `.path` is not supported

## [2.2.0] - 2018-04-08

### Changed
- Refer to `event.path` instead of `element.contains(event.target)` for more reliable containment check (fixes #23), kudos to @jonobr1

## [2.1.0] - 2016-11-24

### Changed
- Away callback may not be triggered until the end of the initial macrotask (fixes #8)

## [2.0.0] - 2016-10-20

### Breaking changes
- Removed deprecated submodules

## [2.0.0-rc.1] - 2016-09-30

Reworked for Vue 2.0

### Breaking changes
- `v-on-clickaway` used to be able to accept statements, like `v-on-clickaway="a = a + 1"` or `v-on-clickaway="doSomething(context)"`. This is no longer supported.

## [1.1.5] - 2016-09-30

Skipped 1.1.4 due to publishing mistake

### Changed
- Exposed version

## [1.1.3] - 2016-08-14

### Fixed
- CDN link
- Build files

## [1.1.2] - 2016-08-14

### Fixed
- Moved `vue` from `dependencies` to `peerDependencies`

### Changed
- Moved from `envify` to `loose-envify`

## [1.1.1] - 2015-12-17

### Fixed
- CDN link

## [1.1.0] - 2015-12-17

### Changed
- Ported the source to es6 to make use of the [rollup](https://github.com/rollup/rollup) bundler
- Deprecated the old import syntax in favor of the es6 module syntax
- Introduced a build system to produce common-js module and CDN bundles
- From now on `dist` will be commited to the repo to make use of rawgit CDN

## [1.0.1] - 2015-12-17

### Changed
- Improved docs
- Lint script does not require globally installed eslint anymore

## 1.0.0 - 2015-11-11

### Changed
- Improved docs

## 1.0.0-rc.1 - 2015-10-28

### Changed
- Switch to Vue 1.0

## [0.1.1] - 2015-10-28

### Fixed
- Some files were not linted

## 0.1.0 - 2015-09-13

Initial release

[0.1.1]: https://github.com/simplesmiler/vue-clickaway/compare/0.1.0...0.1.1
[1.0.1]: https://github.com/simplesmiler/vue-clickaway/compare/1.0.0...1.0.1
[1.1.0]: https://github.com/simplesmiler/vue-clickaway/compare/1.0.1...1.1.0
[1.1.1]: https://github.com/simplesmiler/vue-clickaway/compare/1.1.0...1.1.1
[1.1.2]: https://github.com/simplesmiler/vue-clickaway/compare/1.1.1...1.1.2
[1.1.3]: https://github.com/simplesmiler/vue-clickaway/compare/1.1.2...1.1.3
[1.1.5]: https://github.com/simplesmiler/vue-clickaway/compare/1.1.3...1.1.5

[2.0.0-rc.1]: https://github.com/simplesmiler/vue-clickaway/compare/1.1.5...2.0.0-rc.1
[2.0.0]: https://github.com/simplesmiler/vue-clickaway/compare/2.0.0-rc.1...2.0.0
[2.1.0]: https://github.com/simplesmiler/vue-clickaway/compare/2.0.0...2.1.0
[2.2.0]: https://github.com/simplesmiler/vue-clickaway/compare/2.2.0...2.1.0
[2.2.1]: https://github.com/simplesmiler/vue-clickaway/compare/2.2.0...2.2.1
[2.2.2]: https://github.com/simplesmiler/vue-clickaway/compare/2.2.1...2.2.2

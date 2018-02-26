# react-react &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/tihonove/react-react/blob/master/LICENSE) [![npm](https://img.shields.io/npm/v/react-react.svg?style=flat-square)](https://www.npmjs.com/package/react-react) [![Travis](https://img.shields.io/travis/tihonove/react-react.svg?style=flat-square)](https://travis-ci.org/tihonove/react-react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/tihonove/react-react/pulls)


Impressive state management toolkit for react

### Cons
* Easy to use
* Easy to read and maintain
* Low barrier to entry
* Full react compatible
* Small size
* Flow and Typescript support
* 100% test coverage

### Installation

```bash
yarn add react-react
```

or 

```bash
npm install react-react
```

### How to use

First you should create component:

```javascript
import * as React from "react";

class MyComponent extends Component {
    
}
```

To set state use `setState` function. For example

```javascript
foo() {
    this.setState({ bar: "value" })
}
```

Access to state via `state` field:

```javascript
render() {
    return <div>{this.state.bar}</div>
}
```

To use library just add following import to the beginning of you file:

```javascript
import none from "react-react";
```

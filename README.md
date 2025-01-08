# react-react &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/tihonove/react-react/blob/master/LICENSE) [![npm](https://img.shields.io/npm/v/react-react.svg?style=flat-square)](https://www.npmjs.com/package/react-react) [![Coveralls github](https://img.shields.io/coveralls/github/tihonove/react-react.svg?style=flat-square)](https://coveralls.io/github/tihonove/react-react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/tihonove/react-react/pulls)

Impressive state management toolkit for React 🚀

### Pros
* Easy to use 😃
* Easy to read and maintain 📚
* Full hooks support 🪝
* React Server Components support 🌐
* Easy to get started with 🏁
* Fully compatible with React ⚛️
* Small size 🪶
* Flow and TypeScript support 💻
* [100% test coverage](https://coveralls.io/github/tihonove/react-react) ✅

### Installation

```bash
yarn add react-react
```

or 

```bash
npm install react-react
```

### How to use

First, create a component:

```javascript
import * as React from "react";

class MyComponent extends React.Component {
    // ...existing code...
}
```

To set state, use the `setState` function. For example:

```javascript
foo() {
    this.setState({ bar: "value" })
}
```

Access the state via the `state` field:

```jsx
render() {
    return <div>{this.state.bar}</div>
}
```

To use the library, add the following import at the beginning of your file:

```javascript
import "react-react";
```

### Usage with hooks

Create a functional component:

```jsx
import React, { useState } from 'react';

function MyComponent() {
    // ...existing code...
}
```

Add the `useState` hook:

```jsx
function MyComponent() {
    const [value, setValue] = useState("value");
    return <div>{value}</div>;
}
```

To update `value`, use `setValue`:

```jsx
function foo(newValue) {
    setValue(newValue);
}
```

### Conclusion

Now you're ready to manage state like a pro! 🎉 Happy coding! 💻

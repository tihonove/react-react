# react-react

Impressive state management toolkit for react

### Cons
* Easy to use
* Easy to read and maintain
* Low barrier to entry
* Full react compatible
* Small size
* Flow and Typescript support

### Installation

```bash
yarn add react-react
```

or 

```bash
npm install react-react
```

### How to use

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

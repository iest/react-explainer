
React explainer
=====================


Some neat things going on in this repo:

- [React](https://facebook.github.io/react/): A library for building interfaces
- [BabelJS](https://babeljs.io): ES6/ESNext/ES2015 to ES5 compiler (examples are written in ES2015)
- [Webpack](http://webpack.github.io): A module bundler
- [React-hot-loader](https://gaearon.github.io/react-hot-loader/): An awesome webpack plugin that allows instant live refresh without losing state


Getting set-up
--------------

```bash
git clone {link-to-repo}
npm install
npm start
open http://localhost:3000
```


1. Intro
---------------------

React is a library for building interfaces. It's bundled with a few utilities to make some things easier, but by no means does it have as much functionality built in as a framework like Ember.

Because it only handles one thing (rendering your view), it can be very easily used with lots of different JavaScript architectures and frameworks (there is a particular architecture named _Flux_ that lends itself very well to React's way of thinking, but this repo will not cover it).

Hopefully by the end of this guide you'll understand how React's declarative nature makes it very easy to work with — and by following a few simple rules, make it easy to understand and maintain.


2. Components/Classes & `render()`
----------------------------------

React only deals in components (class instances). It has no concept of controllers or models (these are concepts you define according to the project). A react class has a very similar definition to an Ember component, but is a lot less limiting and a lot more flexible. Classes are created using React's top-level API method, `createClass()`.

If you want to get really fancy, you can also create ES6 classes by extending `React.Component` (but this does make some things harder — hence why I use `createClass` in all these examples).

The `render` method on a component is where all the magic happens. Inside this method, you return React DOM-abstracted-elements, and React does a load of magic in the background (including virtual-DOM-diffing) to produce valid HTML. All react components reqire a `render` method, and it must return a valid React element.

3. JSX
------

[JSX](https://facebook.github.io/jsx/) is an XML-like syntax extension to JavaScript. It allows you to essentially write HTML in your JS, and has very straight-forward syntax. (Check out the [JSX Example](https://github.com/iest/react-explainer/blob/master/scripts/JSXExample.js) to see what you can do with it).

The best thing about it is that apart from the funky XML-ness, the syntax is plain JS. React is [perfectly usable without JSX](https://github.com/iest/react-explainer/blob/master/scripts/NonJSXExample.js) though (although I think is much nicer with).


4. Props
--------

Okay, so we've got some components rendering. But what about if we want to update the view? In comparison to frameworks like Ember and Angular, React doesn't have data binding. Instead, components have a declerative way of manipulating their own state, as well as a way of passing state or other data into child components (props).

Props (properties) are attributes that are passed into your components, and are accessible from inside the component on `this.props`.

They are an outward-facing API of sorts, and you can be as flexible or inflexible as you like with what you accept (props can be any JavaScript type). Props are used to keep components reusable, and to hide away complicated details behind an abstraction.

Looking at [the props example](https://github.com/iest/react-explainer/blob/master/scripts/PropsExample.js), you can see how you can easily pass various kinds of data down to a child component.


5. State & interaction
----------------------

So we know we can pass properties into out components. But how do actually make them do stuff? Take a look at [the state example](https://github.com/iest/react-explainer/blob/master/scripts/StateExample.js) for this part.

Inside a component, `this.state` is the one thing you can mutate. But, you mutate it in a very specific way: using the `this.setState` method (you never mutate `this.state` directly).

Calling this method with some new state effectively tells React the view needs re-rendering.

Sticking with the state example, lets see how we can modify the state of a component by adding some `onClick` handlers to some buttons.


6. Component lifecycle
----------------------

React's component API has a few more tricks up it's sleeve. Lifecyle methods are automatically called by React through the lifetime of the component.

In (general) order:

- `componentWillMount`
- `componentDidMount`
- `componentWillRecieveProps`
- `shouldComponentUpdate`
- `componentWillUpdate`
- `componentDidUpdate`
- `componentWillUnmount`

A common use case would be to set up some CSS animation inside `componentDidMount`, as this is called as soon as the component is mounted to the DOM. `componentWillMount` could call some data-fetching for example, and `componentWillUnmount` could be used to tear down some fancy event listeners you had enabled elsewhere perhaps.


7. Render to string, on a server
--------------------------------


_Heavily adapted from Dan Abramov's excellent [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate)._

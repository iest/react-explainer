
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

React is a library for building interfaces. It's often thought of as just a "view layer" because React itself has no architecture. It's bundled with a few utilities to make some things easier, but does by no means have as much functionality built in as a framework like Ember. 

Because it only handles one thing (rendering your view), it can be very easily used with lots of different JavaScript architectures and frameworks (there is a particular architecture named _Flux_ that lends itself very well to React's way of thinking, but this repo will not cover it).

Hopefully by the end of this guide you'll understand how React's declarative nature makes it very easy to work with, and make interfaces built with it easy to reason about.


2. Components/Classes & `render()`
----------------------------------

React only deals in components. It has no concept of a "controller" or a "model", it simply renders what you tell it to. The `render` method on a component is where all the magic happens. Inside this method, you return React DOM-abstracted-elements, and React does a load of magic in the background (including virtual-DOM-diffing) to then produce HTML.

[JSX](https://facebook.github.io/jsx/) is an XML-like syntax extension to JavaScript. It allows you to essentially write HTML in your JS, and has very straight-forward, JS-style syntax. (Check out the [JSX Example](https://github.com/iest/react-explainer/blob/master/scripts/JSXExample.js) to see what you can do with it). The best thing about it is that apart from the funky XML-ness, the syntax is plain JS. 


3. Props & State
----------------

Okay, so we've got some components rendering. But what about if we want to update the view? In comparison to frameworks like Ember and Angular, React doesn't have two-way-binding — data flow is one-way with React, and there are two main types of data that you'll use in your components: **props and **state**.

Props (properties) can be thought of as attributes that are passed into your components. They are an outward-facing API of sorts, and you can be as flexible or inflexible as you like with what you accept as a prop.


0. Component lifecycle
----------------------

0. Render to string, on a server
------------------------


_Heavily adapted from Dan Abramov's excellent [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate)._

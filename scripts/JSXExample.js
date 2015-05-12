import React from 'react';

const IMG_URL = "http://www.placecage.com/250/300";

export default class JSXExample extends React.Component {
  render() {
    return (
      <div>
        <strong>Hello, from JSX!</strong>
        <p>
          One slightly annoying thing that still trips me up from time to time is that the <code>render</code> function has to return a single parent element.
        </p>

        <h2>So what can we do here?</h2>
        <p>
          As you can see, this is basically HTML in JS. But it has some tricks up it's sleeve...
        </p>

        <p>
          You can write valid javascript inside {"{" + "curly braces" + "}"}.
        </p>

        <p>
          Like a date: {new Date().getTime()}
        </p>

        {true ?
          <p>Or use ternaries to render particular elements or not.</p>
          :
          <p>You won't ever see this</p>
        }

        <p>
          This makes reading JSX very easy, as you don't need to learn a <a href="https://en.wikipedia.org/wiki/Domain-specific_language">DSL</a> (e.g. Handlebars) to be able to write templates — it's just plain 'ol JS.
        </p>

        <p>
          What you can also do (and is typically encouraged) is to add other render methods to your component, to separate out distinct pieces of functionality:
        </p>

        {this.renderImage()}

        <p>
          This can help to make your components more explicit, making them easier to reason about and easier to maintain. Oftentimes, it's even better to split up your components into sub-components. This makes it very easy to reuse the same code.
        </p>

      </div>
    );
  }

  renderImage() {
    return <img src={IMG_URL}/>;
  }

}

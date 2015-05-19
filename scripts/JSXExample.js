import React from 'react';

const IMG_URL = 'http://www.placecage.com/250/300';

export default React.createClass({
  render() {

    const hmm = true;

    return (
      <div>
        <strong>Hello, from JSX!</strong>
        <p>
          One slightly annoying thing that still trips me up from time to time is that the <code>render</code> function always has to return a single parent element (the enclosing <code>div</code> in this example.)
        </p>

        <h2>So what can we do here?</h2>
        <p>
          As you can see, this is basically HTML in JS. But it has some tricks up it's sleeve!

          You can write valid javascript inside {['curly', 'braces'].join(' ') + '... '}

          {hmm ?
            <em>(Or use ternaries to render particular elements or not).</em>
            :
            `You won't ever see this`
          }
        </p>

        <p>
          This makes reading JSX very easy, as you don't need to learn a <a href="https://en.wikipedia.org/wiki/Domain-specific_language">DSL</a> (e.g. Handlebars) to be able to write templates — it's just plain 'ol JS.
        </p>

        <p>
          What you can also do (and is encouraged) is to split the main render method into smaller chunks on your component, to separate out distinct pieces of functionality:
        </p>

        {this.renderImage()}

        <p>
          This can help to make your components more explicit, making them easier to reason about and easier to maintain. Oftentimes, it's even better to split up your components into sub-components. This makes it very easy to reuse the same code.
        </p>

      </div>
    );
  },

  renderImage() {
    return <img src={IMG_URL}/>;
  }

});

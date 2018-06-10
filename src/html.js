import React from 'react';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`); // eslint-disable-line
  } catch (e) {
    console.log(e); // eslint-disable-line
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
          />
          <meta charSet="UTF-8" />
          <meta name="author" content="Parminder Klair" />
          <link rel="shortcut icon" href="/images/favicon.png" />
          <base href="/" target="_blank" />
          <script
            defer
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"
          />
          <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@14/dist/smooth-scroll.polyfills.min.js" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"
          />
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"
          />
          <script src="https://js.stripe.com/v2/" />
          <script defer src="/scripts/scripts.js" />
          <link
            href="https://fonts.googleapis.com/css?family=Muli:300,400,600,700"
            rel="stylesheet"
          />
          <link rel="stylesheet" type="text/css" href="/styles/style.css" />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
};

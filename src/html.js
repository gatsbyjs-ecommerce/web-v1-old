/* eslint react/destructuring-assignment: 0 */

import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="author" content="Parminder Klair" />
          <link rel="shortcut icon" href="/images/favicon.png" />
          <meta
            name="google-site-verification"
            content="_rn-lpJc-1AExvZpQ7W44PwX6N88nIClFNtNwY_IhvM"
          />
          <base href="/" target="_blank" />

          {/* Add custom css or scripts here */}
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
          {/* Add custom css or scripts here */}

          {this.props.headComponents}
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
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object.isRequired,
  headComponents: PropTypes.array.isRequired,
  bodyAttributes: PropTypes.object.isRequired,
  preBodyComponents: PropTypes.array.isRequired,
  body: PropTypes.string.isRequired,
  postBodyComponents: PropTypes.array.isRequired,
};

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled">
        <Head />
        <body
          className={`antialiased text-lg leading-base ${
            typeof window !== "undefined" && window.localStorage.getItem('theme') === 'dark'
              ? 'dark bg-gray-900 text-white'
              : 'bg-white text-black'
          }`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled">
        <Head>
          <Script
            id="cookieProSDK"
            src="https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js"
            type="text/javascript"
            charset="UTF-8"
            data-domain-script="6633f9f2-4d02-46b4-9ac6-8b26fadb8e30-test"
          ></Script>
          <Script
            id="cookieProScript"
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `function OptanonWrapper() {}`,
            }}
          />
        </Head>
        <body
          className={`antialiased text-lg bg-white dark:bg-gray-900 dark:text-white leading-base`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

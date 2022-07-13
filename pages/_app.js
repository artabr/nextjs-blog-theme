import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link
        rel="preload"
        as="script"
        href="https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js"
      />
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
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

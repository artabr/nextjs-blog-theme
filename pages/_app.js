import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const allowAllHandler = (e) => {
    e.preventDefault();
    OneTrust.AllowAll();
  };
  const rejectAllHandler = (e) => {
    e.preventDefault();
    OneTrust.RejectAll();
  };
  const settingsHandler = (e) => {
    e.preventDefault();
    OneTrust.ToggleInfoDisplay();
  };
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
      <Script
        id="hjScript"
        dangerouslySetInnerHTML={{
          __html: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3065148,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
        }}
      />
      <span className="theme-bejamas" />
      <div className="bg-indigo-600 w-full">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <p className="ml-3 font-medium text-white truncate">
                <span className="hidden md:inline">
                  By clicking “Accept All Cookies”, you agree to the storing of
                  cookies.
                </span>
              </p>
            </div>
            <div className="flex space-x-4 order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="#"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                onClick={settingsHandler}
              >
                Cookie Settings
              </a>
              <a
                href="#"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-900 hover:bg-indigo-700"
                onClick={rejectAllHandler}
              >
                Reject All
              </a>
              <a
                href="#"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                onClick={allowAllHandler}
              >
                Accept All Cookies
              </a>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              >
                <span className="sr-only">Dismiss</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

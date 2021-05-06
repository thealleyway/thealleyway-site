import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    require('smoothscroll-polyfill').polyfill();
  }
  return <Component {...pageProps} />;
}

export default MyApp;

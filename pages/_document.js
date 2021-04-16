import Document, { Html, Head, Main, NextScript } from 'next/document';
import { colors } from '../style/colors';
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/jds8ebt.css" />
        </Head>
        <body style={{ backgroundColor: colors.CREME }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import {
  theme,
  initializeFonts,
} from '../lib';

class MyDocument extends Document {
  componentDidMount() {
    initializeFonts();
  }

  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="apple-touch-icon" href="/images/icon.png" />
          <link rel="icon" type="image/png" href="/images/icon.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body style={{
          height: '100vh',
          overflow: 'scroll',
          backgroundColor: '#000',
          backgroundImage: 'linear-gradient(30deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111), linear-gradient(150deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111), linear-gradient(30deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111), linear-gradient(150deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111), linear-gradient(60deg, #333 25%, transparent 25.5%, transparent 75%, #333 75%, #333), linear-gradient(60deg, #222 25%, transparent 25.5%, transparent 75%, #222 75%, #222)',
          backgroundPosition: `0 0, 0 0, ${theme.spacing(21)}px ${theme.spacing(36.8)}px, ${theme.spacing(21)}px ${theme.spacing(36.8)}px, 0 0, ${theme.spacing(21)}px ${theme.spacing(36.8)}px`,
          backgroundSize: theme.spacing(21, 36.8),
        }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      <React.Fragment key={0}>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ],
  };
};

export default MyDocument;

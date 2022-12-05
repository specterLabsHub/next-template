import React from 'react'
import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        head: [
          <title key={0}>Specter Labs - Template</title>,
          <link
            key={1}
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/favicon/apple-touch-icon.png"
          />,
          <link
            key={2}
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/favicon/favicon-32x32.png"
          />,
          <link
            key={3}
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/favicon/favicon-16x16.png"
          />,
          <link
            key={4}
            rel="mask-icon"
            href="/assets/favicon/safari-pinned-tab.svg"
            color="#5f0dac"
          />,
          <meta key={5} name="msapplication-TileColor" content="#5f0dac" />,
          <meta key={6} name="theme-color" content="#ffffff"></meta>,
          <meta
            key={7}
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>,
          <meta
            key={8}
            name="facebook-domain-verification"
            content="efxvytyc7ex8f0x5msp3ah4iihsroo"
          />,
          <link
            key={9}
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />,
          <link
            key={10}
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        ],
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}

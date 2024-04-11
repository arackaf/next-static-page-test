import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";

export default class Doc extends Document<{ nonce: string }> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps & { nonce: string }> {
    const nonce = ctx.req?.headers["x-nonce"] as string;
    console.log({ nonce });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      nonce,
      styles: <></>,
    };
  }

  render() {
    const nonce = this.props.nonce;

    return (
      <Html lang="en">
        <Head />
        <body>
          <div>{nonce}</div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

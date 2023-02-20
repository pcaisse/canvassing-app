import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";

import "../styles/global.css";
import Layout from "~/components/layout";

const CanvassingApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default trpc.withTRPC(CanvassingApp);

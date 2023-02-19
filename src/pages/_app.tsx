import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";

const CanvassingApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(CanvassingApp);

import "zone.js/node";
import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { renderApplication } from "@angular/platform-server";
import { AppComponent } from "./app/app.component";
import { config } from "./app/app.config.server";
import { IncomingMessage } from "node:http";

if (import.meta.env.PROD) {
  enableProdMode();
}

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default async function render(
  _path: string,
  document: string,
  { req }: { req: IncomingMessage & { originalUrl: string } },
) {
  const protocol = getRequestProtocol(req);
  const { originalUrl, headers } = req;

  return await renderApplication(bootstrap, {
    document,
    url: `${protocol}://${headers.host}${originalUrl}`,
  });
}

export function getRequestProtocol(
  req: IncomingMessage,
  opts: { xForwardedProto?: boolean } = {},
) {
  if (
    opts.xForwardedProto !== false &&
    req.headers["x-forwarded-proto"] === "https"
  ) {
    return "https";
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (req.connection as any)?.encrypted ? "https" : "http";
}

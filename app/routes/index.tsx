import type { LinksFunction } from "@remix-run/cloudflare";
import { RoninMask } from "~/components/RoninMask";
import stylesUrl from "~/styles/index.css"

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }]
}

export default function Index() {
  return (
    <div className="app">
      <div className="mask-container">
        <RoninMask />
      </div>
    </div>
  );
}

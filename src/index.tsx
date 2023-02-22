import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "app/ui/App";
import { DAppProvider } from "@usedapp/core";
import { dappConfig } from "app/configs/dapp/dappConfig";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <DAppProvider config={dappConfig}>
    <BrowserRouter basename="/UnisroryTask">
      <App />
    </BrowserRouter>
  </DAppProvider>
);

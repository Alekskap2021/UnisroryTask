// Hooks
import { useEffect, useState } from "react";

// Components
import { Header } from "widgets/Header";
import { ExtentionModal } from "widgets/ExtentionModal";

// Providers && Configs
import { Provider as RTKProvider } from "react-redux";
import { DAppProvider } from "@usedapp/core";
import { AppRouter } from "../lib/AppRouter";
import { dappConfig } from "../configs/dapp/dappConfig";
import store from "../configs/store";

// Assets
import "./styles/index.scss";

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsModalOpened(true), 1700);
  }, []);

  return (
    <RTKProvider store={store}>
      <DAppProvider config={dappConfig}>
        <div className="app">
          <Header />
          <div className="content-page">
            <AppRouter />
          </div>
          <ExtentionModal isOpened={isModalOpened} onClose={setIsModalOpened} />
        </div>
      </DAppProvider>
    </RTKProvider>
  );
}

export default App;

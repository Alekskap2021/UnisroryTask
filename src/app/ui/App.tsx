// Hooks
import { useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";

// Components
import { Header } from "widgets/Header";
import { ExtentionModal } from "widgets/ExtentionModal";

// Providers && Configs
import { Provider as RTKProvider } from "react-redux";
import { AppRouter } from "../lib/AppRouter";
import store from "../configs/store";

// Assets
import "./styles/index.scss";

import classNames from "classnames";

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const { account } = useEthers();

  useEffect(() => {
    setTimeout(() => setIsModalOpened(true), 1700);
  }, [account]);

  return (
    <RTKProvider store={store}>
      <div className={classNames("app", { hidden: isModalOpened })}>
        <Header />
        <div className="content-page">
          <AppRouter />
        </div>
        {!account && <ExtentionModal isOpened={isModalOpened} onClose={setIsModalOpened} />}
      </div>
    </RTKProvider>
  );
}

export default App;

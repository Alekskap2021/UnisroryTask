import "./styles/index.scss";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar/ui/Navbar";
import { ExtentionModal } from "widgets/ExtentionModal/ExtentionModal";
import { useEffect, useState } from "react";

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsModalOpened(true), 2000);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="content-page">
        <AppRouter />
      </div>
      <ExtentionModal isOpened={isModalOpened} onClose={setIsModalOpened} />
    </div>
  );
}

export default App;

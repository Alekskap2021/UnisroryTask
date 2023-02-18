import "./styles/index.scss";
// import { AppRouter } from "app/providers/router";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar/ui/Navbar";
import { Suspense } from "react";

function App() {
  return (
    <div className="app">
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;

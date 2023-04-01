import { useLocation } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";

function App() {
  const location = useLocation();
  return (
    <div className="container-fluid">
      <nav className="row">
        {location.pathname !== "/" && location.pathname !== "/registrar" && (
          <Nav />
        )}{" "}
        <br />
      </nav>

      <main className="row" style={{ paddingTop: "40px" }}>
        <Main></Main>
      </main>
    </div>
  );
}

export default App;

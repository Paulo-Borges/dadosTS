import { Outlet } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import Footer from "./components/Footer";
import Resumo from "./Pages/Resumo";
import Header from "./components/Header";
import { DataContextProvider } from "./Context/DataContext";

function App() {
  return (
    <DataContextProvider>
      <div className=" grid p-1.5 gap-1.5">
        <Sidenav />
        <main>
          <Header />
          <Resumo />
        </main>
        <Outlet />
        <Footer />
      </div>
    </DataContextProvider>
  );
}

export default App;

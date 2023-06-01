import AppHeader from "./components/AppHeader/AppHeader";
import "./App.css";
import AppBody from "./components/AppBody/AppBody";
import AppFooter from "./components/AppFooter/AppFooter";

function App() {
  return (
    <>
      <div className="app-wrapper w-full h-screen flex flex-col justify-center items-center">
        <div className="app-table flex flex-col bg-white rounded-sm p-5">
          <AppHeader />
          <AppBody />
          <AppFooter />
        </div>
      </div>
    </>
  );
}

export default App;

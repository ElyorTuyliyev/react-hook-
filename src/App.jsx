import "./App.css";
import Aside from "./Components/aside";
import Header from "./Components/header";
import withSidebar from "./Components/hoc";
import Main from "./Components/main";
const MainWithLoader = withSidebar(Main);

function App() {
  return (
    <div className="App">
      <MainWithLoader />
    </div>
  );
}

export default App;

import Header from "./components/Header/Header";
import HelpPopup from "./components/HelpPopup/HelpPopup";
import Home from "./pages/Home/Home";
import { GlobalStyle } from "./styles/GlobalStyled";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

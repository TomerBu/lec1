import "./App.css";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import ListDemo from "./components/ListDemo/ListDemo";
 
function App() {
  return (
    <div className="app">
      <Header />
      <h1>Welcome to react</h1>
      <br />
      <ListDemo />
      <Footer />
    </div>
  );
}

export default App;

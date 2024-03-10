import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootDiv = document.getElementById("root")!;

//react takes control over our root div
ReactDOM.createRoot(rootDiv).render(<App />);

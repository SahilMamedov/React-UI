import "./App.css";
import { AppRoutes } from "./Routes/routes";
import Theme from "./Them/them";

function App() {
  return (
    <>
      <Theme>
        <AppRoutes />
      </Theme>
    </>
  );
}

export default App;

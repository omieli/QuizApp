import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home />

          </Route>
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;

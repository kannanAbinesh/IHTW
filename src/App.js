/* Plugins */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Components */
import Home from './Components/Home/Home';

/* Helpers and Functions */
import store from "./Reducers";

/* Style */
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter> 
            <Routes>
              <Route path="/" Component={Home}/>
            </Routes>
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

/* Plugins */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/pagination';

/* Components */
import Home from './Components/Home/Home';
import NotFound from "./Components/NotFound/NotFound";

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
              <Route path="*" Component={NotFound} />
              <Route path="/" Component={Home}/>
            </Routes>
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

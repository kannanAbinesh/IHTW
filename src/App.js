/* Plugins */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/pagination';

/* User Components */
import Home from './Components/Home/Home';
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Career from "./Components/Career/Career";
import MainProject from "./Components/MainProject/MainProject";

/* Admin Components */
import SiteAdmin from "./Components/SiteAdmin/SiteAdmin";

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
              <Route path="/" Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/contact" Component={Contact} />
              <Route path="/career" Component={Career} />
              <Route path="/project" Component={MainProject} />

              <Route path="/siteAdmin" Component={SiteAdmin} />
            </Routes>
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

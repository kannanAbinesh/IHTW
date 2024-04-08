/* Plugins */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* User Components */
import Home from './Components/Home/Home';
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Career from "./Components/Career/Career";
import MainProject from "./Components/MainProject/MainProject";

/* Admin Components */
import SiteAdmin from "./Components/SiteAdmin/SiteAdmin";
import AdminDashBoardIndex from "./Components/AdminDashBoard/AdminDashBoardIndex";
import ManageAbout from "./Components/SiteAdminAbout/ManageAbout";

/* Helpers and Functions */
import store from "./Reducers";

/* Style */
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ToastContainer />
        <BrowserRouter> 
            <Routes>
              <Route path="*" Component={NotFound} />
              <Route path="/" Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/contact" Component={Contact} />
              <Route path="/career" Component={Career} />
              <Route path="/project" Component={MainProject} />

              {/* Admin routes */}
              <Route path="/siteAdmin/login" Component={SiteAdmin} />
              <Route path="/siteAdmin" Component={AdminDashBoardIndex} />
              <Route path="/siteAdmin/about" Component={ManageAbout} />
            </Routes>
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;


/* 
axios credentials include
with credentials true axios
media query for dark mode
*/
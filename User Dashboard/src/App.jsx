import {
  Routes,
  Route
} from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";
import './App.css'


function App() {
  
return (
        <Routes>
  
          <Route
            path="/"
            element={<Layout />}
          >
            <Route index element={<Dashboard />} />
  
            <Route
              path="user/:id"
              element={<UserDetails />}
            />
  
          </Route>
        </Routes>
    );
}

export default App;

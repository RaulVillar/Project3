import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Contact from "./Pages/Contact/Contact";
import Create from "./Pages/Create/Create";
import Edit from "./Pages/Edit/Edit";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


const router = createBrowserRouter([{
  path: "/",
  element: <HomePage />
}, {
  path: "/contact",
  element: <Contact />
}, {
  path: "/create",
  element: <Create />
}, {
  path: "/edit",
  element: <Edit />
}
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

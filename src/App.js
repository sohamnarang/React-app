import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./style.css"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Books/>}/>
          <Route path ="/add" element={<Add/>}/>
          <Route path ="/update/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


/* <Route path ="path/to/image/image.png" element={<picture/>}/> */
          /* <img src={require("path/to/image/image.png")} /> */

export default App;

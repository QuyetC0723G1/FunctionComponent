

import Home from "./pages/Home.jsx";

import {Navigate, Route, Routes} from "react-router-dom";
import Admin from "./pages/Admin.jsx";
import ListStudent from "./pages/students/ListStudent.jsx";
import Create from "./pages/students/Create.jsx";
import Update from "./pages/students/Update.jsx";
import Paperbase from "./pages/paperbase/Paperbase.jsx";


function App() {
  return (
    <>
<Paperbase/>
   {/*<Routes>*/}
   {/*  <Route path={'students'} element={<Home/>}>*/}
   {/*      <Route path={'list'} element={<ListStudent/>}/>*/}
   {/*      <Route path={'add'} element={<Create/>}/>*/}
   {/*      <Route path={'edit/:id'} element={<Update/>}/>*/}
   {/*  </Route>*/}

   {/*  <Route path={'admin'} element={<Admin/>}/>*/}
   {/*    <Route path='*' element={<Navigate to = "students/list"/>}/>*/}
   {/*    /!*dieu huong trang khi nhap sai*!/*/}
   {/*</Routes>*/}
    </>
  )
}

export default App

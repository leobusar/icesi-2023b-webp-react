import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Courses from "../pages/Courses";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import PersonList from "../pages/PersonList";
import AboutIndex from "../pages/AboutIndex";


const Router = () => (
    <BrowserRouter>
        <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/login"  element={<Login />}/>
        <Route path="/courses"  element={<Courses />}/>
        <Route path="/about"  element={<About />}>
            <Route path=":id"  element={<AboutIndex />} />
            <Route path="otra"  element={<Home />}/>
        </Route>
        <Route path="/persons"  element={<PersonList />}/>
        <Route path="/*"  element={<NotFound />}/>

        </Routes>
    </BrowserRouter>
)

export default Router;
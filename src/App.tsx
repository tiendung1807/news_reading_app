import React from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Body from './Component/Body';
import Detail from "./Component/detail/Detail";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
    return (
        <div>
            <Header></Header>
            {/*<Body>*/}
            <Router>
                <Routes>
                    <Route path="/">
                        <Route path='/detail/:link' element={<Detail/>}></Route>
                    </Route>
                </Routes>
            </Router>
            {/*</Body>*/}
            <Footer></Footer>
        </div>
    );
}

export default App;
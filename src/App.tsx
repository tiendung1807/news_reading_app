import React from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import CategoryArticleBody from "./Component/CategoryArticleBody";
function App(){
return (
<div>
    <Header></Header>
    <CategoryArticleBody></CategoryArticleBody>
    <Footer></Footer>

</div>
);
}
export default App;
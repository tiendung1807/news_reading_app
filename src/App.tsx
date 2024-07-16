import React, {useState} from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import CategoryArticleBody from "./Component/CategoryArticleBody";
import HomeBody from "./Component/HomeBody";
import Detail from "./Component/detail/Detail";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App: React.FC = () => {
                              const [currentComponent, setCurrentComponent] = useState<'home' | 'category'>('home');
                              const [rssUrl, setRssUrl] = useState("https://thethao247.vn/bong-da-viet-nam-c1.rss")
                          const handleCategoryChange = (newRssUrl: string) => {
                          setRssUrl(newRssUrl);
                          setCurrentComponent('category');
                          }
                              const handleHomeClick = () => {
                          setCurrentComponent('home');
                          };
                              return (
                              <div>
                                  <Header onCategoryChange={handleCategoryChange} onHomeClick={handleHomeClick}/>
                                  <Router>
                                      <Routes>
                                          <Route path="/">
                                              <Route path='/detail/:link' element={<Detail/>}></Route>
                                          </Route>
                                      </Routes>
                                  </Router>
                          {currentComponent === 'home' ? <HomeBody /> : <CategoryArticleBody key={rssUrl} rssUrl={rssUrl} />}
                                  <Footer/>
                          </div>
                          );
                          };
export default App;
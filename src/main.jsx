import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import App from './App.jsx';
import { IndexPage } from './Pages/Index.jsx';
import { PersonList } from './Pages/PersonList.jsx';
import { EpisodeList } from './Pages/EpisodeList.jsx';
import { Info } from './Pages/Info.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/personas" element={<PersonList />} />
        <Route path="/episodios" element={<EpisodeList />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);

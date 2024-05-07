import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { IndexPage } from './Pages/Index.jsx';
import { PersonList } from './Pages/PersonList.jsx';
import { EpisodeList } from './Pages/EpisodeList.jsx';
import { Info } from './Pages/Info.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<IndexPage />} />
        <Route path="/personajes" element={<PersonList />} />
        <Route path="/episodios" element={<EpisodeList />} />
        <Route path="/info:name" element={<Info />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

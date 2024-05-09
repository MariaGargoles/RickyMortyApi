import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { IndexPage } from './Pages/Index.jsx';
import { PersonList } from './Pages/PersonList.jsx';
import { EpisodeList } from './Pages/EpisodeList.jsx';
import { Info } from './Pages/Info.jsx'; 
import { Provider } from "react-redux"
import {store} from "./app/store.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<IndexPage />} />
        <Route path="/personajes" element={<PersonList />} />
        <Route path="/episodios" element={<EpisodeList />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

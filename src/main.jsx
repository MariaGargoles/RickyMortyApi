import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { IndexPage } from './Pages/Index.jsx';
import { PersonList } from './Pages/PersonList.jsx';
import { EpisodeList } from './Pages/EpisodeList.jsx';
import { InfoEpisodes } from './Pages/InfoEpisodes.jsx';
import { Provider } from "react-redux"
import {store} from "./app/store.js"
import { CharacterCreate } from './Pages/AddCharacter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<IndexPage />} />
        <Route path="/personajes" element={<PersonList />} />
        <Route path="/episodios" element={<EpisodeList />} />
        <Route path="/ExtraInfoEpisodes/:id" element={<InfoEpisodes />} />
        <Route path="/CreaTuPersonaje" element={<CharacterCreate />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

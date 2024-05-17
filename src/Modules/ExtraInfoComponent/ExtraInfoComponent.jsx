import { useState, useEffect } from 'react';
import { PersonCardComponent } from '../PersonCardComponent/PersonCardComponent';
import { useSelector, useDispatch } from 'react-redux';
import { GetExtraInfoThunk } from '../../features/task/taskThunk';
import { useParams } from 'react-router-dom';
import { ExtraInfoEpisodesCard } from '../ExtraInfoEpisodesCardComponent/ExtraInfoEpisodesCardComponent';

export const ExtraInfoComponent = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ episode: {}, characters: [] });
  const episode = useSelector((state) => state.extra.episode);
  const characters = useSelector((state) => state.extra.characters);
  const ExtraInfostatus = useSelector((state) => state.extra.status);
  const ExtraInfoerror = useSelector((state) => state.extra.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (ExtraInfostatus === "idle") {
      dispatch(GetExtraInfoThunk(id));
    } else if (ExtraInfostatus === "pending") {
      setLoading(true);
    } else if (ExtraInfostatus === "fulfilled") {
      setLoading(false);
      setData({ episode, characters });
    } else if (ExtraInfostatus === "rejected") {
      alert("Error: " + error);
    }
  }, [ExtraInfostatus, dispatch,episode, characters, id]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='ContainerInfoEpisodes'>
          <h2 className='ContainerInfoEpisodes__title'>Episodio: {id}</h2>
          <div className='ContainerInfoEpisodes__info'>
            <ExtraInfoEpisodesCard
              name={data.episode.name}
              airDate={data.episode.air_date}
              episode={data.episode.episode}
              url={data.episode.url}
              created={data.episode.created}
            />
          </div>
          <h2 className='ContainerInfoEpisodes__characters__title'>Personajes que aparecen en el episodio</h2>
          <div className='ContainerInfoEpisodes__content'>
            {data.characters.map((character) => (
              <PersonCardComponent
                key={character.id}
                name={character.name}
                image={character.image}
                species={character.species}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

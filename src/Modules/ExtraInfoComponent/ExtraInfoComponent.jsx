import { useState, useEffect } from 'react';
import { PersonCardComponent } from '../PersonCardComponent/PersonCardComponent';
import { useSelector, useDispatch } from 'react-redux';
import { GetExtraInfoThunk } from '../../features/task/taskThunk';
import { useParams } from 'react-router-dom';
import { ExtraInfoEpisodesCard } from '../../ExtraInfoEpisodesCardComponent/ExtraInfoEpisodesCardComponent';

export const ExtraInfoComponent = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const ExtraInfo = useSelector((state) => state.extra.data);
    const ExtraInfoStatus = useSelector((state) => state.extra.status);
    const ExtraInfoError = useSelector((state) => state.extra.error);
    const dispatch = useDispatch();

    useEffect(() => {
        if (ExtraInfoStatus === "idle") {
            dispatch(GetExtraInfoThunk(id));
        } else if (ExtraInfoStatus === "pending") {
            setLoading(true);
        } else if (ExtraInfoStatus === "fulfilled") {
            setLoading(false);
            setData(ExtraInfo);
        } else if (ExtraInfoStatus === "rejected") {
            alert("Error: ");
        }
    }, [ExtraInfoStatus, dispatch, ExtraInfo, ExtraInfoError, id]);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='ContainerInfoEpisodes'>
                    <h2 className='ContainerInfoEpisodes__title'>Episodio: {data.episode?.id}</h2>
                    <div className='ContainerInfoEpisodes__info'>
                        <ExtraInfoEpisodesCard
                            name={data.episode?.name}
                            airDate={data.episode?.air_date}
                            episode={data.episode?.episode}
                            url={data.episode?.url}
                            created={data.episode?.created}
                        />
                    </div>
                    <h2 className='ContainerInfoEpisodes__characters__title'>Personajes que aparecen en el episodio</h2>
                    <div className='ContainerInfoEpisodes__content'>
                        {data.characters && data.characters.map((character, index) => (
                            <PersonCardComponent
                                index={index}
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

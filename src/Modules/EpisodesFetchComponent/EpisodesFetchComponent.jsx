import React, { useState, useEffect } from 'react';
import { EpisodesCard } from '../EpisodesCardComponent/EpisodesCardComponent';
import { useDispatch, useSelector } from 'react-redux';
import { GetEpisodeListThunk } from '../../features/task/taskThunk';

export const EpisodesFetchComponent = () => {
    const [loading, setLoading] = useState(false);
    const [episodes, setEpisodes] = useState([]);
    const episodeList = useSelector((state) => state.episode.data);
    const episodeStatus = useSelector((state) => state.episode.status);
    const episodeError = useSelector((state) => state.episode.error);
    const dispatch = useDispatch();

    useEffect(() => {
        if (episodeStatus === 'idle') {
            dispatch(GetEpisodeListThunk());
        } else if (episodeStatus === 'pending') {
            setLoading(true);
        } else if (episodeStatus === 'fulfilled') {
            setLoading(false);
            setEpisodes(episodeList);
        } else if (episodeStatus === 'rejected') {
            setLoading(false);
            alert('Error: ' + episodeError);
        }
    }, [episodeStatus, dispatch, episodeList, episodeError]);

    return (
        <>
            {loading ? <p>Loading...</p> : episodes.map((episode, index) => (
                <EpisodesCard key={index} name={episode.name} date={episode.date} />
            ))}
        </>
    );
};

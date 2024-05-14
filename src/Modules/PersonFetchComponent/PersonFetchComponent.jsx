import React, { useState, useEffect } from 'react';
import { PersonCardComponent } from '../PersonCardComponent/PersonCardComponent';
import { useDispatch, useSelector } from 'react-redux';
import { GetTaskListThunk } from '../../features/task/taskThunk';

export const PersonFetchComponent = () => {
    
    const [loading,setLoading] = useState(false)
    const [data, setData] = useState([])
    const taskList  = useSelector((state) => state.task.data)
    const taskStatus = useSelector((state) => state.task.status)
    const taskError = useSelector((state) => state.task.error)
    const dispatch = useDispatch()

    console.log(taskList)
    useEffect(() => {
        if (taskStatus === "idle"){
            dispatch(GetTaskListThunk())

        }else if (taskStatus === "pending"){
            setLoading(true)

        }else if (taskStatus === "fulfilled"){
            setLoading(false)
            setData(taskList)
        }else {
            alert("Error")
        }
    }, [taskStatus,dispatch,taskList])
    
    
    
    return <>
    {loading ? <p>Loading...</p> : <>{taskList.map((character, index) => <PersonCardComponent name={character.name} image={character.image} species={character.species} />)}
    
    </>}
   
    </>
};

import {useEffect, useState} from "react";

const initialState = {
    projects: [],
}

export const useFetchProjects = () => {

    const [state, setState] = useState(initialState);
    const [loadMore, setLoadMore] = useState(false);
    const [error, setError] = useState(false)

    const fetchMovie = () => {
        try {
            setError(false);
            console.log('here');
            const greetings = require('./project_dis.json')
            setState(prev => ({
                projects:
                    loadMore  ? [...greetings.projects] : [...greetings.projects.slice(0,2)]
            }));
            console.log(greetings);
            // setState(project);
        } catch (error) {
            setError(true);
        }
    };

    useEffect(() => {
        fetchMovie()
    }, [loadMore])

    return {state, error, setLoadMore, loadMore};

}
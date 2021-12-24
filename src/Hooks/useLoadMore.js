import {useEffect, useState} from "react";

const initialState = {
    dots_display: '',
    text: '',
    more_display: ''
}

export const useLoadMore = () => {

    const [state, setState] = useState(initialState);
    const [loadMore, setLoadMore] = useState(false)

    useEffect(() => {
        if (!loadMore) {


            setState({
                dots_display: "inline",
                text: "Load more",
                more_display: "none"
            });
        } else {


            setState({
                dots_display: "none",
                text: "Load less",
                more_display: "inline"
            })
        }
    }, [loadMore]);


    return {state, setLoadMore};

}
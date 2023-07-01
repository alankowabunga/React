import { useReducer, useEffect } from "react";



const ACTIONS = {
    MAKE_REQUEST: "make-request",
    GET_DATA: "get-data",
    ERROR: "error"
};

function reducer(state: any, action: { type: any; payload: { jobs: any; error: any; }; }) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, jobs: [] }
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, jobs: action.payload.jobs }
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, jobs: [] }
        default:
            return state;
    }
}

export const useFetchJobs = (params: unknown, page: unknown) => {

    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })

    useEffect(() => {
        dispatch({
            type: ACTIONS.MAKE_REQUEST,
            payload: {
                jobs: undefined,
                error: undefined
            }
        })
    }, [params, page])

    return {
        jobs: [],
        loading: false,
        error: false,
    };
};

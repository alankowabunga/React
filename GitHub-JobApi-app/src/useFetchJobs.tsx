import React, { useReducer } from "react";

const ACTIONS = {
    MAKE_REQUEST: "make-request",
    GET_DATA: "get-data",
    ERROR: "error",
};

export const useFetchJobs = () => {
    return {
        jobs: [],
        loading: false,
        error: false,
    };
};

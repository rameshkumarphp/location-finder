const locationReducer = (state, action) => {
    switch (action.type) {
        case "LOCATION_FETCH_SUCCEEDED":
            return { ...state, response: action.response }
        case "LOCATION_FETCH_FAILED":
            return { ...state, message: action.message }
        default:
            return {
                response: {}
            };
    }
}

export default locationReducer;
const initialState = {
    MovieDetail: {}
};

export const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MOVIE_DETAIL":
            return { ...state, MovieDetail: action.result };

        default:
            return state;
    }
}

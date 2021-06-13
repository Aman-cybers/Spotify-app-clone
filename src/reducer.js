export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: "BQAeUGzfAxunZj8BX4hIgALEa8m9YSirGCpwteTMbI2oW_3Q7GpNFGrnAFT2Auo0Pw4qeIsghYrFtMyIbuteBO0YsPFFdO5HhBkSKx_JBEZQ7Mq0v2Ywi15imBZHn2NdEeeaw6wbApSFsBqq_E51atqBnZIHwT1IngPxUDR8M_4d6p62"
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;

    }
}

export default reducer
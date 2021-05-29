const initialState = {
    items: [],
    loading: false
}

const albomsReducer =(state = initialState, action) =>{
    switch (action.type){
        case "alboms/load/start":
            return{
                ...state,
                loading: true
            }
        case "alboms/load/success":
            return{
                ...state,
                items: action.payload,
                loading: false
            }
        default:
            return state
    }
}
export default albomsReducer
export default function(state = null, action){
    switch(action.type){
        case "GET_HUMORS":
            return action.payload.data ? action.payload.data : null;
        break;
        default:
            return state;
    }
   
}
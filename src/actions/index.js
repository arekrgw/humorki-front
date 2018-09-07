import axios from 'axios';

export const getHumors = () => {
    const query = "http://localhost/api/classes/_database.php?data=humors";
    const action = axios.get(query);

    return {
        type: 'GET_HUMORS',
        payload: action
    }
}
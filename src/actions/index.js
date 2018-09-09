import axios from 'axios';

export const getHumors = () => {
    const query = "http://temp.5v.pl/api/_database.php?data=humors";
    const action = axios.get(query);

    return {
        type: 'GET_HUMORS',
        payload: action
    }
}

export const postVote = (user, grade, refreshHumors) => {
    const form = new FormData();
    form.append("user", user);
    form.append("grade", grade);
    const query = "http://temp.5v.pl/api/_database.php?post=newhum";
    const action = axios.post(query, form).then((response) => refreshHumors());

    return {
        type: 'POST_VOTE',
        payload: action
    }
}
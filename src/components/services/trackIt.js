import axios from 'axios';

const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/';


function getToken() {
    const auth = JSON.parse(localStorage.getItem("trackIt"));    
    const token = {
        headers: {
            Authorization: `Bearer ${auth}`
        }
    };
    return token;
}

function postRegistration(body) {
    const promise = axios.post(`${URL}auth/sign-up`, body);
    return promise;
}

function postLogin(body) {
    const promise = axios.post(`${URL}auth/login`, body);
    return promise;
}

function postHabit(habit) {
    const token = getToken();
    const promise = axios.post(`${URL}habits`, habit, token);
    return promise;
}

function getHabits() {
    const token = getToken();
    const promise = axios.get(`${URL}habits`, token);
    return promise;
}
function deleteHabit(idHabit) {
    const token = getToken();
    const promise = axios.delete(`${URL}habits/${idHabit}`, token);
    return promise;
}
function getTodayHabits() {
    const token = getToken();
    const promise = axios.get(`${URL}habits/today`, token);
    return promise;
}


export { postRegistration, postLogin, postHabit, getHabits, deleteHabit, getTodayHabits };
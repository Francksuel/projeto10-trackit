import axios from 'axios';
const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/';

function getToken() {
    const auth = JSON.parse(localStorage.getItem("trackIt"));
    if (auth) {
        const token = {
            headers: {
                Authorization: `Bearer ${auth}`
            }
        };
        return token;
    } else {
        return false;
    }
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
function checkHabit(id) {
    const token = getToken();
    const promise = axios.post(`${URL}habits/${id}/check`, {}, token);
    return promise;
}
function uncheckHabit(id) {
    const token = getToken();
    const promise = axios.post(`${URL}habits/${id}/uncheck`, {}, token);
    return promise;
}

export {
    getToken,
    postRegistration,
    postLogin,
    postHabit,
    getHabits,
    deleteHabit,
    getTodayHabits,
    checkHabit,
    uncheckHabit
};
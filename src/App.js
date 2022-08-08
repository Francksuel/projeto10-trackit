import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './components/common/GlobalStyle';
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Habits from "./components/Habits/Habits";
import Today from "./components/Today/Today";
import Historic from './components/Historic/Historic';

export default function App() {
    const [dataClient,setDataClient]=useState({});
    const [todayHabits, setTodayHabits] = useState([]);
    return (
        <>
            <GlobalStyle />
            <UserContext.Provider value={{dataClient,setDataClient,todayHabits,setTodayHabits}}>
            <BrowserRouter>
                <Routes>                
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Registration />} />
                    <Route path="/habitos" element={<Habits/>} />
                    <Route path="/hoje" element={<Today/>} />  
                    <Route path="/historico" element={<Historic/>} />            
                </Routes>
            </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}

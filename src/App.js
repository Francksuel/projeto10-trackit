import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './components/common/GlobalStyle';
import { useState } from "react";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Habits from "./components/Habits/Habits";
import UserContext from "./contexts/UserContext";

export default function App() {
    const [dataClient,setDataClient]=useState({});
    return (
        <>
            <GlobalStyle />
            <UserContext.Provider value={{dataClient,setDataClient}}>
            <BrowserRouter>
                <Routes>
                
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Registration />} />
                    <Route path="/habitos" element={<Habits/>} />
                    
                </Routes>
            </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}

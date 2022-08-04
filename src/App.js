import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './components/common/GlobalStyle';
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Habits from "./components/Habits/Habits";


export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Registration />} />
                    <Route path="/habitos" element={<Habits/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

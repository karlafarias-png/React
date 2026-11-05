import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ListaProdutos from "./pages/listaProdutos/ListaProdutos";
import DetProduto from "./pages/detProdruto/DetProduto";
import Login from "./pages/login/login";

export function App(){
    return(
        <>
        <Header />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path= "/produtos" element={<ListaProdutos/>}/>
        <Route path="/detalheProduto" element={<DetProduto/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" 
        element={ 
            <img className="container-notfound" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KTAwVUi3eibzYOchWaApic1MyVDm0zzvCoroOkjyvA&s=10" alt="imagem de não encontrado"/>}/>

        </Routes>
        <Footer />
        </>
    )
}
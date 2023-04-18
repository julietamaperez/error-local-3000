import NavBar from "./components/NavBar/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Articulos from "./components/Articulos/Articulos";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
   <>
   
 {
  //  <ItemCount/>
  //  <ItemListContainer/>
}
    <BrowserRouter>
        <NavBar />
        <Routes>
      
        <Route path="/" element= {<ItemListContainer/>} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
        <Route path="/item/:idItem" element={<ItemDetailContainer/>} />

       </Routes>

   </BrowserRouter>

    <ItemDetailContainer/>

    <h1>Blog nutricional</h1>
    <h2>Recetas veganas</h2>
    <Articulos titulo="Recetas veganas" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSD6pja7sElUZGpDXZM8fziNweJfOFlhR6tA&usqp=CAU">
    <p>lorem jdwqfjqwkfcjqjfdklfwqldqwñ</p>
    <strong> Tiempo de lectura 10 min</strong>
    </Articulos>

    <h2> Recetas Kosher </h2>
    <Articulos titulo= "Recetas kosher" img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2zTD0dZ_ewqoFIvqahJfzR9f2BCrLf_fycFpqnr1HaVuaHSs8iZuFYEgub8VqbSY1ps&usqp=CAU">
      <p> Recetazas kosher</p>
    </Articulos>




  </>
  );
}




export default App;


import "./ItemDetail.css"



const ItemDetail = ({nombre, precio, id, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>Id: {id}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit voluptas eveniet aliquid minima facilis, hic, maiores consectetur sapiente deleniti similique harum nulla exercitationem officia in ullam, sequi id! Nesciunt!</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail
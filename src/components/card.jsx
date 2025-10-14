function Card (props){

const secretNumber = props.secretNumber;
const products = props.products;
const deleteProduct = props.deleteProduct;

return (
    <>
       <h1>Hello world</h1>
        <p>{secretNumber}</p>
        {
            products.map( product => (
               <div key={product.id}>
                   <p >{product.title}</p>
                   <button className="py-1.2 px-4 rounded bg-red-500 text-white mt-2 mb-2" onClick={()=>{deleteProduct(product.id)}}>Delete</button>
               </div>

            ))
        }
    </>
)}
export default Card ;
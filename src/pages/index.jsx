import React from "react";
import  Card  from "../components/Card";
import {Counter} from "../components/api.jsx"

export default function Index() {
    const [count , setCount] = React.useState(0);
    const products = [
        {id: 1 , title: "GM"},
        {id: 2 , title: "BMW"},
        {id: 3 , title: "BUGATTI"},
    ]
    function deleteProduct(id) {
        console.log(id)

    }

    function increment () {
        setCount(count + 1);
    }
    function decrement () {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <button className="py-1.2 border rounded bg-blue-500 text-white px-4" onClick={increment}>Qoshish</button>
            <p>{count}</p>
            <button className="py-1.2 border rounded bg-blue-500 text-white px-4" onClick={decrement}>Ayirish</button>
            <Card secretNumber={count} products={products}  deleteProduct={deleteProduct} />
            <Counter/>

        </>
    );
}
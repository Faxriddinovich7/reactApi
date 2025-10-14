import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

export default function UserPage() {
    const [products, setProducts] = useState([]);

    async function render() {
            const url = "https://api.escuelajs.co/api/v1/products";
            const res = await fetch(url);
            const data = await res.json();
            setProducts(data);
    }

    useEffect(() => {
        render();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-red-500 text-2xl font-semibold mb-6">Users Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.length > 0 &&
                    products.map((item) => (
                        <Link to={`/product/${item.slug}`} key={item.id} className="border rounded-2xl p-4">
                        <img src={item.images} alt={item.title} className="w-full h-40 object-cover rounded-lg mb-3"/>
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <p className="text-gray-600 text-sm">{item.name}</p>
                            <p className="text-green-600 font-bold mt-2">${item.price}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

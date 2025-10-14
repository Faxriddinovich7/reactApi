import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductIn() {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch("https://api.escuelajs.co/api/v1/products");
            const data = await res.json();

            const foundProduct = data.find((item) => item.slug === slug);
            setProduct(foundProduct);
        }
        fetchProducts();
    }, [slug]);


    return (
        <div className="p-6 max-w-xl mx-auto">
            <img src={product.image} alt={product.title} className="rounded-xl"/>
            <h1 className="text-3xl text-gray-600 mt-2 font-bold mb-8">
                {product.title}
            </h1>
            <div className="flex justify-between">
                <p className="text-gray-600 font-bold text-lg mb-3">
          <span className="text-white w-[100px] px-[10px] pb-[3px]">
            Category
          </span>
                    {product.name}
                </p>
                <p className="text-green-600 font-bold text-2xl mb-4">
          <span className="text-white w-[100px] px-[10px] mr-2 bg-green-500">
            Price
          </span>
                    ${product.price}
                </p>
            </div>
            <p className="text-gray-700">{product.description}</p>
        </div>
    );
}

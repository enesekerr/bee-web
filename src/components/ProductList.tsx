import React from 'react';
import Bal from "../assets/bal2.png";
import BalCita from "../assets/bal1.png";

const products = [{
  title: "Kavanoz Süzme Bal",
  price: "900 TL",
  img: BalCita,
  color: "red",
},
{
  title: "Petek Çıta Bal",
  price: "1200 TL",
  img: Bal,
  color: "orange",
}];

const ProductList = () => {
  return (
    <div className="flex flex-col p-4 gap-4 bg-gray-100">
      <span className="text-2xl font-bold">Ürünler</span>
      <div className="flex flex-row gap-4 justify-center">
        {products.map((product, index) => {
          
          const cardBgColor = product.color === "red" ? "bg-red-100" : "bg-orange-100";
          const textColor = product.color === "red" ? "text-red-800" : "text-orange-800";
          
          
          return (
            
            <div key={index} className="flex flex-col p-8 rounded-xl gap-4 items-center flex-1">
              <div className={`rounded-2xl p-6 ${cardBgColor}`}>
                <img src={product.img} alt={product.title} className="w-32 h-32 object-cover" />
              </div>
              <div className="flex flex-col items-center">
                
                <span className={`text-xl font-bold ${textColor}`}>{product.title}</span>
                
                <span className={'text-sm text-gray-500 font-bold' }>
                  {product.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
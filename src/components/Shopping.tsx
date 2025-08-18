import React, { useState } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import Bal from "../assets/bal2.png";
import BalCita from "../assets/bal1.png";

const Shopping = () => {
  
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Kavanoz Süzme Bal',
      price: 900,
      quantity: 1,
      img: BalCita,
    },
    {
      id: 2,
      title: 'Petek Çıta Bal',
      price: 1200,
      quantity: 2,
      img: Bal,
    },
  ]);

  
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  
  const updateQuantity = (id, delta) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  
  const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  return (
    <div className="container mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center mb-8">Sepetim</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          Sepetinizde ürün bulunmamaktadır.
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="flex-1 space-y-4">
            {cartItems.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center bg-white p-4 rounded-xl shadow-sm gap-4 border border-gray-200"
              >
                
                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>

                
                <div className="flex-1 flex flex-col">
                  <span className="text-lg font-bold">{item.title}</span>
                  <span className="text-gray-500 font-bold">{item.price} TL</span>
                </div>

                
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.id, -1)} className="p-2 text-gray-600 hover:text-orange-500 transition">
                    <Minus size={18} />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="p-2 text-gray-600 hover:text-orange-500 transition">
                    <Plus size={18} />
                  </button>
                </div>

                
                <button onClick={() => removeItem(item.id)} className="p-2 ml-4 text-gray-500 hover:text-red-500 transition">
                  <X size={20} />
                </button>
              </div>
            ))}
          </div>

          
          <div className="w-full lg:w-80 bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Sipariş Özeti</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-xl font-bold border-b pb-2 mb-2">
                <span>Ara Toplam:</span>
                <span>{total.toFixed(2)} TL</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-2 mt-2">
                <span>Toplam:</span>
                <span>{total.toFixed(2)} TL</span>
              </div>
            </div>
            
            <button className="w-full mt-6 py-3 px-4 rounded-lg bg-orange-500 text-white font-bold hover:bg-orange-600 transition">
              Ödeme Yap
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shopping;
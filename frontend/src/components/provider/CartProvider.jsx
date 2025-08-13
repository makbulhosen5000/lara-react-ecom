import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData,setCartData] = useState(JSON.parse(localStorage.getItem("cart")) || []); 

  
    const addToCart = (product,size=null) => {
         let updateCart = [...cartData];

         //if cart is empty, add the product
            if(updateCart.length == 0){
                updateCart.push({
                    id:`${product.id}-${Math.floor(Math.random() * 1000)}`,
                    product_id : product.id,
                    size : size,
                    title: product.title,
                    price: product.price,
                    qty: 1,
                    image_url: product.image_url,
             });
             setCartData(updateCart);
             localStorage.setItem("cart", JSON.stringify(updateCart));
            }else{
                // if size is not empty
                if(size != null){
                   const isProductExist = updateCart = updateCart.map((item) => 
                        item.product_id === product.id && item.size === size
                    );
                    if(isProductExist){
                        // if product with the same size exists, increase the quantity
                        updateCart = updateCart.map((item) => {
                            (item.product_id === product.id && item.size === size) 
                            ?{...item,qty: item.qty + 1} 
                            :
                            item; 
                        });
                    }else{
                        // if product and size combination not exist, add the product
                        updateCart.push({
                            id:`${product.id}-${Math.floor(Math.random() * 1000)}`,
                            product_id : product.id,
                            size : size,
                            title: product.title,
                            price: product.price,
                            qty: 1,
                            image_url: product.image_url,
                        });
                    }
                }else{
                    // if size is null
                    const isProductExist = updateCart = updateCart.map((item) => 
                        item.product_id === product.id
                    );
                    if(isProductExist){
                        // When product found in cart, increase the quantity
                        updateCart = updateCart.map((item) => {
                            (item.product_id === product.id) 
                            ?{...item,qty: item.qty + 1} 
                            :
                            item; 
                        });
                    }else{
                        // if product not exist, add the product
                        updateCart.push({
                            id:`${product.id}-${Math.floor(Math.random() * 1000)}`,
                            product_id : product.id,
                            size : size,
                            title: product.title,
                            price: product.price,
                            qty: 1,
                            image_url: product.image_url,
                        });
                    }
                }
            }
    }
  
  
  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  )
};
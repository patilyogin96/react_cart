
import React from "react";
import CartItems from "./CartItem";

const Cart = (props) => {
  

  
    const { products } = props;

    // console.log(this.state);
    return (
      <div className="cart">
        {products.map((products) => {
          return (
            <CartItems
              products={products}
              key={products.id}
              onIncrease={props.onIncrease}
              onDecrease={props.onDecrease}
              onDelete={props.onDelete}
            />
          );
        })}
      </div>
    );
  
}

export default Cart;

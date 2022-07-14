import React from "react";

const CartItems = (props) => {
  

  

 

 

    // console.log(this.props.products);

    const {price , title , qty,img } = props.products;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img src={img} alt="" style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price }</div>
          <div style={{ color: "#777" }}>Qty:{qty}</div>
          <div className="cart-items-actions">
            {/* Buttons */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              alt="decrease"
              className="action-icons"
              onClick={() => props.onDecrease(props.products)}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              alt="increase"
              className="action-icons"
              onClick={() => props.onIncrease(props.products)}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/3096/3096687.png"
              alt="delete"
              className="action-icons"
              onClick={() => props.onDelete(props.products.id)}
            />
          </div>
        </div>
      </div>
    );
  
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 10,
    backgroundColor: "#777",
  },
};

export default CartItems;

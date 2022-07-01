import React from 'react';


class CartItems extends React.Component{
    constructor(){
        super();

        this.state ={
            price : 999,
            title : 'Mobile Phone',
            qty : 1,
            img : ''

        }
    }
    render(){
        const {price , title , qty } = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img src='' alt='' style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize : 25}}>{title}</div>
                    <div style={{color : '#777'}}>Rs {price}</div>
                    <div style={{color : '#777'}}>Qty:{qty}</div>
                    <div className="cart-items-actions">
                        {/* Buttons */}
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="decrease" className="action-icons" />
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="increase" className="action-icons" />
                        <img src="https://cdn-icons-png.flaticon.com/512/3096/3096687.png" alt="delete" className="action-icons" />
                    </div>
                </div>
            </div>

        )
    }
}

const styles = {
    image : {
        height : 110,
        width :110,
        borderRadius : 10,
        backgroundColor : '#777'
    }
}

export default CartItems;
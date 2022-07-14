import React from "react";
import "./App.css";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from './firebase';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    firebase
    .firestore()
    .collection('products')
    .onSnapshot((snapshot) =>{
      snapshot.docs.map((doc) =>{
        return "";

      })

      const product = snapshot.docs.map((doc) => {
        const data = doc.data();
        
        
        data['id'] = doc.id; 

        
        return data;
      })

      this.setState({
        products : product
      })
    })
      
     


    
    
  }
 

  

  handleIncrease = (product) => {
    const { products } = this.state;

    // console.log("Products", products);

    const index = products.indexOf(product);

    // console.log("Index", index);

    // products[index].qty += 1;

    // this.setState({
    //   products,
    // });

    const docRef = firebase.firestore().collection('products').doc(products[index].id);
    // console.log(docRef);

    docRef
    .update({
      qty : products[index].qty + 1
    })
    .then(() => {
      console.log("Updated")
    })

  };

  handleDecrease = (product) => {
    // console.log("Inside Decrease");
    const { products } = this.state;

    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    // products[index].qty -= 1;

    // this.setState({
    //   products,
    // });

    const docRef = firebase.firestore().collection('products').doc(products[index].id);
    // console.log(docRef);

    docRef
    .update({
      qty : products[index].qty - 1
    })
    .then(() => {
      console.log(" decrease Updated")
    })
  };

  handleDelete = (id) => {
    // console.log(id);

    const { products } = this.state;

    const items = products.filter((item) => {
      return item.id !== id;
    });
    // console.log(items);

    this.setState({
      products: items,
    });
  };

  getCount = () => {
    let count = 0;
    const { products } = this.state;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  getTotal = () => {
    let countTotal = 0;

    const { products } = this.state;

    products.map((product) => {
      // console.log(product);

      countTotal = countTotal + product.qty * product.price;
      return "";
    });

    

    return countTotal;
  };
  render() {
    const { products } = this.state;
    return (
      <>
        <Navbar count={this.getCount()} />
        <Cart
          products={products}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
          onDelete={this.handleDelete}
        />

        <div>Total : Rs {this.getTotal()}</div>
      </>
    );
  }
}

export default App;

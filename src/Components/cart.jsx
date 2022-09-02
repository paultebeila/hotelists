import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import {useState} from 'react'

const Cart = (props) => {
    const [takeIn, setTakeIn] = useState('');
    const [takeOut, setTakeOut] = useState('');
    const dates =()=>{
        setTakeIn(props.checkIn);
        setTakeIn(props.checkIn);
    }
    const {
        isEmpty,
        totalUniqueItems, 
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
     } = useCart();
     if(isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>
    return(
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Cart: ({totalUniqueItems}) total Items: ({totalItems}) </h5>
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            {items.map((item, index)=>{
                                return(
                                    <tr key={index}>
                                 <td style={{ backgroundColor: 'red', width: '16vw'}}>
                                        <img src={item.img} style={{height: '20vh', width: '15vw', }} />
                                    </td>
                                    <td><h3 style={{marginLeft: '-10px'}}>{item.title}</h3></td>
                                    <td>{item.price}</td>
                                    <td>Quantity ({item.quantity})</td>
                                    <td>CheckIn ({props.checkIn})</td>
                                    <td>CheckOut ({props.checkOut})</td>
                                    <td>
                                        <button
                                            className="btn btn-info ms-2"
                                            onClick={()=> updateItemQuantity(item.id, item.quantity - 1) }
                                        >-</button>
                                        <button
                                            className="btn btn-info ms-2"
                                            onClick={()=> updateItemQuantity(item.id, item.quantity + 1) }
                                        >+</button>
                                        <button
                                         className="btn btn-danger ms-2"
                                         onClick={()=> removeItem(item.id)}
                                         >Remove Item</button>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    Total Price:R {cartTotal}
                </div>
                <div className="col-auto">
                    <button
                        style={{width: '10vw', height: '5vh', marginTop: '30px'}}
                         className="btn btn-danger m-2"
                         onClick={()=>emptyCart()}
                     >Clear Order(s)</button>

               

                     <span
                        style={{width: '10vw', height: '5vh', marginTop: '30px', marginLeft: '10px'}}
                         className="btn btn-danger m-2"
                     > <Link to="/payment"> Go to Payment</Link></span>
                </div>
            </div>
        </section>
        
    )
}

export default Cart;
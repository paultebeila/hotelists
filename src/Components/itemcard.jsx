import React from "react";
import { useCart } from "react-use-cart";

const Itemcard = (props) =>{

    const { addItem } = useCart();

    return(
        <div className="col-11 col-md col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img hidden src={props.img} className="card-img-top img-fluid" style={{width: '300px', height: '300px'}} />
                <div className="card-body text-center">
                    <h5 hidden className="card-title">{props.title}</h5>
                    <h5 hidden className="card-title">R{props.price}</h5>
                    
                    <p className="card-text">{props.desc}</p>
                    <button className="btn btn-success" onClick={()=>addItem(props.item)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Itemcard;
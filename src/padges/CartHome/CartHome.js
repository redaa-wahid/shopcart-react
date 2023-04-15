import './CartHome.scss';
import Cart from '../../components/Cart/Cart';
import React, {useEffect, useState } from 'react';
import {Content} from '../../components/Content/Content';
import CheckOut from '../../components/CheckOut/CheckOut';


function CartHome(props){

    const [cart , setcart] =useState(JSON.parse(localStorage.getItem('cart')) || []);

    const prod=props.product;
    const addtocart =(prod)=>{
        const product = [...cart];
        var newproduct =false;
        product.forEach(item=>{
            if(item.id == prod.id){
                newproduct=true;
                item.qty++;
            }
        })
       if(!newproduct){
        product.push({...prod,qty:1});
         }
        setcart(product);
    }

    const removeCart=(prod)=>{
        const product = [...cart];
        setcart(product.filter(item=>item.id !== prod.id))
    }

    useEffect(()=>{
localStorage.setItem('cart', JSON.stringify(cart))
    },[cart]);


    const [close,setclose] = useState(false);
    const [value,setvalue] = useState("");

    const submitorder=(e)=>{
e.preventDefault();

const order={
    name:value.name,
    email:value.email
}
console.log(order);
    }

const handlechange=(e)=>{
setvalue((prevstate)=>({...prevstate,[e.target.name]:e.target.value}))
}
return(
<div>
<Content product={prod} addtocart={addtocart}/>
<Cart product={cart} removeCart={removeCart} setclose={setclose}/>
<CheckOut
close={close}
submitorder={submitorder}
handlechange={handlechange}
setclose={setclose}
/>  
 </div>   
);
}

export default CartHome;
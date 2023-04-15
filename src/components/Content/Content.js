import './Content.scss';
import {Buttons} from '../Buttons/Buttons';
import React,{useState} from 'react';
import ProductModal from '../ProductModal/ProductModal';
import Filter from '../Filter/Filter';
import Slide from 'react-reveal/Slide';

export const Content = (props)=> {
 //add modules product
  const [prod, setproduct] = useState("");

  function openModal(product) {
    setproduct(product);
  }

  function closeModal() {
    setproduct(false);
  }

//filter and sort product
  const [products, setproducts] = useState(props.product);
  const [ssize, setsize] = useState("");
  const [filtersort, setfiltersort] = useState("");

  const FilterSize=(e) => {
  
    setsize(e.target.value);

if (e.target.value == "all") {
  setproducts(props.product);
}else{
   let productdata = props.product;
   let products = [...productdata];
   let newproducts = products.filter(product => product.size.indexOf(e.target.value) != -1);
   setproducts(newproducts);
}
}

  const FilterSort=(e) =>{
    let order = e.target.value;
    setfiltersort(order);
    let productdata = props.product;
    let products = [...productdata];
    let newproducts = products.sort( function(a,b){
      if(order == "lowest"){
return a.price - b.price
      }else if(order == "highest"){
return b.price - a.price
      }else{
        return a.id < b.id ? 1:-1
      }
    })

    setproducts(newproducts);
  }


  
  return (
  
<div className="product-wraper row d-flex justify-content-between ">
<Slide top cascade>
<div className="col-xl-9 col-sm-12 d-flex flex-wrap gap-md-5 p-sm-4">
{
  products.map(product=>(
<div  key={product.id} className="prod  row col-xl-2 col-md-4 col-lg-3 col-sm-12  text-center">
      
<a href="#"  onClick={()=>openModal(product)}>
<img src={product.imgurl} alt={product.title} className="col-12 "/>
</a>

<div className="des d-flex justify-content-between">
<div>{product.desc}</div>
<div>${product.price}</div>
</div>


<div onClick={()=>props.addtocart(product)}><Buttons/></div>
<ProductModal product={prod} closeModal={closeModal}/>
</div>
  ))
}
</div>

<div className="filter col-xl-3 col-md-12">
<Filter 
productsNumber={products.length}
size={ssize}
filtersort={filtersort}
FilterSize={FilterSize}
FilterSort={FilterSort}
/>
</div> 
</Slide>
</div>
  );
}
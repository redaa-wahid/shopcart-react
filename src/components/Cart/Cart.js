import './Cart.scss';
import ButtonsRemove from '../Buttons/Buttons';
import Bounce from 'react-reveal/Bounce';

function cart(props){
return(
<div className="wraper">
<div className="info">{props.product.length === 0 ? 'cart Empty': <p>there is {props.product.length} products in cart</p>}</div>

{
props.product.map(item => (
  <Bounce left cascade>
<div className="items" key={item.id}>
<Bounce left cascade>
    <div className="item d-flex mb-5">
       <img src={item.imgurl} alt={item.title}/>
      <div className="item-info d-flex justify-content-between w-100 ">
      <div>
       <p>title {item.title}</p>
       <p>qty {item.qty}</p>
       <p>price ${item.price}</p>
      </div>
      <div className="bt" onClick={()=>props.removeCart(item)}>
        <ButtonsRemove />
      </div>
      </div>
    </div> 
    </Bounce>
</div>
 </Bounce>
))
}


<Bounce bottom>
{
props.product.length !== 0 && (
<div className="wraper-price d-flex justify-content-between">
<div>Total price:<strong>{props.product.reduce((index,p)=>{
 return ( index+p.qty*p.price);
} ,0)}</strong></div>
<div><button className="btn btn-outline-info" onClick={()=>props.setclose(true)}>select products</button></div>
    </div>
)
}
</Bounce>
 </div> 

);
}

export default cart;
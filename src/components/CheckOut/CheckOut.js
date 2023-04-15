import './CheckOut.scss';
import Input from '../Input/Input';
import Zoom from 'react-reveal/Zoom';

function CheckOut(props){
return(
  <>
  {
  props.close &&
   <div className="checkout w-100 ">
        <span onClick={()=>props.setclose(false)}> &times; </span>
        <Zoom>
    <form className="form p-sm-5" onSubmit={props.submitorder}>
     
     <Input 
     label="Name"
     type="text"
     required
     name="name"
     onChange={props.handlechange}
     />

<Input 
     label="Email"
     type="email"
     required
     name="email"
     onChange={props.handlechange}
     />
      
      <div>
             <button type="submit" className="btn btn-outline-primary">CheckOut</button>
      </div>
    </form>
    </Zoom>
     </div>
}
  </>
);
}

export default CheckOut;
import './nav.scss';
import { RiHome7Line } from "react-icons/ri";



export const Navbar = ()=> {
  return (
    
 <div className={"nav bg-primary w-100"}>
  <div className={"nav-bar d-flex"}>
  <RiHome7Line className={"icon"}/>
  <h3>products</h3>
  </div>  
 </div>

  );
}
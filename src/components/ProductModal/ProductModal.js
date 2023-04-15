import './ProductModal.scss';
import Modal from 'react-modal';
import {Buttons} from '../Buttons/Buttons';

function ProductModal(props) {
const {product,closeModal} = props;

return(


<Modal isOpen={product} onRequestClose={closeModal} className="text-center m-5">
<button className="close" onClick={closeModal}>&times;</button>

    <img src={product.imgurl} alt={product.title} />
 
 <div>
 <div>{product.desc}</div>
 <div>${product.price}</div>
 </div>
 <Buttons/>
    
</Modal>

)
}

export default ProductModal;
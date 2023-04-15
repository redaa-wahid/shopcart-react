import './Filter.scss';
import Slide from 'react-reveal/Slide';

function Filter(props){
return(
    <Slide top cascade>
<div className="Filter-wraper">
<h2 className="bg-primary">Filter</h2>
<div className="check-size p-3">
<div>Number of products: {props.productsNumber} products</div>
<div className="Filter-size d-block">
   <span>Filter</span>
    <select className="w-100" value={props.size} onChange={props.FilterSize}>
        <option valule="all">all</option>
        <option valule="s">s</option>
        <option valule="l">l</option>
        <option valule="xl">xl</option>
        <option valule="m">m</option>
    </select>
</div>
<div className="Filter-order d-block">
    <span>order</span>
    <select className="w-100" value={props.filtersort} onChange={props.FilterSort}>
        <option valule="highest">highest</option>
        <option valule="latest">latest</option>
        <option valule="lower">lower</option>
    </select>
</div>
</div>
</div>
</Slide>
);
}

export default Filter;
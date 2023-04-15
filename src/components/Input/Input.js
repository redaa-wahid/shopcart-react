function Input(props){
    return(
      <div>
<label>{props.label}</label>
<input
type={props.type}
required
onChange={props.onChange}
name={props.name}
/>
      </div>
    )}
    
 export default Input;
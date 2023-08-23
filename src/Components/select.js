


function Select (props) {
     
return(

    <div>
      <label>{props.label}</label>
      <select value={props.value} onChange={props.onChange}>
  
          <option>
            {props.value}
          </option>

      </select>
    </div>
)
};

export default Select;
  
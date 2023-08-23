function Card(props) {
  
    return (
        <>
  
        <div className="card">
        <h2 className="card-h2">Card</h2>
        <div id="center">
            <h2>{props.userName}</h2>
            <p>ID: {props.id}</p>
            <p>Age: {props.age}</p>
            <p>Institute: {props.institute}</p>
            <p>Active: {props.isActive ? 'Yes' : 'No'}</p>
            <p>Category: {props.category}</p>
        </div>
        </div>
        </>
    );

}


export default Card;
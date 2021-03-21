function Ul(props){
    return ( 
        <ul id="uniq" onClick={props.clickHandler} className="list-group">
            {props.elements.map((element) =>
                <li key={element.id} className="list-group-item">{element.value}</li>
            )}
        </ul>
    );
}

// function AddLi(){

// }

export default Ul;
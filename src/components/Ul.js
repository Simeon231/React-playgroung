function Ul(props){
    return ( 
        <ul onClick={props.clickHandler} className="list-group">
            {props.elements.map((element) =>
                <li className="list-group-item">{element}</li>
            )}
        </ul>
    );
}

function AddLi(){

}

export default Ul;
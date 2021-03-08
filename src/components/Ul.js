function Ul(props){
    return ( 
        <ul className="list-group">
            {props.elements.map((element) =>
                <li className="list-group-item">{element}</li>
            )}
        </ul>
    );
}

export default Ul;
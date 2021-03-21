function Heading(props) {
    return (
        <header className="h3 text-center mb-3 mt-3">
            {props.children}
        </header>
    );
}

export default Heading;
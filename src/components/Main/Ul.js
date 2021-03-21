function Ul(props) {
    return (
        <>
            <div className="d-flex justify-content-center mb-3" onClick={/*AddLi(),*/ props.clickHandler}>
                <button className="btn btn-success">Add li</button>
            </div>
            <ul id="list" className="list-group">
                {props.elements.map((element) =>
                    <li key={element.id} className="list-group-item">{element.value}</li>
                )}
            </ul>
        </>
    );
}

// does not work
// function AddLi() {
//     const ul = document.getElementById('list');
//     const li = document.createElement('li');
//     li.textContent = "Some";
//     ul.appendChild(li)
// }

// import { Component } from 'react';

// class classUl extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             clickHandler: props.clickHandler,
//             inputValue: '',
//             list: props.elements
//         };
//     }

//     addLi = () => {
//         const { inputValue, list } = this.state;
//         if (inputValue) {
//             const nextState = [...list, inputValue];
//             this.setState({ list: nextState, inputValue: '' });
//         }
//     }

//     onChange = (e) => this.setState({ inputValue: e.target.value });

//     render() {
//         const { list, inputValue, clickHandler } = this.state;
//         console.log(list)
//         return (
//             <>
//                 <div className="d-flex justify-content-center mb-3">
//                     <input className="form-control col-md-6" type="text" value={inputValue} onChange={this.onChange} />
//                     <button className="btn btn-success" onClick={this.addLi(), clickHandler}>Add li</button>
//                 </div>
//                 <ul className="list-group">
//                     {list.map((element) =>
//                         <li key={element.id} className="list-group-item">{element.value}</li>
//                     )}
//                 </ul>
//             </>
//         );
//     }
// }

export default Ul;
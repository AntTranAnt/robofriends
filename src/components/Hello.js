import React from 'react'
import './Hello.css'

//Hello is a component and a function
class Hello extends React.Component {
    render() {
        return (
            //class is a reserved word in js so change to className
            <div className="henlo">
                <h1> Hello World </h1>
                <p>Me no likey you</p>
            </div>
        );
    }
}

//same as
// const Hello = (props) => {
//     return (
//         //class is a reserved word in js so change to className
//         <div className="henlo">
//             <h1> Hello World </h1>
//             <p>Me no likey you</p>
//         </div>
//     );
// }

export default Hello
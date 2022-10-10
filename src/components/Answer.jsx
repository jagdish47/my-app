import React from "react";

const Answer = ({name, place, infox = {a : 6, b : 10}}) => {
    return <div>Hello I'm {name} and From {place} ({infox.a} || {infox.b})</div>
}
// }
// const Answer = (props) => {
//     return <div>Hello I'm {props.name} and I'm from {props.from}</div>
// };
export default Answer;

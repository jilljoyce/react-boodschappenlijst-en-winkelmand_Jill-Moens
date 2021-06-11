import React from "react"

function ListItem(props) {
    return(
        <li onClick={props.handleClick} className="list-item">{props.title}</li>
    )
}

export default ListItem
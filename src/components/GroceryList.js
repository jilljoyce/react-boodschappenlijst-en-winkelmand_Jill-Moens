import React from "react"
import List from "./List"

function GroceryList(props) {
    return (
        <List groceryItems={props.groceryItems}/>
    )
}

export default GroceryList
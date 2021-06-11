import React from "react"
import GroceryList from "./GroceryList"
import ShoppingCart from "./ShoppingCart"

class Container extends React.Component {
    constructor(){
        super()
        this.state= {
            groceryItems: [
                {id: 1, title: "Appels"},
                {id: 2, title: "Melk"}
            ],
            shoppingListItems: [ 
                {id: 1, title: "banaan", amount: 1}
            ]
        }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
    }

    handleClickGroceryItem(){
        //
    }
    
    render(){
        return(
            <div>
                <ShoppingCart shoppingListItems= {this.state.shoppingListItems}/>
                <GroceryList groceryItems= {this.state.groceryItems}/>
            </div>
        )
    }
}

export default Container
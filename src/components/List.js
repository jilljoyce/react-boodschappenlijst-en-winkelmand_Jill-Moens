
import React, {Component} from "react"
import ListItem from "./ListItem"

class List extends Component {
    constructor(props){
        super(props)
        this.state= {}

        this.handleSubmit = this.handleSubmit.bind(this)
        //this.handleClick = this.handleClick.bind(this)
    }

    handleSubmit(event){
        this.setState((prevState) => {
            //const updatedGroceries = prevState.groceryItems.map( item => item )
                const updatedGroceries = [...prevState.groceryItems]
                const newId = prevState.groceryItems.length + 1
                const value = event.target.title.value
                const updatingObject = {id: newId, title: value}
                updatedGroceries.push(updatingObject)
                const newState =  {...prevState, groceryItems: updatedGroceries}
                return {
                    newState
                }
        })  
    }

    render(){
        let newArrayGrocery = this.props.groceryItems.map(item => <ListItem key={item.id} title={item.title}/>)
        return(
            <div className="list" >
                <h1>My groceries</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Vul product in" value={this.props.groceryItems.title} />
                    <button type="submit">Add</button>
                </form>
                {newArrayGrocery}
            </div>
        )
    }
}

export default List
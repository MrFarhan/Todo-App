import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: "",
            itemArr: []
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.addData = this.addData.bind(this);
        this.delete = this.delete.bind(this);
    }

    onChangeHandler(event) {
        var inputVal = event.target.value;
        this.setState({
            item: inputVal,
            
        })
    }

    addData() {
        var inputVal = this.state.item;
        var itemInstance = this.state.itemArr;
        itemInstance.push(inputVal);
        this.setState({
            itemArr: itemInstance,
            item:""
            
        })
        console.log(this.state.itemArr);
    }


    delete(event) {
        var id = event.target.id;
        var itemInstance = this.state.itemArr;
        itemInstance.splice(id, 1);
        this.setState({
            itemArr: itemInstance
        })
    }

    render() {
        var itemList = this.state.itemArr.map((e, i) =>
            <li key={i}>{e}<span onClick={this.delete} id={i}> X</span></li>
        )

        return (
            <div>
                <div className="header"><h1>TODO List App </h1></div>
                <div className="body">
                    <ul>
                        {itemList}
                    </ul>
                </div>
                <div className="footer">

                    <input type="text" value={this.state.item} onChange={this.onChangeHandler} />
                    <button onClick={this.addData}>Add</button>
                </div>


            </div>
        )
    }
}

export default Todo;

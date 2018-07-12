import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions.js'
import './style.css';

export  class AddTodo extends Component{
    constructor(props){
        super(props)
        this.state = {
            value:''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(ev){
        console.log("提交表单")
        ev.preventDefault()//取消表单的默认提交行为，默认会跳转界面
        const inputValue = this.state.value
        if(!inputValue.trim()){
            return;
        }
        this.props.onAdd(inputValue)
        this.setState({value:''})
    }
    onInputChange = (event) =>{
        this.setState({value:event.target.value})
    }
    render(){
        return(
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                <input  className="new-todo" onChange={this.onInputChange} value={this.state.value}/>
                <button  className="add-btn" type="submit">
                    添加
                </button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        onAdd:(text) =>{dispatch(addTodo(text)) }
    }
}

export default connect(null,mapDispatchToProps)(AddTodo);
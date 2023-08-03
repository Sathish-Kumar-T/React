import { Component } from "react";

class Form extends Component{
    initialState={
       name:"",
       job:""
    }
    state=this.initialState;

    handleChange=(event)=>{
      
        const {name,value}= event.target
        //name=sathish
        this.setState({[name]:[value]});
    }
    
    submitForm=()=>{
        let character = this.state
        this.props.handleSubmit(character)
        this.setState(this.initialState)
    }
    render(){
        return(
            <form>
                <label htmlFor="name"> Name</label>
                <input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}/>
                
                <label htmlFor="job">Job</label>
                <input
                type="text"
                name="job"
                id="job"
                value={this.state.job}
                onChange={this.handleChange}/>
                <input type="button" value="submit" onClick={this.submitForm}/>
            </form>
        )
    }
}

export default Form
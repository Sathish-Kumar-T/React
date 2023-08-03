import { Component } from "react"
import Table from "./table";
import Form from "./form";



class App extends Component {

  state={
    // creating ---characters:--- as a Property
    characters:  [ ] 
  }

  //arrow fnction
  removeCharacter=(index)=>{
    const {characters}=this.state
    //characters is array function so we can use filter__we use 'i' as a index because we used already 'index' as index.
    let filtered = characters.filter((char,i)=>{
      return i!==index
    })
    
    this.setState({characters:filtered})
  }
  
  handleSubmit=(character)=>{
    this.setState({characters:[...this.state.characters,character]})
  }

    render(){
     
      const {characters}=this.state
      return(
         <div className="App">

          <h1>Table</h1>
          < Table removeCharacter={this.removeCharacter} charData={characters} />
          <Form handleSubmit={this.handleSubmit}/>
         
    
         </div>
      )
    }
    }

    export default App;
const { Component } = require("react");

//Functional component (or) Simple component 
const TableHeader= ()=>{
    return(
    <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Action</th>
        </tr>
    </thead>
    )

}

const TableBody = (props)=>{
    const {characterData,removeChar}=props;
   const row = characterData.map((character,index)=>{
    return(<tr key={index}>
        <td>{character.name}</td>
        <td>{character.job}</td>
        <td><button onClick={()=>removeChar(index)}>Delete</button></td>
        </tr>)
   })
    return(
               <tbody>
             {row}
                </tbody>
    )
}

//Class Component
class Table extends Component{
    render(){
        // this.props.charData;---(or)---
        // Destructuring assignment---Introduced in--ES6---
        const {charData,removeCharacter}=this.props
        return(
            <table>
               <TableHeader/>
               <TableBody removeChar={removeCharacter}characterData={charData}/>
                
            </table>
            
        )
    }
}

export default Table;
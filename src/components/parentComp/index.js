import React from 'react';
import ChildComp1 from '../childComp1';

class Parent extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           value:'',           
           bgColor: 'red'         
       }
   }
   changeColor = (colorname) =>{
            
       this.setState({ bgColor:colorname === 'red' ? 'blue':'red' })
   } 
   render(){
      return(
         <div>
            <h1>Hello World</h1>
            <ChildComp1 color = {this.state.bgColor}  myData = {()=>this.changeColor(this.state.bgColor)}/>
            <h3>{this.state.bgColor}</h3>
         </div>
      );
   }
}
export default Parent;
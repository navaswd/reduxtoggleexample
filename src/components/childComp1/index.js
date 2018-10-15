import React from 'react';


class ChildComp1 extends React.Component {
    
    render() {
        const {color,myData} = this.props;        
       return (
          <div>
             <button style={{backgroundColor:color}} onClick = {myData} >CLICK</button>             
          </div>
       );
    }
 }
export default ChildComp1;
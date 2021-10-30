import React, { Component } from "react"


///Below code is one type of passing the props as <Counter login="" org=""/> to render on UI/////
// export default class Counter extends Component {

//     render(){

//         console.log(this.props)

//         return (
//             <>
//             <h1>LOVE YOU JESUS, Please promote the login id : {this.props.login} from the organisation {this.props.org}</h1>
//             <h2>{this.props.company.FirstCompany}</h2>
//             </>
//         )
//     }
// }

//we can even write as export default counter//


///Concept : States/// ///Another way of passing the values using the states concept to render on the UI////
//we have to initialise the states(simple JS object) within the constructor itself////

export default class Counter extends Component {

        constructor(){

              super();

           this.state={

                login:"mekalp",
                org:"Amazon",
                city:"Hyd",
                count:0,
                
            }
        }


        ////Main moto is to change the value from one of the property of state object////


   increment=()=>{

    ///syntax of changing the state value must happen with the help of setState() method///
    //syntax==> this.setState({property key (definition) which has to be changed: property value of the key which has to be changed})

    // this.setState({count:this.state.count + 1})//

    ///We can even write as below///

    this.setState((state)=>{

        return {count:state.count + 1}
 
     })

 }


 ////We can even write the code as below////

 decrement=()=>{


    // this.setState({count:this.state.count + 1})///

    //We can even write as below////

    this.setState((state)=>{

       return {count:state.count - 1}

    })
 }



 reset=()=>{

    // this.setState({count:0})//

    // We can even write as below

    this.setState((state)=>{

        return {count:state.count=0}
 
     })

 }

    render(){
        
       /////this.state.login="mekalapraveen" ///We can modify or override the values of states while in props we can't change the values.
       ////We cannot change state value directly, we need to use setState() method to change the state value////
        console.log(this.state)

        return (
            <>
             <h1>Hello {this.state.login} {this.state.org} {this.state.city}</h1>

             <div className="mekala">
             <h2>Lets make a simple counter application </h2>
             <br></br>
             <p>Counter- <input type="number" name="Name" value={this.state.count}/></p>
             <br></br>

             <div id="mekalp">

             <button onClick={this.increment}>Increment</button>
             <button onClick={this.decrement}>Decrement</button>
             <button onClick={this.reset}>Reset</button>

             </div>
             
             </div>

            </>
        )
    }
}

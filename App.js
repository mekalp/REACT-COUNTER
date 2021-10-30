import React, { Fragment } from "react"
import Counter from "./Class"



export default function App({name,age,desig,ranks,company}){

    // console.log(props)    ///Here props cannot be modified or overriden to a new different name. For example:--> props.name="mekalapraveenindia". props is just read-only from the JSX which we pass//////

    return (

        <Fragment>
        <h1>Yesaya save your child {name} {`who is of age ${age}`} {`working as a ${desig}`} ranked {ranks[0]} {`- ${ranks[3]}`} from the company {company.first}</h1>

        <Counter/>

       </Fragment>

        )

}


///We can even write as export default App for exporting///



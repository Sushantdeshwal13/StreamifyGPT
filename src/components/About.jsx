import React from "react";

class About extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name:"sushant",
            count:0
        }
    }
    
    render(){
        return(
            <>
            <h1>lets go for that <br></br>
                {this.state.count}
            </h1>
            <button onClick={()=>
             this.setState({count:this.state.count +1})}>submit</button>
            </>
        )
    }
}

export default About;
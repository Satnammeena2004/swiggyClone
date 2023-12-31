
import React from "react";
//WE DO NOT MUTATE DIRECTLY

//Initialy LIFE CYCLE OF CLASS BASED COMPONENT
//   constructor 
//   render /
//   componentDidMount // is Like useEffect called after a render

// if staet change then 
//  render only called

class Profile extends React.Component {
  // render is mandatory in class based component
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child-constructor "+this.props.name);
    
}

componentDidMount(){
    console.log("Child-componentDidMount "+this.props.name);
    // this.setState({
    //     count:10000
    // })
}

  
  render() {
      console.log("Child-Render "+this.props.name)
      return (
      <>
        <h1>Profile -:Class Component {Math.round(Math.random()*10)}</h1>
        <h2>Name :{this.props.name}t</h2>
        <h3>Count : {this.state.count}  </h3>
        <button
          onClick={() => {
            this.render();
        
          }}
        >
          render()
        </button>
        <button
          onClick={() => {
           this.setState({
            count:1
           })
          }}
        >
          setState()
        </button>
      </>
    );
  }
}






export default Profile;

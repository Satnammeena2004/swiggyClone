
import React from "react";

//WE DO NOT MUTATE DIRECTLY




class Profile extends React.Component {
  // render is mandatory in class based component
  constructor(props) {
    super(props);
   this.state ={
    responce :{
      name:"",
      email: "",
      avatar_url:''


    }
   }
    console.log("Child-constructor "+this.props.name);
    
}

  componentDidMount(){

  //  const res =await fetch("https://api.github.com/users/akshaymarch7")
  //  const profile = await res.json();
  //  this.setState({
  //    responce:profile
  //   })
  //   console.log(profile)
  // this.timer = setInterval(() => {
  //   console.log("Again!!!!!!!!");
  // }, 1000);

  console.log("Child-componentDidMount "+this.props.name);
  
}

componentDidUpdate(){
  console.log("componentDidUpdate")
}

componentWillUnmount(){
  console.log("componentWillUnmount")
  // clearInterval(this.timer);
}

  
  render() {
      console.log("Child-Render "+this.props.name)
      return (
      <>
        <h1>Profile -:Class Component </h1>
        <h2>Name :{this.props.name}t</h2>
        <h1>{this.state.responce.name}</h1>
        <img src={this.state.responce.avatar_url} alt="..."/>
        <h1>{this.state.responce.login}</h1>
        <h1>{this.state.responce?.location}</h1>
  
       
      </>
    );
  }
}







export default Profile;

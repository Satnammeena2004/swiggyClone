import {Outlet, useParams} from "react-router-dom";
import ClassProfile from "../ClassComponent/ProfileClass";
import React, {Component, useEffect, useState, memo} from "react";
import UserContext from "../utils/UserContext";

function Company() {
  const {compId} = useParams();
  return (
    <h1>
      About Company {compId} <Outlet />{" "}
    </h1>
  );
}

// class Parent extends React.Component{
//   constructor(props){
//     super(props)
//     console.log("Constructor,Parent")
//     this.state={
//       count:0,
//       count2:2,
//     }
//   // console.log(this)
//   }

//   componentDidMount(){
//     console.log("componentDidMount-Parent")

//   }

//   componentDidUpdate(){
//     console.log("componentDidUpdate-Parent")
//   }
//   componentWillUnmount(){
//     console.log("componentWillUnmount-Parent")
//   }

//   render(){
//     console.log("Parent Rendering-Parent")
//     return (
//       <>
//       <h1 onClick={()=>this.setState({count:1})}>Parent :{this.state.count},{this.state.count2}</h1>
//       <Child name="Child-1"/>
//       <Child name="Child-2"/>
//       </>
//     )
//   }
// }

// class Child extends React.Component{

//   constructor(props){
//     super(props);
//     console.log("Constructor",this.props.name)
//     // console.log("Child",props);
//     this.state = {
//       child_count:10
//     }

//   }

// componentDidMount(){
//   console.log("componentDidMount -",this.props.name)
// }
// componentDidUpdate(){
//   console.log("componentDidUpdate -",this.props.name)
// }
// componentWillUnmount(){
//   console.log("componentWillUnmount -",this.props.name)
// }

//   render(){
//     console.log("Rendering",this.props.name)
//     return(
//       <h2 onClick={()=>this.setState({child_count:1000})}>Rendering {this.props.name},  {this.state.child_count} </h2>
//     )
//   }
// }

function Parent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("after Rendring,Effect");
  }, []);

  console.log("Parent-Rendering");

  return (
    <>
      <h1 onClick={() => setCount(10)}>Functional Parent :{count}</h1>

      <Child name={"child-1"} />
      <Child name={"child-2"} />
    </>
  );
}

const Child = memo(function Child({name}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("after Rendring,Effect,", name);
  }, [name]);

  console.log("Rendering", name);

  return (
    <h1
      onClick={() => {
        setCount(10);
      }}
    >
      Functional {name} :{count}
    </h1>
  );
});

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent - constructor");
  }

  componentDidMount() {
    console.log("parent - componentDidMount");
  }

  render() {
    console.log("parent - render");

    return (
      <>
        <h1>This is Our About Section count</h1>
        <h2>And using Brouser Router</h2>
        <UserContext.Consumer>
        {({user})=><span className="font-bold font-[Kalnia]">{user.name+'-'+user.email}</span>}
        </UserContext.Consumer>
        <ClassProfile name="child 1 " />
        <Outlet/>
      </>
    );
  }
}

function MySelf(){


  return (
    <h1>Myself</h1>
  )
}

export {About, Company,MySelf, Parent};

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

// const Child = memo(function Child({name}) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("after Rendring,Effect,", name);
//   }, [name]);

//   console.log("Rendering", name);

//   return (
//     <h1
//       onClick={() => {
//         setCount(10);
//       }}
//     >
//       Functional {name} :{count}
//     </h1>
//   );
// });

export function FuntionalComp2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect");
  }, []);
  console.log("Funtional Renders");

  return (
    <div className="border bg-yellow-500">
      <h1>Funtional componenet</h1>
      <h3>count:{count}</h3>
      <button
        className="bg-blue-300 p-2 m-2 border"
        onClick={() => setCount(count + 1)}
      >
        Count+1
      </button>
    </div>
  );
}

export function FuntionalComp() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log("useEffect",count)

  }, [count]); 
  console.log("Funtional Renders",count);
 
  return (
    <div className="border bg-yellow-500">
      <h1>Funtional componenet</h1>
      <h3>count:{count}</h3>
      <button
        className="bg-blue-300 p-2 m-2 border"
        onClick={() => {setCount(count + 1);setCount2(1);console.log("onClick",count,count2)}}
      >
        Count+1
      </button>
    </div>
  );
}


class Child extends React.Component{

  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    console.log(`\t${this.props.name}-constructor`)
    this.state={
      count:1
    }
  }

async componentDidMount(){
  console.log(`\t${this.props.name}-componentDidMount`);
  this.setState({
    count:10
  })
}

componentDidUpdate(){
  console.log(`\t${this.props.name}-componentDisUpdate`);
}

componentWillUnmount(){
  console.log(`\t${this.props.name}-componentWillUnmount`);

}


  render(){
    console.log(`\t${this.props.name}-render`)
    return(
      <>
      <h2>Rendering Child</h2>
      <button className="border bg-slate-500">{this.state.count}</button>
      </>
    )
  }
}



class About extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      count2: 2,
    };
    console.log("Parent - Constructor");
  }

  componentDidMount() {
    console.log("Parent - componentDidMount");
   
    
  }
  componentDidUpdate(){
    console.log("Parent - componenetDidUpdate");
  }
  componentWillUnmount(){
    console.log("Parent - componentWillUnmounte");
  }

  render() {
    console.log("Parent- render");
    return (
      <>
        <div className="p-2 border bg-amber-200">
          <h1>I am a Class based component</h1>
          <h2>name:{this.props.name}</h2>
          <h3>count :{this.state.count} </h3>
          <h3>count :{this.state.count2}</h3>
          <button
            className="bg-blue-300 p-2 m-2 border"
            onClick={() => this.setState({count: 2})}
          >
            count1
          </button>
          <button
            className="bg-blue-300 p-2 m-2 border"
            onClick={() => this.setState({count2: 4})}
          >
            count2
          </button>
          <Child  name="Child 1"/>
          <Child  name="Child 2"/>
        </div>
      </>
    );
  }
}

// class About extends Component {
//   constructor(props) {
//     super(props);
//     console.log("parent - constructor");
//   }

//   componentDidMount() {
//     console.log("parent - componentDidMount");
//   }

//   render() {
//     console.log("parent - render");

//     return (
//       <>
//         <h1>This is Our About Section count</h1>
//         <h2>And using Brouser Router</h2>
//         <UserContext.Consumer>
//         {({user})=><span className="font-bold font-[Kalnia]">{user.name+'-'+user.email}</span>}
//         </UserContext.Consumer>
//         <ClassProfile name="child 1 " />
//         <Outlet/>
//       </>
//     );
//   }
// }

function MySelf() {
  return <h1>Myself</h1>;
}

export {About, Company, MySelf, Parent};

import {Outlet,useParams} from 'react-router-dom'
import ClassProfile from '../ClassComponent/ProfileClass'
import FunctionlProfile from '../components/Profile'
import { Component } from 'react'


function Company(){
   const {compId} = useParams()
    return <h1>About Company {compId} <Outlet/> </h1>
  }



class About extends Component{

  constructor(props){
       super(props)
    console.log("parent - constructor")
    this.state={
      count:0
    }

   
  
  }


  componentDidMount(){
    console.log("parent - componentDidMount")
   

  }

  render(){
    console.log("parent - render")

    return(
      <>
      
      <h1>This is Our About Section count :{this.state.count}</h1>
      <h2>And using Brouser Router</h2>
      <ClassProfile  name="child 1 "/>
      <ClassProfile  name="child 2 "/>
    
      </>
  )
  }

}


export { About,Company};
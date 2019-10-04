import React from 'react'
import Axios from 'axios'
import { Card, Col, Row } from 'antd';
import {Link} from 'react-router-dom'

 const baseURL = process.env.NODE_ENV === 'production'
  ? 'here should be your production endpoint'
  :  'http://localhost:3000/api'

class Plans extends React.Component{
state ={
  plans:[],
  user:{}
}

componentDidMount(){
  console.log('mounting')
  //if (!this.state.user.loggedUser) return this.props.history.push('/login');
  Axios.get(`${baseURL}/plans`)
  .then ((res)=>{
    console.log(res.data)
    this.setState({
      plans: res.data.plans
    })
    console.log(this.state)
  })
  .catch((err)=>{
    console.log(err)
  })
}

cardPlan = () => {
const {plans} = this.state
return plans.map((plan, key)=>{
return(
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Link to={`/places/${plan._id}`}>
    <Card  bordered={false} style={{ width: 300 }}>
      <h1>{plan.name}</h1>
      <p>{plan.price}</p>
      <p>{plan.role}</p>
      <p>{plan.description}</p>
      <img src={plan.image} alt=""/>
    </Card>
    </Link>
  </div>
)
})
}


render(){
  return(
    <div>
<h1>plans</h1>
{this.cardPlan()}
    </div>
  )
}


}
export default Plans
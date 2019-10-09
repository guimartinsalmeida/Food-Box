import React from 'react'
import Axios from 'axios'
import { Form, DatePicker, TimePicker, Card } from 'antd';
import 'antd/dist/antd.css'
import DATE_SERVICE, { pedidoService } from '../../services/post-date'



const baseURL = process.env.NODE_ENV === 'production'
  ? 'here should be your production endpoint'
  :  'http://localhost:3000/api'

  class Pedido extends React.Component{
    state ={
      pedido:{
        fecha:'',
        hora:''
      },
      unplan:{},
      user:{}
    }
    handleInput = e => {
      const { user } = this.state
      const key = e.target.name
      user[key] = e.target.value
      this.setState({ user })
      console.log(this.state.user)
      console.log(e.target.name)
    }
  
    onSubmit = e => {
      e.preventDefault()
      let{user} = this.state
      console.log('onsubmit', user)
      pedidoService(user)
      .then(res => console.log('la respuesta en onsubment', res))

      .catch(err => console.log('el error en onsubmit', err))
    }

     // DATE_SERVICE.postdate(this.state.user)
       // .then(response => {
         // this.props.history.push('/createPedido')
        //})
        //.catch(error => {
          //console.log(error)
        //})
    //}
    componentDidMount() {
      Axios.get(`${baseURL}/selectedPlan/${this.props.match.params.id}`)
        .then(({ data }) => {
          this.setState({
            unplan: data.plan
          })
        })
        .catch(err => {
          console.log(err)
        })
    
    }

        
          render() {
            const { unplan } = this.state
    if (!unplan) return <p>Loading data...</p>
    //this.props.match.params.id
            return (
              <div style={{ display: 'flex', marginTop: '3vw', justifyContent: 'space-around' }}>
        <Card style={{ width: 300 }}>
          <h1>{unplan.name}</h1>
          <p>{unplan.price}</p>
          <p>{unplan.role}</p>
          <p>{unplan.description}</p>
          <img src={unplan.image} alt="" />
        </Card>
        <p>{unplan.name}</p>
              <Form onSubmit={this.onSubmit}>
              <Form.Item onChange={this.handleInput} name="fecha" label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item onChange={this.handleInput} name="hora" label="TimePicker">
        <TimePicker />
      </Form.Item>
      </Form>
      </div>
            );
          }
        }
      
     export default Pedido
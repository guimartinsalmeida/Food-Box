import React from 'react'
import Axios from 'axios'
import { Form, DatePicker, TimePicker, Button, Card } from 'antd';
import 'antd/dist/antd.css'
const { MonthPicker, RangePicker } = DatePicker;

const baseURL = process.env.NODE_ENV === 'production'
  ? 'here should be your production endpoint'
  :  'http://localhost:3000/api'

  class Pedido extends React.Component{
    state ={
      places:{},
      unplan:{}
    }
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
              
              <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="TimePicker">
        <TimePicker />
      </Form.Item>
      </div>
            );
          }
        }
      
     export default Pedido
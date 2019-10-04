import React from 'react'
import Axios from 'axios'
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd'
import 'antd/dist/antd.css'

const baseURL =
  process.env.NODE_ENV === 'production' ? 'here should be your production endpoint' : 'http://localhost:3000/api'

class Place extends React.Component {
  state = {
    unplan: {},
    user:{}
  }

  componentDidMount() {
    if (!this.state.user.loggedUser) return this.props.history.push('/login');
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
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Address name" />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Put your address here"
            />
          </Form.Item>
        </Form>
        <a href={`/pedidoCreate/${unplan._id}`}>
          <button>Add</button>
        </a>
      </div>
    )
  }
}

export default Place

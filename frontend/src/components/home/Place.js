import React from 'react'
import Axios from 'axios'
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd'
import { Layout, Menu, Breadcrumb } from 'antd'
import 'antd/dist/antd.css'
import PLACE_SERVICE, { placeService } from '../../services/post-place'
import { MyContext } from '../../context'
const { Header, Content, Footer } = Layout

const baseURL =
  process.env.NODE_ENV === 'production' ? 'here should be your production endpoint' : 'http://localhost:3000/api'

class Place extends React.Component {
  state = {
    unplan: {},
    user: {},
    places: {
      name: '',
      address: ''
    }
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
    let { user } = this.state
    console.log('onsubmit', user)
    placeService(user)
      .then(res => console.log('la respuesta en onsubment', res))
      
      .catch(err => console.log('el error en onsubmit', err))
  }



  componentDidMount() {
    if (!localStorage.getItem('user')) return this.props.history.push('/login')
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


 // table = () => {
   // return (this.state.places.map((x) => {
      
     //   return(
       //     <tr key={x.place}>
         //       <th>{x.place}</th>
           //     <td>{x.name}</td>
             //   <td>{x.address}</td>
        //    </tr>
        //)
   // }))
  //}

  //placeTransform = async() => {
    //const response = await PLACE_SERVICE.placeService(this.state.place._id)
    //const arrayplaces = response.data.places
    //this.setState({place: arrayplaces})
//}


  render() {
    const { unplan } = this.state
    if (!unplan) return <p>Loading data...</p>
    //this.props.match.params.id
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
              <Card style={{ width: 300 }}>
                <h1>{unplan.name}</h1>
                <p>{unplan.price}</p>
                <p>{unplan.role}</p>
                <p>{unplan.description}</p>
                <img src={unplan.image} alt="" />
              </Card>
              
              
              <p>{unplan.name}</p>
              <Form onSubmit={this.onSubmit} className="login-form">
                <Form.Item>
                
                  <Input
                    onChange={this.handleInput}
                    name="name"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Address name"
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    onChange={this.handleInput}
                    name="address"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Put your address here"
                  />
                  <Form.Item>
                    <Input type="submit" value="Submit" />
                  </Form.Item>
                </Form.Item>
              </Form>
              <a href={`/pedidoCreate/${unplan._id}`}>
                <button>Add</button>
              </a>
            </div>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default Place

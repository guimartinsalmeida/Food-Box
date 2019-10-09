import React from 'react'
import Axios from 'axios'
import { Form, Icon, Input, Card } from 'antd'
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import 'antd/dist/antd.css'
import PLACE_SERVICE, { placeService } from '../../services/post-place'
import AUTH_SERVICE from '../../services'
const { Header, Content } = Layout

const baseURL =
  process.env.NODE_ENV === 'production' ? 'here should be your production endpoint' : 'http://localhost:3000/api'

class Place extends React.Component {
  state = {
    unplan: {},
    user: {},
    places: [],
    lugar: undefined
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

    Axios.get(`${baseURL}/places/`)
      .then(res => {
        let { places } = this.state
        console.log('resasss',res)
        this.setState({ places: res.data.place })
        //console.log('este es el que quiere ver emiliano', res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  handleInput = e => {
    const { user } = this.state
    const key = e.target.name
    user[key] = e.target.value
    this.setState({ user })
    console.log(this.state.user)
    console.log(e.target.name)
  }


  onDelete = async (id, index) => {
    let{places} = this.state
    await PLACE_SERVICE.onDelete(id)
    places.splice(index, 1);
    this.setState({places})
  }
  

  onLogout = async () => {
    await AUTH_SERVICE.logOut()
    localStorage.clear()
    this.props.history.push('/login')
  }

  onSubmit = e => {
    e.preventDefault()
    Axios.get(`${baseURL}/places/${this.state.places.id}`) //
      .then(({ data }) => {
        //
        console.log('2222222222222222222222', data)
        this.setState({
          //
          lugares: data.place,
          lugar: (
            <Card>
              <p>{'kjscbkja'}</p>
              <p>{'kajcbikjbc'}</p>
            </Card>
          )
        }) //
      }) //
      .catch(err => {
        //
        console.log(err) //
      }) //

    let { user } = this.state
    console.log('onsubmit', user)
    placeService(user)
      .then(res => {
        let {places} = this.state
        places.push(res.place)
        console.log('.......', res)
        this.setState({
        places
        })
      })

      .catch(err => console.log('el error en onsubmit', err))
  }

  cardPlace = () => {
    const { places } = this.state
    console.log('este es el id ', places[0])
 
    console.log(places)
  }

  render() {
    const { unplan } = this.state
    const { places } = this.state
    console.log(this.state)
    if (!unplan) return <p>Loading data...</p>
    //this.props.match.params.id
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} >
           
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
              <Menu.Item key="3" onClick={this.onLogout}>
               
                Log out
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Put your address to receive your food plan</Breadcrumb.Item>
            </Breadcrumb>
            <div>
              <div
                style={{
                  background: '#fff',
                  padding: 24,
                  minHeight: 380,
                  display: 'flex',
                  justifyContent: 'space-around'
                }}
              >
                <Card style={{ width: 300, height: '400px', backgroundPosition:'center', color:'white', backgroundImage: `url(${unplan.image})` }}>
                  <div className='plan-place'>
                    <div style={{fontSize:"20px"}}>
                  <p>{unplan.name}</p>
                  <p>
                    Price:<br></br>
                    {unplan.price}
                  </p>
                  <p>
                    Tipo:<br></br>
                    {unplan.role}
                  </p>
                  <p>{unplan.description}</p>
                    </div>
                  </div>
                </Card>
                <div>{this.state.lugar}</div>
                <div>
                {places.length ? 
                    places.map((place, i) => 
                      <div key={i} style={{ background: '#ECECEC', padding: '30px' }}>
                        <Card bordered={false} style={{ width: 300 }}>
                          <h1>{place.name}</h1>
                          <p>{place.address}</p>
                          <button type="delete" id={place.id} key="delete" onClick={() => this.onDelete(place._id, i)}>
                            delete
                          </button>
                          <Link to={`/edit/${place._id}`}>  <button type="edit" id={place.id} key="edit">
                          Edit 
                          </button> </Link>
                        </Card>
                      </div>
                    )
                   : 
                    <div>
                      <span>no hay nada mijo</span>
                    </div>
                }
                </div>
              </div>

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
              <Link to={`/pedidoCreate/${unplan._id}`}>
                <button>Add</button>
              </Link>
            </div>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default Place

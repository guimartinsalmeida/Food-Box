import React from 'react'
import Axios from 'axios'
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb } from 'antd';

const baseURL = process.env.NODE_ENV === 'production'
  ? 'here should be your production endpoint'
  :  'http://localhost:3000/api'

  class NavBar extends React.Component {

    state={
      privateInfo: {},
      authorized: false
    }
  
    componentDidMount() {
      this.getPrivateData()
    }
  
    getPrivateData = () => {
      axios.get(`${url}/profile`, { withCredentials: true })
          .then(res => {
            console.log(res)
            this.setState({ privateInfo: res.data, authorized: true })
          })
          .catch(e => {
            console.log(e)
           
          })
    }
  
    logOut = () =>{
        console.log(this.props)
        axios.get(`${url}/logout`, { withCredentials: true })
          .then(res => {
            console.log(res)
           this.props.history.push('/')
          })
          .catch(e=>console.log(e))
    }


    render(){
      if(!this.state.authorized) {
      return(
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
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
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
      )
    } else {
      return(
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
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
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>,
        )
    }
    
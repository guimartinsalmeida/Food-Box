import React, { Component } from 'react'
import PLACE_SERVICE from '../../services/post-place'
import { Form, Icon, Input, Card } from 'antd'
import 'antd/dist/antd.css'

export default class Edit extends Component {
  state = {
    place: {}
  };

  componentDidMount (){
    this.setState({place: this.state.place})
    console.log(this.state)
  }

  handleInput = (e) => {
    const { place } = this.state;
 
    if (e.target.files) place.img = e.target.files[0]
    else {
    const key = e.target.name;
    place[key] = e.target.value;
  }
    this.setState({ place });
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<',this.state.place)
  };

  onSubmit = (e) => {
    e.preventDefault()
  
   
   
    const fd = new FormData()
    for (const key in this.state.place){fd.append(key, this.state.place[key])
  
      PLACE_SERVICE.onEdit(this.props.match.params.id,fd)
      
        .then(res => {
         
          this.props.history.push(`/plans`)
        })
        .catch(e => console.log(e));
   
  }
  }


  render() {
const {place} = this.state
console.log('<<<<<<<<', this.state)
    return (
      <div>
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
      </div>
    )
  }
}

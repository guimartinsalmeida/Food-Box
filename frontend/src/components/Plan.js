import React from 'react'
import Axios from 'axios'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import '../index.css'

const baseURL = process.env.NODE_ENV === 'production' ? 'aqui va lo de production' : 'http://localhost:3000/api'

class Plans extends React.Component {
  state = {
    plans: [],
    user: {}
  }

  componentDidMount() {
    Axios.get(`${baseURL}/plans`)
      .then(res => {
        this.setState({
          plans: res.data.plans
        })
      })
      .catch(err => {console.log(err)})
  }

  cardPlan = () => {
    const { plans } = this.state
    return plans.map((plan, key) => {
      return (
        <div key={key} style={{ background: '#ECECEC', padding: '30px' }}>
          <Link
            onClick={() => {
              localStorage.setItem('plan', JSON.stringify(plan._id))
            }}
            to={`/places/${plan._id}`}
          >
            <Card
              className="plan"
              bordered={false}
              style={{
                width: 300,
                backgroundImage: `url(${plan.image})`,
                height: '400px',
                fontSize: '20px',
                backgroundPosition: 'center',
                color: 'white'
              }}
            >
              <p>{plan.name}</p>
              <p>
                Precio:<br></br>
                {plan.price}
              </p>
              <p>
                Tipo:<br></br>
                {plan.role}
              </p>
              <p>{plan.description}</p>
            </Card>
          </Link>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="plans">
        <h1>planes</h1>
        <div className="planes">{this.cardPlan()}</div>
      </div>
    )
  }
}
export default Plans

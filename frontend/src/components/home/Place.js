import React from 'react'

const baseURL = process.env.NODE_ENV === 'production'
  ? 'here should be your production endpoint'
  :  'http://localhost:3000'

class Places extends React.Component{
  state ={
    places:[]
  }

import React, { Component } from 'react'

export default class CardDapur extends Component {
  render() {
    return (
      <div style={{
        width: '135px',
        marginRight: '25px',
        display: 'inline-block',
        borderRadius: '10px',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '135px', textAlign: 'center', overflow: 'hidden', }}>

          <img src={this.props.data.image} style={{ width: '120px', height: '120px', borderRadius: '80px' }} alt="icon"/>
          <b style={{
            fontSize: '20px', marginTop: '15px', whiteSpace: 'normal'
          }}>{this.props.data.name}</b>
        </div>
      </div>
    )
  }
}

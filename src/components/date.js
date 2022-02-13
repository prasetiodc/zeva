import React, { Component } from 'react';

export default class date extends Component {
  _handleChangeDate = () => {
    this.props._handleChangeDate(this.props.date)
  }
  render() {
    return <div style={{
      width: '14%',
      height: 40,
      display: 'flex',
      justifyContent: 'center',
      // alignItems: 'center'
    }}>
      <p
        style={{
          cursor: 'pointer',
          backgroundColor: this.props.date === this.props.dateSelected ? '#ff6100' : null,
          color: this.props.date === this.props.dateSelected ? '#ffffff' : null,
          width: '35px',
          height: '35px',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onClick={() => this.props._handleChangeDate(this.props.date)}
      >{this.props.date}</p>
    </div >;
  }
}

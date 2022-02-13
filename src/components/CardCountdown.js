import React, { Component } from 'react';
import { Grid } from '@mui/material';

import './style.css';

export default class CardCountdown extends Component {
  render() {
    return (
      <Grid container style={{
        backgroundColor: '#ffffff',
        borderRadius: '15px',
        width: '100%',
        marginBottom: '10px',
        display: 'flex',
        padding: '15px'
      }}>
        <Grid item xs={4} style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
          <img src={this.props.data.image} alt={"image-menu-countdown" + this.props.data.image} style={{ width: "120px", height: "120px", borderRadius: '10px' }} />
          {
            this.props.data.discount && <div style={{ position: 'absolute', top: 0, left: 0, color: 'white', backgroundColor: '#6058ff', padding: '5px 8px', borderBottomRightRadius: 10 }}>
              <b style={{ fontSize: 14 }}>-{this.props.data.discount}%</b>
            </div>
          }

        </Grid>

        <Grid item xs={8} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <b style={{ fontSize: '18px' }}>{this.props.data.name}</b>
            <div style={{ display: 'flex', flexDirection: 'column', width: 90, alignItems: 'flex-end' }}>
              {
                this.props.data.newPrice && <b style={{ fontSize: '17px', color: '#ff6100' }}>{this.props.data.newPrice}</b>
              }
              <b style={{ fontSize: '17px', textDecorationLine: this.props.data.newPrice ? 'line-through' : 'none', color: this.props.data.newPrice ? 'gray' : 'black' }}>{this.props.data.price}</b>

            </div>
          </div>

          <div>
            <p style={{ fontSize: 15 }}>Tanggal Kirim {this.props.data.deadline}</p>
            <div className='containerProgressbar'>
              <div className="progressOrange" >
                <b>Tersedia {this.props.data.available} Porsi</b>
              </div>
              <div className="progressGray" style={{
                clipPath: `inset(0 0 0 ${((this.props.data.total - this.props.data.available) / this.props.data.total) * 100}%)`,
              }}>
                <b>Tersedia {this.props.data.available} Porsi</b>
              </div>

            </div>
          </div>
        </Grid>
      </Grid>
    )
  }
}

import React, { Component } from 'react'

import ImgStar from '../assets/Dashboard/star.png';

export default class CardMenu extends Component {
  render() {
    return (
      <div style={{
        marginRight: '30px',
        display: 'inline-block',
        position: 'relative',
        borderRadius: '10px',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', height: '170px' }}>
          {
            this.props.data.isPromo && <div style={{
              position: 'absolute',
              top: 0,
              left: 20,
              backgroundColor: '#6058ff',
              padding: '5px 20px',
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
            }}>
              <p>Promo</p>
            </div>
          }

          <img
            src={this.props.data.image} style={{
              width: '170px',
              height: '170px',
              borderRadius: '10px'
            }} alt={"image-menu" + this.props.data.image} />

          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            padding: '10px 10px',
            backgroundColor: 'rgba(0,0,0,0.4)',
            width: '100%'
          }}>
            {
              this.props.status !== 3
                ? <>
                  <b style={{ fontSize: 15 }}>{this.props.data.name}</b>
                  {
                    this.props.status === 1 && <p style={{ fontSize: 15 }}>{this.props.data.price}</p>
                  }
                </>
                : <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 30 }}>
                  <img src={ImgStar} style={{ width: 20, height: 20 }} alt="star" />
                  <p>{this.props.data.rating}</p>
                </div>
            }
          </div>
        </div>
        {
          this.props.status === 3 && <div style={{ backgroundColor: '#ffffff', padding: '10px' }}>
            <b style={{ color: 'black', fontSize: '15px' }}>{this.props.data.name}</b>
            {
              this.props.data.discount ? <div className='flex'>
                <p style={{ color: 'gray', marginRight: '5px', textDecorationLine: 'line-through', fontSize:15 }}>{this.props.data.price}</p>
                <b style={{ color: 'black', fontSize:15 }}>{this.props.data.discount}</b>
              </div>
                : <p style={{ color: 'black', fontSize:15 }}>{this.props.data.price}</p>
        }

      </div>
        }

      </div>
    )
  }
}

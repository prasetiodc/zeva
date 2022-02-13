import React from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import Map from '../../components/maps';

import './style.css';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className='mainSearchAlamat' >
      <div style={{ width: '100%', height: '500px' }}>
        <Map
          googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>

      <div>
        <div className='bottomAlamat'>
          <div style={{ textAlign: 'center', width: '100%', marginBottom: 15, fontSize: 17 }}>
            <b >Pilih Alamat di Peta</b>
          </div>

          <p>Jl. Palagan Timur III, Blok Permata 1, No. 17</p>
          <p>RT 11 / RW 20</p>
          <p>Kota Bintaro, Kabupaten Duri Asem, Kecamatan Rusa, Satuduwatiga, 12345, Banten Timur</p>

        </div>
        <div className='bottomArea' style={{ marginTop: -20 }}>
          <KeyboardBackspaceIcon style={{ width: 40, height: 40, cursor: 'pointer' }} onClick={() => navigate(-1, { state: {} })} />
          <Button variant='contained' style={{ backgroundColor: '#ff6100' }} onClick={() => navigate(-1)}>
            konfirmasi
          </Button>
        </div>
      </div>

    </div >
  )
}

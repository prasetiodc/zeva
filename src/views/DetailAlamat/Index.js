import React, { useState } from 'react'
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import Map from '../../components/maps';

import './style.css';

export default function Index() {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    catatan: '',
    namaLokasi: '',
    namaPenerima: '',
    phone: ''
  });

  return (
    <div className='main'>
      <div className='header'>
        <b style={{ fontSize: '20px' }}>Detail Alamat</b>
      </div>

      <div style={{ height: 230, backgroundColor: 'red', zIndex: 5 }} >
        <Map
          googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
          loadingElement={<div style={{ height: '100%', zIndex: 5 }} />}
          containerElement={<div style={{ height: '100%', zIndex: 5 }} />}
          mapElement={<div style={{ height: '100%', zIndex: 5 }} />}
        />
      </div>

      <div className='container'>
        <div className='blockWhite' style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <b>Alamat Tujuan</b>
          <b style={{ color: 'blue', cursor: 'pointer' }} onClick={() => navigate('/search-alamat')}>Ubah</b>
        </div>

        <div>
          <b>Jl. Palagan Timur III</b>
          <p>Jl. Palagan Timur III, Blok Permata 1, No. 17</p>
          <p>RT 11 / RW 20</p>
          <p>Kota Bintaro, Kabupaten Duri Asem, Kecamatan Rusa, Satuduwatiga, 12345, Banten Timur</p>
        </div>

        <div style={{ marginTop: 20 }}>
          <p style={{ marginBottom: 5 }}>Catatan untuk Kurir (opsional)</p>
          <div className='blockWhiteInput'>
            <TextField
              value={input.catatan}
              onChange={(e) => e.target.value.length <= 160 && setInput({ ...input, catatan: e.target.value })}
              style={{ width: '100%' }}
              variant="standard"
              InputProps={{ disableUnderline: true }}
              placeholder='Contoh: Pagar oranye, pencet bel saja, thx' />
          </div>
          <p style={{ textAlign: 'right', color: 'gray', marginTop: 5, marginRight: 20 }}>{input.catatan.length}/160</p>
        </div>

        <div style={{ marginTop: 20 }}>
          <p style={{ marginBottom: 5 }}>Nama Lokasi</p>
          <div className='blockWhiteInput'>
            <TextField
              value={input.namaLokasi}
              onChange={(e) => e.target.value.length <= 10 && setInput({ ...input, namaLokasi: e.target.value })}
              style={{ width: '100%' }}
              variant="standard"
              InputProps={{ disableUnderline: true }}
              placeholder='Contoh: Rumah/Kantor/Toko' />
          </div>
          <p style={{ textAlign: 'right', color: 'gray', marginTop: 5, marginRight: 20 }}>{input.namaLokasi.length}/10</p>
        </div>

        <div style={{ marginTop: 20 }}>
          <p style={{ marginBottom: 5 }}>Nama Penerima</p>
          <div className='blockWhiteInput'>
            <TextField
              value={input.namaPenerima}
              onChange={(e) => setInput({ ...input, namaPenerima: e.target.value })}
              style={{ width: '100%' }}
              variant="standard"
              InputProps={{ disableUnderline: true }}
              placeholder='Contoh: Maya' />
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <p style={{ marginBottom: 5 }}>Nomor HP</p>
          <div className='blockWhiteInput'>
            <TextField
              value={input.phone}
              onChange={(e) => setInput({ ...input, phone: e.target.value })}
              style={{ width: '100%' }}
              variant="standard"
              InputProps={{ disableUnderline: true }}
              placeholder='Contoh: 08123456789' />
          </div>
        </div>

      </div>



      <div className='bottomArea'>
        <KeyboardBackspaceIcon style={{ width: 40, height: 40, cursor: 'pointer' }} onClick={() => navigate(-1, { state: { status: 0 } })} />
        <Button variant='contained' style={{ backgroundColor: '#ff6100' }} onClick={() => navigate('/akun', { state: { status: 1 } })}>
          Simpan
        </Button>
      </div>
    </div>
  )
}

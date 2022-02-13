import React, { useState } from 'react';
import { Button, Checkbox, MenuItem, Select, TextField, Chip } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import ImgArrow from '../../assets/Dashboard/arrow-right.png'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import ModalSuccess from '../../components/modal/ModalSuccess';

import './style.css';

export default function Index() {
  let navigate = useNavigate();
  const location = useLocation();

  const [checked, setChecked] = useState(false)
  const [input, setInput] = useState({
    name: '',
    email: '',
    phone: '',
    gender: 'Male',
  });
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => setOpenModal(false)

  return (
    <div className='main'>
      <div className='header'>
        <b style={{ fontSize: '20px' }}>Daftar</b>
      </div>

      <div className='containerAkun'>
        <div>
          <div className="row" style={{ marginTop: '15px' }}>
            <b style={{ fontSize: '18px' }}>Data Pribadi</b>
          </div>
          <div className="row">
            <p style={{ width: '30%' }}>Nama</p>
            <TextField
              style={{ width: '100%' }}
              placeholder='Nama lengkap' variant="standard"
              InputProps={{ disableUnderline: true }}
              inputProps={{ min: 0, style: { textAlign: 'right' } }}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              value={input.name}
            />
          </div>
          <div className="row">
            <p style={{ width: '30%' }}>Email</p>
            <TextField
              style={{ width: '100%' }}
              placeholder='Alamat email' variant="standard"
              InputProps={{ disableUnderline: true }}
              inputProps={{ min: 0, style: { textAlign: 'right' } }}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              value={input.email}
            />
          </div>
          <div className="row">
            <p style={{ width: '30%' }}>Nomor Hp</p>
            <TextField
              style={{ width: '100%' }}
              placeholder='No. Handphone Aktif' variant="standard"
              InputProps={{ disableUnderline: true }}
              inputProps={{ min: 0, style: { textAlign: 'right' } }}
              onChange={(e) => setInput({ ...input, phone: e.target.value })}
              value={input.phone}
            />
          </div>
          <div className="row">
            <p style={{ width: '30%' }}>Jenis Kelamin</p>
            <Select
              disableUnderline
              variant="standard"
              value={input.gender}
              label="Age"
              onChange={(e) => setInput({ ...input, gender: e.target.value })}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </div>

          <div className="row" style={{ marginTop: '10px' }}>
            <p style={{ width: '30%' }}>Alamat</p>
            <img src={ImgArrow} style={{ width: 15, height: 15, cursor: 'pointer' }} alt="next-address" onClick={() => navigate('/detail-alamat')} />
          </div>

          {
            location.state?.status && <>
              <div className="rowAlamat">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                  <b>Mario Suseno</b>
                  <Chip label="Utama" style={{ backgroundColor: '#ff6100', color: 'white', marginLeft: 15 }} size="small" />
                </div>
                <p>Jl. Palagan Timur III, Blok Permata 1, No 17</p>
                <p>RT 11 / RW 20</p>
                <p>Kota Bintaro, Kabupaten Duri Asem</p>
                <p>Kecamatan Rusa. 12345, Banten Timur</p>
              </div>
            </>
          }
        </div>

        <div>
          <div style={{ display: 'flex' }}>
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              // setChecked(e.target.checked)
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <div className='ket'>
              <p>Dengan menekan Daftar Akun</p>
              <p>saya mengkonfirmasi telah menyetujui</p>
              <div style={{display:'flex'}}><p style={{ color: '#ff6100', textDecorationLine:'underline', marginRight: 5 }}>Syarat & Ketentuan</p> serta <p style={{ color: '#ff6100', textDecorationLine:'underline', margin: '0px 5px' }}>Kebijakan Privasi</p> MYPO.</div>
            </div>
          </div>

          <div className='bottomArea'>
            <KeyboardBackspaceIcon style={{ width: 40, height: 40, cursor: 'pointer' }} onClick={() => navigate(-1)} />
            <Button variant='contained' style={{ backgroundColor: '#ff6100' }} disabled={!checked} onClick={() => setOpenModal(true)}>
              Daftar Akun
            </Button>
          </div>
        </div>
      </div>

      <ModalSuccess
        open={openModal}
        handleClose={handleClose}
      />

    </div>
  )
}

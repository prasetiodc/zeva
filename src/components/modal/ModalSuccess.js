import { Button, Modal } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import ImgCelebration from '../../assets/Akun/celebration.png'
import { useNavigate } from 'react-router-dom';

export default function ModalSuccess({ open, handleClose }) {
  const navigate = useNavigate()
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '300px',
        backgroundColor: 'white',
        padding: '30px 0px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'auto'
      }}>
        <b>SELAMAT!</b>

        <img src={ImgCelebration} style={{ width: 50, height: 50, margin: '20px 0px' }} alt="icon-celebrate" />

        <b style={{ marginBottom: 10 }}>Kamu berhasil mendaftar</b>
        <p style={{ marginBottom: 30, fontSize: 13, width: 180 }}>Sekarang kamu bisa mulai PO makanan favorit di sekitarmu</p>

        <Button style={{ backgroundColor: '#ff6100', color: 'white', width: '80%' }} onClick={() => navigate('/')}>
          Mulai PreOrder
        </Button>
      </Box >
    </Modal >
  )
}

import React, { useState, useEffect } from 'react'

import { Grid, Button, InputAdornment, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";

import ImgAvatar from '../../assets/Dashboard/avatar.png';
import ImgNotif from '../../assets/Dashboard/notification.png';
import ImgMessage from '../../assets/Dashboard/conversation.png';
import ImgArrowDown from '../../assets/Dashboard/arrow-down.png';
import ImgRightDown from '../../assets/Dashboard/arrow-right.png';

import ImgNasiGoreng from '../../assets/Dashboard/nasi-goreng.jpeg';
import ImgSateTaichan from '../../assets/Dashboard/sate-taichan.jpeg';

import ImgDapur1 from '../../assets/Dashboard/dapur-1.png';
import ImgDapur2 from '../../assets/Dashboard/dapur-2.png';
import ImgDapur3 from '../../assets/Dashboard/dapur-3.png';

import ImgAyamBakar from '../../assets/Dashboard/ayam-bakar.jpeg';
import ImgSate from '../../assets/Dashboard/sate.jpeg';
import ImgNasiKuning from '../../assets/Dashboard/nasi-kuning.jpeg';

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import './style.css';

import DateComponent from '../../components/date';

import CardMenu from '../../components/CardMenu';
import CardDapur from '../../components/CardDapur';
import CardCountdown from '../../components/CardCountdown';

const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']

const list1 = [
  {
    name: 'Nasi Goreng Spe...',
    image: ImgNasiGoreng,
    price: 'Rp 27.000',
    isPromo: 1,
  }, {
    name: 'Sate Tai Chan',
    image: ImgSateTaichan,
    price: 'Rp 30.000'
  }, {
    name: 'Nasi Goreng',
    image: ImgNasiGoreng,
    price: 'Rp 20.000',
    isPromo: 1,
  },
]

const list2 = [
  {
    name: 'Chinese',
    image: ImgNasiGoreng,
  }, {
    name: 'Middle Eastern',
    image: ImgSateTaichan,
  }, {
    name: 'Indonesian',
    image: ImgNasiGoreng,
  },
]

const list3 = [
  {
    name: 'Sate Tai Chan',
    image: ImgSateTaichan,
    price: 'Rp 35.000',
    rating: '4.6'
  }, {
    name: 'Nasi Goreng Spe...',
    image: ImgNasiGoreng,
    price: 'Rp 35.000',
    discount: 'Rp 25.000',
    rating: '4.8',
    isPromo: 1,
  }, {
    name: 'Nasi Goreng',
    image: ImgNasiGoreng,
    price: 'Rp 20.000',
    rating: '4.5',
    isPromo: 1,
  },
]

const listDapur = [
  {
    name: 'Dapur Bilcon',
    image: ImgDapur1
  }, {
    name: "the Kecombrang's",
    image: ImgDapur2
  }, {
    name: "BLUE FIN",
    image: ImgDapur3
  }, {
    name: "the Kitchen",
    image: ImgDapur1
  }
]

const listCountdown = [
  {
    name: 'Ayam Bakar Sunda',
    deadline: '12 Maret 21',
    price: 'Rp 25.000',
    newPrice: 'Rp 20.000',
    discount: 20,
    total: 4,
    available: 3,
    image: ImgAyamBakar
  }, {
    name: 'Sate Pucet',
    deadline: '15 Maret 21',
    price: 'Rp 25.000',
    newPrice: 'Rp 20.000',
    discount: 20,
    total: 4,
    available: 2,
    image: ImgSate
  }, {
    name: 'Nasi Kuning',
    deadline: '15 Maret 21',
    price: 'Rp 30.000',
    total: 48,
    available: 12,
    image: ImgNasiKuning
  }
]


export default function Index() {
  let navigate = useNavigate();

  const [dates, setDates] = useState([]);
  const [dateSelected, setDateSelected] = useState(12);

  useEffect(() => {
    let dates = []
    for (let i = 2; i <= 15; i++) dates.push(i)

    setDates(dates)
  }, []);

  const _handleChangeDate = (date) => setDateSelected(date)

  return (
    <div className="container">
      <div className="header">
        <div className="headerLeft">
          <img src={ImgAvatar} className="avatar" alt="avatar-icon" />
          <div>
            <p style={{ fontSize: "18px" }}>Selamat datang, Ario!</p>
            <p className="statusMember">Gold member</p>
          </div>
        </div>
        <div className="headerRight">
          <div style={{ position: "relative" }}>
            <img src={ImgMessage} className="icon" alt="message-icon" />
            <div className="notif" />
          </div>
          <div style={{ position: "relative" }}>
            <img src={ImgNotif} className="icon" alt="notif-icon" />
            <div className="notif" />
          </div>
        </div>
      </div>

      <div className="address">
        <div className="flex" style={{ marginBottom: 5 }}>
          <p style={{ color: "#909297", marginRight: 10 }}>PO diantar ke...</p>
          <img src={ImgArrowDown} className="arrowDown" alt="down-icon" />
        </div>
        <p>Senayan, Central Jakarta 102...</p>
      </div>

      <div className="preorder">
        <div className="headerPreorder">
          <div>
            <b style={{ color: "#34393f", fontSize: '20px' }}>Preorder Makanan & Minuman</b>
            <p style={{ color: "#909297" }}>Order Harian & Mingguan</p>
          </div>
          <img src={ImgRightDown} className="arrowRight" alt="right-icon" />
        </div>

        <div className="calender">
          {
            days.map((day, index) =>
              <b key={"day" + index} style={{ width: "14%", height: 30 }}>{day}</b>
            )
          }

          {
            dates.map(date =>
              <DateComponent date={date} dateSelected={dateSelected} _handleChangeDate={_handleChangeDate} />
            )
          }

        </div>

        <div className="buttonPreorder">
          <Button className="buttonChooseDate" variant="contained">
            Pilih Tanggal
          </Button>

          <Button className="buttonSeeCalender" variant="outlined">
            Lihat Kalender
          </Button>
        </div>
      </div>

      <div className="orangeSection">
        <div className="flexSpaceBetween">
          <b style={{ fontSize: '20px' }}>Spesial untukmu</b>
          <p>Lihat Semua</p>
        </div>

        <div className='listHorizontal'>
          {
            list1.map((menu, index) =>
              <CardMenu data={menu} key={"list-1" + index} status={1} />
            )
          }
        </div>

        <div className="flexSpaceBetween">
          <b style={{ fontSize: '20px' }}>Kategori</b>
          <p>Lihat Semua</p>
        </div>

        <div className='listHorizontal'>
          {
            list2.map((menu, index) =>
              <CardMenu data={menu} key={"list-2" + index} status={2} />
            )
          }
        </div>

        <div className="flexSpaceBetween">
          <div>
            <b style={{ fontSize: '20px' }}>Menu Terlaris!</b>
            <p style={{ opacity: 0.8 }}>Favorit banyak orang</p>
          </div>
          <p>Lihat Semua</p>
        </div>

        <div className='listHorizontal'>
          {
            list3.map((menu, index) =>
              <CardMenu data={menu} key={"list-3" + index} status={3} />
            )
          }
        </div>
      </div>

      <div className="whiteSection">
        <div className="flexSpaceBetween">
          <b style={{ fontSize: '20px' }}>Dapur Rekomendasi</b>
          <p style={{ color: '#6159ff' }}>Lihat Semua</p>
        </div>

        <div className='listHorizontal'>
          {
            listDapur.map((dapur, index) =>
              <CardDapur data={dapur} key={"list-dapur" + index} />
            )
          }
        </div>
      </div>

      <div className='graySection'>
        <div style={{ marginBottom: '15px' }}>
          <b style={{ fontSize: '20px' }}>Segera Habis!</b>
          <p style={{ color: 'gray' }}>Kesempatan terakhir untuk PO</p>
        </div>

        {
          listCountdown.map((el, index) =>
            <CardCountdown data={el} key={'count' + index} />)
        }
      </div>

      <Grid container className='bottomAreaDashboard'>
        <Grid item xs={8}>
          <TextField
            id="search"
            placeholder='Mau order apa hari ini?'
            InputProps={{
              startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4} style={{ display: 'flex', justifyContent: 'space-between', paddingLeft:5 }}>
          <div style={{ textAlign: "center" }}>
            <LocalMallIcon style={{ color: "#ff6100", width: "45px", height: "45px" }} />
            <p style={{fontSize:15}}>Keranjang</p>
          </div>
          <div style={{ textAlign: "center", cursor: 'pointer' }} onClick={() => navigate('/akun')
          }>
            <PersonIcon style={{ color: "#ff6100", width: "45px", height: "45px" }} />
            <p style={{fontSize:15}}>Akun</p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

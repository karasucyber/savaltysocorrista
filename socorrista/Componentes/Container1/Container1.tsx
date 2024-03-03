import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import styled from 'styled-components';



export default function Container1() {
  return (
    <>
    <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
<SwiperSlide style={{fontSize: "100px", backgroundImage: "url(6.jpeg)",backgroundPosition: "center", width:"100%" ,backgroundRepeat: "no-repeat", backgroundSize: "",}}></SwiperSlide>
<SwiperSlide style={{fontSize: "100px", backgroundImage: "url(7.jpeg)",backgroundPosition: "center", width:"100%" ,backgroundRepeat: "no-repeat", backgroundSize: "",}}></SwiperSlide>       
<SwiperSlide style={{fontSize: "100px", backgroundImage: "url(8.jpeg)",backgroundPosition: "center", width:"100%" ,backgroundRepeat: "no-repeat", backgroundSize: "",}}></SwiperSlide>       
<SwiperSlide style={{fontSize: "100px", backgroundImage: "url(9.jpeg)",backgroundPosition: "center", width:"100%" ,backgroundRepeat: "no-repeat", backgroundSize: "",}}></SwiperSlide>       
<SwiperSlide style={{fontSize: "100px", backgroundImage: "url(10.jpeg)",backgroundPosition: "center", width:"100%" ,backgroundRepeat: "no-repeat", backgroundSize: "",}}></SwiperSlide>       
<SwiperSlide style={{fontSize: "100px", backgroundImage: "url(11.jpeg)",backgroundPosition: "center", width:"100%" ,backgroundRepeat: "no-repeat", backgroundSize: "",}}></SwiperSlide>       
<SwiperSlide style={{fontSize: "100px", backgroundImage: "url(12.jpeg)",backgroundPosition: "center", width:"100%" ,backgroundRepeat: "no-repeat", backgroundSize: "",}}></SwiperSlide>       

     
      </Swiper>
    </>
  );
}

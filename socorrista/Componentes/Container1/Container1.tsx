import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';



export default function Container1() {
  return (
    <>
    <Swiper style={{height: "580px" }}        spaceBetween={0}
        pagination={{clickable: true,}} modules={[Pagination]} className="mySwiper">
        <SwiperSlide style={{fontSize: "100px", backgroundImage: "url(31.png)",backgroundPosition: "center", width:"100%" ,backgroundRepeat: "no-repeat", backgroundSize: "",}}></SwiperSlide>
        <SwiperSlide style={{fontSize: "100px", backgroundImage: "url(32.png)",backgroundPosition: "center", width:"100%" ,backgroundRepeat: "no-repeat", backgroundSize: "",}}></SwiperSlide>       
      </Swiper>
    </>
  );
}

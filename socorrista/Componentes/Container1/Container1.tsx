import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import { TiPhone } from "react-icons/ti";
import { MdAttachEmail } from "react-icons/md";





export default function Container1() {
  return (
    <>
<div style={{ background: "white", width: "100%", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid #000" }}>
  <div style={{ background: "white", display: "flex", fontSize: "24px" }}>
    <a style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#6047A8", padding: "0 10px" }} href="#">
      <TiPhone /> (11)999999999</a>
    <a style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#6047A8", padding: "0 10px" }} href="#">
      <MdAttachEmail/> salvaty.com
    </a>
  </div>
</div>
    <Swiper style={{height: "580px" }}        spaceBetween={0}
        pagination={{clickable: true,}} modules={[Pagination]} className="mySwiper">
        <SwiperSlide style={{fontSize: "100px", backgroundImage: "url(31.png)",backgroundPosition: "center", width:"100%" ,backgroundRepeat: "no-repeat", backgroundSize: "cover",}}></SwiperSlide>
        <SwiperSlide style={{fontSize: "100px", backgroundImage: "url(32.png)",backgroundPosition: "center", width:"100%" ,backgroundRepeat: "no-repeat", backgroundSize: "cover",}}></SwiperSlide>       
      </Swiper>
    </>
  );
}
  
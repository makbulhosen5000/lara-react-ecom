import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";
import "swiper/css";
import "./slider.css";
import slider1 from "../../assets/slider/banana1.jpg";
import slider2 from "../../assets/slider/lemon1.jpg";
import slider3 from "../../assets/slider/papaya1.jpg";
import slider4 from "../../assets/slider/coco1.jpg";
import { Scrollbar } from "swiper/modules";
const Slider = () => {


  
  return (
    <div>
      <Swiper
        scrollbar={{
          type: "progressbar",
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className=" bg-cover object-cover"
            src={slider1 ? slider1 : "No Internet"}
            alt="Slider"
            style={{ height: "600px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" bg-cover object-cover"
            src={slider2 ? slider2 : "No Internet"}
            alt="slider"
            style={{ height: "600px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" bg-cover object-cover"
            src={slider3 ? slider3 : "No Internet"}
            alt="Slider"
            style={{ height: "600px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" bg-cover object-cover"
            src={slider4 ? slider4 : "No Internet"}
            alt="Slider"
            style={{ height: "600px" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
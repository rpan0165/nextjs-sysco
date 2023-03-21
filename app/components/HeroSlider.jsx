'use client';

import React from 'react'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";

const HeroSlider = (props) => {

  // shortend path for slides data
  var slides = null;
  if (props.hardCoded) { slides = props.sliderContent }

  return props.hardCoded ? (
    <>
    <section class="hero-slider" id="hero-slider-48a576d8-127b-40e6-b18d-d88c85bfe27d">
      <div class="hero-slider swiper-container">
        <Swiper
          modules={[ Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {
            slides.map((slide, index) => {
            return(                
                <SwiperSlide key={index}>
                  <div class="slider-container" style={{ backgroundImage: `url(${slide.background_image.url})` }}>
                    <div class="row justify-content-center">
                      <div class="col-md-8 slider-text text-center">
                      <h1>{ slide.header }</h1>
                      <h5>{ slide.description }</h5>
                        <a aria-label="None" href={slide.call_to_action_text.href} class="btn btn-green">{slide.call_to_action_text.title}</a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>                  
            )})
          }
          </Swiper>
        </div>
    </section>
  </>) : (
      <div></div>
   )
}

export default HeroSlider
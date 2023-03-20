'use client';

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const HeroSlider = (sliderContent) => {

  // shortend path for slides data
  const slides = sliderContent.sliderContent.entry.background_image;

  return (
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
                  <SwiperSlide>
                    <div class="slider-container" style={{ backgroundImage: `url(${slide.image.url})` }}>
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
          {/* <div class="swiper-pagination text-center"></div>
          <img src="../assets/next-arrow.svg" class="d-none d-md-flex hero-slider-arrow arrow-left" aria-hidden="true" id="48a576d8-127b-40e6-b18d-d88c85bfe27d-left-arrow-button" alt="Left Arrow Button"/>
          <img src="../assets/next-arrow.svg" class="d-none d-md-flex hero-slider-arrow arrow-right" aria-hidden="true" id="48a576d8-127b-40e6-b18d-d88c85bfe27d-right-arrow-button" alt="Right Arrow Button" /> */}

      </section>
    </>
  )
}

export default HeroSlider
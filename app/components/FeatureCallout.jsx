import React from 'react'

const FeatureCallout = () => {
  return (
      <>
        <section class="feature-callout" style={{ backgroundImage: 'url(https://sysco.com/.imaging/mte/site-sysco/1920/dam/Sysco/Homepage/houston-skyline.png/jcr:content/houston-skyline.jpg)' }}>
            <div class="container text-center" id="d4630c80-e9bc-4c8a-b16b-bfe3408d4f16">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <h2>Our Locations</h2>
                  <p style={{ color: '#f8f8f9'}}>Sysco operates more than 320 distribution facilities serving more than 650,000 customers around the world.</p>
                  <a aria-label="our location" class="btn btn-green" href="/Contact/Contact/Our-Locations.html">Get In Touch</a>
                </div>
              </div>
            </div>
        </section>
      </>
  )
}

export default FeatureCallout
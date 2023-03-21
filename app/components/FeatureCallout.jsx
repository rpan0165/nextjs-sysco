import React from 'react'

const FeatureCallout = (featureCalloutContent) => {

  const contentPath = featureCalloutContent.props.feature_callout;
  return (
      <>
        <section class="feature-callout" style={{ backgroundImage: `url(${contentPath.background_image.url})` }}>
            <div class="container text-center" id="d4630c80-e9bc-4c8a-b16b-bfe3408d4f16">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <h2>{contentPath.heading}</h2>
              <p style={{ color: '#f8f8f9' }}>{contentPath.descriptive_text}</p>
              <a aria-label="our location" class="btn btn-green" href={contentPath.button.href}>{ contentPath.button.title }</a>
                </div>
              </div>
            </div>
        </section>
      </>
  )
}

export default FeatureCallout
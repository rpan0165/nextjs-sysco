import React, { Component } from "react";

const FeatureSection = (featureSectionContent) => {

    const contentPath = featureSectionContent.props.feature_section;

  return (
      <>
        <section class="feature-section" style={{ backgroundImage: `url(${contentPath.background_image.url})` }} >
            <div class="overlay"></div>
              <div class="container-fluid">                  
                <div class={contentPath.text_location == "Left" ? "row" : "row justify-content-end"}>                      
                <div class="col-md-6">
                    <h3>{contentPath.text.title}</h3>
                    <div class="feature-section-p" dangerouslySetInnerHTML={{ __html: contentPath.text.description }}></div>
                    <br/>
                    <ul class="linked-list">
                      {
                        contentPath.link.map((link, index) => {
                          return(                
                              <li key={index}><a href={link.href}>{link.title}</a></li>               
                          )})
                      }
                       
                </ul>
                </div>
            </div>
        </div>
    </section>
      </>
  )
}

export default FeatureSection


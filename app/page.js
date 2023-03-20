'use client';

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { useState, useEffect } from 'react'

// component imports
import FeatureCallout from './components/FeatureCallout'
import HeroSlider from './Components/HeroSlider'
import FeatureSection from './components/FeatureSection'

// contentstack sdk imports
import Contentstack from './scripts/contentstack.min.js'
import { onEntryChange } from "./utils/utils.js";

const inter = Inter({ subsets: ['latin'] })

// contentstack stack intializing (working for content fetching using SDK)
// const Stack = Contentstack.Stack("blt16b29db83ad01635", "cse3066d807437d70a5cc6bee6", "development");

// contentstack stack intializing (for live preview purpose)
const Stack = Contentstack.Stack({ 
  // update your configs here
  live_preview: {
    management_token: "cse3066d807437d70a5cc6bee6",
    enable: true,
    host: 'api.contentstack.io'
  },
})

const checkEntryworking = () => {
  console.log("yes")
}

// function to fetch data
const useAllData = () => {
  const [header, setHeader] = useState();
  const [sliderContent, setSliderContent] = useState();
  const [featureSection1, setFeatureSections1] = useState();
  const [featureSection2, setFeatureSections2] = useState();
  const [featureSection3, setFeatureSections3] = useState();
  const [featureSection4, setFeatureSections4] = useState();
  const [featureCallout, setFeatureCallout] = useState();
  const [footer, setFooter] = useState();

  var myHeaders = new Headers();
    myHeaders.append("api_key", "blt16b29db83ad01635");
    myHeaders.append("access_token", "cse3066d807437d70a5cc6bee6");
    myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {    
    
    const dataFetch = async () => {
      
      setLoading(true)

      // code to fetch data using CS SDK

      // const Query = Stack.ContentType('feature_callout').Entry("bltc4b600a1808d55b5")
      // Query.fetch()
      //   .then(function success(entry) {
      //       console.log(entry.get('title')); // Retrieve field value by providing a field's UID
      //       console.log(entry.toJSON()); // Convert the entry result object to JSON
      //   }, function error(err) {
      //       // err object
      //   });

      fetch("https://cdn.contentstack.io/v3/content_types/sysco_com_homepage/entries?environment=development", requestOptions)
      .then((res) => res.json())
      .then(async (data)  => {
        setData(data)

        // waiting for all the things in parallel
        const headerURL = `https://cdn.contentstack.io/v3/content_types/${data.entries[0].header[0]._content_type_uid}/entries/${data.entries[0].header[0].uid}?environment=development`;
        const sliderContentURL = `https://cdn.contentstack.io/v3/content_types/${data.entries[0].hero_slider[0]._content_type_uid}/entries/${data.entries[0].hero_slider[0].uid}?environment=development`;
        const featureSections1URL = `https://cdn.contentstack.io/v3/content_types/${data.entries[0].feature_section[0]._content_type_uid}/entries/${data.entries[0].feature_section[0].uid}?environment=development`;
        const featureSections2URL = `https://cdn.contentstack.io/v3/content_types/${data.entries[0].feature_section_2[0]._content_type_uid}/entries/${data.entries[0].feature_section_2[0].uid}?environment=development`;
        const featureSections3URL = `https://cdn.contentstack.io/v3/content_types/${data.entries[0].feature_section_3[0]._content_type_uid}/entries/${data.entries[0].feature_section_3[0].uid}?environment=development`;
        const featureSections4URL = `https://cdn.contentstack.io/v3/content_types/${data.entries[0].feature_section_4[0]._content_type_uid}/entries/${data.entries[0].feature_section_4[0].uid}?environment=development`;
        const featureCalloutURL = `https://cdn.contentstack.io/v3/content_types/${data.entries[0].feature_callout[0]._content_type_uid}/entries/${data.entries[0].feature_callout[0].uid}?environment=development`;
        const footerURL = `https://cdn.contentstack.io/v3/content_types/${data.entries[0].footer[0]._content_type_uid}/entries/${data.entries[0].footer[0].uid}?environment=development`;
        

        // waiting for all the things in parallel
        const result = (await Promise.all(
          [
            fetch(headerURL, requestOptions),
            fetch(sliderContentURL, requestOptions),
            fetch(featureSections1URL, requestOptions),
            fetch(featureSections2URL, requestOptions),
            fetch(featureSections3URL, requestOptions),
            fetch(featureSections4URL, requestOptions),
            fetch(featureCalloutURL, requestOptions),
            fetch(footerURL, requestOptions),
          ])
        ).map((r) => r.json());

        // waiting a bit more
      const [headerResult, sliderContentResult, featureSectionsResult1, featureSectionsResult2, featureSectionsResult3, featureSectionsResult4, featureCalloutResult, footerResult] = await Promise.all(
        result
      );

      // when the data is ready, save it to state
        setHeader(headerResult);
        setSliderContent(sliderContentResult);
        setFeatureSections1(featureSectionsResult1);
        setFeatureSections2(featureSectionsResult2);
        setFeatureSections3(featureSectionsResult3);
        setFeatureSections4(featureSectionsResult4);
        setFeatureCallout(featureCalloutResult);
        setFooter(footerResult);

        

      setLoading(false)
      })     
    };

    dataFetch();

  }, []);

  
  
  return { header, sliderContent, featureSection1, featureSection2, featureSection3, featureSection4, featureCallout, footer};
};

export default function Home() {

  const { header, sliderContent, featureSection1, featureSection2, featureSection3, featureSection4, featureCallout, footer } = useAllData();

  if (!header || !sliderContent || !featureSection1 || !featureSection2 || !featureSection3 || !featureSection4 || !featureCallout || !footer) return (
    
    <div className="spinner-UI">
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    </div>

  );

  // {onEntryChange(checkEntryworking)}

  return (
      <>
      {/* {console.log(featureSection1)} */}

      {/* Global components (header, footer) are inside the 'app/layouts.js' */}

      {/* sections in page */}
      <HeroSlider sliderContent={sliderContent} />
      <FeatureSection featureSectionContent={featureSection1} />
      <FeatureSection featureSectionContent={featureSection2} />
      <FeatureSection featureSectionContent={featureSection3} />
      <FeatureSection featureSectionContent={featureSection4} />
      <FeatureCallout />      
  </>
  )
}

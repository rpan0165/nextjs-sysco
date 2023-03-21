'use client';

import { Inter } from 'next/font/google'
import { useState, useEffect, createElement  } from 'react'
import axios from "axios";
import dynamic from 'next/dynamic';
import HeroSlider from './components/HeroSlider'

import {onEntryChange} from './utils/utils'

const inter = Inter({ subsets: ['latin'] })

// to generate dynamic components from recived list
function ComponentList(props) {
  const components = props.componentNames.map((name, index) => {
    const DynamicComponent = dynamic(() => import(`./components/${name}`));
    return <DynamicComponent key={index} props={props.compData[index] } />;
  });
  return <div>{components}</div>;
}

// main function
export default function Home() {

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [componentData, setComponentData] = useState([]);
  const [componentList, setComponentList] = useState([]);
  const [componentArray, setComponentArray] = useState([]);

// custom constants to match components due to naming limitations in CS 
  const matchingComponents = ['header', 'hero_slider', 'feature_section', 'feature_callout', 'footer']
  const realComponents = ['Header', 'HeroSlider', 'FeatureSection', 'FeatureCallout', 'Footer']

// required arrays to filter the list
  var titleArray; //grab the titles list from the incoming data object
  var identifiedComponentsArray; //intermidiate array to get the incoming component indexes using solid name list
  var Components = []; //Identified components
  var fullComponents = []; //components list with inside data

  const fetchData = async () => {
    setLoading(true)
    let res = await axios.get('https://cdn.contentstack.io/v3/content_types/homepage_test/entries?environment=development',
      {
        headers: {
          'api_key': 'blt16b29db83ad01635',
          'access_token': 'cse3066d807437d70a5cc6bee6',
          'Content-Type': 'application/json',
        }
      }
    );
    setData(res.data);

    //logic to grab the component details from response
    titleArray = res.data.entries[0].modular_blocks.map((component, index) => {
      fullComponents.push(component)
      return Object.keys(component)
    })

    //save the component data into state
    setComponentData(fullComponents);

    identifiedComponentsArray = titleArray.map((title) => {
      var recivedName = title[0]
      return matchingComponents.indexOf(recivedName)
    })

    Components = identifiedComponentsArray.map((component) => {
      return (realComponents[component])
    })

    //save the component names list into state
    setComponentList(Components)
    setLoading(false)
  }

  useEffect(() => {    
    onEntryChange(fetchData)
    // fetchData();
  }, [])

  return isLoading && componentData.length < 1 && componentList.length < 1 && componentArray.length < 1 ? (

      <div className="spinner-UI">
        <div className="spinner-container">
          <div className="loading-spinner">
          </div>
        </div>
      </div>

    ) : (
      <>
          {/* hardcoded hero-slider due to a known issue in swiper with nextjs 13 */}
          <HeroSlider sliderContent={componentData[0].hero_slider.slides} hardCoded={true} /> 
        <div>
          <ComponentList componentNames={componentList} compData={componentData} />
        </div>
      </>
    )
}

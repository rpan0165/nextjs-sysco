import React from 'react'
import Script from 'next/script'

const Header = () => {
  return (
    <head>
      <title>Sysco</title>
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <meta charset="utf-8" />
      <meta name="keywords" content="${content.keywords}" />
      <meta name="description" content="${content.description!'Sysco lives at the heart of food and service. We are passionately committed to the success of every customer, supplier partner, community and associate.'}"/>
      <meta name="robots" content="all" />

      {/* FAVICONS */}

      {/* MOBILE SPECIFIC META */}

      {/* Icons */}
      {/* <script src="https://kit.fontawesome.com/5a65935042.js" crossorigin="anonymous"></script> */}
      <Script src="https://kit.fontawesome.com/5a65935042.js" crossorigin="anonymous" />
  
      {/* Styles */}

      {/* Scripts */}
      {/* <script type="text/javascript" src="../scripts/contentstack.min.js"></script> */}
      <Script type="text/javascript" src="../scripts/contentstack.min.js" />

      {/* Cookie Consent */}
    </head>
  )
}

export default Header
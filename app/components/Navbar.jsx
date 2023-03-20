import React from 'react'

const Navbar = () => {
  return (
  <>
  <nav className="navbar navbar-default navbar-expand-lg navbar-inverse justify-content-between fixed-top">
    <a className="navbar-brand" aria-label="Navigate to Sysco" href="/">
    <img className="logo logo-white img-fluid" src="https://sysco.com/dam/jcr:ceb8578f-cb86-4446-9eaa-e0687b1efa83/Sysco-Logo-White1.png" alt="Sysco" />
    <img className="logo logo-color img-fluid" src="https://sysco.com/dam/jcr:ceb8578f-cb86-4446-9eaa-e0687b1efa83/Sysco-Logo-White1.png" alt="Sysco" aria-hidden="true" />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-menu" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
  </button>
  <div className="collapse navbar-collapse" id="nav-menu" role="navigation">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0" role="list">
          <li className="nav-mobile-search">
              <form className="mobile-search-form" action="/Sysco/Search.html">
                <i className="fa fa-search"></i>
                <input name="queryStr" className="form-control form-control-sm" type="search" placeholder="Search" autocomplete="off"/>
              </form>
          </li>
            <li className="nav-item dropdown main-nav">
                <a href="#" className="nav-link dropdown-toggle no-link" data-toggle="dropdown">
                  About
                </a>
                <div className="dropdown-arrow">
                  <div className="arrow-container">
                    <div className="arrow-bar"></div>
                    <div className="arrow-bar"></div>
                  </div>
                </div>
      <ul className="dropdown-menu" role="menu">
            <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle no-link" data-toggle="dropdown">
                  Company Profile
                </a>
      <ul className="page-links" role="menuitem">
            <li className="nav-item">
                <a aria-label="Navigate to The Sysco Story" href="/About/Company-Profile/The-Sysco-Story.html" className="nav-link">The Sysco Story</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Our Purpose" href="/About/Company-Profile/Our-Purpose.html" className="nav-link">Our Purpose</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Annual Report" href="/About/Company-Profile/Annual-Report.html" className="nav-link">Annual Report</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Public Policy Engagement" href="/About/Company-Profile/Public-Policy-Engagement.html" className="nav-link">Public Policy Engagement</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to test" href="/About/Company-Profile/test.html" className="nav-link">test</a>
            </li>
      </ul>
            </li>
            <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle no-link" data-toggle="dropdown">
                  Our People
                </a>
      <ul className="page-links" role="menuitem">
            <li className="nav-item">
                <a aria-label="Navigate to Our Management" href="/About/Our-People/Our-Management.html" className="nav-link">Our Management</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to From Our President &amp; CEO" href="/About/Our-People/FromSyscoCEO.html" className="nav-link">From Our President &amp; CEO</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Diversity, Equity &amp; Inclusion (DEI)" href="/About/Our-People/Diversity-and-Inclusion.html" className="nav-link">Diversity, Equity &amp; Inclusion (DEI)</a>
            </li>
      </ul>
            </li>
            <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle no-link" data-toggle="dropdown">
                  Sysco Today
                </a>
      <ul className="page-links" role="menuitem">
            <li className="nav-item">
                <a aria-label="Navigate to News Room" href="/About/Sysco-Today/News-Room.html" className="nav-link">News Room</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Events" href="/About/Sysco-Today/Events.html" className="nav-link">Events</a>
            </li>
      </ul>
            </li>
      </ul>
            </li>
            <li className="nav-item dropdown main-nav">
                <a href="#" className="nav-link dropdown-toggle no-link" data-toggle="dropdown">
                  Products
                </a>
                <div className="dropdown-arrow">
                  <div className="arrow-container">
                    <div className="arrow-bar"></div>
                    <div className="arrow-bar"></div>
                  </div>
                </div>
      <ul className="dropdown-menu" role="menu">
            <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle no-link" data-toggle="dropdown">
                  Products
                </a>
      <ul className="page-links" role="menuitem">
            <li className="nav-item">
                <a aria-label="Navigate to Product Categories" href="/Products/Products/Product-Categories.html" className="nav-link">Product Categories</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Sysco Brand Family" href="/Products/Products/Sysco-Brand-Family.html" className="nav-link">Sysco Brand Family</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Sysco Foodie" href="/Products/Products/Sysco-Foodie.html" className="nav-link">Sysco Foodie</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Quality Assurance" href="/Products/Products/Quality-Assurance.html" className="nav-link">Quality Assurance</a>
            </li>
      </ul>
            </li>
            <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle no-link" data-toggle="dropdown">
                  Solutions &amp; Services
                </a>
      <ul className="page-links" role="menuitem">
            <li className="nav-item">
                <a aria-label="Navigate to Services" href="/Products/Solutions-and-Services/Services.html" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Culinary and Product Solutions" href="/Products/Solutions-and-Services/Culinary-and-Product-Solutions.html" className="nav-link">Culinary and Product Solutions</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Technology Solutions" href="/Products/Solutions-and-Services/Technology-Solutions.html" className="nav-link">Technology Solutions</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Multicultural" href="/Products/Solutions-and-Services/Multicultural-Resources.html" className="nav-link">Multicultural</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Specialty Companies" href="/Products/Solutions-and-Services/Specialty-Companies.html" className="nav-link">Specialty Companies</a>
            </li>
      </ul>
            </li>
      </ul>
            </li>
            <li className="nav-item dropdown main-nav">
                <a href="#" className="nav-link dropdown-toggle no-link" data-toggle="dropdown">
                  Customers
                </a>
                <div className="dropdown-arrow">
                  <div className="arrow-container">
                    <div className="arrow-bar"></div>
                    <div className="arrow-bar"></div>
                  </div>
                </div>
      <ul className="dropdown-menu" role="menu">
            <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle no-link" data-toggle="dropdown">
                  Who We Serve
                </a>
      <ul className="page-links" role="menuitem">
            <li className="nav-item">
                <a aria-label="Navigate to Restaurants" href="/Customers/Who-We-Serve/Restaurants.html" className="nav-link">Restaurants</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Healthcare and Senior Living" href="/Customers/Who-We-Serve/Healthcare-and-Senior-Living.html" className="nav-link">Healthcare and Senior Living</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Higher Education" href="/Customers/Who-We-Serve/Higher-Education.html" className="nav-link">Higher Education</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Government" href="/Customers/Who-We-Serve/Government.html" className="nav-link">Government</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Food Service Management" href="/Customers/Who-We-Serve/Food-Service-Management.html" className="nav-link">Food Service Management</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Travel" href="/Customers/Who-We-Serve/Travel.html" className="nav-link">Travel</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Leisure" href="/Customers/Who-We-Serve/Leisure.html" className="nav-link">Leisure</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Retail" href="/Customers/Who-We-Serve/Retail.html" className="nav-link">Retail</a>
            </li>
      </ul>
            </li>
      </ul>
            </li>
            <li className="nav-item dropdown main-nav">
                <a href="#" className="nav-link dropdown-toggle no-link" data-toggle="dropdown">
                  Suppliers
                </a>
                <div className="dropdown-arrow">
                  <div className="arrow-container">
                    <div className="arrow-bar"></div>
                    <div className="arrow-bar"></div>
                  </div>
                </div>
      <ul className="dropdown-menu" role="menu">
            <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle no-link" data-toggle="dropdown">
                  Supplier Partnerships
                </a>
      <ul className="page-links" role="menuitem">
            <li className="nav-item">
                <a aria-label="Navigate to Supplier Resources" href="/Suppliers/Supplier-Partnerships/Supplier-Resources.html" className="nav-link">Supplier Resources</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Supplier Diversity" href="/Suppliers/Supplier-Partnerships/Supplier-Diversity.html" className="nav-link">Supplier Diversity</a>
            </li>
      </ul>
            </li>
      </ul>
            </li>
            <li className="nav-item main-nav">
                <a aria-label="Navigate to Investors" href="/Investors.html" className="nav-link">Investors</a>
            </li>
            <li className="nav-item main-nav">
                <a aria-label="Navigate to Careers" href="/Careers.html" className="nav-link">Careers</a>
            </li>
            <li className="nav-item dropdown main-nav">
                <a href="#" className="nav-link dropdown-toggle no-link" data-toggle="dropdown">
                  Sustainability
                </a>
                <div className="dropdown-arrow">
                  <div className="arrow-container">
                    <div className="arrow-bar"></div>
                    <div className="arrow-bar"></div>
                  </div>
                </div>
      <ul className="dropdown-menu" role="menu">
            <li className="nav-item">
                <a aria-label="Navigate to Our Approach" href="/Sustainability/Corporate-Social-Responsibility.html" className="nav-link">Our Approach</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to People" href="/Sustainability/People.html" className="nav-link">People</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Products" href="/Sustainability/Products.html" className="nav-link">Products</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Planet" href="/Sustainability/Planet.html" className="nav-link">Planet</a>
            </li>
      </ul>
            </li>
            <li className="nav-item dropdown main-nav">
                <a href="#" className="nav-link dropdown-toggle no-link" data-toggle="dropdown">
                  Contact
                </a>
                <div className="dropdown-arrow">
                  <div className="arrow-container">
                    <div className="arrow-bar"></div>
                    <div className="arrow-bar"></div>
                  </div>
                </div>
      <ul className="dropdown-menu" role="menu">
            <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle no-link" data-toggle="dropdown">
                  Contact
                </a>
      <ul className="page-links" role="menuitem">
            <li className="nav-item">
                <a aria-label="Navigate to Become A Customer" href="/Contact/Contact/Become-A-Customer.html" className="nav-link">Become A Customer</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Contact Us" href="/Contact/Contact/Contact-Us.html" className="nav-link">Contact Us</a>
            </li>
            <li className="nav-item">
                <a aria-label="Navigate to Our Locations" href="/Contact/Contact/Our-Locations.html" className="nav-link">Our Locations</a>
            </li>
      </ul>
            </li>
      </ul>
            </li>
      </ul>
    <ul className="nav navbar-nav">
      <li className="nav-search">
        <form className="search-form" action="/Search.html" autocomplete="off">
          <i className="fa fa-search"></i>
          <input name="queryStr" className="form-control form-control-sm" type="search" placeholder="Search" aria-label="Search"/>
          <i className="fa fa-times-circle"></i>
        </form>
      </li>
        <li className="nav-button"><a aria-label="Navigate to Shop Now" href="https://shop.sysco.com/" className="btn btn-green btn-sm">Shop Now</a></li>
        <li className="nav-action"><a aria-label="Navigate to Shop Now" href="https://shop.sysco.com/">Shop Now</a></li>
        <li className="nav-alt-link"><a aria-label="Navigate to Become A Customer" href="https://portal.sysco.com/become-a-customer?appId=sysco-dot-com&amp;env=prod" className="sign-in-link">Become A Customer</a></li>
        <li className="nav-alt-link"><a aria-label="Navigate to Sign In" href="https://shop.sysco.com/auth/login" className="sign-in-link">Sign In</a></li>
    </ul>
  </div>
</nav>
<div className="nav-overlay"></div>
    
    </>
  )
}

export default Navbar
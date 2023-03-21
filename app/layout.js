import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import jqApp from './styles/jqApp.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// metadata will fetch from custom header component at 'app/components/Header'
// export const metadata = {
//   title: 'Sysco',
//   description: 'Testing FE',
// }

export default function RootLayout({ children }) {

  const pull_data = (data) => {
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  }

  return (
    <html lang="en">

      {/* custom header */}
        <Header />
      
        <body className="site-sysco home-page">

      {/* global navbar */}
        <Navbar />
        
      {/* child components */}
        {children}

      {/* global footer */}
        <Footer />
        
      </body>
    </html>
  )
}

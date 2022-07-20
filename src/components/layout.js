import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from '../components/footer'
import Navbar from  '../components/navbar'
import AwesomeSlider from "react-awesome-slider"

const Layout = ({ isHomePage }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        <Navbar alt={ title } />
      </header>

      <main>
        <AwesomeSlider animation="cubeAnimation">
          <div className="dbc" data-src="https://daewoomex.com/wp-content/uploads/2022/07/dwoo1.jpg"/>
          <div data-src="https://daewoomex.com/wp-content/uploads/2022/07/dwoo2.jpg" />
          <div data-src="http://daewoomex.com/wp-content/uploads/2022/07/dwoo3.png" />
        </AwesomeSlider>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout

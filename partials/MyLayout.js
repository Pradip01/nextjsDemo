import Nav from '../partials/nav'
import Footer from '../partials/Footer'
const Layout = (props) => (
  <div id="asdf4534">
      <Nav />
    {props.children}
      <Footer />

      <style jsx>{`
          #asdf4534{
          width:100%;
          max-width:1170px;
          margin: 0 auto;
          }
            `}</style>
  </div>
)

export default Layout

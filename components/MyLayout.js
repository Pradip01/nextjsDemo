import Header from './Header'
import Nav from '../components/nav'

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   // border: '1px solid #DDD'
// }
const Layout = (props) => (
  <div id="asdf4534">
      <Nav />
    {props.children}

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

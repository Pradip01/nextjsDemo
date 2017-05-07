import Header from './Header'
import Nav from '../components/nav'

const layoutStyle = {
  margin: 20,
  padding: 20,
  // border: '1px solid #DDD'
}
const Layout = (props) => (
  <div style={layoutStyle}>
      <Nav />
    {props.children}
  </div>
)

export default Layout

import React from 'react'
import S from 'shorti'
import Link from 'next/link'
export default class Nav extends React.Component {
  render() {
    const page = this.props.page
    const linkStyle = {
      marginRight: 15

    }
    return (
        <div>
        <ul>
          <li>
            <Link href="/">
              <a style={linkStyle}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a style={linkStyle}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a style={linkStyle}>Contact</a>
            </Link>
          </li>
        </ul>
            <style jsx>{`
            ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
        }

            li {
            float: left;
        }

            li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

            li a:hover {
            background-color: #111;
        }
            `}</style>
        </div>
    )
  }
}
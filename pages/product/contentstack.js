import Layout from '../../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import config from '../../config/index'
import Footer from '../../components/Footer'

const Index = (props) => (
    <Layout>
        <div id="asdf1234">
            <h1>{props.movies.entry.title} Page </h1>
            <img src={props.movies.entry.image.url}/>
            <div id="asdf1289">
                <h2> {props.movies.entry.description}</h2>
            </div>
            <style jsx>{`
           #asdf1234 {
              position: relative;
              padding: 0;
            }
            #asdf1234 h1{
               position: absolute;
               left: 0px
               top: 0px;
               z-index: 1;
               padding: 10px 0 0 20px;
            }
           #asdf1289{
                position: absolute;
                width:500px;
                margin: 0 auto;
                left: 0;
                right: 0;
                z-index: 1;
                top: 40%;
                text-align:center;
            }

            h2,h3 {
                padding: 10px
                font-size: 25px;
            }

            img {
                width: 100%;
                height: auto;
                opacity: 0.3;
                max-width:100%;
                max-height: 600px;
            }
            `}</style>
        </div>
        <Footer />
    </Layout>
)

Index.getInitialProps = async function () {
    const res = await fetch(`https://api.contentstack.io/v3/content_types/product/entries/blteaa06473aa94e5f8`, {
        method: 'GET',
        headers: {
            "api_key": config.contentstack.api_key,
            "authtoken": config.contentstack.access_token
        }
    })
    const data = await res.json()
    return {
        movies: data
    }
}

export default Index
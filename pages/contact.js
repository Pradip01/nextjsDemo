/**
 * Created by pradip on 7/5/17.
 */
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import config from '../config/index'

const Index = (props) => (
        <Layout>
            <h1>{props.movies.entry.title} Page</h1>
            <div>
            <ul>
                <h2> {props.movies.entry.description}</h2>
                <img src={props.movies.entry.image.url}/>
            </ul>
                <style jsx>{`
            ul {
              position: relative;
            }

            h2,h3 {
                position: absolute;
                bottom: 80%;
                left: 40%;
                right: 45%;
                padding: 10px
                font-size: 25px;
            }

            img {
                width: 100%;
                height: auto;
                opacity: 0.3;
            }
            `}</style>
                </div>
        </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch(`https://api.contentstack.io/v3/content_types/contact_us/entries/blt1413340c25ec7091`, {
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
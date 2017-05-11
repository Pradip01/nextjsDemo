import React from 'react'
import homestyle from '../styles/home-style'
import Layout from '../partials/MyLayout'
export default class home extends React.Component {
    render() {
        const page = this.props.page
        return (
            <Layout>
                <div>
                    <main>
                        <style dangerouslySetInnerHTML={{ __html: homestyle }}/>
                        <div>
                            <div id="asdf1234">
                                <h1>{page.title} Page </h1>
                                <img src={page.image.url}/>
                                <div id="asdf1289">
                                    <h2> {page.description}</h2>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </Layout>
        )
    }
}
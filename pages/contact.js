import React from 'react'
import Contact from '../templates/contact'
export default class Home extends React.Component {
    static async getInitialProps () {
        const data = new Promise(resolve => {
            var  Query = Stack.ContentType("contact_us").Entry("blt1413340c25ec7091")
                .fetch()
                .then(function success(result) {
                    result = result.toJSON();
                    resolve(result);
                }, function error(error) {

                });
        })
        return data;
    }
    render () {
        const page = this.props;
        return <Contact page={page}/>
    }
}
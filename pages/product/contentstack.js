import React from 'react'
import Product from '../../templates/contentstack'
export default class Home extends React.Component {
    static async getInitialProps () {
        const data = new Promise(resolve => {
            var  Query = Stack.ContentType("product").Entry("blteaa06473aa94e5f8")
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
        return <Product page={page}/>
    }
}
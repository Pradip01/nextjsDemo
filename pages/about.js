import React from 'react'
import About from '../templates/about'
export default class Home extends React.Component {
    static async getInitialProps () {
        const data = new Promise(resolve => {
            var  Query = Stack.ContentType("about").Entry("blt8473bee24e52931a")
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
        return <About page={page}/>
    }
}
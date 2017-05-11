/**
 * Created by pradeep on 8/5/17.
 */
import React from 'react'
import S from 'shorti'
import Link from 'next/link'
export default class Footer extends React.Component {
    render() {
        const page = this.props.page

        return (
            <div id="asdf0125">
               This is Footer Page
                <style jsx>{`
                #asdf0125{
                background:#ff0000;
                padding:20px;
                position: relative;
                top: -4px;
                text-align:center;
                }
            `}</style>
            </div>
        )
    }
}
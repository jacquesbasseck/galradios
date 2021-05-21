import React, { Component } from 'react'
import firebase from 'firebase'
import config from '../firebase'
import ListRadios from './ListRadios';

class Home extends Component {

    constructor() {
        super()

        this.state = {
            listRadios: []
        }
        if (firebase.apps.length === 0) {
            firebase.initializeApp(config)
        }
    }

    componentWillMount() {
        const radioRef = firebase.database().ref('radio')
        radioRef.once('value').then(snapshot => {
            this.setState({
                listRadios: snapshot.val()
            })
        })
    }

    componentWillUnmount() {
        
    }

    handleClick = () => {

        fetch("/.netlify/functions/hello")
            .then(response => {
                return response.json()
            }).then(json => {
                console.log(json)
            })

    }

    render() {

        return (
            <>
                <ListRadios list={this.state.listRadios} />
            </>
        )
    }
}

export default Home

import React, { Component } from "react"
import ReactJkMusicPlayer from 'react-jinke-music-player'
//import 'react-jinke-music-player/assets/index.css'
//import 'react-jinke-music-player/lib/styles/index.less'
import './player.css'

const options = {
    theme: 'dark',
    defaultPosition: {
        right: 100,
        bottom: 120,
    },
    mode: 'full',
    audioLists: [],
    autoPlayInitLoadPlayList: true,
    clearPriorAudioLists: true,
    showDownload: false,
    getContainer: function(){
        return document.querySelector('.maincontainer')
    }
}

class Play extends Component
{
    constructor() {
        super()
        this.audioInstance = null

    }

    state = {
        playing: false,
        params: {
            ...options,
            getAudioInstance: (instance) => {
                this.audioInstance = instance
            }
        }
    }

    render() {
        const radioData = this.props.radioData
        let sources = []
        if (radioData !== null) {
            sources = radioData.url.split(';')
        }

        const title = (radioData)? radioData.titre : null
        const name = (radioData) ? radioData.nom : null
        const description = (radioData) ? radioData.description : null
        const { params } = this.state
        params.audioLists = radioData ? [
            {
                name: radioData.nom,
                singer: radioData.title,
                cover: radioData.icon,
                musicSrc: sources[0],
            
            },
        ] : params.audioLists

        return (
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light senegal-titre">{ name }</h1>
                    <p className="lead text-muted senegal-titre fw-normal">{description}</p>
                    <p>
                        <ReactJkMusicPlayer
                            { ...params }
                        />
                    </p>
                </div>
                </div>
            </section>  
        )
    }
}

export default Play
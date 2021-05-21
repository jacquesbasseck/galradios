import React, { Component } from "react"

class Radio extends Component
{
    constructor() {
        super()
        this.state = {
            playing: false
        }
    }
    
    render() {
        const radioData = this.props.radioData
        return (
            <div className="col mb-5">
                <div className="card shadow-sm mw-100" onClick={this.props.click}>
                    <img src={radioData.icon} alt={radioData.nom} title={radioData.nom} height={50} />
                    <div className="card-body" title={radioData.nom}>
                        <div className="fs-6" title={radioData.nom}><p className="text-break">{radioData.nomcourt}</p></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Radio;

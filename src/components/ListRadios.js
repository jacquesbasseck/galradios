import React, { Component, Fragment } from "react"
import Radio from './Radio'
import './ListRadios.css'
import Play from './Play'

class ListRadios extends Component
{
    constructor () {
        super()
        this.state = {
            currentRadio: null 
        }
    }

    handleClick = (info) => {
        this.setState({currentRadio: info})
    }

    render() {
        const list = this.props.list
        return (
            <Fragment>
                
                <Play radioData={this.state.currentRadio} />

                <div className="container ListRadios">
                    <div className="row row-cols-auto">
                        {Object.keys(list).map(key => {
                            return (
                                <Radio key={key} id={key} radioData={list[key]} click={ () => this.handleClick(list[key])} />
                            )
                        })}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ListRadios
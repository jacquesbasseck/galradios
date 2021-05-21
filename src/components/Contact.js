import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {

    constructor(props) {

        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            message: '',
            mail: {
                sent: false,
                isSending: false,
                response: ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {

        this.setState({ [e.target.name]: e.target.value })

    }

    handleSubmit(e) {

        e.preventDefault()

        this.setState({
            mail: {
                sent: false,
                isSending: true,
                response: ''
            }
        })

        const data = this.state
        fetch("/.netlify/functions/mail", {
            method: 'POST',
            body: JSON.stringify({
                ...data
            })
        })
        .then(response => {
            if (response.ok) {
                this.setState({
                    firstname: '',
                    lastname: '',
                    email: '',
                    message: '',
                    mail: {
                        sent: true,
                        isSending: false,
                        response: 'success'
                    }
                })
            }
            else {
                this.setState({
                    mail: {
                        sent: false,
                        isSending: false,
                        response: 'error'
                    }
                })
            }

        })
    }

    render() {
        return (
            <div className="form-container">
                <div className="title">
                    <h1 className="senegal-titre">Contactez-nous en remplissant ce formulaire</h1>
                </div>
                {(
                this.state.mail.response === 'success' && (
                    <div className="alert alert-success" role="alert">
                        Votre message a été envoyé !
                    </div>
                ))
                }

                {(
                    this.state.mail.response === 'error' && (
                        <div className="alert alert-danger" role="alert">
                            Il y a une erreur lors de l'envoi de votre message !
                        </div>
                    ))
                }

                <form onSubmit={this.handleSubmit} className="form-floating">
                    <fieldset disabled={this.state.mail.isSending}>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                id="firstname"
                                name="firstname"
                                placeholder="Khadidiatou"
                                value={this.state.firstname}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="firstname" className="form-label senegal-titre">Prénom</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                id="lastname"
                                name="lastname"
                                placeholder="GUEYE"
                                value={this.state.lastname}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="lastname" className="form-label senegal-titre">Nom</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                className="form-control form-control-lg"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="name@example.com"
                                required={true}
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="email" className="form-label senegal-titre">E-mail</label>
                        </div>

                        <div className="form-floating mb-3">
                            <textarea
                                className="form-control"
                                placeholder="Ecrire le message ici"
                                id="message"
                                name="message"
                                rows={10}
                                value={this.state.message}
                                onChange={this.handleChange}
                                style={{height: "300px"}}
                            >
                            </textarea>
                            <label htmlFor="message" className="form-label senegal-titre">Message</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg senegal-titre">Envoyer</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Contact;

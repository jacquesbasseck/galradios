import React, { Component } from 'react';
import './About.css'

class About extends Component {

    render() {

        return (
            <div className="about">
                <h1 className="senegal-titre">A propos du site</h1>
                <p className="senegal-titre">Ce site est conçu et développé par un sénégalais habitant à l'étranger.
                    N'arrivant pas à trouver un moyen simple, facile, gratuit et sans publicités de rester connecter et d'avoir les dernieres nouvelles grâce au moyen de communication le plus répandu au pays de la "téranga" c'est-à-dire la radio.
                    Il a ainsi créé ce site regroupant toutes les meilleures radios du Sénégal et d'ailleurs.
                </p>
                <p className="senegal-titre">
                    Ce site permet d'écouter les chaines de radio les plus populaires du pays. Que ce soit pour écouter de la musique sénégalaise notamment le fameux "Mbalakh" ou par écouter les meilleures informations vous êtes au bon endroit.
                    Il ne nécessite ni de paiement ni d'inscription pour écouter une radio. Il vous suffit de cliquer sur une chaine.
                    Le fonctionne également sans publicités. Vous ne serez plus importunés par des publicités incessantes qui vous coupent des fois au milieu d'une chanson ou d'une information intéressante.
                </p>
                <p className="senegal-titre">
                    Le site est en phase de développement donc il se peut que vous n'y trouviez pas votre chaine de radio préférée.
                    Dans ce cas n'hésitez pas à nous envoyer un message contenant toutes les informations relatives à celle-ci pour que nous puissions l'y intégrer.
                    Vous pouvez nous envoyer vos message à partir de l'onglet "Contact" en y remplissant le formulaire affiché.
                    Vous messages me permettront d'apporter des améliorations.
                </p>
                <p className="senegal-titre">
                    Si vous constatez un bug sur le site envoyez-nous également un message via le formulaire de l'onglet "Contact". N'oubliez de mettre une description détaillée du problème rencontré.
                    Cela nous permettra de corrige de le corriger dans les meilleurs délais.
                </p>
                <p className="senegal-titre">
                    Nous vous souhaitons une bonne écoute !
                </p>
            </div>
        )
    }    
}

export default About;

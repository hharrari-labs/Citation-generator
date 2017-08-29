import React from 'react';
// Les données des citations 
import citations from '../citations'
// le component qui gère l'affichage dynamique du paragraphe avec la citation et l'auteur
import Citation from './citation'

class App extends React.Component {
	
	// Init su state
	state = {};

	// Action sur le state avant chargement de la page : appel à la function genererCitation.
	componentWillMount() {
		this.genererCitation()
	}

	// Function qui appel des citations en mode random.
	genererCitation = event => {
		// On transforme les citations en array. 
		const keyArray = Object.keys(citations)
		// On génére au hasard une clé de notre tableau de citation.
		const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)]
		// On vérifie si nous ne générons pas la même citation.
		if (this.state.citation === citations[randomKey].citation) {
			this.genererCitation()
			return
		}
		// on Set le state avec la citation.
		this.setState(citations[randomKey])
	}

	// On créer l'event sur l'action Onclick du button et on passe la valeur du state au component Citation.
	render(){
		return(
			 <div>
			 	<Citation details={this.state} />
			 	<button onClick={e => this.genererCitation(e)} >Une autre citation !</button>
			 </div>
			)
	}
}

export default App;
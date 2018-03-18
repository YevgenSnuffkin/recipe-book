import React from 'react'
import { connect } from 'react-redux'
import Ingridients from '../components/Ingridients'
import { newSubmitted, editIngridient, deleteIngridient, toggleEditing } from '../actions/'

//contains all ingridients + editing delete fields

const IngridientsContainer = ({ newSubmitted, fields, allIngridients, deleteIngridient, editIngridient, toggleEditing }) => (
  	<Ingridients
  		handleSubmit = { (ingridient) => newSubmitted(ingridient) }
  		allIngridients = { allIngridients }
  		deleteIngridient = { (id) => deleteIngridient(id)}
  		editIngridient = { (item) => editIngridient(item) }
  		toggleEditing = { (id) => toggleEditing(id) }
  	/>
)

const mapStateToProps = (state) => {
	return {
		allIngridients : state.ingridients.totalIngridients	
	}
}


export default connect(
	mapStateToProps,
	{ newSubmitted, editIngridient, deleteIngridient, toggleEditing },
)( IngridientsContainer )
import React from 'react';

import '../stylesheets/ingridients.css'

const Ingrients = ({ handleSubmit, allIngridients, deleteIngridient, editIngridient, toggleEditing }) => {
  
  let ingridientName, newName
	 	
  const onSubmit = e => {
    e.preventDefault()
  	//field must not be empty 
  	if(ingridientName.value === ""){
  		   alert("field cannot be emty")
  	}
  	else{
  			handleSubmit({ 'name':ingridientName.value, 'editing': false })
  	}
  }

  const  onSubmitEdit = e => {
    e.preventDefault()
  	//field must not be empty 
  	if(newName.value === ""){
  		   alert("field cannot be emty")
  	}
  	else{
  			editIngridient(newName.value)
  	}
  }

  let Edit = ({editing}) => {
  	if(editing){
  		return (  	
		    <form onSubmit = { onSubmitEdit }>
		      <input type = 'text' placeholder='Enter New Name'
		        ref = { el => newName = el } />
		      <button className="pure-button pure-button-primary">Submit</button>
		    </form>  
	  	)
  	}

  	else{
	  	return(
	  		<div></div>
	  	)
  	}
  }


  const ingridients = allIngridients.map(item => 
  	<li key = { item.name }>{item.name}
  	<button className="pure-button buttonEditable" onClick = { () => deleteIngridient(item) }>
      <i className="fas fa-trash"></i>
      Delete
    </button>
    
    <button className="pure-button buttonEditable" onClick = { () => toggleEditing(item.name) }>
      <i className="fas fa-edit"></i>
      Edit
    </button>
  	<Edit editing = { item.editing } />
  	</li>)
  
  return (
  	<div className="whiteWrapper"> 
  	<ul>{ ingridients }</ul>
    <div className="pure-form">
    <form onSubmit = { onSubmit }>
      <input type = 'text' placeholder='Enter Your Ingrients'
        ref = { el => ingridientName = el } />
      <button className="pure-button pure-button-primary">Submit</button>
    </form>
    </div>
    </div>
  )
}

export default Ingrients
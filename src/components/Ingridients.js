import React from 'react';

import '../stylesheets/new.css'

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
		      <button>Submit</button>
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
  	<button onClick = { () => deleteIngridient(item) } >Delete</button>
  	<button onClick = { () => toggleEditing(item.name) } >Edit</button>
  	<Edit editing = { item.editing } />
  	</li>)
  
  return (
  	<div className="ingridient-list"> 
  	<ul>{ ingridients }</ul>
    <form onSubmit = { onSubmit }>
      <input type = 'text' placeholder='Enter Your Ingrients'
        ref = { el => ingridientName = el } />
      <button>Submit</button>
    </form>
    </div>
  )
}

export default Ingrients
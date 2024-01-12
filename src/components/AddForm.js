import React from 'react';

function AddForm() {
    
  return (
    
        
        <form className='add-form'>
    
    <div className='form-control'>

    <label for ="name"> Todo </label>

      <input type="text" name="name" placeholder="Ajouter un TODO"/>

    </div>
       
    
    <div className='form-control'>

        <label for = "jourHeure">
            Jour & Heure
        </label>
      <input type="text" name="jourHeure" placeholder="Jour & Heure"/>
      
    </div>
    <div className='form-control-check'>
        <label for="check"> Ajouter un rappel </label>
        <input type = "checkbox" name = "check">

        </input>
    </div>

    <div className='form-control'>

    <input type ="submit" className='btn btn-block' value='enregistrer'>
   

    </input>
    </div>
</form>

  )
}

export default AddForm;
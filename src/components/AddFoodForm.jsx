import { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
// To start using the pre-made Ant Design components we must first import them:
import { Card, Col, Button } from 'antd';
function AddFoodForm({newFood}) {
//Set STATES - initial form states
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

//Submit Handler for Form (onSubmit={handleSubmit})
    const handleSubmit = event => {
        event.preventDefault()
      // setter(value)  
       


      // setFoods ()
    
 newFood(previousValue => {return [...previousValue, {name,calories,image,servings}]}) 

 setName('')
 setImage('')
 setCalories(0)
 setServings(0)


      }
return(
<div id="AddFoodForm" class="App">
<form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
    <label>Name:
    <input value={name} onChange={e => setName(e.target.value)} type="text" />
    </label>
    <label>Image:
    <input value={image} onChange={e => setImage(e.target.value)} type="text" />
    </label>
    <label>Calories:
    <input value={calories} onChange={e => setCalories(e.target.value)} type="number" />
    </label>
    <label>Servings:
    <input value={servings} onChange={e => setServings(e.target.value)} type="number"/>
    </label>
    <button type='submit'  >Add Food</button>
</form>
</div>
) 
}


export default AddFoodForm
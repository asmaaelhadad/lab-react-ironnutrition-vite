import { useState } from 'react'
import './App.css'
// To start using the pre-made Ant Design components we must first import them:
import { Card, Row, Col, Divider, Input, Button } from 'antd'
import foods from './foods.json'
import FoodBox from './components/FoodBox'
function App() {
  const [foodsState, setFoods] = useState(foods)
  return (
    <div className="App">
      {/* Display Add Food component here */}
      <Button> Hide Form / Add New Food </Button>
      {/* Display Search component here */}
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsState.map((food) => {
          return (
            <FoodBox foods={food}/>
          )
        })}
      </Row>
    </div>
  )
}
export default App
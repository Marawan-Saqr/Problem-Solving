import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';


const CounterApp = () => {

  // Component States
  const [count, setCount] = useState(0);


  // Increase Count
  const increaseCount = () => {
    if (count + 1 === 20) {
      alert("You Reached The Limit");
      setCount(0);
    } else {
      console.log(count + 1);
      setCount(count + 1);
    }
  }


  // Decrease Count
  const decreaseCount = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  }


  // Reset Counter To Zero
  const resetCounter = () => {
    setCount(0);
  }


  return (
    <div className='counter-app'>
      <Container maxWidth="lg">
        <h1>Counter App</h1>
        <Stack spacing={2} direction="row">
          <Button color="success" variant="contained" onClick={()=> increaseCount()}>+</Button>
          <Button variant="contained">{ count }</Button>
          <Button color="error" variant="contained" onClick={()=> decreaseCount()}>-</Button>
        </Stack>
        <Button color="secondary" variant="outlined" style={{marginTop: "10px"}} onClick={()=> resetCounter()}>Reset</Button>
      </Container>
    </div>
  )
}


export default CounterApp;
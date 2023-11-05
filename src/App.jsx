import { useState } from 'react'
import styled from 'styled-components'

// In Page CSS using the styled-components library
const MainContainer = styled.div`
/* Main Container Wrapper*/
`
const Container = styled.div`
/* Container For Increase, Decrease and Count Container */

`

const CountContainer = styled.div`
/* Our Count Number Container */

`
const Buttons = styled.button`
/* Buttons Inpage Styling */

`
const ResetContainer = styled.div`
/* Reset Counter Function */
`
function App() {
    // Count State
  const [count, setCount] = useState(0)

    const increaseCount = () => {
    // Function to increaseCount
    setCount(count + 1)
  }

  const decreaseCount = () => {
    // Function To Decrease Count
    if (count != 0) {
      setCount(count - 1)
    }
    else {
      console.log("Can't decrease Beyond 0")
    }
  }

  const resetCount = () => {
    // Resets Count to 0
    if (count != 0) {
      setCount(0)
    }
    else {
      console.log("Number already 0")
    }
  }
  return (
    <>
        <MainContainer>
      <Container>
        <Buttons onClick={decreaseCount}>-</Buttons>
          <CountContainer>
          {count}
          </CountContainer>
      <Buttons onClick={increaseCount}>+</Buttons>
      </Container>
      <ResetContainer>
      <Buttons onClick={resetCount}>Reset Button</Buttons>
        </ResetContainer>
      </MainContainer>
    </>
  )
}

export default App

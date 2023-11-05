import { useState } from 'react'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
const App = () => {
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
      toast("Can't decrease Below 0")
    }
  }

  const resetCount = () => {
    // Resets Count to 0
    if (count != 0) {
      setCount(0)
    }
    else {
      toast("Number already 0")
    }
  }
  return (
    <>
      {/* Toast Container */}
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
      {/* Counter App Container */}
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

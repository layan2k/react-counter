import { useState } from 'react'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// In Page CSS using the styled-components library
const MainContainer = styled.div`
/* Main Container Wrapper*/
  display: flex;
  flex-direction: column;
  width: 100vw;
  gap: 30px;
`
const Container = styled.div`
/* Container For Increase, Decrease and Count Container */
  color:"#fff";
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`

const CountContainer = styled.div`
/* Our Count Number Container */
  font-size: 40px;
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out ;
`
const Buttons = styled.button`
/* Buttons Inpage Styling */
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover{
    border-color: #646cff;
  }
  &:active{
    outline: 4px auto -webkit-focus-ring-color;
  }
  &:after{
    outline: none;
  }
`
const ResetContainer = styled.div`
/* Reset Counter Function */
  color:"#fff";
  display: flex;
  align-items: center;
  justify-content: center;
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

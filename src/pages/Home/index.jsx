import styled from 'styled-components'
import Msg from './home_component/msg'
import FormMsg from './home_component/formMsg'

const HomeContainer = styled.div`
  width: 50%;
  margin: auto;
  background: white;
  padding: 10px;
`

function Home() {
  return (
    <>
      <HomeContainer>
        <FormMsg />
        <Msg />
      </HomeContainer>
    </>
  )
}

export default Home

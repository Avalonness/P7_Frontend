import styled from 'styled-components'
import colors from '../../../../../utils/styles/colors'

const Container = styled.div`
  padding: 25px;
`

const Banner = styled.div`
  background: ${colors.secondary};
  margin: 30px auto;
  padding: 15px;
  font-size: 22px;
  width: 35%;
  text-align: center;
  color: white;
`

const Formulaire = styled.ul`
  text-align: center;
  & li {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    & div {
      width: 10%;
      background: ${colors.primary};
      padding: 5px;
      color: white;
      margin-right: 10px;
    }
    & textarea {
      height: 100%;
    }
  }
`

const InputForm = styled.input`
  height: 100%;
`

const ButtonValidation = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  background: ${colors.secondary};
  font-size: 18px;
  width: 15%;
  color: white;
  margin: 25px auto;
  &:active {
    background: ${colors.primary};
  }
`

function Login() {
  function logUser() {
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: document.querySelector('#logemail').value,
        password: document.querySelector('#logpassword').value,
      }),
    })
      .then((response) => response.json())
      .then(
        (data) =>
          localStorage.setItem('Token_Groupo', `Bearer ${data.accessToken}`),
        (window.location = '/home')
      )
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <Container>
      <Banner>Connexion</Banner>
      <Formulaire>
        <li>
          <div>Email</div>
          <form>
            <InputForm
              type="text"
              id="logemail"
              name="email"
              required
              placeholder="Email ..."
            />
          </form>
        </li>
        <li>
          <div>Password</div>
          <form>
            <InputForm
              type="password"
              id="logpassword"
              name="password"
              required
              placeholder="Password ..."
            />
          </form>
        </li>
      </Formulaire>
      <ButtonValidation onClick={() => logUser()}>Valider</ButtonValidation>
    </Container>
  )
}

export default Login

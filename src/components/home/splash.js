import styled from 'react-emotion'

export const SplashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: #4a2d92;
  background-image: radial-gradient(circle, #4a2d92, #301c6d);
`

export const Splash = styled.div`
  padding: 0 10px;
  color: #f7fff7;
  font-family: 'Avenir Next', sans-serif;
  max-width: 600px;
  text-align: right;

  p {
    max-width: 450px;
    margin-left: auto;
  }

  p span {
    color: #63dbe2;
  }
`

export const Title = styled.h1`font-size: 5rem;`

export const Period = styled.span`color: #ce63c1;`

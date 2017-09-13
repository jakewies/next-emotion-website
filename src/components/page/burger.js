import styled from 'react-emotion'
import PropTypes from 'prop-types'

const config = {
  height: '40px',
  width: '25px'
}

const BurgerContainer = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  height: ${config.height};
  width: ${config.width};
  cursor: pointer;
  z-index: 1;
`

const BurgerInner = styled.div`
  position: absolute;
  top: calc(${config.height}/2 - 2px);
  width: 100%;
  height: 2px;
  background-color: #8f8aac;
  cursor: pointer;
  z-index: 1;
  border-radius: 2px;

  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    background-color: #8f8aac;
    border-radius: 2px;
  }

  &:before {
    top: -8px;
  }

  &:after {
    bottom: -8px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const Burger = ({ handleClick }) =>
  <BurgerContainer onClick={handleClick}>
    <BurgerInner />
  </BurgerContainer>

Burger.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default Burger

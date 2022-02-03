import logo from '../assets/logo-apiki.png';
import { HeaderContainer } from './HeaderStyle';

function Header () {
  return (
    <div>
      <HeaderContainer>
        <img src={logo} alt="" />
      </HeaderContainer>
    </div>    
  )
}

export default Header;
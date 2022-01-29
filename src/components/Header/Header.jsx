import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Logo from '../Logo/Logo';

import './Header.scss';

export default function Header (props) {
  return (
      <header className="Header">
        <div className="Header__list">
          <Logo/> 
          <HeaderMenu basket={props.basket}/>
        </div>
      </header>
  );
}

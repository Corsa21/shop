import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Logo from '../Logo/Logo';

import './HeaderList.scss';

export default function HeaderList() {
  return (
      <header className="Header">
        <div className="HeaderList">
          <Logo/> 
          <HeaderMenu/>
        </div>
      </header>
  );
}

import { GrSolaris } from "react-icons/gr";

import './Header.scss';
const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <GrSolaris size={50} />
          <li>Sistema Solar</li>
          <li>Saber mais</li>
        </ul>
      </nav>
    </div>
  )
}



export default Header

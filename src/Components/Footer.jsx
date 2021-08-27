import SideButtonInput from './SideButtonInput'
import { 
  faInstagram, 
  faCcVisa, 
  faCcMastercard, 
  faCcAmex,
  faCcPaypal
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="content-footer">
      <SideButtonInput />
      <div className="icons-flex">
        <FontAwesomeIcon icon={faInstagram} className="instacon" />
        <div>
          <FontAwesomeIcon icon={faCcVisa} className="instacon" />
          <FontAwesomeIcon icon={faCcMastercard} className="instacon" />
          <FontAwesomeIcon icon={faCcAmex} className="instacon" />
          <FontAwesomeIcon icon={faCcPaypal} className="instacon" />
        </div>
      </div>
      <div className="copyright">
        <p>© {year}, Don Silvestre.</p>
      </div>
    </footer>
  )
}

export default Footer
import SideButtonInput from '/src/components/SideButtonInput.vue'
import { 
  faInstagram, 
  faCcVisa, 
  faCcMastercard, 
  faCcAmex,
  faCcPaypal
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer class="content-footer">
      <SideButtonInput />
      <div class="icons-flex">
        <FontAwesomeIcon icon={faInstagram} class="instacon" />
        <div>
          <FontAwesomeIcon icon={faCcVisa} class="instacon" />
          <FontAwesomeIcon icon={faCcMastercard} class="instacon" />
          <FontAwesomeIcon icon={faCcAmex} class="instacon" />
          <FontAwesomeIcon icon={faCcPaypal} class="instacon" />
        </div>
      </div>
      <div class="copyright">
        <p>© {year}, Don Silvestre.</p>
      </div>
    </footer>
  )
}
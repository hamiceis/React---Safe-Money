import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Copy, FooterStyled,  Social_li,  Social_list} from './styled.Footer'

export function Footer () {
  return (
    <FooterStyled>
      <Social_list>

        <Social_li>
          <FaFacebook />
        </Social_li>

        <Social_li>
          <FaInstagram />
        </Social_li>

        <Social_li>
          <FaLinkedin />
        </Social_li>

      </Social_list>
      <Copy>
        <span>Safe Money </span>
        &copy; 2022
      </Copy>
    </FooterStyled>
  )
}
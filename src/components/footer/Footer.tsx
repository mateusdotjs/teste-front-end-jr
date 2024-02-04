import "./footer.scss";
import Visa from "../../assets/icons/footer/visa.svg";
import Elo from "../../assets/icons/footer/elo.svg";
import Alelo from "../../assets/icons/footer/alelo.svg";
import Diners from "../../assets/icons/footer/dinners.svg";
import Ifood from "../../assets/icons/footer/ifood.svg";
import Mastercard from "../../assets/icons/footer/mastercard.svg";
import Pix from "../../assets/icons/footer/pix.svg.svg";
import Amex from "../../assets/icons/footer/amex.svg";
import Ticket from "../../assets/icons/footer/ticket.svg";
import Sodexo from "../../assets/icons/footer/sodexo.svg";
import Vtex from "../../assets/icons/footer/vtex.svg?react";
import Econverse from "../../assets/icons/footer/econverse.svg?react";
import Facebook from "../../assets/icons/footer/facebook.svg?react";
import Instagram from "../../assets/icons/footer/instagram.svg.svg?react";
import Youtube from "../../assets/icons/footer/youtube.svg?react";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="container">
        <div className="footer-top">
          <div className="footer-list footer-about">
            <p className="footer-list-title">Sobre nós</p>
            <ul>
              <li>Conheça</li>
              <li>COMO COMPRAR</li>
              <li>Indicação e Desconto</li>
            </ul>
          </div>

          <div className="footer-list footer-info">
            <p className="footer-list-title">INFORMAÇÕES ÚTEIS</p>
            <ul>
              <li>FALE CONOSCO</li>
              <li>DÚVIDAS</li>
              <li>Prazos de Entrega</li>
              <li>Formas de Pagamento</li>
              <li>Política de privacidade</li>
              <li>Trocas e Devoluções</li>
            </ul>
          </div>

          <div className="footer-list footer-payment">
            <p className="footer-list-title">FORMAS DE PAGAMENTO</p>
            <ul>
              <li>FALE CONOSCO</li>
              <li>DÚVIDAS</li>
              <li>Prazos de Entrega</li>
              <li>Formas de Pagamento</li>
              <li>Política de privacidade</li>
              <li>Trocas e Devoluções</li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <p>Cadastre-se e Receba nossas novidades e promoções</p>
            <p>
              Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
              lorem ipsum
            </p>
            <div>
              <input type="text" />
              <button>OK</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright © 2019. Todos os direitos reservados. Todas as marcas e
            suas imagens são de propriedade de seus respectivos donos.<br/>É vedada
            a reprodução, total ou parcial, de qualquer conteúdo sem expressa
            autorização.
          </p>
          <div>
            <Econverse />
            <Vtex />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

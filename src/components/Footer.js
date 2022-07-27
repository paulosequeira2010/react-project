import React from 'react'
import '../App.css';

export default function Footer() {
    return (


        <>

            <footer footer className="footer-container" >
                <div className="footer-section-one">
                    <div className="footer-follow-us">
                        <h3>Follow us!</h3>
                        <p>Siga-nos nas nossas redes de sociais para ficar a par de todas as novidades! Quer revender o seu produto no meu site ? Entre em contacto!</p>
                        <div className="footer-social-links">
                            <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter" /></a>
                            <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></a>
                            <a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube" /></a>
                            <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></a>
                            <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                    <div className="footer-get-in-touch">
                        <h3>Get In Touch</h3>
                        <a href id="seeLocation">
                            <p><i className="fa fa-map-marker-alt" />Sintra, Lisboa</p>
                        </a>
                        <p><i className="fa fa-phone-alt" />+351 912345678</p>
                        <p><i className="fa fa-envelope" /><a href="mailto:shop@guilima.com" target="_blank">shop@guilima.com</a>
                        </p>
                        <p><i className="far fa-clock" />All Day &amp; All Night</p>
                    </div>
                    <div className="container-footer-servicos" id="container-footer-servicos-resp">
                        <div className="footer-servicos">
                            <h3>Serviços</h3>
                            <a href="#">Condições Gerais</a>
                            <a href="#">Política de Privacidade</a>
                            <a href="#">Reclamação</a>
                            <a href="#">Trocas &amp; Devoluções</a>
                            <a href="#">Torne-se um revendedor</a>
                        </div>
                    </div>
                    <div className="container-footer-servicos" id="suporte-clientes">
                        <div className="footer-servicos">
                            <h3>Suporte ao Cliente</h3>
                            <a href="#">Envios e Prazos</a>
                            <a href="#">Tracking</a>
                            <a href="#">Patrocínios e Colaborações</a>
                            <a href="#">Apoio ao Cliente</a>
                            <a href="#">Opiniões</a>
                        </div>
                    </div>
                    {/* <div className="footer-col-galeria">
                        <div className="footer-galeria">
                            <h3>Modo de Pagamento</h3>
                            <div className="footer-galeria-one">
                                <img src="Media/MetodoPagamento/amex_sm.png" alt="Image" />
                                <img src="Media/MetodoPagamento/mastercard_sm.png" alt="Image" />
                                <img src="Media/MetodoPagamento/mbway_sm.png" alt="Image" />
                            </div>
                            <div className="footer-galeria-two">
                                <img src="Media/MetodoPagamento/paypal_sm.png" alt="Image" />
                                <img src="Media/MetodoPagamento/visa_sm.png" alt="Image" />
                                <img src="Media/MetodoPagamento/apple_paysm.png" alt="Image" />
                            </div>
                        </div>
                        <div className="footer-galeria">
                            <h3>Modo de Entrega</h3>
                            <div className="footer-galeria-one">
                                <img src="Media/MetodoTransporte/ups_sm.png" alt="UPS Image" />
                                <img src="Media/MetodoTransporte/gls_sm.png" alt="GLS Image" />
                                <img src="Media/MetodoTransporte/fedex_sm.png" alt="FEDEX Image" />
                            </div>
                            <div className="footer-galeria-two">
                                <img src="Media/MetodoTransporte/dhl.png" alt="DHL Image" />
                                <img src="Media/MetodoTransporte/postnord_sm.png" alt="POSTNORD Image" />
                                <img src="Media/MetodoTransporte/xpo_sm.png" alt="POSTNORD Image" />
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="footer-servicos-responsive">
                    <div className="container-footer-servicos">
                        <div className="footer-servicos">
                            <h3>Serviços</h3>
                            <a href="#">Condições Gerais</a>
                            <a href="#">Política de Privacidade</a>
                            <a href="#">Reclamação</a>
                            <a href="#">Trocas &amp; Devoluções</a>
                            <a href="#">Torne-se um revendedor</a>
                        </div>
                    </div>
                    <div className="container-footer-servicos">
                        <div className="footer-servicos">
                            <h3>Suporte ao Cliente</h3>
                            <a href="#">Envios e Prazos</a>
                            <a href="#">Tracking</a>
                            <a href="#">Patrocínios e Colaborações</a>
                            <a href="#">Apoio ao Cliente</a>
                            <a href="#">Opiniões</a>
                        </div>
                    </div>
                </div>
                <div className="footer-responsive">
                    <div className="container-footer-servicos" id="container-footer-servicos-resp">
                        <div className="footer-servicos">
                            <h3>Suporte ao Cliente</h3>
                            <a href="#">Envios e Prazos</a>
                            <a href="#">Tracking</a>
                            <a href="#">Patrocínios e Colaborações</a>
                            <a href="#">Apoio ao Cliente</a>
                            <a href="#">Opiniões</a>
                        </div>
                    </div>
                    {/* <div className="footer-galeria">
                        <h3>Modo de Pagamento</h3>
                        <div className="footer-galeria-one">
                            <img src="Media/MetodoPagamento/amex_sm.png" alt="Image" />
                            <img src="Media/MetodoPagamento/mastercard_sm.png" alt="Image" />
                        </div>
                        <div className="footer-galeria-one">
                            <img src="Media/MetodoPagamento/paypal_sm.png" alt="Image" />
                            <img src="Media/MetodoPagamento/mbway_sm.png" alt="Image" />
                        </div>
                        <div className="footer-galeria-two">
                            <img src="Media/MetodoPagamento/visa_sm.png" alt="Image" />
                            <img src="Media/MetodoPagamento/apple_paysm.png" alt="Image" />
                        </div>
                    </div> */}
                    {/* <div className="footer-galeria">
                        <h3>Modo de Entrega</h3>
                        <div className="footer-galeria-one">
                            <img src="Media/MetodoTransporte/ups_sm.png" alt="UPS Image" />
                            <img src="Media/MetodoTransporte/gls_sm.png" alt="GLS Image" />
                        </div>
                        <div className="footer-galeria-one">
                            <img src="Media/MetodoTransporte/fedex_sm.png" alt="FEDEX Image" />
                            <img src="Media/MetodoTransporte/dhl.png" alt="DHL Image" />
                        </div>
                        <div className="footer-galeria-two">
                            <img src="Media/MetodoTransporte/postnord_sm.png" alt="POSTNORD Image" />
                            <img src="Media/MetodoTransporte/xpo_sm.png" alt="POSTNORD Image" />
                        </div>
                    </div> */}
                </div>
                <div className="footer-section-two">
                    <div className="container footer-newsletter">
                        <p>Leia os nossos termos e condições para receber boletins informativos aqui.</p>
                        <div className="row form">
                            <div className="col-sm-4">
                                <input className="form-control" placeholder="Nome" />
                            </div>
                            <div className="col-sm-4">
                                <input className="form-control" placeholder="Mail" />
                            </div>
                            <div className="col-sm-4">
                                <button className="btn btnAddSkate">Subscrever</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-bottom-footer">
                    <div className="copy-text">
                        <p>© Desenvolvido por <a href="https://www.linkedin.com/in/paulo-sequeira-928b59b1/" target="_blank">Paulo Sequeira</a>.</p>
                    </div>
                </div>
            </footer>

        </ >
    )
}

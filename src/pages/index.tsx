import Head from 'next/head'

import Franqueado from '../components/Franqueado';

export default function Home() {
  return (

    <>
      <header>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-6 col-md-6 col-xl-3">
              <a href="#"><img src="/logo.png" alt="logo vertex"/></a>
            </div>

            <div className="col-12 col-xl-6 d-md-none d-xl-block">
              <div className="menu">
                <ul>
                  <li><a href="#a-vertex">A Vertex</a></li>

                  <li><a href="#diferenciais">Diferenciais </a></li>

                  <li><a href="#a-vertex-na-sua-cidade">Vertex na sua cidade</a></li>
                </ul>
              </div>
            </div>

            <div className="col-6 col-md-6 col-xl-3 d-sm-block menu-button">
              <a href="#seja-um-franqueado" className="button-primary">Seja um Franqueado</a>
            </div>

            {/* <div className="col-6 col-md-3 text-right d-md-block d-xl-none">
              <a href="#menu" className="menu-mobile">
                  <svg width="26px" height="16px" viewBox="0 0 26 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="home" transform="translate(-408.000000, -56.000000)" fill="#000">
                              <rect id="Rectangle1" x="408" y="56" width="26" height="2"></rect>
                              <rect id="Rectangle2" x="408" y="63" width="26" height="2"></rect>
                              <rect id="Rectangle3" x="408" y="70" width="26" height="2"></rect>
                          </g>
                      </g>
                  </svg>
              </a>
            </div>  */}
          </div>
        </div>
      </header>

      <div className="bg-banner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-7 offset-xl-6">
                <div className="rede-franquias">
                  <p>A Vertex ?? a primeira</p>

                  <img src="/rede-franquias.png" alt="rede de franquias"/>

                  <div>
                    <p>franquias <span>especializada</span><br/> em <strong>condom??nios<br/> do Brasil!</strong></p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="a-vertex">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>A Vertex ?? a <strong>primeira rede</strong> de franquias especializada em <strong>condom??nios do Brasil!</strong></p>
            </div>
          </div>
        </div>
      </div>

      <div className="area-white" id="a-vertex">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>Somos uma <strong>rede de higieniza????o profunda</strong> presente em <strong>mais de 20 cidades brasileiras</strong>, que tem como objetivo proporcionar bem-estar e a qualidade de vida a moradores, s??ndicos e administradores de condom??nios por meio de <strong>limpeza e cuidado com o ambiente</strong>.</p>

              <p>Nossas t??cnicas s??o desenvolvidas e pensadas para garantir <strong>maquin??rios de ??ltima gera????o</strong>, al??m do forte investimento em tecnologia para oferecer produtos sempre a frente do tempo. Oferecemos os melhores servi??os em limpeza, assim como softwares, e contamos com o uso de um <span>aplicativo pr??prio Vertex</span>, desenvolvido para <span>gerenciamento de pessoas e processos.</span> </p>

              <p className="special">Mais do que servi??os, entregamos valor agregado ao condom??nio.</p>

              <div className="valores">
                <div className="box-valores">
                  <div className="box-img">
                    <img src="/foco.jpg" alt="foco no cliente"/>
                  </div>

                  <div className="box-text">
                    <h3>Foco no cliente</h3>

                    <p>Criamos uma estrutura de confian??a, mantendo a postura ??ntegra e posicionada na solu????o, com-partilhamento de causas e fluidez na comunica????o.</p>
                  </div>
                </div>

                <div className="box-valores">
                  <div className="box-img">
                    <img src="/equipe.jpg" alt="Equipe"/>
                  </div>

                  <div className="box-text">
                    <h3>Equipe</h3>

                    <p>Time especializado, treinado para promover vis??o anal??tica de todas as situa????es e desenvolvimentos de solu????es.</p>
                  </div>
                </div>

                <div className="box-valores">
                  <div className="box-img">
                      <img src="/integridade.jpg" alt="Integridade"/>
                  </div>

                  <div className="box-text">
                    <h3>Integridade</h3>

                    <p>Coer??ncia, honestidade, equil??brio e previsibilidade. Rela????o sincera e com base no impacto de a????es e di??logo.</p>
                  </div>
                </div>

                <div className="box-valores">
                  <div className="box-img">
                      <img src="/dinamismo.jpg" alt="Dinamismo"/>
                  </div>

                  <div className="box-text">
                    <h3>Dinamismo</h3>

                    <p>Acompanhamos as tend??ncias do mercado. A Vertex oferece servi??os integrados, flex??veis e din??-micas de proatividade, adaptando-se ??s necessidades dos clientes.</p>
                  </div>
                </div>

                <div className="box-valores">
                  <div className="box-img">
                      <img src="/inovacao.jpg" alt="Inova????o"/>
                  </div>

                  <div className="box-text">
                    <h3>Inova????o</h3>

                    <p>Pesquisa e estudo para acompanhar as tecnologias que surgem, redesenhando e atualizando continuamente nossos processos e metodologias.</p>
                  </div>
                </div>

                <div className="box-valores">
                  <div className="box-img">
                      <img src="/excelencia.jpg" alt="Excel??ncia"/>
                  </div>

                  <div className="box-text">
                    <h3>Excel??ncia</h3>

                    <p>Qualidade na entrega e em todos as etapas de contrata????o, buscando sempre aperfei??oamento cont??nuo focado em resultados.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="area-video">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <img src="/exemplo-video.jpg" alt=""/>

              <div className="golden-base">
                <img src="/golden-base.jpg" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="area-white" id="diferenciais">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="area-title">
                <img src="/equipamento.png" alt=""/>

                <h2><img src="/golden-title.png" alt=""/> <br/>
                  a Vertex?
                </h2>
              </div>
              
              <div className="box-vertex">
                <div className="up-box">
                  <div className="img-ball first">

                    <div className="text-ball">
                      <p>Ponto eletr??nico para monitoramento da equipe por geolocaliza????o</p>
                    </div>
                  </div>

                  <div className="img-ball second">
                    <div className="text-ball">
                      <p>Projeto de implanta????o personalizado para o condom??nio</p>
                    </div>
                  </div>

                  <div className="img-ball third">
                    <div className="text-ball">
                      <p>Gest??o de desempenho in loco e plataformas de gest??o</p>
                    </div>
                  </div>

                  <div className="img-ball fourth">
                    <div className="text-ball">
                      <p>Cronograma de atividades de limpeza</p>
                    </div>
                  </div>

                  <div className="img-ball fifth">
                    <div className="text-ball">
                      <p>Feedback mensal com apresenta????o de relat??rios</p>
                    </div>
                  </div>
                </div>

                <div className="down-box">
                  <div className="img-ball first">
                    <div className="text-ball">
                      <p>Know-how em limpeza e uso estrat??gico de m??quinas</p>
                    </div>
                  </div>

                  <div className="img-ball second">
                    <div className="text-ball">
                      <p>Aplicativos exclusivos <br/>Vertex</p>
                    </div>
                  </div>

                  <div className="img-ball third">
                    <div className="text-ball">
                      <p>Inova????o por meio de pesquisa e estudos</p>
                    </div>
                  </div>

                  <div className="img-ball fourth">
                    <div className="text-ball">
                      <p>Co-gerenciamento da franqueadora com o franqueado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Franqueado />

      <div className="seja-franqueado">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <img src="/seja-franqueado.png" alt="Seja um franqueado"/>
            </div>
          </div>
        </div>
      </div>

      <div className="area-white">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h4>A Vertex ?? <span>especialista</span> em limpeza para todos os tipos de <span>condom??nios!</span></h4>

              <p>Juntamos nossos melhores pontos e <strong>criamos uma metodologia ??nica</strong> no mercado, e a partir desta f??rmula decidimos ampliar nossa t??cnica e <strong>criar modelos de franquias.</strong></p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-golden">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <strong>Quer fazer parte dessa <span>hist??ria?</span> Conhe??a um pouco mais do nosso <span className="white-text">mundo.</span></strong>
            </div>
          </div>
        </div>
      </div>

      <div className="contato" id="seja-um-franqueado">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h5><strong>Preencha o formul??rio</strong> e<br/> entraremos em contato</h5>
            </div>

            <div className="col-12 col-xl-8 offset-xl-2">
              <form className="highlight">
                  <div className="row">

                    <div className="col-12 col-xl-6">
                      <input type="text" placeholder="Nome Completo" required/>
                    </div>

                    <div className="col-12 col-xl-6">
                      <input type="text" placeholder="E-mail" required/>
                    </div>

                    <div className="col-12 col-xl-6">
                      <input type="text" placeholder="Cidade de interesse" required/>
                    </div>

                    <div className="col-12 col-xl-6">
                      <input type="text" placeholder="Estado de interesse" required/>
                    </div>

                    <div className="col-12 col-xl-6">
                      <input type="text" placeholder="Telefone" required/>
                    </div>

                    <div className="col-12 col-xl-6 investimento">
                      <select>
                        <option>Capital de investimento</option>
                        <option value="R$ 5.000">R$ 5.000</option>
                        <option value="R$ 8.000">R$ 8.000</option>
                        <option value="R$ 10.000">R$ 10.000</option>
                        <option value="R$ 15.000">R$ 15.000</option>
                        <option value="R$ 20.000">R$ 20.000</option>
                      </select>

                      <img src="/arrow-input.png" alt=""/>
                    </div>

                    <div className="col-12">
                      <textarea name="" id="" placeholder="Deixe sua mensagem aqui..." required/>
                    </div>

                    <div className="col-12 text-center">
                      <button className="button-primary">Enviar</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-4">
                <div className="endere??o">
                  <div className="square">
                    <img src="/matriz-footer.png" alt=""/>
                  </div>

                  <div>
                    <p>R. Blumenau, 710 - Am??rica</p>
                    <p>Joinville - SC</p>
                    <p>CEP 89201-21</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-xl-4 text-center">
                <p>Vertex ?? 2021 All rights reserved.</p>
              </div>

              <div className="col-12 col-xl-4">
                <div className="redes-sociais">
                  <a href="#"><img src="/facebook.png" alt="Facebook vertex"/></a>

                  <a href="#"><img src="/instagram.png" alt="Instagram vertex"/></a>
                </div>
              </div>
            </div>
          </div>
        </footer>

    </>
  )
}

import Head from 'next/head'

export default function Home() {
  return (

    <>
      <header>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-6 col-xl-3">
              <a href="#"><img src="/logo.png" alt="logo vertex"/></a>
            </div>

            <div className="col-6 col-md-3 text-right d-md-block d-xl-none">
              <a href="#menu" className="menu-mobile">
                  <svg width="26px" height="16px" viewBox="0 0 26 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="home" transform="translate(-408.000000, -56.000000)" fill="#fff">
                              <rect id="Rectangle1" x="408" y="56" width="26" height="2"></rect>
                              <rect id="Rectangle2" x="408" y="63" width="26" height="2"></rect>
                              <rect id="Rectangle3" x="408" y="70" width="26" height="2"></rect>
                          </g>
                      </g>
                  </svg>
              </a>
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

            <div className="col-12 col-xl-3">
              <a href="#seja-um-franqueado" className="button-primary">Seja um Franqueado</a>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-banner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-7 offset-xl-6">
                <div className="rede-franquias">
                  <p>A Vertex é a primeira</p>

                  <img src="/rede-franquias.png" alt="rede de franquias"/>

                  <div>
                    <p>franquias <span>especializada</span><br/> em <strong>condomínios<br/> do Brasil!</strong></p>
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
              <p>A Vertex é a <strong>primeira rede</strong> de franquias especializada em <strong>condomínios do Brasil!</strong></p>
            </div>
          </div>
        </div>
      </div>

      <div className="area-white" id="a-vertex">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>Somos uma <strong>rede de higienização profunda</strong> presente em <strong>mais de 20 cidades brasileiras</strong>, que tem como objetivo proporcionar bem-estar e a qualidade de vida a moradores, síndicos e administradores de condomínios por meio de <strong>limpeza e cuidado com o ambiente</strong>.</p>

              <p>Nossas técnicas são desenvolvidas e pensadas para garantir <strong>maquinários de última geração</strong>, além do forte investimento em tecnologia para oferecer produtos sempre a frente do tempo. Oferecemos os melhores serviços em limpeza, assim como softwares, e contamos com o uso de um <span>aplicativo próprio Vertex</span>, desenvolvido para <span>gerenciamento de pessoas e processos.</span> </p>

              <p className="special">Mais do que serviços, entregamos valor agregado ao condomínio.</p>

              <div className="valores">
                <div className="box-valores">
                  <div className="box-img">
                    <img src="/foco.jpg" alt="foco no cliente"/>
                  </div>

                  <div className="box-text">
                    <h3>Foco no cliente</h3>

                    <p>Criamos uma estrutura de confiança, mantendo a postura íntegra e posicionada na solução, com-partilhamento de causas e fluidez na comunicação.</p>
                  </div>
                </div>

                <div className="box-valores">
                  <div className="box-img">
                    <img src="/equipe.jpg" alt="Equipe"/>
                  </div>

                  <div className="box-text">
                    <h3>Equipe</h3>

                    <p>Time especializado, treinado para promover visão analítica de todas as situações e desenvolvimentos de soluções.</p>
                  </div>
                </div>

                <div className="box-valores">
                  <div className="box-img">
                      <img src="/integridade.jpg" alt="Integridade"/>
                  </div>

                  <div className="box-text">
                    <h3>Integridade</h3>

                    <p>Coerência, honestidade, equilíbrio e previsibilidade. Relação sincera e com base no impacto de ações e diálogo.</p>
                  </div>
                </div>

                <div className="box-valores">
                  <div className="box-img">
                      <img src="/dinamismo.jpg" alt="Dinamismo"/>
                  </div>

                  <div className="box-text">
                    <h3>Dinamismo</h3>

                    <p>Acompanhamos as tendências do mercado. A Vertex oferece serviços integrados, flexíveis e dinâ-micas de proatividade, adaptando-se às necessidades dos clientes.</p>
                  </div>
                </div>

                <div className="box-valores">
                  <div className="box-img">
                      <img src="/inovacao.jpg" alt="Inovação"/>
                  </div>

                  <div className="box-text">
                    <h3>Inovação</h3>

                    <p>Pesquisa e estudo para acompanhar as tecnologias que surgem, redesenhando e atualizando continuamente nossos processos e metodologias.</p>
                  </div>
                </div>

                <div className="box-valores">
                  <div className="box-img">
                      <img src="/excelencia.jpg" alt="Excelência"/>
                  </div>

                  <div className="box-text">
                    <h3>Excelência</h3>

                    <p>Qualidade na entrega e em todos as etapas de contratação, buscando sempre aperfeiçoamento contínuo focado em resultados.</p>
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
                      <p>Ponto eletrônico para monitoramento da equipe por geolocalização</p>
                    </div>
                  </div>

                  <div className="img-ball second">
                    <div className="text-ball">
                      <p>Projeto de implantação personalizado para o condomínio</p>
                    </div>
                  </div>

                  <div className="img-ball third">
                    <div className="text-ball">
                      <p>Gestão de desempenho in loco e plataformas de gestão</p>
                    </div>
                  </div>

                  <div className="img-ball fourth">
                    <div className="text-ball">
                      <p>Cronograma de atividades de limpeza</p>
                    </div>
                  </div>

                  <div className="img-ball fifth">
                    <div className="text-ball">
                      <p>Feedback mensal com apresentação de relatórios</p>
                    </div>
                  </div>
                </div>

                <div className="down-box">
                  <div className="img-ball first">
                    <div className="text-ball">
                      <p>Know-how em limpeza e uso estratégico de máquinas</p>
                    </div>
                  </div>

                  <div className="img-ball second">
                    <div className="text-ball">
                      <p>Aplicativos exclusivos <br/>Vertex</p>
                    </div>
                  </div>

                  <div className="img-ball third">
                    <div className="text-ball">
                      <p>Inovação por meio de pesquisa e estudos</p>
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

      <div className="vertex-franqueados">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p>Encontre o <strong>franqueado</strong> mais perto de <span>você</span></p>

              <img src="/lupa-pesquisa.png" alt=""/>
            </div>
          </div>
        </div>
      </div>

      <div className="area-white franqueados" id="a-vertex-na-sua-cidade">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <img src="/pesquise-franqueados.png" alt="Pesquise nossos franqueados"/>

              <form>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="unidades">
                          <select>
                            <option className="title"><span>
                              Unidade
                              </span>
                            </option>

                            <option value="vertex guarapuava">vertex Guarapuava</option>
                            <option value="vertex">vertex</option>
                          </select>
                        </th>
                        
                        <th className="estados">
                          <select>
                            <option className="title"><span>
                              UF
                              </span>
                            </option>

                            <option value="sp">Sp</option>
                            <option value="sc">Sc</option>
                          </select>
                        </th>
                        <th>Telefone</th>
                        <th>E-Mail</th>
                        <th>Instagram</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

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
              <h4>A Vertex é <span>especialista</span> em limpeza para todos os tipos de <span>condomínios!</span></h4>

              <p>Juntamos nossos melhores pontos e <strong>criamos uma metodologia única</strong> no mercado, e a partir desta fórmula decidimos ampliar nossa técnica e <strong>criar modelos de franquias.</strong></p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-golden">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <strong>Quer fazer parte dessa <span>história?</span> Conheça um pouco mais do nosso <span className="white-text">mundo.</span></strong>
            </div>
          </div>
        </div>
      </div>

      <div className="contato" id="seja-um-franqueado">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h5><strong>Preencha o formulário</strong> e<br/> entraremos em contato</h5>
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
                <div className="endereço">
                  <div className="square">
                    <img src="/matriz-footer.png" alt=""/>
                  </div>

                  <div>
                    <p>R. Blumenau, 710 - América</p>
                    <p>Joinville - SC</p>
                    <p>CEP 89201-21</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-xl-4 text-center">
                <p>Vertex © 2021 All rights reserved.</p>
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

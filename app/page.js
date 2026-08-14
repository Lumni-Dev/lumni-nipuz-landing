// Landing do Nipuz — estrutura inspirada na idle-labs.com, com a identidade
// visual do app (paleta "ink" da Lumni, marca em Orbitron, desenho "célula").

const DOWNLOAD_WINDOWS = "/download/Nipuz-Setup-1.2.0.exe";
const PRICE = "19,90";
const TRIAL = "7 dias";
const VERSION = "v1.2.0";

// Rodapé da Lumni (assinatura fixa, igual ao lumni-landing)
const LUMNI_SITE = "https://lumni.dev.br";
const YEAR = new Date().getFullYear();
const LUMNI_SERVICOS = [
  "Desenvolvimento de sistemas e aplicativos",
  "Automação de processos",
  "Consultoria em tecnologia",
  "Cibersegurança",
  "Suporte em desenvolvimento",
];

function Icon({ name }) {
  return <i className={`bi bi-${name}`} aria-hidden="true" />;
}

/* ---------------- dados ---------------- */

const RECURSOS = [
  {
    icon: "incognito",
    title: "Isolamento real por conta",
    text: "Cada navegador roda em um processo próprio, com login, cookies e cache independentes. Nada vaza de uma conta para a outra.",
  },
  {
    icon: "briefcase",
    title: "Workspaces",
    text: "Organize seus navegadores em workspaces com cor e ícone. Trabalho, vendas, jogos: cada contexto no seu lugar.",
  },
  {
    icon: "grid-1x2",
    title: "Grade de painéis",
    text: "Veja vários navegadores lado a lado numa grade que você organiza. Até 6 painéis abertos ao mesmo tempo.",
  },
  {
    icon: "shield-check",
    title: "Bloqueador de anúncios",
    text: "Adblock integrado deixa as páginas mais leves e rápidas, ligado ou desligado quando você quiser.",
  },
  {
    icon: "mask",
    title: "Navegador anônimo",
    text: "Abra qualquer navegador em modo anônimo: logins, cookies e histórico não são salvos e somem ao fechar.",
  },
  {
    icon: "keyboard",
    title: "Atalhos de teclado",
    text: "Selecione painéis (Ctrl+1 a 6), silencie tudo (Ctrl+M), zoom, recarregar e tela cheia sem tirar as mãos do teclado.",
  },
];

const DESEMPENHO = [
  {
    icon: "cpu",
    title: "Processos independentes",
    text: "Se um navegador travar, os outros continuam. Cada um é um processo isolado do sistema.",
  },
  {
    icon: "speedometer2",
    title: "Métricas em tempo real",
    text: "CPU e RAM de cada navegador aparecem no rodapé do painel. Saiba o que consome o quê.",
  },
  {
    icon: "feather",
    title: "Leve e enxuto",
    text: "Cada conta abre em torno de 120 a 170 MB. Rode várias sem derrubar a máquina.",
  },
  {
    icon: "sliders",
    title: "Controles por navegador",
    text: "Mudo, zoom e recarregar por painel. Silencie só a aba que incomoda.",
  },
];

const SEGURANCA = [
  {
    icon: "google",
    title: "Login com Google",
    text: "Entre com sua conta Google. Sem cadastro e sem uma senha nova para lembrar.",
  },
  {
    icon: "key",
    title: "Licença por conta",
    text: "A licença fica ligada à sua conta e pode ser restaurada em outro computador.",
  },
  {
    icon: "hdd",
    title: "Seus dados são seus",
    text: "Logins, cookies e cache ficam no seu computador. Exporte workspaces ou apague tudo quando quiser.",
  },
  {
    icon: "arrow-repeat",
    title: "Atualizações incluídas",
    text: "Melhorias e correções chegam sem custo extra. A licença vitalícia acompanha as novas versões.",
  },
];

const POR_QUE = [
  {
    icon: "incognito",
    title: "Isolamento real",
    text: "Cada conta tem sessão própria. Faça login em duas contas do mesmo site sem uma derrubar a outra.",
  },
  {
    icon: "columns-gap",
    title: "Tudo à vista",
    text: "Seus navegadores lado a lado, numa grade. Sem ficar alternando entre dezenas de janelas.",
  },
  {
    icon: "palette",
    title: "Do seu jeito",
    text: "Workspaces com cor e ícone, layouts que você escolhe. Cada rotina organizada do seu jeito.",
  },
];

const PASSOS = [
  {
    title: "Baixe o instalador",
    text: "Baixe o Nipuz para Windows. São poucos MB e a instalação leva segundos.",
  },
  {
    title: "Entre com o Google",
    text: "Abra o app e entre com sua conta Google. Nada de cadastro nem senha nova.",
  },
  {
    title: "Crie um workspace",
    text: "Dê um nome, escolha cor e ícone. Ex.: Trabalho, Vendas, Pessoal.",
  },
  {
    title: "Adicione navegadores",
    text: "Coloque quantos navegadores quiser no workspace, cada um com seu endereço.",
  },
  {
    title: "Use lado a lado",
    text: "Cada navegador abre num painel isolado. Organize a grade como preferir.",
  },
  {
    title: "Teste e, se curtir, pague uma vez",
    text: `Use tudo por ${TRIAL} de graça. Depois, um pagamento único de R$ ${PRICE} libera para sempre.`,
  },
];

const COMPARE = [
  "Várias contas do mesmo site, ao mesmo tempo",
  "Sessões isoladas (login, cookies e cache)",
  "Tudo numa janela só",
  "Processo próprio para cada conta",
  "CPU e RAM por navegador",
  "Workspaces com cor, ícone e layout",
];

const PRECO_FEATS = [
  `${TRIAL} grátis para testar tudo`,
  "Navegadores e workspaces à vontade",
  "Todos os recursos, sem travas",
  "Licença ligada à sua conta",
  "Restaurável em outro computador",
  "Atualizações incluídas",
];

const FAQ = [
  {
    q: "O que é o Nipuz?",
    a: "É um navegador que roda várias contas isoladas numa janela só. Cada navegador tem login, cookies e cache próprios, como se fossem computadores diferentes, mas lado a lado.",
  },
  {
    q: "Preciso pagar mensalidade?",
    a: `Não. O Nipuz é pagamento único de R$ ${PRICE}, que libera o navegador para sempre. Antes disso você tem ${TRIAL} grátis para testar.`,
  },
  {
    q: "Como funciona o teste grátis?",
    a: `Ao entrar, você tem ${TRIAL} para usar tudo sem limites. Quando o período acabar, um pagamento único libera o app para sempre.`,
  },
  {
    q: "Em quais sistemas funciona?",
    a: "Atualmente, Windows 10/11 (64 bits). Outras plataformas podem ser adicionadas no futuro.",
  },
  {
    q: "As contas ficam mesmo separadas?",
    a: "Sim. Cada navegador roda em um processo próprio, com sessão totalmente isolada. Dá para logar em duas contas do mesmo site sem uma interferir na outra.",
  },
  {
    q: "Meus dados vão para a nuvem?",
    a: "Seus logins, cookies e cache ficam no seu computador. Sua conta Google é usada só para entrar e validar o pagamento.",
  },
  {
    q: "Posso usar em outro computador?",
    a: "Pode. A licença fica ligada à sua conta e pode ser restaurada em outra máquina.",
  },
  {
    q: "Se um navegador travar, perco tudo?",
    a: "Não. Como cada navegador é um processo isolado, se um travar os outros continuam funcionando normalmente.",
  },
];

/* ---------------- componentes ---------------- */

function Card({ icon, title, text }) {
  return (
    <div className="card">
      <div className="card-ico"><Icon name={icon} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function SectionHead({ eyebrow, title, sub, center }) {
  return (
    <div className={`section-head${center ? " center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {sub ? <p className="section-sub">{sub}</p> : null}
    </div>
  );
}

/* ---------------- página ---------------- */

export default function Home() {
  return (
    <>
      {/* NAV */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="nav-brand">
            Nipuz
          </a>
          <nav className="nav-links">
            <a href="#recursos">Recursos</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#preco">Preço</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="nav-cta">
            <a className="btn btn-primary" href={DOWNLOAD_WINDOWS}>
              <Icon name="download" /> Baixar grátis
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-inner">
            <h1>
              Vários navegadores.{" "}
              <span className="accentline">Uma janela só.</span>
            </h1>
            <p className="hero-sub">
              Rode todas as suas contas lado a lado, cada uma com login, cookies
              e cache totalmente independentes. Sem malabarismo com janelas.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-lg" href={DOWNLOAD_WINDOWS}>
                <Icon name="windows" /> Windows
              </a>
            </div>
            <div className="hero-meta">
              <span>{TRIAL} grátis</span>
              <span className="dot" />
              <span>depois, pagamento único de R$ {PRICE}</span>
              <span className="dot" />
              <span>Windows 10/11 · {VERSION}</span>
            </div>

            <div className="mock-wrap">
              <img
                className="mock-shot"
                src="/images/nipuz-app.png"
                alt="Nipuz com dois navegadores abertos lado a lado, cada um com sua própria sessão, login, cookies e cache independentes"
                width={1916}
                height={1031}
              />
            </div>
          </div>
        </section>

        {/* STRIP */}
        <section className="strip">
          <div className="container">
            <div className="strip-inner">
              <div className="strip-item">
                <div className="strip-num">1</div>
                <div className="strip-lbl">Janela só</div>
              </div>
              <div className="strip-item">
                <div className="strip-num">100%</div>
                <div className="strip-lbl">Sessões isoladas</div>
              </div>
              <div className="strip-item">
                <div className="strip-num">R$ 0</div>
                <div className="strip-lbl">De mensalidade</div>
              </div>
              <div className="strip-item">
                <div className="strip-num">{TRIAL}</div>
                <div className="strip-lbl">Grátis para testar</div>
              </div>
            </div>
          </div>
        </section>

        {/* POR QUE */}
        <section className="section">
          <div className="container split">
            <div>
              <span className="eyebrow">Por que o Nipuz</span>
              <h2 className="section-title">
                Feito para quem cansou de fazer malabarismo com janelas
              </h2>
              <p className="section-sub">
                Uma conta em cada janela, dez abas por conta, tudo se perdendo. O
                Nipuz junta tudo numa interface só, organizada e isolada de
                verdade, com cada navegador no seu próprio processo.
              </p>
            </div>
            <div className="feature-list">
              {POR_QUE.map((f) => (
                <div className="feature-row" key={f.title}>
                  <div className="fr-ico"><Icon name={f.icon} /></div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RECURSOS */}
        <section className="section" id="recursos">
          <div className="container">
            <SectionHead
              center
              eyebrow="Recursos"
              title="Tudo o que um navegador multi-contas precisa"
              sub="Isolamento de verdade, organização por workspaces e controle fino de cada painel, sem plugins nem gambiarra."
            />
            <div className="cardgrid cols-3">
              {RECURSOS.map((c) => (
                <Card key={c.title} {...c} />
              ))}
            </div>
          </div>
        </section>

        {/* DESEMPENHO */}
        <section className="section">
          <div className="container">
            <SectionHead
              center
              eyebrow="Desempenho e controle"
              title="Rápido por fora, isolado por dentro"
              sub="Cada navegador é um processo próprio, com métricas à vista e controles individuais."
            />
            <div className="cardgrid cols-4">
              {DESEMPENHO.map((c) => (
                <Card key={c.title} {...c} />
              ))}
            </div>
          </div>
        </section>

        {/* SEGURANCA & LICENCA */}
        <section className="section">
          <div className="container">
            <SectionHead
              center
              eyebrow="Segurança e licença"
              title="Simples de ativar, seu para sempre"
              sub="Login com Google, pagamento único e uma licença que acompanha você."
            />
            <div className="cardgrid cols-4">
              {SEGURANCA.map((c) => (
                <Card key={c.title} {...c} />
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="section" id="como-funciona">
          <div className="container">
            <SectionHead
              center
              eyebrow="Como funciona"
              title="Do download ao primeiro navegador em minutos"
            />
            <div className="steps">
              {PASSOS.map((s, i) => (
                <div className="step" key={s.title}>
                  <div className="step-num">{i + 1}</div>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARACAO */}
        <section className="section">
          <div className="container">
            <SectionHead
              center
              eyebrow="Comparação"
              title="Nipuz x navegador comum"
              sub="O que muda quando cada conta ganha seu próprio navegador isolado."
            />
            <div className="compare">
              <table>
                <thead>
                  <tr>
                    <th>Recurso</th>
                    <th>Navegador comum</th>
                    <th className="col-nipuz brand-cell">Nipuz</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((row) => (
                    <tr key={row}>
                      <td>{row}</td>
                      <td className="no">
                        <Icon name="x-lg" />
                      </td>
                      <td className="col-nipuz yes">
                        <Icon name="check-lg" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PRECO */}
        <section className="section" id="preco">
          <div className="container">
            <SectionHead
              center
              eyebrow="Preço"
              title="Um pagamento. Para sempre."
              sub="Sem mensalidade, sem pegadinha. Você testa antes e só paga se curtir."
            />
            <div className="price-wrap">
              <div className="price-card">
                <div className="price-top">
                  <span className="price-tag">
                    <Icon name="stars" /> Licença vitalícia
                  </span>
                  <div className="price-value">
                    <span className="cur">R$</span>
                    <span className="amt">{PRICE}</span>
                  </div>
                  <div className="price-once">
                    <strong>pagamento único</strong> · sem mensalidade
                  </div>
                </div>
                <div className="price-body">
                  <ul className="price-feats">
                    {PRECO_FEATS.map((f) => (
                      <li key={f}>
                        <Icon name="check-lg" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="hero-actions" style={{ justifyContent: "center", gap: "12px" }}>
                    <a className="btn btn-primary btn-lg" href={DOWNLOAD_WINDOWS}>
                      <Icon name="windows" /> Windows
                    </a>
                  </div>
                  <p className="price-note">
                    Windows 10/11 (64 bits) · {VERSION}. Pagamento
                    processado com segurança pelo Stripe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container">
            <SectionHead
              center
              eyebrow="Perguntas"
              title="Perguntas frequentes"
            />
            <div className="faq">
              {FAQ.map((item) => (
                <details key={item.q}>
                  <summary>
                    {item.q}
                    <Icon name="chevron-down" />
                  </summary>
                  <div className="faq-a">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="cta">
          <div className="container">
            <div className="cta-brand">Nipuz</div>
            <h2>Pronto para juntar tudo numa janela só?</h2>
            <p>
              Baixe agora, entre com o Google e crie seu primeiro workspace em
              minutos. {TRIAL} grátis, depois é seu para sempre.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <a className="btn btn-primary btn-lg" href={DOWNLOAD_WINDOWS}>
                <Icon name="download" /> Windows
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER — assinatura da Lumni (igual ao lumni-landing) */}
      <footer className="lfooter">
        <div className="container">
          <div className="lf-inner">
            <div className="lf-grid">
              <div className="lf-brand">
                <img
                  src="/images/logo-inverse.png"
                  alt="Lumni"
                  className="lf-logo"
                  width={240}
                  height={120}
                />
                <p className="lf-desc">
                  A Lumni desenvolve sistemas, automatiza processos e acopla
                  engenheiros ao seu time. Do primeiro diagnóstico ao código
                  rodando em produção.
                </p>
              </div>

              <nav className="lf-col" aria-label="Serviços">
                <h2 className="lf-heading">Serviços</h2>
                <ul>
                  {LUMNI_SERVICOS.map((s) => (
                    <li key={s}>
                      <a href={`${LUMNI_SITE}/#servicos`} target="_blank" rel="noreferrer">
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav className="lf-col" aria-label="Contato">
                <h2 className="lf-heading">Contato</h2>
                <ul>
                  <li>
                    <a className="lf-contact" href="mailto:contact@lumni.dev.br">
                      <Icon name="envelope" />
                      <span dir="ltr">contact@lumni.dev.br</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="lf-legal">
              <div className="lf-legal-info">
                <p>Lumni - Serviços Digitais · CNPJ 65.613.389/0001-96</p>
                <p className="lf-copy">
                  © 2024 - {YEAR} Lumni. Todos os direitos reservados.
                </p>
              </div>
              <nav className="lf-legal-nav" aria-label="Páginas legais">
                <a href={`${LUMNI_SITE}/privacy`} target="_blank" rel="noreferrer">
                  Privacidade
                </a>
                <a href={`${LUMNI_SITE}/terms`} target="_blank" rel="noreferrer">
                  Termos
                </a>
                <a href="#top">Voltar ao topo</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

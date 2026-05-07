import { type Metadata } from 'next'
import Image from 'next/image'
import styles from './styles.module.scss'

export const metadata: Metadata = {
  title: "Setup Sim Racing — Lojinha do Tiago",
  description: "Setup de sim racing montado com cuidado ao longo dos anos. Fanatec DD Pro 8Nm, cockpit Extreme Simracing VE-3, monitores 32\" e muito mais. Vendendo peça por peça.",
}

const WHATSAPP = 'https://wa.me/5551991111210'

// ─── Item data ────────────────────────────────────────────────────────────────

interface SetupItem {
  id: string
  name: string
  subtitle?: string
  description: string
  specs: string[]
  condition: 'Ótimo estado' | 'Bom estado' | 'Precisa de atenção'
  highlight?: boolean
  image?: string
  price?: string
  sold?: boolean
  includedWith?: string
  mlLink?: string
  olxLink?: string
}

const items: SetupItem[] = [
  // Base & Controles
  {
    id: 'dd-pro',
    name: 'Fanatec DD Pro Kit 8NM',
    price: 'R$ 13.500',
    subtitle: 'Base Direct Drive + Pedais CSL + Volante GT7',
    description:
      'Kit completo da Fanatec com base Direct Drive de 8Nm de torque de pico, licenciada para PlayStation. Inclui pedais CSL e volante GT7. A base mais popular do mercado entry-to-mid Direct Drive.',
    specs: [
      'Torque: 8Nm de pico',
      'Compatível com PS4, PS5 e PC',
      'Pedais CSL incluídos',
      'Volante GT7 incluído',
      'Fonte 180W incluída',
    ],
    condition: 'Ótimo estado',
    highlight: true,
    image: '/images/simracing/dd-pro.webp',
    mlLink: 'https://produto.mercadolivre.com.br/MLB-6731726158-kit-fanatec-gran-turismo-dd-pro-8nm-volante-gt-load-cell-_JM',
    olxLink: 'https://rs.olx.com.br/regioes-de-porto-alegre-torres-e-santa-cruz-do-sul/games/acessorios-de-video-game/kit-fanatec-dd-pro-8nm-gran-turismo-pedal-load-cell-1500179112?',
  },
  {
    id: 'load-cell',
    name: 'Fanatec Load Cell',
    price: 'Incluso com Kit DD Pro',
    subtitle: 'Upgrade de célula de carga para pedais',
    description:
      'Kit de upgrade de célula de carga para os pedais Fanatec CSL. Transforma a resposta do freio com frenagem baseada em força, não em curso. Inclui borrachas de upgrade de dureza variada.',
    specs: [
      'Sensor de célula de carga',
      'Frenagem por força (não por curso)',
      'Borrachas de upgrade incluídas',
      'Compatível com pedais CSL Fanatec',
    ],
    condition: 'Ótimo estado',
    image: '/images/simracing/brake-rubber.jpg',
  },
  {
    id: 'mclaren-gt3',
    name: 'Volante Fanatec McLaren GT3',
    price: 'R$ 2.000',
    subtitle: 'Volante licenciado McLaren',
    description:
      'Volante oficial licenciado da McLaren para GT3. Design fiel ao volante real, com todos os controles e botões necessários para corridas GT. Destaque visual no setup.',
    specs: [
      'Licença oficial McLaren',
      'Alcantara e couro sintético',
      'Cluster de botões GT',
      'Display integrado',
      'Quick Release Fanatec',
    ],
    condition: 'Ótimo estado',
    image: '/images/simracing/mclaren-gt3.webp',
    mlLink: 'https://produto.mercadolivre.com.br/MLB-4660878225-volante-fanatec-mclaren-gt3-_JM',
    olxLink: 'https://rs.olx.com.br/regioes-de-porto-alegre-torres-e-santa-cruz-do-sul/games/acessorios-de-video-game/volante-fanatec-mclaren-gt3-1500180074?',
  },
  {
    id: 'formula-v25',
    name: 'Volante Fanatec Formula v2.5',
    price: 'R$ 3.500',
    subtitle: 'Volante estilo Fórmula',
    description:
      'Volante de alta qualidade no estilo fórmula com grip em alcantara, cluster de botões completo e shifters nas paletas. Ideal para fórmula e carros monoposto.',
    specs: [
      'Grip em alcantara',
      'Shifters de paleta',
      'Botões programáveis',
      'LED de marcha integrado',
      'Quick Release Fanatec',
    ],
    condition: 'Ótimo estado',
    image: '/images/simracing/formula-v25.webp',
    mlLink: 'https://produto.mercadolivre.com.br/MLB-4660849539-volante-fanatec-formula-v25x-podium-advanced-paddle-_JM',
    olxLink: 'https://rs.olx.com.br/regioes-de-porto-alegre-torres-e-santa-cruz-do-sul/games/acessorios-de-video-game/volante-fanatec-formula-v2-5-1500179734?',
  },
  {
    id: 'handbrake',
    name: 'Freio de Mão Fanatec',
    price: 'R$ 1.500',
    subtitle: 'Freio de mão sim racing',
    description:
      'Freio de mão da Fanatec para rally e drift. Conexão via USB ou porta RJ12 da base. Essencial para quem corre em rally ou quer um setup mais completo.',
    specs: [
      'Conexão USB e RJ12',
      'Sensor de efeito Hall',
      'Ajuste de sensibilidade',
      'Compatível com todas as bases Fanatec',
    ],
    condition: 'Ótimo estado',
    image: '/images/simracing/handbrake.png',
    mlLink: 'https://produto.mercadolivre.com.br/MLB-6731996120-freio-de-mo-fanatec-clubsport-handbrake-v15-_JM',
    olxLink: 'https://rs.olx.com.br/regioes-de-porto-alegre-torres-e-santa-cruz-do-sul/games/acessorios-de-video-game/freio-de-mao-fanatec-clubsport-handbrake-v1-5-1500180869?',
  },
  {
    id: 'shifter',
    name: 'Câmbio Fanatec Clubsport SQ 1.5',
    price: 'R$ 3.000',
    subtitle: 'Câmbio sequencial + H-pattern',
    description:
      'Câmbio de alta qualidade com dois modos: sequencial e H-pattern (6 marchas + ré). Construção metálica robusta com sensação de troca fiel. Compatível com a base via RJ12.',
    specs: [
      'Modo sequencial e H-pattern',
      '6 marchas + ré no H-pattern',
      'Construção em metal',
      'Conexão RJ12 ou USB',
      'Base com fixação 75mm VESA',
    ],
    condition: 'Ótimo estado',
    image: '/images/simracing/shifter.webp',
    mlLink: 'https://produto.mercadolivre.com.br/MLB-6731992982-cambio-fanatec-clubsport-sq15-_JM',
    olxLink: 'https://rs.olx.com.br/regioes-de-porto-alegre-torres-e-santa-cruz-do-sul/games/acessorios-de-video-game/cambio-fanatec-shifter-sq-1-5-1500180564?',
  },

  // Cockpit
  {
    id: 'cockpit',
    name: 'Cockpit Extreme Simracing VE-3',
    price: 'R$ 3.000',
    subtitle: 'Chassi completo + banco + acessórios',
    description:
      'Cockpit profissional da Extreme Simracing, modelo VE-3. Estrutura em perfil de alumínio de alta rigidez. Inclui banco XT Premium em couro sintético, porta-teclado, bandeja de mouse, duas bandejas laterais e suporte traseiro para PC.',
    specs: [
      'Perfil de alumínio 80x40mm',
      'Ajuste de profundidade e altura',
      'Banco XT Premium incluído',
      'Porta-teclado ajustável incluído',
      '2× bandejas laterais incluídas',
      'Suporte traseiro para PC incluído',
    ],
    condition: 'Ótimo estado',
    highlight: true,
    image: '/images/simracing/cockpit.png',
  },

  // Monitores & Display
  {
    id: 'asus-monitor',
    name: 'Monitor Asus 32" VG32VQ',
    price: 'R$ 1.200',
    subtitle: '1440p 165Hz — VA curvo 1500R',
    description:
      'Monitor Asus de 32" com painel VA curvo (1500R), resolução QHD 1440p e 165Hz. Excelente para sim racing — alta resolução e fluidez com ótimo campo de visão.',
    specs: [
      'Resolução: 2560×1440 (QHD)',
      'Taxa de atualização: 165Hz',
      'Painel VA curvo 1500R',
      'Tempo de resposta: 1ms MPRT',
      'FreeSync Premium',
      'HDMI 2.0 + DisplayPort 1.2',
    ],
    condition: 'Ótimo estado',
    image: '/images/simracing/asus-monitors.webp',
  },
  {
    id: 'rog-lenses',
    name: 'Kit Asus ROG Multi Monitor Lenses',
    price: 'R$ 500',
    subtitle: 'Lentes de imersão para triple setup',
    description:
      'Kit de lentes da Asus ROG desenvolvido para aumentar a imersão em configurações de múltiplos monitores. Reduz a distração das bordas entre os monitores.',
    specs: [
      'Compatível com monitores 27"–32"',
      'Aumenta imersão em sims de corrida',
      'Fácil instalação magnética',
    ],
    condition: 'Bom estado',
    sold: true,
    image: '/images/simracing/rog-lenses.webp',
  },
  {
    id: 'dashboard',
    name: 'Dashboard HDMI Ultrawide com LEDs',
    price: 'R$ 1.000',
    subtitle: 'Painel de marcha e telemetria',
    description:
      'Dashboard específico para sim racing com conexão HDMI, formato ultrawide e LEDs indicadores de marcha. Exibe dados de telemetria em tempo real no cockpit.',
    specs: [
      'Conexão HDMI',
      'LEDs de marcha integrados',
      'Formato ultrawide',
      'Compatível com iRacing, ACC, AMS2 e outros',
    ],
    condition: 'Ótimo estado',
    sold: true,
    image: '/images/simracing/dashboard.png',
  },
  {
    id: 'stream-deck',
    name: 'Elgato Stream Deck XL',
    price: 'R$ 2.000',
    subtitle: '32 botões programáveis',
    description:
      'Stream Deck XL da Elgato com 32 teclas LCD programáveis. No contexto do sim racing, ideal para controlar pit menus, configurações de carro, windscreen wiper, luzes e qualquer ação de teclado em tempo real sem tirar as mãos do volante.',
    specs: [
      '32 teclas LCD personalizáveis',
      'Ícones animados',
      'Integração com iRacing, ACC e mais',
      'Conexão USB',
      'Software Elgato Stream Deck',
    ],
    condition: 'Ótimo estado',
    image: '/images/simracing/stream-deck.jpg',
    mlLink: 'https://produto.mercadolivre.com.br/MLB-6732076994-stream-deck-elgato-deck-xl-_JM',
    olxLink: 'https://rs.olx.com.br/regioes-de-porto-alegre-torres-e-santa-cruz-do-sul/informatica/perifericos-de-computador/stream-deck-xl-1500181146?',
  },
]

const categories = [
  {
    id: 'controls',
    label: 'Base & Controles',
    icon: '🎮',
    ids: ['dd-pro', 'load-cell', 'mclaren-gt3', 'formula-v25', 'handbrake', 'shifter'],
  },
  {
    id: 'cockpit',
    label: 'Cockpit & Assento',
    icon: '🏎️',
    ids: ['cockpit'],
  },
  {
    id: 'displays',
    label: 'Monitores & Extras',
    icon: '🖥️',
    ids: ['asus-monitor', 'rog-lenses', 'dashboard', 'stream-deck'],
  },
]

// ─── Sub-components ────────────────────────────────────────────────────────────

const ConditionBadge = ({ condition }: { condition: SetupItem['condition'] }) => {
  const map = {
    'Ótimo estado': styles['badge--great'],
    'Bom estado': styles['badge--good'],
    'Precisa de atenção': styles['badge--attention'],
  }
  return (
    <span className={`${styles.badge} ${map[condition]}`}>{condition}</span>
  )
}

const ImagePlaceholder = ({ label }: { label: string }) => (
  <div className={styles.placeholder}>
    <span className={styles.placeholder__icon}>📷</span>
    <span className={styles.placeholder__label}>Foto em breve</span>
    <span className={styles.placeholder__name}>{label}</span>
  </div>
)

const ItemCard = ({ item }: { item: SetupItem }) => (
  <article className={`${styles.card} ${item.highlight ? styles['card--highlight'] : ''} ${item.sold ? styles['card--sold'] : ''}`} id={item.id}>
    {item.image ? (
      <div className={styles.card__image}>
        <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className={styles['card__image-img']} />
        {item.sold && <div className={styles.card__sold_overlay}>Vendido</div>}
      </div>
    ) : (
      <ImagePlaceholder label={item.name} />
    )}
    <div className={styles.card__body}>
      <div className={styles.card__header}>
        <div>
          <h3 className={styles.card__name}>{item.name}</h3>
          {item.subtitle && <p className={styles.card__subtitle}>{item.subtitle}</p>}
        </div>
        {item.sold ? (
          <span className={`${styles.badge} ${styles['badge--sold']}`}>Vendido</span>
        ) : (
          <ConditionBadge condition={item.condition} />
        )}
      </div>

      <p className={styles.card__desc}>{item.description}</p>

      <ul className={styles.card__specs}>
        {item.specs.map(s => (
          <li key={s} className={styles['card__spec-item']}>
            <span className={styles['card__spec-dot']} />
            {s}
          </li>
        ))}
      </ul>

      {item.price && (
        <p className={`${styles.card__price} ${item.sold ? styles['card__price--sold'] : ''}`}>{item.price}</p>
      )}

      {!item.sold && (item.mlLink || item.olxLink) && (
        <div className={styles.card__marketplaces}>
          {item.mlLink && (
            <a href={item.mlLink} target="_blank" rel="noopener noreferrer" className={styles.card__marketplace_link}>
              MercadoLivre
            </a>
          )}
          {item.olxLink && (
            <a href={item.olxLink} target="_blank" rel="noopener noreferrer" className={styles.card__marketplace_link}>
              OLX
            </a>
          )}
        </div>
      )}

    </div>
  </article>
)

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function SimRacingPage() {
  const itemMap = Object.fromEntries(items.map(i => [i.id, i]))

  return (
    <div className={styles.page}>

      <header className={styles.page__nav}>
        <a href="/lojinha" className={styles.page__back}>← voltar à lojinha</a>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.hero__inner}`}>
          <div className={styles.hero__text}>
            <span className={styles.hero__eyebrow}>Lojinha do Tiago</span>
            <h1 className={styles.hero__title}>Setup Sim Racing</h1>
            <p className={styles.hero__tagline}>
              Setup montado com cuidado ao longo dos anos — Direct Drive Fanatec,
              cockpit profissional, monitores 32" e tudo que você precisa pra correr.
              Vendendo <strong>peça por peça</strong>.
            </p>
            <p className={styles.hero__installments}>
              Parcelamento disponível via <strong>MercadoPago</strong> — consulte as condições pelo WhatsApp.
            </p>
            <div className={styles.hero__ctas}>
              <a
                href={`${WHATSAPP}?text=Oi Tiago! Vi o seu setup sim racing e tenho interesse em uma peça!`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles['hero__btn']} ${styles['hero__btn--primary']}`}
              >
                Tenho interesse
              </a>
              <a href="#items" className={`${styles['hero__btn']} ${styles['hero__btn--secondary']}`}>
                Ver todos os itens
              </a>
            </div>

          </div>
          <div className={styles.hero__image}>
            <div className={styles.hero__gallery}>
              <div className={styles['hero__gallery-main']}>
                <Image src="/images/simracing/IMG_1096.jpeg" alt="Setup sim racing completo — vista frontal" fill sizes="(max-width: 1024px) 100vw, 420px" className={styles['hero__gallery-img']} />
              </div>
              <div className={styles['hero__gallery-thumbs']}>
                <div className={styles['hero__gallery-thumb']}>
                  <Image src="/images/simracing/IMG_1097.jpeg" alt="Setup sim racing — vista lateral" fill sizes="200px" className={styles['hero__gallery-img']} />
                </div>
                <div className={styles['hero__gallery-thumb']}>
                  <Image src="/images/simracing/IMG_1093.jpeg" alt="Setup sim racing — volantes" fill sizes="200px" className={styles['hero__gallery-img']} />
                </div>
                <div className={styles['hero__gallery-thumb']}>
                  <Image src="/images/simracing/IMG_1095.jpeg" alt="Setup sim racing — volante Formula v2.5" fill sizes="200px" className={styles['hero__gallery-img']} />
                </div>
                <div className={styles['hero__gallery-thumb']}>
                  <Image src="/images/simracing/IMG_1094.jpeg" alt="Setup sim racing — câmbio e freio de mão" fill sizes="200px" className={styles['hero__gallery-img']} />
                </div>
                <div className={styles['hero__gallery-thumb']}>
                  <Image src="/images/simracing/IMG_1098.jpeg" alt="Setup sim racing — pedais" fill sizes="200px" className={styles['hero__gallery-img']} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Items by category */}
      <section id="items" className={styles.items}>
        <div className="container">
          {categories.map(cat => (
            <div key={cat.id} className={styles.category}>
              <h2 className={styles.category__heading}>
                <span className={styles.category__icon}>{cat.icon}</span>
                {cat.label}
              </h2>
              <div className={styles.category__grid}>
                {cat.ids.map(id => itemMap[id] && (
                  <ItemCard key={id} item={itemMap[id]} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  )
}

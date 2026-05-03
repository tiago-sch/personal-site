import { type Metadata } from 'next'
import Image from 'next/image'
import styles from './styles.module.scss'

export const metadata: Metadata = {
  title: "Setup Sim Racing Completo — Lojinha do Tiago",
  description: "Setup de sim racing montado com cuidado ao longo dos anos. Fanatec DD Pro 8Nm, cockpit Extreme Simracing VE-3, triple monitor 32\" e muito mais. Vendendo completo ou em partes.",
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
}

const items: SetupItem[] = [
  // Base & Controles
  {
    id: 'dd-pro',
    name: 'Fanatec DD Pro Kit 8NM',
    subtitle: 'Base Direct Drive + Pedais Clubsport + Volante GT7',
    description:
      'Kit completo da Fanatec com base Direct Drive de 8Nm de torque de pico, licenciada para PlayStation. Inclui pedais Clubsport com célula de carga no freio e volante GT7. A base mais popular do mercado entry-to-mid Direct Drive.',
    specs: [
      'Torque: 8Nm de pico',
      'Compatível com PS4, PS5 e PC',
      'Pedais com load cell no freio',
      'Conector Quick Release incluído',
      'Fonte 180W incluída',
    ],
    condition: 'Ótimo estado',
    highlight: true,
    image: '/images/simracing/dd-pro.webp',
  },
  {
    id: 'formula-v25',
    name: 'Fanatec Formula v2.5',
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
  },
  {
    id: 'mclaren-gt3',
    name: 'Fanatec McLaren GT3',
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
  },
  {
    id: 'brake-rubber',
    name: 'Borrachas de Upgrade de Freio',
    subtitle: 'Performance upgrade para pedais Fanatec',
    description:
      'Kit de borrachas de dureza variada para personalizar a sensação do freio nos pedais Fanatec. Permite ajustar a resistência conforme preferência de driving.',
    specs: [
      'Compatível com pedais Fanatec Clubsport',
      'Diferentes durezas incluídas',
      'Melhora a progressividade do freio',
    ],
    condition: 'Ótimo estado',
    image: '/images/simracing/brake-rubber.jpg',
  },
  {
    id: 'handbrake',
    name: 'Fanatec Handbrake',
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
  },
  {
    id: 'shifter',
    name: 'Fanatec Clubsport Shifter SQ 1.5',
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
  },

  // Cockpit
  {
    id: 'cockpit',
    name: 'Cockpit Extreme Simracing VE-3',
    subtitle: 'Chassi completo profissional',
    description:
      'Cockpit profissional da Extreme Simracing, modelo VE-3. Estrutura em perfil de alumínio de alta rigidez com múltiplos pontos de ajuste. Zero flexibilidade — transmite cada detalhe do force feedback.',
    specs: [
      'Perfil de alumínio 80x40mm',
      'Ajuste de profundidade e altura',
      'Suporte para base DD',
      'Pontos de montagem VESA',
      'Capacidade de carga elevada',
    ],
    condition: 'Ótimo estado',
    highlight: true,
    image: '/images/simracing/cockpit.png',
  },
  {
    id: 'cockpit-accessories',
    name: 'Acessórios Cockpit Extreme Simracing',
    subtitle: 'Kit completo de montagem',
    description:
      'Conjunto completo de acessórios para o cockpit VE-3: porta-teclado, bandeja de mouse, duas bandejas laterais e suporte traseiro para PC. Tudo montado e funcionando.',
    specs: [
      'Porta-teclado ajustável',
      'Bandeja de mouse',
      '2× bandejas laterais',
      'Suporte traseiro para PC',
      'Todos os parafusos incluídos',
    ],
    condition: 'Ótimo estado',
    image: '/images/simracing/cockpit-accessories.png',
  },
  {
    id: 'seat',
    name: 'Banco Extreme Simracing XT Premium',
    subtitle: 'Assento racing premium',
    description:
      'Banco premium da Extreme Simracing em couro sintético com suporte lateral excelente. Confortável para longas sessões de corrida, com fixação direta no cockpit VE-3.',
    specs: [
      'Couro sintético premium',
      'Suporte lateral e lombar',
      'Fixação universal com slides',
      'Compatível com cockpit VE-3',
      'Suporta até 120kg',
    ],
    condition: 'Ótimo estado',
    image: '/images/simracing/seat.jpg',
  },
  {
    id: 'triple-stand',
    name: 'Suporte Triple Monitor Extreme Simracing',
    subtitle: 'Para 3 monitores de até 32"',
    description:
      'Suporte de triple monitor da Extreme Simracing, projetado para o cockpit VE-3. Ajuste de ângulo nas telas laterais para imersão máxima. Suporta monitores de até 32".',
    specs: [
      'Suporta 3× monitores até 32"',
      'Ângulo lateral ajustável',
      'Montagem VESA 100×100',
      'Fixação no cockpit VE-3',
      'Construção em alumínio',
    ],
    condition: 'Ótimo estado',
    image: '/images/simracing/triple-stand.jpg',
  },

  // Monitores & Display
  {
    id: 'asus-monitors',
    name: '3× Asus 32" VG32VQ',
    subtitle: 'Triple monitor setup 1440p 165Hz',
    description:
      'Três monitores Asus de 32" com painel VA curvo (1500R), resolução QHD 1440p e 165Hz. A combinação perfeita para triple setup — campo de visão amplo com alta resolução e fluidez.',
    specs: [
      'Resolução: 2560×1440 (QHD)',
      'Taxa de atualização: 165Hz',
      'Painel VA curvo 1500R',
      'Tempo de resposta: 1ms MPRT',
      'FreeSync Premium',
      'HDMI 2.0 + DisplayPort 1.2',
    ],
    condition: 'Ótimo estado',
    highlight: true,
    image: '/images/simracing/asus-monitors.webp',
  },
  {
    id: 'rog-lenses',
    name: 'Kit Asus ROG Multi Monitor Lenses',
    subtitle: 'Lentes de imersão para triple setup',
    description:
      'Kit de lentes da Asus ROG desenvolvido para aumentar a imersão em configurações de múltiplos monitores. Reduz a distração das bordas entre os monitores.',
    specs: [
      'Compatível com monitores 27"–32"',
      'Aumenta imersão em sims de corrida',
      'Fácil instalação magnética',
    ],
    condition: 'Bom estado',
    image: '/images/simracing/rog-lenses.webp',
  },
  {
    id: 'lg-ultrawide',
    name: 'Monitor LG 29" Ultrawide',
    subtitle: '2560×1080 — pode precisar de conserto',
    description:
      'Monitor ultrawide 29" da LG com resolução 2560×1080. Vendido no estado — pode precisar de algum reparo (não testado recentemente). Ótimo para quem quer usar como telemetria ou dashboard secundário.',
    specs: [
      'Resolução: 2560×1080',
      'Painel IPS',
      'Aspect ratio 21:9',
      'Vendido no estado',
    ],
    condition: 'Precisa de atenção',
    image: '/images/simracing/lg-ultrawide.jpg',
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
    image: '/images/simracing/dashboard.png',
  },

  // Extras
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
  },
]

const categories = [
  {
    id: 'controls',
    label: 'Base & Controles',
    icon: '🎮',
    ids: ['dd-pro', 'formula-v25', 'mclaren-gt3', 'brake-rubber', 'handbrake', 'shifter'],
  },
  {
    id: 'cockpit',
    label: 'Cockpit & Assento',
    icon: '🏎️',
    ids: ['cockpit', 'cockpit-accessories', 'seat', 'triple-stand'],
  },
  {
    id: 'displays',
    label: 'Monitores & Displays',
    icon: '🖥️',
    ids: ['asus-monitors', 'rog-lenses', 'lg-ultrawide', 'dashboard'],
  },
  {
    id: 'extras',
    label: 'Extras',
    icon: '⚡',
    ids: ['stream-deck'],
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
  <article className={`${styles.card} ${item.highlight ? styles['card--highlight'] : ''}`} id={item.id}>
    {item.image ? (
      <div className={styles.card__image}>
        <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className={styles['card__image-img']} />
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
        <ConditionBadge condition={item.condition} />
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
        <p className={styles.card__price}>{item.price}</p>
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
            <h1 className={styles.hero__title}>Setup Sim Racing Completo</h1>
            <p className={styles.hero__tagline}>
              Setup montado com cuidado ao longo dos anos — Direct Drive Fanatec,
              cockpit profissional, triple 32" e tudo que você precisa pra correr.
              Venda preferencial do kit completo, <strong>sem o PC gamer</strong> — mas posso estudar vender em partes.
            </p>
            <p className={styles.hero__price}>a partir de R$ 16.200</p>
            <p className={styles.hero__price_detail}>
              Kit base inclui: <strong>Fanatec DD Pro Kit 8Nm</strong>, borrachas de freio, cockpit completo com upgrades, 1 monitor Asus 32" e kit de lentes ROG. Setup completo por <strong>R$ 30.000</strong>.
            </p>
            <p className={styles.hero__installments}>
              Parcelamento disponível via <strong>MercadoPago</strong> — consulte as condições pelo WhatsApp.
            </p>
            <div className={styles.hero__stats}>
              <div className={styles.hero__stat}>
                <strong>{items.length}</strong>
                <span>itens</span>
              </div>
              <div className={styles.hero__stat}>
                <strong>8Nm</strong>
                <span>Direct Drive</span>
              </div>
              <div className={styles.hero__stat}>
                <strong>3×32"</strong>
                <span>triple screen</span>
              </div>
              <div className={styles.hero__stat}>
                <strong>1440p</strong>
                <span>165Hz</span>
              </div>
            </div>
            <div className={styles.hero__ctas}>
              <a
                href={`${WHATSAPP}?text=Oi Tiago! Vi o seu setup sim racing e quero saber mais!`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles['hero__btn']} ${styles['hero__btn--primary']}`}
              >
                Quero o setup completo
              </a>
              <a href="#items" className={`${styles['hero__btn']} ${styles['hero__btn--secondary']}`}>
                Ver todos os itens
              </a>
            </div>
          </div>
          <div className={styles.hero__image}>
            <div className={styles.hero__gallery}>
              <div className={styles['hero__gallery-main']}>
                <Image src="/images/simracing/setup.jpg" alt="Setup sim racing completo" fill sizes="(max-width: 1024px) 100vw, 420px" className={styles['hero__gallery-img']} />
              </div>
              <div className={styles['hero__gallery-thumbs']}>
                <div className={styles['hero__gallery-thumb']}>
                  <Image src="/images/simracing/setup2.png" alt="Setup sim racing — vista 2" fill sizes="200px" className={styles['hero__gallery-img']} />
                </div>
                <div className={styles['hero__gallery-thumb']}>
                  <Image src="/images/simracing/setup3.png" alt="Setup sim racing — vista 3" fill sizes="200px" className={styles['hero__gallery-img']} />
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

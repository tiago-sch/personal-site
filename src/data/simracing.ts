export interface SimRacingItem {
  id: string
  name: string
  subtitle?: string
  description: string
  specs: string[]
  condition: 'Ótimo estado' | 'Bom estado' | 'Precisa de atenção'
  highlight?: boolean
  image?: string
  photos?: string[]
  price?: string
  sold?: boolean
  includedWith?: string
  mlLink?: string
  olxLink?: string
}

export const simRacingItems: SimRacingItem[] = [
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
    photos: [
      '/images/simracing/dd-pro-1.jpeg',
      '/images/simracing/dd-pro-2.jpeg',
      '/images/simracing/dd-pro-3.jpeg',
    ],
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
    photos: [
      '/images/simracing/mclaren-gt3-1.jpeg',
      '/images/simracing/mclaren-gt3-2.png',
    ],
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
    photos: [
      '/images/simracing/formula-v25-1.jpeg',
      '/images/simracing/formula-v25-2.jpeg',
      '/images/simracing/formula-v25-3.png',
    ],
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
    photos: [
      '/images/simracing/handbrake-1.jpeg',
      '/images/simracing/shifter-handbrake.png',
    ],
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
    photos: [
      '/images/simracing/shifter-1.jpeg',
      '/images/simracing/shifter-2.jpeg',
      '/images/simracing/shifter-handbrake.png',
    ],
    mlLink: 'https://produto.mercadolivre.com.br/MLB-6731992982-cambio-fanatec-clubsport-sq15-_JM',
    olxLink: 'https://rs.olx.com.br/regioes-de-porto-alegre-torres-e-santa-cruz-do-sul/games/acessorios-de-video-game/cambio-fanatec-shifter-sq-1-5-1500180564?',
  },
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
    mlLink: 'https://produto.mercadolivre.com.br/MLB-6734771398?matt_tool=38524122#origin=share&sid=share&action=copy',
    olxLink: 'https://olx.com.br/vi/1500266757?utm_source=social_media_ad_share&utm_medium=instagram_stories',
  },
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
    photos: [
      '/images/simracing/stream-deck-1.jpeg',
      '/images/simracing/stream-deck-2.jpeg',
    ],
    mlLink: 'https://produto.mercadolivre.com.br/MLB-6732076994-stream-deck-elgato-deck-xl-_JM',
    olxLink: 'https://rs.olx.com.br/regioes-de-porto-alegre-torres-e-santa-cruz-do-sul/informatica/perifericos-de-computador/stream-deck-xl-1500181146?',
  },
]

export const simRacingCategories = [
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

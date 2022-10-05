import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://marshmallowdefi.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://exchange.marshmallowdefi.com/',
      },
      {
        label: 'Liquidity',
        href: 'http://exchange.marshmallowdefi.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'http://marshmallowdefi.com/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'http://marshmallowdefi.com/pools',
  },
  {
    label: 'SafeFarms',
    icon: 'FarmIcon',
    href: 'http://safefarms.marshmallowdefi.com/info',
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    href: 'https://marshmallowdefi.com/Audit.pdf',
  },
  {
    label: 'Partnership',
    icon: 'AuditIcon',
    href: 'https://forms.gle/UdsH5aEU3JxroM5G9',
  },
  {
    label: 'Token Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'ALBA BSC Scan',
        href: 'https://bscscan.com/token/0x98A5A21B2fa55b14030c44b4C4ACe4B16f5c6C51',
      },
      {
        label: 'ALBA Price Graph',
        href: 'https://dex.guru/token/0x98A5A21B2fa55b14030c44b4C4ACe4B16f5c6C51-bsc',
      },
      {
        label: 'TOFY BSC Scan',
        href: 'https://bscscan.com/token/0xe1f2d89a6c79b4242f300f880e490a70083e9a1c',
      },
      {
        label: 'TOFY Price Graph',
        href: 'https://charts.bogged.finance/?token=0xe1f2d89a6c79b4242f300f880e490a70083e9a1c',
      }
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/MarshmallowSwap",
      },
      {
        label: "Docs",
        href: "https://marshmallowswap.gitbook.io/marshmallowswap/",
      },
      {
        label: "Blog",
        href: "https://medium.com/@marshmallowdefi",
      },
      {
        label: "Telegram",
        href: "https://t.me/MarshmallowDeFi"
      },
    ],
  },
]

export default config

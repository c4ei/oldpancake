import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  // {
  //   label: 'Trade',
  //   icon: 'TradeIcon',
  //   items: [
  //     {
  //       label: 'Exchange',
  //       href: 'https://chg.c4ei.net/',
  //     },
  //     {
  //       label: 'Liquidity',
  //       href: 'https://chg.c4ei.net/#/pool',
  //     },
  //   ],
  // },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'SafeFarms',
  //   icon: 'FarmIcon',
  //   href: 'http://safefarms.ico.c4ei.net/info',
  // },
  // {
  //   label: 'Launch Pools',
  //   icon: 'PoolIcon',
  //   href: '/launch',
  // },
  // {
  //   label: 'Audit',
  //   icon: 'AuditIcon',
  //   href: 'https://ico.c4ei.net/Audit.pdf',
  // },


  // {
  //   label: 'Audit',
  //   icon: 'AuditIcon',
  //   items: [
  //     {
  //       label: 'Techrate',
  //       href: '/Audit.pdf',
  //     },
  //     {
  //       label: 'CERTIK',
  //       href: 'https://certik.org/projects/marshmallow',
  //     },
  //   ],
  // },

  // {
  //   label: 'Partnership',
  //   icon: 'AuditIcon',
  //   href: 'https://forms.gle/UdsH5aEU3JxroM5G9',
  // },
  {
    label: 'Token Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'ALBA Scan',
        href: 'https://exp.c4ei.net/account/0x98a5a21b2fa55b14030c44b4c4ace4b16f5c6c51',
      },
      {
        label: 'ALBA Price Graph',
        href: 'https://dex.guru/token/0x98A5A21B2fa55b14030c44b4C4ACe4B16f5c6C51-bsc',
      }
      // ,{
      //   label: 'TOFY BSC Scan',
      //   href: 'https://exp.c4ei.net/token/0xe1f2d89a6c79b4242f300f880e490a70083e9a1c',
      // },
      // {
      //   label: 'TOFY Price Graph',
      //   href: 'https://charts.bogged.finance/?token=0xe1f2d89a6c79b4242f300f880e490a70083e9a1c',
      // }
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/c4ei",
      },
      // {
      //   label: "Docs",
      //   href: "https://marshmallowswap.gitbook.io/marshmallowswap/",
      // },
      // {
      //   label: "Blog",
      //   href: "https://medium.com/@marshmallowdefi",
      // },
      {
        label: "Telegram",
        href: "https://t.me/c4eiAirdrop"
      },
    ],
  },
]

export default config

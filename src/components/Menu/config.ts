import { MenuEntry } from '@pancakeswap-libs/uikit'
import contracts from 'config/constants/contracts'
import { BASE_URL, BASE_EXCHANGE_URL } from 'config'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: `${BASE_EXCHANGE_URL}/#/swap?inputCurrency=BNB&outputCurrency=${contracts.cake[56]}`,
      },
      {
        label: 'Liquidity',
        href: `${BASE_EXCHANGE_URL}/#/add/${contracts.cake[56]}/ETH`,
      },
    ],
  },
  // {
  //   label: 'Trade',
  //   icon: 'TradeIcon',
  //   href: '/trade',
  //   calloutClass: 'soon',
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
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  {
    label: 'IGO (Presale)',
    icon: 'IfoIcon',
    href: '/ifo',
    calloutClass: '',
  },
  {
    label: 'Lottery (soon)',
    icon: 'TicketIcon',
    href: '',
    calloutClass: 'soon',
  },
  {
    label: 'The Grill (soon)',
    icon: 'TheGrillIcon',
    href: '',
    calloutClass: 'soon',
  },
  {
    label: 'NFT Market (soon)',
    icon: 'NFTMarketIcon',
    href: '',
    calloutClass: 'soon',
  },
  // {
  //   label: 'Borrow (soon)',
  //   icon: 'BorrowIcon',
  //   href: '',
  //   calloutClass: 'soon',
  // },
  {
    label: 'Price Chart',
    icon: 'InfoIcon',
    href: '/graph',
    calloutClass: 'highlight',
  },
  {
    label: 'TechRate Audit ✅',
    icon: 'AuditIcon',
    href: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/Barbecue%20Full%20Smart%20Contract%20Security%20Audit.pdf',
    calloutClass: '',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'GitHub',
        href: 'https://github.com/barbecueswapfinance',
      },
      // {
      //   label: 'Docs',
      //   href: '',
      // },
      {
        label: 'Twitter',
        href: 'https://twitter.com/BarbecueSwap',
      },
      {
        label: 'Telegram',
        href: 'https://t.co/sP6RlOkpB0?amp=1',
      },
      {
        label: 'Announcements',
        href: 'https://t.co/sP6RlOkpB0?amp=1',
      }
    ],
  },
]

export default config

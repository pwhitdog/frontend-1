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
        href: 'https://github.com/barbecueswap',
      },
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

import contracts from 'config/constants/contracts'
import { Ifo } from './types'

const ifos: Ifo[] = [
  {
    id: 'bbq',
    address: contracts.bbqIFO[56],
    isActive: true,
    name: 'Barbecue Token (BBQ)',
    subTitle: 'Buy BBQ Governance Token with discount',
    description: 'Buy BBQ Governance Token with discount',
    launchDate: 'May 1st',
    launchTime: '10PM UTC',
    saleAmount: '100,000 BBQ',
    raiseAmount: '200 WBNB',
    cakeToBurn: '0',
    projectSiteUrl: 'https://barbecueswap.finance/',
    currency: 'WBNB',
    currencyAddress: contracts.wbnb[56],
    tokenDecimals: 18,
    tokenSymbol: 'WBNB',
    releaseBlockNumber: 5294924,
    campaignId: '511070000',
  },
]

export default ifos

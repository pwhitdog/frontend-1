import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { getFullDisplayBalance } from 'utils/formatBalance'
import getTimePeriods from 'utils/getTimePeriods'
import { useTotalValue } from '../../../state/hooks'

const StyledListedOnCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;

  width: 100%;

  background-image: url(/images/bg-listed-on.png);
  background-repeat: no-repeat;
  background-position: 10% 40%;
  background-size: 100%;
`

const ListedOnCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  // const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <StyledListedOnCard>
      <CardBody className="width-100">
        <Heading size="lg" mb="24px">
          Listed on:
        </Heading>
        <a target="_blank" rel="noreferrer" href="https://www.coingecko.com/es/monedas/barbecueswap">&nbsp;<img className="listed-on-item" src="/images/coingecko.png" alt="" /></a>
        <a target="_blank" rel="noreferrer" href="https://dappradar.com/binance-smart-chain/defi/barbecueswap-finance">&nbsp;<img className="listed-on-item" src="/images/dappradar.png" alt="" /></a>
        <a target="_blank" rel="noreferrer" href="https://www.dapp.com/app/barbecueswap">&nbsp;<img className="listed-on-item" src="/images/dapp.png" alt="" /></a>
        <a target="_blank" rel="noreferrer" href="https://www.bsc.news/bsc-projects?a20c212b_page=2">&nbsp;<img className="listed-on-item" src="/images/bscnews.png" alt="" /></a>
      </CardBody>
    </StyledListedOnCard>
  )
}

export default ListedOnCard

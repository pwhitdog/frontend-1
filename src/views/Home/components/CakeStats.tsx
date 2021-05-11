import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import { usePriceCakeBusd } from 'state/hooks'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const marketCap = cakeSupply * usePriceCakeBusd().toNumber();

  console.log(marketCap)

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'BBQ Stats')}
        </Heading>
        <Row className="marketcaprow">
          <Text fontSize="14px">Market Cap.</Text>
          <CardValue fontSize="14px" decimals={0} value={marketCap} />
        </Row>
        <Row>
          <Text fontSize="14px">Total BBQ Supply</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">Total BBQ Burnt</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">New BBQ/block</Text>
          <CardValue fontSize="14px" decimals={0} value={1} />
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats

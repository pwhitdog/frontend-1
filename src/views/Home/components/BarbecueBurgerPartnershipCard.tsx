import React from 'react'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import useAllEarnings from 'hooks/useAllEarnings'
import { usePriceCakeBusd } from 'state/hooks'
import styled from 'styled-components'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const Block = styled.div`
  margin-bottom: 24px;
}
`
const StyledBurnCountDown = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;

  width: 100%;

  background-image: url(/images/bbq-burger.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  min-height: 345px;
`

const BarbecueBurgerPartnershipCard = () => {
  return (
    <StyledBurnCountDown>
      <CardBody />
    </StyledBurnCountDown>
  )
}

export default BarbecueBurgerPartnershipCard

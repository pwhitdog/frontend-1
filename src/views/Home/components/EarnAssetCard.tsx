import React from 'react'
import styled from 'styled-components'
import orderBy from 'lodash/orderBy'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon } from '@pancakeswap-libs/uikit'
import { NavLink } from 'react-router-dom'
import pools from 'config/constants/pools'
import { Pool } from 'state/types'
import contracts from 'config/constants/contracts'
import { BASE_URL, BASE_EXCHANGE_URL } from 'config'
// import tokens from 'config/constants/tokens'

const StyledFarmStakingCard = styled(Card)`
  
  background: linear-gradient(#eba75a, #e16b39);

  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  transition: 0.3s all;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }

  &:hover {
    background: linear-gradient(#e16b39, #e16b39);
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  font-size: 40px;
  line-height: 75px;
`
const EarnAssetCard = () => {
  // const activeNonCakePools = pools.filter((pool) => !pool.isFinished && !pool.earningToken.symbol.includes('CAKE'))
  // const latestPools: Pool[] = orderBy(activeNonCakePools, ['sortOrder', 'pid'], ['desc', 'desc']).slice(0, 3)
  // Always include CAKE
  // const assets = ['BBQ', ...latestPools.map((pool) => pool.earningToken.symbol)].join(', ')

  return (
      <StyledFarmStakingCard>
        <a href={`${BASE_EXCHANGE_URL}/#/add/${contracts.cake[56]}/ETH`}>
          <CardBody>
            <Heading color="contrast" size="lg">
              Add LIQUIDITY and
            </Heading>
            <CardMidContent color="invertedContrast">EARN BBQ TOKENS</CardMidContent>
            <Flex justifyContent="space-between">
              <Heading color="contrast" size="lg">
                while you sleep
              </Heading>
              <ArrowForwardIcon mt={30} color="primary" />
            </Flex>
          </CardBody>
        </a>
      </StyledFarmStakingCard>
  )
}

export default EarnAssetCard

import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { getFullDisplayBalance } from 'utils/formatBalance'
import getTimePeriods from 'utils/getTimePeriods'
import { useTotalValue } from '../../../state/hooks'

const StyledBurnCountDown = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;

  width: 100%;

  background-image: url(/images/flames.png);
  background-repeat: no-repeat;
  background-position: -10% 70%;
  background-size: 100%;
`

const BurnCountDown = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  // const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  const endDate = new Date();
  endDate.setDate(endDate.getDate() + (7 + 7 - endDate.getDay()) % 7);
  endDate.setHours(0,0,0,0);

  const startDate = new Date();

  const seconds = (endDate.getTime() - startDate.getTime()) / 1000;

  const totalValue = useTotalValue()
  const time = getTimePeriods(seconds);

  return (
    <StyledBurnCountDown>
      <CardBody>
        <Heading size="lg" mb="24px">
          Burn countdown:
        </Heading>
        {totalValue ? (
          <>
            <Heading size="xxl">{time.days}d&nbsp; {time.hours}h&nbsp; {time.minutes}m</Heading>
          </>
        ) : (
          <>
            <Skeleton height={66} />
          </>
        )}
      </CardBody>
    </StyledBurnCountDown>
  )
}

export default BurnCountDown

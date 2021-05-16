import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, Button, HelpIcon } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import BurnCountDown from 'views/Home/components/BurnCountDown'
import ListedOnCard from 'views/Home/components/ListedOnCard'
import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'
import contracts from 'config/constants/contracts'
import { BASE_URL, BASE_EXCHANGE_URL } from 'config'
// import TwitterCard from 'views/Home/components/TwitterCard'
// import ListedOn from 'views/Home/components/ListedOn'
// import AuditCard from './components/AuditCard'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 22px;
  padding-top: 60px;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 0px;

  & > div {
    grid-column: span 12;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 12;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 12;
    }
  }
`

const Header = styled.div`
  padding: 32px 0px;
  background: ${({ theme }) => theme.colors.gradients.bubblegum};

  padding-left: 16px;
  padding-right: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <>
      <Header>
        <Heading as="h1" size="xl" color="secondary" mb="24px">
          {TranslateString(578, 'Tastiest BSC Token and Yield Farm on BSC.')}
        </Heading>
        <Heading size="lg" color="text">
          <a href={`${BASE_EXCHANGE_URL}/#/swap?inputCurrency=BNB&amp;outputCurrency=${contracts.cake[56]}`}>
            <Button variant="subtle">
              {TranslateString(733, 'BUY')}{' '}
              <img className="img-in-button" src="/images/farms/bbq.png" alt="BBQ Token" width="70" height="70" />{' '}
              {TranslateString(734, 'BBQ Token Now!')}
            </Button>
          </a>
        </Heading>
      </Header>
      <Page>
        <div>
          <img className="home-mascot" src="/images/mascot.png" alt="Mr. Griller" />
          <Cards className="padding-right-lg">
            <FarmStakingCard />
          </Cards>
          <Cards>
            <EarnAPYCard />
            <EarnAssetCard />
          </Cards>
          <Cards>
            <CakeStats />
            <TotalValueLockedCard />
          </Cards>
          <Cards>
            <BurnCountDown />
            <ListedOnCard />
          </Cards>
        </div>
        <img className="img-footer" src="/images/barbecue-cutlery-3.png" alt="" />
      </Page>
    </>
  )
}

export default Home

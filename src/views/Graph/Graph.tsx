import React from 'react'
import IFrame from 'views/Trade'
import FullPage from './components/FullPage'

const Graph: React.FC = () => (
  <FullPage>
    <IFrame
      title="graph"
      url="https://goswappcharts.web.app/?isbsc=true&tokenId=0xD9A88f9b7101046786490bAF433f0f6aB3D753E2"
    />
  </FullPage>
)

export default Graph

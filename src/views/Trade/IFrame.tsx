import React, { useContext, useRef } from 'react'
import useWindowDimensions from 'hooks/useWindowDimensions'
import { ThemeContext } from '../../contexts/ThemeContext'
import { LanguageContext } from '../../contexts/Localisation/languageContext'

interface IFrameProps {
  url: string
  title: string
}

const IFrame: React.FC<IFrameProps> = (props) => {
  const { url, title } = props
  const iframeRef = useRef(null)
  const { isDark } = useContext(ThemeContext)
  const { selectedLanguage } = useContext(LanguageContext)
  const { height } = useWindowDimensions()
  const sendSettings = () => {
    const payload = {
      isDark,
      selectedLanguage,
    }
    iframeRef.current.sendMessage(payload)
  }

  return (
    <iframe src={url} title={title} height={height} width="100%" />
  )
}

export default IFrame

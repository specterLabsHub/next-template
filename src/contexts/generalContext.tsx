import React, { useContext, useState, createContext } from 'react'
import AlertBallon from '../components/AlertBallon'
import Loading from '../components/Loading'

interface ContextProps {
  isLoading: boolean
  setIsLoading: any
  showAlert: (
    type: string,
    title: string,
    content: string,
    percentage?: number
  ) => void
  alertError: any
}

export const GeneralContext = createContext<ContextProps>({} as ContextProps)

export const GeneralProvider: React.FC = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(false)
  const [alertBaloonData, setAlertbaloonData] = useState({
    opened: false,
    type: 'error',
    title: 'Ocorreu um erro!',
    content: 'Tente novamente mais tarde.',
    progressPercentage: 0
  })

  const closeAlert = (obj?: any) => {
    const data = { ...obj } || { ...alertBaloonData }
    data.opened = false
    setAlertbaloonData(data)
  }

  const showAlert = (
    type: string,
    title: string,
    content: string,
    percentage?: number
  ) => {
    const data = {
      opened: true,
      type,
      title,
      content,
      progressPercentage: percentage || 0
    }
    setAlertbaloonData(data)
    setTimeout(() => closeAlert(data), 3000)
  }

  const alertError = (e: any) => {
    showAlert(
      'error',
      'Error',
      e?.response?.data?.message ||
        'We had internal problems trying to perform this operation. Please try again in a moment.'
    )
  }

  return (
    <GeneralContext.Provider
      value={{
        isLoading,
        setIsLoading,
        showAlert,
        alertError
      }}
    >
      <AlertBallon {...alertBaloonData} closeFunction={closeAlert} />
      {isLoading && <Loading />}
      {children}
    </GeneralContext.Provider>
  )
}

export const useGeneral = (): ContextProps => useContext(GeneralContext)

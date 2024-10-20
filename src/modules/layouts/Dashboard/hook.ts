import { useMatches } from 'react-router-dom'
import { RoutesKeys } from '@constants/routes'

const useContainer = () => {
  const matches = useMatches()

  const isDessertDetails = matches.at(-1)?.id === RoutesKeys.DESSERT_DETAILS

  return { isDessertDetails }
}

export default useContainer

import { useMatches } from 'react-router-dom'
import useRouterPathData from '../../hooks/useRouterPathData'
import { items } from '@mock/items'

const useContainer = () => {
  const matches = useMatches()

  const dessertId = matches.at(-1)?.params.dessertId

  const dessert = items.find(item => item.id === dessertId)

  const { getPathData } = useRouterPathData()

  return { dessert, getPathData }
}

export default useContainer

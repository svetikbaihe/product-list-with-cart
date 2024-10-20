import useRouterPathData from '../../hooks/useRouterPathData'

const useContainer = () => {
  const { getPathData } = useRouterPathData()

  return { getPathData }
}

export default useContainer

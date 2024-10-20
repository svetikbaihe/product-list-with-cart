import { useMemo, useCallback } from 'react'

import * as qs from 'qs'
import type { PathParam } from 'react-router-dom'
import { generatePath, useSearchParams } from 'react-router-dom'

import type { QueryKey, RoutesKeys, RoutesPath } from '@constants/routes'
import { ROUTES } from '@constants/routes'
import routePathParamsSerialization from '@utils/routePathParamsSerialization'

export interface RouterPathHookProps {
  pageKey?: RoutesKeys
  params?: {
    [key in PathParam<RoutesPath>]?: string | null
  }
  queries?: QueryKey[]
}

export interface RouterPathHookReturn {
  pathname: string
  search: string
  getPathData: (props: PathDataMethodProps) => {
    pathname: string
    search: string
  }
}

export interface HandleSearchMemoMethodParams {
  queries: RouterPathHookProps['queries']
  searchParams: URLSearchParams
}

export interface PathDataMethodProps
  extends Omit<RouterPathHookProps, 'pageKey'> {
  pageKey: RoutesKeys
}

/**
 * **Custom hook for URL data preparation**
 *
 * This hook covers 2 cases for use, both are optional, and you can use them both together or separately.
 *
 * 1. When you have all the data to form the URL.
 * In this case you must be sure to pass the **pageKey** props, otherwise the hook will return the **pathname** field incorrectly,
 * it will be an empty string.
 *
 * 2. When you do not have all the data to form a URL, and you want to form a URL, after obtaining the necessary data.
 * In this case, you do not have to pass any data to the props hook.
 * You need to use the method **getPathData**, which takes in the props *PathDataMethodProps*
 *
 * @param props - An optional object which contains "pageKey", "params" and "queries"
 * @returns An object which contains "search", "pathname" params and "getPathData" method - for navigation.
 * @see {RouterPathHookReturn}
 * @see {RouterPathHookProps}
 * @see {PathDataMethodProps}
 * @see {HandleSearchMemoMethodParams}
 */
const useRouterPathData = (
  props?: RouterPathHookProps
): RouterPathHookReturn => {
  const pageKey = props?.pageKey
  const params = props?.params
  const queries = props?.queries

  const [searchParams] = useSearchParams()

  const handleSearchMemo = useCallback(
    ({ queries, searchParams }: HandleSearchMemoMethodParams) => {
      const data: Record<string, string> = {}

      queries?.forEach(query => {
        const param = searchParams.get(query)

        if (param) {
          data[query] = param
        }
      })

      return qs.stringify(data, { addQueryPrefix: true })
    },
    []
  )

  const handlePathnameMemo = useCallback(
    ({ pageKey, params }: Pick<RouterPathHookProps, 'pageKey' | 'params'>) =>
      pageKey
        ? generatePath(
            ROUTES[pageKey].PATH,
            routePathParamsSerialization(params ?? {})
          )
        : '',
    []
  )

  const getPathData = useCallback(
    ({ pageKey, params, queries = [] }: PathDataMethodProps) => {
      const search = handleSearchMemo({ searchParams, queries })
      const pathname = handlePathnameMemo({ pageKey, params })

      return {
        search,
        pathname,
      }
    },
    [handlePathnameMemo, handleSearchMemo, searchParams]
  )

  const search = useMemo(
    () => handleSearchMemo({ queries, searchParams }),
    [handleSearchMemo, queries, searchParams]
  )

  const pathname = useMemo(
    () => handlePathnameMemo({ pageKey, params }),
    [handlePathnameMemo, pageKey, params]
  )

  return {
    getPathData,
    pathname,
    search,
  }
}

export default useRouterPathData

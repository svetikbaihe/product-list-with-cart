import { RoutesPathParams } from '@constants/routes'

export type RouterParams = {
  [K in RoutesPathParams]?: string | null | undefined
}

const BASE_PARAM = {
  [RoutesPathParams.DESSERT_ID]: null as string | null,
}

function routePathParamsSerialization(routeParams: RouterParams) {
  const params = { ...BASE_PARAM }

  for (const [key, value] of Object.entries(routeParams)) {
    if (params[key as RoutesPathParams] !== undefined) {
      params[key as RoutesPathParams] = value ?? null
    }
  }

  return params
}

export default routePathParamsSerialization

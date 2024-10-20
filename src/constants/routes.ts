export enum RoutesKeys {
  DESSERTS = 'DESSERTS',
  HOME = 'HOME',
  DELIVERY = 'DELIVERY',
  DESSERT_DETAILS = 'DESSERT_DETAILS',
  DELIVERY_DIRECT = 'DELIVERY_DIRECT',
  DELIVERY_FREE = 'DELIVERY_FREE'
}

export enum RoutesPathParams {
  DESSERT_ID = 'dessertId',
}

export enum QueryKey {
  DATE = 'date',
}

export enum RoutesPath {
  DESSERTS = '/desserts',
  HOME = '/',
  DELIVERY = '/delivery',
  DESSERT_DETAILS = `/desserts/:${RoutesPathParams.DESSERT_ID}`,
  DELIVERY_DIRECT = '/delivery/direct',
  DELIVERY_FREE = '/delivery/free'
}

export const ROUTES = {
  [RoutesKeys.DESSERTS]: {
    KEY: RoutesKeys.DESSERTS,
    PATH: RoutesPath[RoutesKeys.DESSERTS],
    DISPLAY_NAME: RoutesKeys.DESSERTS,
  },

  [RoutesKeys.HOME]: {
    KEY: RoutesKeys.HOME,
    PATH: RoutesPath[RoutesKeys.HOME],
    DISPLAY_NAME: RoutesKeys.HOME,
  },

  [RoutesKeys.DELIVERY]: {
    KEY: RoutesKeys.DELIVERY,
    PATH: RoutesPath[RoutesKeys.DELIVERY],
    DISPLAY_NAME: RoutesKeys.DELIVERY,
  },

  [RoutesKeys.DESSERT_DETAILS]: {
    KEY: RoutesKeys.DESSERT_DETAILS,
    PATH: RoutesPath[RoutesKeys.DESSERT_DETAILS],
    DISPLAY_NAME: RoutesKeys.DESSERT_DETAILS,
  },

  [RoutesKeys.DELIVERY_DIRECT]: {
    KEY: RoutesKeys.DELIVERY_DIRECT,
    PATH: RoutesPath[RoutesKeys.DELIVERY_DIRECT],
    DISPLAY_NAME: RoutesKeys.DELIVERY_DIRECT,
  },

  [RoutesKeys.DELIVERY_FREE]: {
    KEY: RoutesKeys.DELIVERY_FREE,
    PATH: RoutesPath[RoutesKeys.DELIVERY_FREE],
    DISPLAY_NAME: RoutesKeys.DELIVERY_FREE,
  },
}

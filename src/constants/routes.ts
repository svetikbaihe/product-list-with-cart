export enum RoutesKeys {
  DESSERTS = 'DESSERTS',
  HOME = 'HOME',
  DELIVERY = 'DELIVERY',
  DESSERT_DETAILS = 'DESSERT_DETAILS',
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
}

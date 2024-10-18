export enum RoutesKeys {
  DESSERTS = 'DESSERTS',
  HOME = 'HOME',
  DELIVERY = 'DELIVERY',
}

export enum RoutesPath {
  DESSERTS = '/desserts',
  HOME = '/',
  DELIVERY = '/delivery',
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
}

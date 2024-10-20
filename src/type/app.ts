export interface ProductType {
  image: {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
    alt: string
  }
  name: string
  category: string
  ingredients: string[]
  price: number
  id: string
}

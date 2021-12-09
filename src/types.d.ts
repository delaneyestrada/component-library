export interface ImagesInterface {
  galleryImage: {
    name: string
    childImageSharp: {
      name: string
      gatsbyImageData: {
        images: {
          fallback: {
            src: string
          }
          sources: [
            {
              srcSet: string
              sizes: string
            }
          ]
        }
      }
    }
  }
}

export interface bandsintownWidgetInterface {
  bandsintownWidgetData: {
    displayPastDates: boolean
    colorText: string
    colorLink: string
    colorBackground: string
    colorLinkText: string
    displayLimit: number
    displayStartTime: boolean
    displayPlayMyCity: boolean
  }
}
export interface Type {
  name: string
  kind: string
}

export interface Value {
  value: string
  type: Type
}

export interface FieldBaseTypes {
  name: string
  values: string
}

export interface Type2 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes
  implementsNode: boolean
}

export interface Option {
  id: string
  name: string
  values: Value[]
  type: Type2
}

export interface FieldBaseTypes2 {
  altText: string
  id: string
  originalSrc: string
  src: string
}

export interface Type3 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes2
  implementsNode: boolean
}

export interface VariableValues {
  first: number
  productsFirst: number
}

export interface Image {
  id: string
  src: string
  altText?: any
  type: Type3
  hasNextPage: any
  hasPreviousPage: any
  variableValues: VariableValues
}

export interface FieldBaseTypes3 {
  amount: string
  currencyCode: string
}

export interface Type4 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes3
  implementsNode: boolean
}

export interface PriceV2 {
  amount: string
  currencyCode: string
  type: Type4
}

export interface FieldBaseTypes4 {
  amount: string
  currencyCode: string
}

export interface Type5 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes4
  implementsNode: boolean
}

export interface Price {
  amount: string
  currencyCode: string
  type: Type5
}

export interface FieldBaseTypes5 {
  compareAtPrice: string
  price: string
}

export interface Type6 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes5
  implementsNode: boolean
}

export interface VariableValues2 {
  first: number
  productsFirst: number
}

export interface PresentmentPrice {
  price: Price
  compareAtPrice?: any
  type: Type6
  hasNextPage: boolean
  hasPreviousPage: boolean
  variableValues: VariableValues2
}

export interface FieldBaseTypes6 {
  altText: string
  id: string
  originalSrc: string
  src: string
}

export interface Type7 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes6
  implementsNode: boolean
}

export interface Image2 {
  id: string
  src: string
  altText?: any
  type: Type7
}

export interface FieldBaseTypes7 {
  name: string
  value: string
}

export interface Type8 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes7
  implementsNode: boolean
}

export interface SelectedOption {
  name: string
  value: string
  type: Type8
}

export interface FieldBaseTypes8 {
  measuredType: string
  quantityUnit: string
  quantityValue: string
  referenceUnit: string
  referenceValue: string
}

export interface Type9 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes8
  implementsNode: boolean
}

export interface UnitPriceMeasurement {
  measuredType?: any
  quantityUnit?: any
  quantityValue: number
  referenceUnit?: any
  referenceValue: number
  type: Type9
}

export interface FieldBaseTypes9 {
  availableForSale: string
  compareAtPrice: string
  compareAtPriceV2: string
  id: string
  image: string
  presentmentPrices: string
  price: string
  priceV2: string
  product: string
  selectedOptions: string
  sku: string
  title: string
  unitPrice: string
  unitPriceMeasurement: string
  weight: string
}

export interface Type10 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes9
  implementsNode: boolean
}

export interface VariableValues3 {
  first: number
  productsFirst: number
}

export interface Variant {
  id: string
  title: string
  price: string
  priceV2: PriceV2
  presentmentPrices: PresentmentPrice[]
  weight: number
  available: boolean
  sku: string
  compareAtPrice?: any
  compareAtPriceV2?: any
  image: Image2
  selectedOptions: SelectedOption[]
  unitPrice?: any
  unitPriceMeasurement: UnitPriceMeasurement
  type: Type10
  hasNextPage: any
  hasPreviousPage: any
  variableValues: VariableValues3
}

export interface FieldBaseTypes10 {
  availableForSale: string
  createdAt: string
  description: string
  descriptionHtml: string
  handle: string
  id: string
  images: string
  onlineStoreUrl: string
  options: string
  productType: string
  publishedAt: string
  title: string
  updatedAt: string
  variants: string
  vendor: string
}

export interface Type11 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes10
  implementsNode: boolean
}

export interface HasNextPage {
  value: boolean
}

export interface VariableValues4 {
  first: number
  productsFirst: number
}

export interface Product {
  id: string
  availableForSale: boolean
  createdAt: Date
  updatedAt: Date
  descriptionHtml: string
  description: string
  handle: string
  productType: string
  title: string
  vendor: string
  publishedAt: Date
  onlineStoreUrl: string
  options: Option[]
  images: Image[]
  variants: Variant[]
  type: Type11
  hasNextPage: HasNextPage
  hasPreviousPage: boolean
  variableValues: VariableValues4
}

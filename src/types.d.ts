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

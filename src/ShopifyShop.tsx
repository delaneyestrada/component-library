import React, { useEffect, useState } from 'react'
import ShopifyBuy from '@shopify/buy-button-js'

// const shopifyComponentOptions = {
//   product: {
//     styles: {
//       product: {
//         '@media (min-width: 601px)': {
//           'max-width': 'calc(25% - 20px)',
//           'margin-left': '20px',
//           'margin-bottom': '50px',
//           width: 'calc(25% - 20px)'
//         },
//         img: {
//           height: 'calc(100% - 15px)',
//           position: 'absolute',
//           left: '0',
//           right: '0',
//           top: '0'
//         },
//         imgWrapper: {
//           'padding-top': 'calc(75% + 15px)',
//           position: 'relative',
//           height: '0'
//         }
//       },
//       title: {
//         color: '#ffffff'
//       },
//       button: {
//         'font-family': 'Montserrat, sans-serif',
//         'font-weight': 'bold',
//         ':hover': {
//           'background-color': '#ff0000'
//         },
//         'background-color': '#a70000',
//         ':focus': {
//           'background-color': '#ff0000'
//         }
//       },
//       price: {
//         color: '#ffffff'
//       },
//       compareAt: {
//         color: '#ffffff'
//       },
//       unitPrice: {
//         color: '#ffffff'
//       }
//     },
//     text: {
//       button: 'Add to cart'
//     },
//     googleFonts: ['Montserrat']
//   },
//   productSet: {
//     styles: {
//       products: {
//         '@media (min-width: 601px)': {
//           'margin-left': '-20px'
//         }
//       }
//     }
//   },
//   modalProduct: {
//     contents: {
//       img: false,
//       imgWithCarousel: true,
//       button: false,
//       buttonWithQuantity: true
//     },
//     styles: {
//       product: {
//         '@media (min-width: 601px)': {
//           'max-width': '100%',
//           'margin-left': '0px',
//           'margin-bottom': '0px'
//         }
//       },
//       button: {
//         'font-family': 'Montserrat, sans-serif',
//         'font-weight': 'bold',
//         ':hover': {
//           'background-color': '#ff0000'
//         },
//         'background-color': '#a70000',
//         ':focus': {
//           'background-color': '#ff0000'
//         }
//       },
//       title: {
//         'font-family': 'Helvetica Neue, sans-serif',
//         'font-weight': 'bold',
//         'font-size': '26px',
//         color: '#4c4c4c'
//       },
//       price: {
//         'font-family': 'Helvetica Neue, sans-serif',
//         'font-weight': 'normal',
//         'font-size': '18px',
//         color: '#4c4c4c'
//       },
//       compareAt: {
//         'font-family': 'Helvetica Neue, sans-serif',
//         'font-weight': 'normal',
//         'font-size': '15.299999999999999px',
//         color: '#4c4c4c'
//       },
//       unitPrice: {
//         'font-family': 'Helvetica Neue, sans-serif',
//         'font-weight': 'normal',
//         'font-size': '15.299999999999999px',
//         color: '#4c4c4c'
//       }
//     },
//     googleFonts: ['Montserrat'],
//     text: {
//       button: 'Add to cart'
//     }
//   },
//   option: {
//     styles: {
//       label: {
//         color: '#ffffff'
//       }
//     }
//   },
//   cart: {
//     styles: {
//       button: {
//         'font-family': 'Montserrat, sans-serif',
//         'font-weight': 'bold',
//         ':hover': {
//           'background-color': '#ff0000'
//         },
//         'background-color': '#a70000',
//         ':focus': {
//           'background-color': '#ff0000'
//         }
//       }
//     },
//     text: {
//       total: 'Subtotal',
//       button: 'Checkout'
//     },
//     googleFonts: ['Montserrat']
//   },
//   toggle: {
//     styles: {
//       toggle: {
//         'font-family': 'Montserrat, sans-serif',
//         'font-weight': 'bold',
//         'background-color': '#a70000',
//         ':hover': {
//           'background-color': '#ff0000'
//         },
//         ':focus': {
//           'background-color': '#ff0000'
//         }
//       }
//     },
//     googleFonts: ['Montserrat']
//   }
// }

export default function ShopifyShop() {
  const [collections, setCollections]: [any, any] = useState(null)
  const shopifyClient = ShopifyBuy.buildClient({
    domain: 'dylan-wheeler.myshopify.com',
    storefrontAccessToken: '29af3b7767735775cbb7b82d70c14764'
  })

  // const ui = ShopifyBuy.UI.init(shopifyClient)

  useEffect(() => {
    shopifyClient.collection.fetchAllWithProducts().then((collections: any) => {
      console.log(collections)
      setCollections(collections)
    })
  }, [])

  // useEffect(() => {
  //   if (collections) {
  //     collections.forEach((collection: any) => {
  //       ui.createComponent('collection', {
  //         id: collection.id,
  //         node: document.getElementById(
  //           `collection-component-${collection.id}`
  //         ),
  //         moneyFormat: '%24%7B%7Bamount%7D%7D',
  //         options: shopifyComponentOptions
  //       })
  //     })
  //   }
  // }, [collections])

  if (collections === null) {
    return (
      <div className='flex justify-center items-center'>
        <div
          className='
      animate-spin
      rounded-full
      h-32
      w-32
      border-t-2 border-b-2 border-purple-500
    '
        />
      </div>
    )
  }

  return (
    <div>
      <div className='card' id='merch-card'>
        <div className='card-body'>
          {collections.length > 0 ? (
            collections.map((collection: any) => {
              return (
                <div
                  key={collection.id}
                  className='my-5'
                  onClick={() => {
                    shopifyClient.checkout.create().then((checkout: any) => {
                      // Do something with the checkout
                      console.log(checkout)
                    })
                  }}
                >
                  <h2>{collection.title}</h2>
                  {collection.products.map((product: any) => {
                    return <div key={product.id}>{product.title}</div>
                  })}
                </div>
              )
            })
          ) : (
            <div>No collections</div>
          )}
        </div>
      </div>
    </div>
  )
}

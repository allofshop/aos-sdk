/**
 * @copyright Copyright © 2018-2019 Corretto, Inc. All rights reserved.
 */

import { sign } from 'jsonwebtoken';
import { v4 } from 'uuid';

import { OrderItemStatus } from '~/sales/order/vo';
import {
  CustomerServiceItemType,
  CustomerServiceStatus,
  CustomerServiceType,
} from '~/user/customerService/vo';
import { OrderStatus } from '~/user/order/vo';

async function _genImageFile() {
  return {
    original: {
      location: 'https://picsum.photos/1110/400',
    },
    '1x': {
      location: 'https://picsum.photos/1110/400',
    },
    '2x': {
      location: 'https://picsum.photos/1110/400',
    },
    '3x': {
      location: 'https://picsum.photos/1110/400',
    },
  };
}

function _genArticleData() {
  return {
    id: v4(),
    author: {
      displayName: '작성자',
    },
    title: '타이틀',
    content: '내용',
    comments: [
      {
        author: {
          displayName: '관리자',
        },
        content: '답변 또는 코멘트',
      },
    ],
    createdAt: new Date(),
  };
}

export async function genArticleList() {
  return {
    data: {
      currentItemCount: 4,
      itemsPerPage: 20,
      pageIndex: 0,
      startIndex: 0,
      totalItems: 4,
      totalPages: 1,
      items: [
        _genArticleData(),
        _genArticleData(),
        _genArticleData(),
        _genArticleData(),
      ],
    },
  };
}

export async function genArticleDetail() {
  return {
    data: _genArticleData(),
  };
}

export async function genCartDetail() {
  return {
    data: {
      id: v4(),
      items: [
        await genCartItem(),
        await genCartItem(),
        await genCartItem(),
        await genCartItem(),
        await genCartItem(),
      ],
      stats: {
        productPrice: getRandomNumber(100000),
        discountPrice: getRandomNumber(100000),
        deliveryPrice: getRandomNumber(100000),
        totalPrice: getRandomNumber(100000),
      },
    },
  };
}

export async function genCategoryList() {
  return {
    data: {
      currentItemCount: 5,
      itemsPerPage: 20,
      pageIndex: 0,
      startIndex: 0,
      totalItems: 5,
      totalPages: 1,
      items: [await genCategoryListItem()],
    },
  };
}

async function genCategoryListItem(exit?: boolean): Promise<any> {
  if (exit) {
    return {
      id: v4(),
      name: '카테고리 샘플',
      children: [],
      parent: v4(),
    };
  }

  return {
    id: v4(),
    name: '카테고리 샘플',
    children: [
      await genCategoryListItem(true),
      await genCategoryListItem(true),
      await genCategoryListItem(true),
      await genCategoryListItem(true),
      await genCategoryListItem(true),
      await genCategoryListItem(true),
    ],
    parent: v4(),
  };
}

export async function genProductList() {
  return {
    data: {
      items: [
        await genProductItem(),
        await genProductItem(),
        await genProductItem(),
        await genProductItem(),
        await genProductItem(),
        await genProductItem(),
      ],
      currentItemCount: 5,
      itemsPerPage: 20,
      pageIndex: 0,
      startIndex: 0,
      totalItems: 5,
      totalPages: 1,
    },
  };
}

async function _genProductDetail() {
  return {
    id: v4(),
    name: '상품명',
    price: getRandomNumber(10000),
    option: {
      type: 'COMBINE',
      name: '옵션 이름',
      items: [await genProductOptionItem(), await genProductOptionItem()],
      variants: [
        await genProductVariant(),
        await genProductVariant(),
        await genProductVariant(),
        await genProductVariant(),
      ],
      extras: [
        await genProductOptionExtra(),
        await genProductOptionExtra(),
        await genProductOptionExtra(),
        await genProductOptionExtra(),
        await genProductOptionExtra(),
      ],
    },
  };
}

export async function genProductDetail() {
  return {
    data: {
      id: '6001589e1ed7396cfc05b354',
      createdAt: '2021-01-15T08:55:58.305Z',
      updatedAt: '2021-03-10T01:12:01.943Z',
      displayable: true,
      displayedAt: '2021-01-15T08:55:58.110Z',
      sellable: true,
      categories: [],
      name: '옵션이 있는 상품',
      code: '00002021',
      quality: 'NEW',
      tags: [],
      grossPrice: 5000,
      taxType: 'TAX',
      taxRatio: 10,
      taxPrice: 455,
      priceBeforeTax: 4545,
      featuredImages: [
        await _genImageFile(),
        await _genImageFile(),
        await _genImageFile(),
      ],
      price: 5000,
      orderQuantity: {
        type: 'ITEM',
        minimum: 1,
      },
      useAdultAuthentication: false,
      option: {
        type: 'COMBINE',
        items: [
          {
            shopId: '5fbb38e6c9515b0eef4c5b78',
            id: '602ba2a95d282666240f8d3e',
            name: '색상',
            values: [
              {
                id: '602ba2a95d282666240f8d3f',
                productOption: '602ba2a95d282666240f8d3e',
                value: '노랑',
              },
              {
                id: '602ba2a95d282666240f8d40',
                productOption: '602ba2a95d282666240f8d3e',
                value: '빨강',
              },
            ],
            renderingStyle: 'SELECT-BOX',
            required: true,
          },
          {
            shopId: '5fbb38e6c9515b0eef4c5b78',
            id: '602ba2a95d282666240f8d41',
            name: '사이즈',
            values: [
              {
                id: '602ba2a95d282666240f8d42',
                productOption: '602ba2a95d282666240f8d41',
                value: 'S',
              },
              {
                id: '602ba2a95d282666240f8d43',
                productOption: '602ba2a95d282666240f8d41',
                value: 'L',
              },
            ],
            renderingStyle: 'SELECT-BOX',
            required: true,
          },
          {
            shopId: '5fbb38e6c9515b0eef4c5b78',
            id: '602ba2a95d282666240f8d44',
            name: '모양',
            values: [
              {
                id: '602ba2a95d282666240f8d45',
                productOption: '602ba2a95d282666240f8d44',
                value: '별',
              },
              {
                id: '602ba2a95d282666240f8d46',
                productOption: '602ba2a95d282666240f8d44',
                value: '달',
              },
              {
                id: '602ba2a95d282666240f8d47',
                productOption: '602ba2a95d282666240f8d44',
                value: '해',
              },
            ],
            renderingStyle: 'SELECT-BOX',
            required: true,
          },
        ],
        variants: [
          {
            id: '602ba2a95d282666240f8d48',
            optionValues: [
              '602ba2a95d282666240f8d3f',
              '602ba2a95d282666240f8d42',
              '602ba2a95d282666240f8d45',
            ],
            product: '6001589e1ed7396cfc05b354',
            name: '노랑/S/별',
            code: '00002021-002',
            stockManagement: {
              grade: 'MIDDLE',
              quantityCheckTrigger: 'ORDER',
              stock: 1000,
              safetyStock: 0,
            },
            displayable: true,
            sellable: true,
            additionalPrice: 0,
            additionalPriceBeforeTax: 0,
            additionalTaxPrice: 0,
          },
        ],
        extras: [],
      },
      images: [],
      brand: null,
      manufacturer: '5fbb38e6c9515b0eef4c5c2b',
      supplier: '5fbb38e6c9515b0eef4c5c2c',
      delivery: {
        range: 'DOMESTIC',
        separated: false,
        carriers: [],
        weight: 1,
        hsCodes: [],
        type: 'DIRECT',
      },
      bundleProducts: [],
      relativeProducts: [],
      stats: {
        orderCount: 0,
        reviewCount: 1,
        reviewAverageScore: 2,
      },
      wishlists: ['defaults'],
      discountedPrice: 5000,
      discountPrice: 0,
      discounts: [],
      coupons: [],
      downloadableCoupons: [],
      deliveryPrice: 0,
    },
  };
}

export async function genProductOptionItem() {
  return {
    id: v4(),
    name: '옵션명',
    values: [
      await genProductOptionItemValue(),
      await genProductOptionItemValue(),
    ],
    renderingStyle: 'SELECT-BOX',
    required: true,
  };
}

export async function genProductOptionItemValue() {
  return {
    value: getRandomNumber(100),
  };
}

export async function genProductVariant() {
  return {
    name: 'VRNT명',
    code: `rnt-${getRandomNumber(10)}`,
    raws: [],
    stockManagement: {
      grade: 'LOW',
      quantityCheckTrigger: 'PAYMENT',
      stock: 999,
      safetyStock: 50,
    },
    displayable: true,
    sellable: true,
    additionalPrice: getRandomNumber(10000),
    additionalPriceBeforeTax: getRandomNumber(10000),
    additionalTaxPrice: getRandomNumber(10000),
  };
}

export async function genProductOptionExtra() {
  return {
    type: 'TEXT',
    name: '옵션 엑스트라',
    required: false,
  };
}

export async function genOrderCheckout() {
  return {
    data: {
      ...(await _genOrder()),
      availableMileage: getRandomNumber(1000),
      availableCoupons: [
        await genAvailableCoupon(),
        await genAvailableCoupon(),
        await genAvailableCoupon(),
        await genAvailableCoupon(),
        await genAvailableCoupon(),
        await genAvailableCoupon(),
      ],
    },
  };
}

export async function genReviewDetail() {
  return {
    data: {
      id: v4(),
      content: 'adsflajsdlkfjasdl',
      score: 4.5,
      createdAt: new Date(),
      images: [
        await _genImageFile(),
        await _genImageFile(),
        await _genImageFile(),
        await _genImageFile(),
      ],
      orderItem: await _genOrderItem(),
    },
  };
}

export async function genReviewList() {
  return {
    data: {
      items: [
        await genReviewItem(),
        await genReviewItem(),
        await genReviewItem(),
        await genReviewItem(),
        await genReviewItem(),
      ],
      currentItemCount: 5,
      itemsPerPage: 20,
      pageIndex: 0,
      startIndex: 0,
      totalItems: 5,
      totalPages: 1,
    },
  };
}

async function _genOrder() {
  return {
    status: OrderStatus.ORDER_PROCESSING,
    type: 'ORDER',
    code: v4(),
    id: v4(),
    availableCoupons: [],
    recipient: {
      name: '정지승',
      mainPhoneNumber: '01030801376',
      address: {
        zipCode: '03455',
        address1: '서울특별시 은평구 응알모 261',
        address2: '3층',
      },
    },
    items: [
      await _genOrderItem(),
      await _genOrderItem(),
      await _genOrderItem(),
    ],
    stats: {
      product: {
        price: getRandomNumber(100000),
        priceBeforeTax: getRandomNumber(100000),
        taxPrice: getRandomNumber(100000),
        priceBeforeDiscount: getRandomNumber(100000),
        discountPrice: getRandomNumber(100000),
        couponPrice: getRandomNumber(100000),
        mileagePoint: getRandomNumber(100000),
      },
      mileagePoint: getRandomNumber(100000),
      discountPrice: getRandomNumber(100000),
      couponPrice: getRandomNumber(100000),
      price: getRandomNumber(100000),
      priceBeforeDiscount: getRandomNumber(100000),
      priceBeforeTax: getRandomNumber(100000),
      taxPrice: getRandomNumber(100000),
    },
  };
}

export async function genOrder() {
  return {
    data: await _genOrder(),
  };
}

async function _genOrderItem() {
  return {
    id: v4(),
    code: v4(),
    status: OrderItemStatus.DELIVERY_PROCESSING,
    quantity: getRandomNumber(5),
    product: {
      name: '상품이름',
      price: getRandomNumber(10000),
      code: v4(),
      featuredImages: [
        await _genImageFile(),
        await _genImageFile(),
        await _genImageFile(),
      ],
    },
    stats: {
      mileagePoint: getRandomNumber(100000),
      discountPrice: getRandomNumber(100000),
      couponPrice: getRandomNumber(100000),
      price: getRandomNumber(100000),
      priceBeforeDiscount: getRandomNumber(100000),
      priceBeforeTax: getRandomNumber(100000),
      taxPrice: getRandomNumber(100000),
    },
  };
}

export async function genOrderItem() {
  return {
    data: _genOrderItem(),
  };
}

export async function _genOrderListItem() {
  return {
    status: 'DRAFT',
    type: 'ORDER',
    code: v4(),
    id: v4(),
    availableCoupons: [],
    items: [
      await _genOrderItem(),
      await _genOrderItem(),
      await _genOrderItem(),
    ],
    recipient: {
      name: '정지승',
      mainPhoneNumber: '01030801376',
      address: {
        zipCode: '03455',
        address1: '서울특별시 은평구 응알모 261',
        address2: '3층',
      },
    },
    stats: {
      product: {
        price: getRandomNumber(100000),
        priceBeforeTax: getRandomNumber(100000),
        taxPrice: getRandomNumber(100000),
        priceBeforeDiscount: getRandomNumber(100000),
        discountPrice: getRandomNumber(100000),
        couponPrice: getRandomNumber(100000),
        mileagePoint: getRandomNumber(100000),
      },
      mileagePoint: getRandomNumber(100000),
      discountPrice: getRandomNumber(100000),
      couponPrice: getRandomNumber(100000),
      price: getRandomNumber(100000),
      priceBeforeDiscount: getRandomNumber(100000),
      priceBeforeTax: getRandomNumber(100000),
      taxPrice: getRandomNumber(100000),
    },
  };
}

export async function getOrderList() {
  return {
    data: {
      items: [
        await _genOrderListItem(),
        await _genOrderListItem(),
        await _genOrderListItem(),
        await _genOrderListItem(),
      ],
      currentItemCount: 4,
      itemsPerPage: 20,
      pageIndex: 0,
      startIndex: 0,
      totalItems: 4,
      totalPages: 1,
    },
  };
}

export async function getRealOrderDetail() {
  return {
    data: {
      id: '602107e938f5c68a4306a516',
      createdAt: '2021-02-08T09:44:09.481Z',
      updatedAt: '2021-02-08T09:44:21.064Z',
      deliveries: [
        {
          id: '602107e938f5c68a4306a51b',
          createdAt: '2021-02-08T09:44:09.350Z',
          updatedAt: '2021-02-08T09:44:21.000Z',
          order: '602107e938f5c68a4306a516',
          code: '2021100000000',
          status: 'PREPARING',
          items: [
            {
              id: '602107e938f5c68a4306a51e',
              createdAt: '2021-02-08T09:44:09.400Z',
              updatedAt: '2021-02-08T09:44:09.400Z',
              status: 'PREPARING',
              delivery: '602107e938f5c68a4306a51b',
              orderItemId: '602107e938f5c68a4306a51d',
            },
          ],
          carrier: {
            id: '5fbb38e6c9515b0eef4c5b7d',
            createdAt: '2020-11-23T04:21:58.199Z',
            updatedAt: '2020-11-23T04:21:58.199Z',
            name: '기본 배송',
            description: '자동생성',
            type: 'LOGISTICS-SERVICE',
            priceType: 'FIXED',
            prices: [
              {
                id: '5fbb38e6c9515b0eef4c5b7e',
                createdAt: '2020-11-23T04:21:58.199Z',
                updatedAt: '2020-11-23T04:21:58.199Z',
                minimum: 0,
                maximum: 50000,
                value: 3000,
              },
            ],
            extraCharges: [],
          },
          recipient: {
            name: '수령자면',
            subPhoneNumber: '0282918282',
          },
          address: {
            zipCode: '06037',
            locality: '서울',
            address1: '도산대로17길 4',
            address2: '5층',
            country: '대한민국',
          },
          stats: {
            price: 3000,
            priceBeforeTax: 2727,
            taxPrice: 273,
            priceBeforeDiscount: 3000,
            discountPrice: 0,
            couponPrice: 0,
            areaPrice: 0,
          },
        },
      ],
      payments: [
        {
          id: '602107f538f5c68a4306a533',
          createdAt: '2021-02-08T09:44:21.051Z',
          updatedAt: '2021-02-08T09:44:21.051Z',
          order: '602107e938f5c68a4306a516',
          items: [],
          status: 'BEFORE-DEPOSIT',
          type: 'DEPOSIT',
          stats: {
            refundPrice: 0,
            paymentPrice: 13000,
            totalPrice: 13000,
          },
          deposit: {
            account: {
              number: '111-1111-1111',
            },
            depositor: '지승',
          },
        },
      ],
      status: 'PAYMENT-PROCESSING',
      type: 'NORMAL',
      code: '2021100000000',
      orderer: {
        name: '주문자명',
        ip: '::ffff:127.0.0.1',
        email: 'email@email.email',
        user: '602107b038f5c68a4306a4e6',
      },
      recipient: {
        name: '정지승',
        mainPhoneNumber: '01030801376',
        address: {
          zipCode: '03455',
          address1: '서울특별시 은평구 응알모 261',
          address2: '3층',
        },
      },
      items: [
        {
          id: '602107e938f5c68a4306a51d',
          createdAt: '2021-02-08T09:44:09.460Z',
          updatedAt: '2021-02-09T01:52:19.295Z',
          review: '6021ead3af92d9e094ab5266',
          code: '2021100000000-000',
          quantity: 2,
          status: 'DELIVERY-PROCESSING',
          product: {
            id: '6001589e1ed7396cfc05b354',
            name: '옵션이 있는 상품',
            code: '00002021',
            taxPrice: 455,
            priceBeforeTax: 4545,
            price: 5000,
            taxRatio: 10,
            delivery: {
              range: 'DOMESTIC',
              separated: false,
              carriers: [],
              weight: 1,
              hsCodes: [],
              type: 'DIRECT',
            },
            categories: [],
          },
          deliveryItem: '602107e938f5c68a4306a51e',
          discounts: [],
          coupons: [],
          mileages: [],
          stats: {
            product: {
              basic: {
                price: 10000,
                priceBeforeTax: 9091,
                taxPrice: 909,
                priceBeforeDiscount: 10000,
                discountPrice: 0,
                couponPrice: 0,
                mileagePoint: 0,
              },
            },
            mileagePoint: 0,
            discountPrice: 0,
            couponPrice: 0,
            price: 10000,
            priceBeforeDiscount: 10000,
            priceBeforeTax: 9091,
            taxPrice: 909,
          },
        },
      ],
      coupons: [],
      usingMileage: 0,
      stats: {
        product: {
          price: 10000,
          priceBeforeTax: 9091,
          taxPrice: 909,
          priceBeforeDiscount: 10000,
          discountPrice: 0,
          couponPrice: 0,
          mileagePoint: 0,
        },
        delivery: {
          areaPrice: 0,
          price: 3000,
          priceBeforeTax: 2727,
          taxPrice: 273,
          priceBeforeDiscount: 3000,
          discountPrice: 0,
          couponPrice: 0,
        },
        mileagePoint: 0,
        discountPrice: 0,
        couponPrice: 0,
        orderItemCouponPrice: 0,
        paymentPrice: 13000,
        price: 13000,
        priceBeforeDiscount: 13000,
        priceBeforeTax: 11818,
        taxPrice: 1182,
      },
    },
  };
}

export async function getRealOrderList() {
  return {
    data: {
      currentItemCount: 1,
      itemsPerPage: 20,
      startIndex: 0,
      pageIndex: 0,
      totalItems: 1,
      totalPages: 1,
      items: [
        {
          id: '602107e938f5c68a4306a516',
          createdAt: '2021-02-08T09:44:09.481Z',
          updatedAt: '2021-02-08T09:44:21.064Z',
          deliveries: [
            {
              id: '602107e938f5c68a4306a51b',
              createdAt: '2021-02-08T09:44:09.350Z',
              updatedAt: '2021-02-08T09:44:21.000Z',
              order: '602107e938f5c68a4306a516',
              code: '2021100000000',
              status: 'PREPARING',
              items: [
                {
                  id: '602107e938f5c68a4306a51e',
                  createdAt: '2021-02-08T09:44:09.400Z',
                  updatedAt: '2021-02-08T09:44:09.400Z',
                  status: 'PREPARING',
                  delivery: '602107e938f5c68a4306a51b',
                  orderItemId: '602107e938f5c68a4306a51d',
                },
              ],
              carrier: {
                id: '5fbb38e6c9515b0eef4c5b7d',
                createdAt: '2020-11-23T04:21:58.199Z',
                updatedAt: '2020-11-23T04:21:58.199Z',
                name: '기본 배송',
                description: '자동생성',
                type: 'LOGISTICS-SERVICE',
                priceType: 'FIXED',
                prices: [
                  {
                    id: '5fbb38e6c9515b0eef4c5b7e',
                    createdAt: '2020-11-23T04:21:58.199Z',
                    updatedAt: '2020-11-23T04:21:58.199Z',
                    minimum: 0,
                    maximum: 50000,
                    value: 3000,
                  },
                ],
                extraCharges: [],
              },
              recipient: {
                name: '수령자면',
                subPhoneNumber: '0282918282',
              },
              address: {
                zipCode: '06037',
                locality: '서울',
                address1: '도산대로17길 4',
                address2: '5층',
                country: '대한민국',
              },
              stats: {
                price: 3000,
                priceBeforeTax: 2727,
                taxPrice: 273,
                priceBeforeDiscount: 3000,
                discountPrice: 0,
                couponPrice: 0,
                areaPrice: 0,
              },
            },
          ],
          payments: [
            {
              id: '602107f538f5c68a4306a533',
              createdAt: '2021-02-08T09:44:21.051Z',
              updatedAt: '2021-02-08T09:44:21.051Z',
              order: '602107e938f5c68a4306a516',
              items: [],
              status: 'BEFORE-DEPOSIT',
              type: 'DEPOSIT',
              stats: {
                refundPrice: 0,
                paymentPrice: 13000,
                totalPrice: 13000,
              },
              deposit: {
                account: {
                  number: '111-1111-1111',
                },
                depositor: '지승',
              },
            },
          ],
          status: 'PAYMENT-PROCESSING',
          type: 'NORMAL',
          code: '2021100000000',
          orderer: {
            name: '주문자명',
            ip: '::ffff:127.0.0.1',
            email: 'email@email.email',
            user: '602107b038f5c68a4306a4e6',
          },
          recipient: {
            name: '정지승',
            mainPhoneNumber: '01030801376',
            address: {
              zipCode: '03455',
              address1: '서울특별시 은평구 응알모 261',
              address2: '3층',
            },
          },
          items: [
            {
              id: '602107e938f5c68a4306a51d',
              createdAt: '2021-02-08T09:44:09.460Z',
              updatedAt: '2021-02-09T01:52:19.295Z',
              review: '6021ead3af92d9e094ab5266',
              code: '2021100000000-000',
              quantity: 2,
              status: 'DELIVERY-PROCESSING',
              product: {
                id: '6001589e1ed7396cfc05b354',
                name: '옵션이 있는 상품',
                code: '00002021',
                taxPrice: 455,
                priceBeforeTax: 4545,
                price: 5000,
                taxRatio: 10,
                delivery: {
                  range: 'DOMESTIC',
                  separated: false,
                  carriers: [],
                  weight: 1,
                  hsCodes: [],
                  type: 'DIRECT',
                },
                categories: [],
              },
              deliveryItem: '602107e938f5c68a4306a51e',
              discounts: [],
              coupons: [],
              mileages: [],
              stats: {
                product: {
                  basic: {
                    price: 10000,
                    priceBeforeTax: 9091,
                    taxPrice: 909,
                    priceBeforeDiscount: 10000,
                    discountPrice: 0,
                    couponPrice: 0,
                    mileagePoint: 0,
                  },
                },
                mileagePoint: 0,
                discountPrice: 0,
                couponPrice: 0,
                price: 10000,
                priceBeforeDiscount: 10000,
                priceBeforeTax: 9091,
                taxPrice: 909,
              },
            },
          ],
          coupons: [],
          usingMileage: 0,
          stats: {
            product: {
              price: 10000,
              priceBeforeTax: 9091,
              taxPrice: 909,
              priceBeforeDiscount: 10000,
              discountPrice: 0,
              couponPrice: 0,
              mileagePoint: 0,
            },
            delivery: {
              areaPrice: 0,
              price: 3000,
              priceBeforeTax: 2727,
              taxPrice: 273,
              priceBeforeDiscount: 3000,
              discountPrice: 0,
              couponPrice: 0,
            },
            mileagePoint: 0,
            discountPrice: 0,
            couponPrice: 0,
            orderItemCouponPrice: 0,
            paymentPrice: 13000,
            price: 13000,
            priceBeforeDiscount: 13000,
            priceBeforeTax: 11818,
            taxPrice: 1182,
          },
        },
      ],
    },
  };
}

async function genReviewItem() {
  return {
    id: v4(),
    content: 'content content content content sample',
    score: getRandomNumber(5),
    images: [
      await _genImageFile(),
      await _genImageFile(),
      await _genImageFile(),
      await _genImageFile(),
    ],
    orderItem: await _genOrderItem(),
    createdAt: new Date(),
  };
}

async function genAvailableCoupon() {
  return {
    id: v4(),
    coupon: {
      applicableProduct: {
        type: 'ALL',
        items: [
          await genAvailableCouponApplicableProductItem(),
          await genAvailableCouponApplicableProductItem(),
          await genAvailableCouponApplicableProductItem(),
          await genAvailableCouponApplicableProductItem(),
          await genAvailableCouponApplicableProductItem(),
        ],
      },
      applicableCategory: {
        type: 'ALL',
        items: [
          await genAvailableCouponApplicableProductItem(),
          await genAvailableCouponApplicableProductItem(),
          await genAvailableCouponApplicableProductItem(),
          await genAvailableCouponApplicableProductItem(),
          await genAvailableCouponApplicableProductItem(),
        ],
      },
    },
    availableDate: {
      minimum: new Date(),
      maximum: new Date(),
    },
  };
}

async function genAvailableCouponApplicableProductItem() {
  return {
    id: v4(),
    name: '쿠폰이름 샘플',
  };
}

async function genProductItem() {
  const price = getRandomNumber(100000);
  const discountPrice = getRandomNumber(price);
  const discountedPrice = price - discountPrice;
  return {
    id: v4(),
    name: 'A상품명A',
    featuredImages: [
      await _genImageFile(),
      await _genImageFile(),
      await _genImageFile(),
    ],
    price,
    discountedPrice,
    discountPrice,
  };
}

export async function genCartItem() {
  return {
    id: v4(),
    quantity: getRandomNumber(100),
    product: {
      id: v4(),
      name: 'B카트내상품명B',
      paymentPrice: getRandomNumber(100000),
      featuredImages: [],
    },
  };
}

export async function genCartItemUpdate() {
  return {
    data: {
      ...(await genCartItem()),
      stats: {
        productPrice: getRandomNumber(100000),
        discountPrice: getRandomNumber(100000),
        deliveryPrice: getRandomNumber(100000),
        totalPrice: getRandomNumber(100000),
      },
    },
  };
}

function getRandomNumber(power: number) {
  return parseInt((Math.random() * power).toFixed(0));
}

async function _genShowcase(slug?: string) {
  return {
    id: v4(),
    name: '행복할인',
    slug: slug || 'slug',
    products: [
      await genProductItem(),
      await genProductItem(),
      await genProductItem(),
      await genProductItem(),
    ],
  };
}

export async function genShowcase(slug?: string) {
  return {
    data: await _genShowcase(slug),
  };
}

export async function genShowcases(slug?: string) {
  return {
    data: {
      items: [
        await _genShowcase(slug),
        await _genShowcase(slug),
        await _genShowcase(slug),
        await _genShowcase(slug),
        await _genShowcase(slug),
        await _genShowcase(slug),
      ],
      currentItemCount: 6,
      itemsPerPage: 20,
      pageIndex: 0,
      startIndex: 0,
      totalItems: 6,
      totalPages: 1,
    },
  };
}

export async function genUser() {
  return {
    data: {
      id: 'asdf',
      name: {
        first: 'first',
        last: 'last',
        middle: 'middle',
      },
    },
  };
}

export async function genLogin(secret: string) {
  const accessToken = await sign(
    {
      kid: '627f6dbe-0f44-43b1-a376-9c2ead272fa2',
    },
    secret
  );

  const user = await genUser();

  const idToken = await sign(user, secret);

  return {
    data: {
      access_token: accessToken,
      expires_in: 86400,
      id_token: idToken,
      refresh_token: accessToken,
      scope: 'openid profile',
      token_type: 'Bearer',
    },
  };
}

export async function genJoin() {
  return {
    data: {
      success: true,
    },
  };
}

export async function genLogout() {
  return {
    data: {
      success: true,
    },
  };
}

export async function genChangePassword() {
  return {
    data: {
      success: true,
    },
  };
}

export async function _genBanner(sectionName = 'sectionName') {
  return {
    id: v4(),
    title: 'title',
    subtitle: 'subtitle',
    sectionName,
    pc: {
      link: 'http://localhost:3000',
      image: {
        original: {
          location: 'https://picsum.photos/1110/400',
        },
        '1x': {
          location: 'https://picsum.photos/1110/400',
        },
        '2x': {
          location: 'https://picsum.photos/1110/400',
        },
        '3x': {
          location: 'https://picsum.photos/1110/400',
        },
      },
    },
  };
}

export async function genBanners(sectionName?: string) {
  return {
    data: {
      items: [
        await _genBanner(sectionName),
        await _genBanner(sectionName),
        await _genBanner(sectionName),
        await _genBanner(sectionName),
        await _genBanner(sectionName),
        await _genBanner(sectionName),
      ],
      currentItemCount: 6,
      itemsPerPage: 20,
      pageIndex: 0,
      startIndex: 0,
      totalItems: 6,
      totalPages: 1,
    },
  };
}

export async function genReputation() {
  return {
    data: {
      score: getRandomNumber(1000),
    },
  };
}

export async function genWishlist() {
  return {
    data: {
      name: 'wish',
      isDefault: true,
      products: [
        await _genProductDetail(),
        await _genProductDetail(),
        await _genProductDetail(),
        await _genProductDetail(),
      ],
    },
  };
}

export async function genWritableOrderItem() {
  return {
    data: {
      items: [
        await _genOrderItem(),
        await _genOrderItem(),
        await _genOrderItem(),
        await _genOrderItem(),
      ],
      currentItemCount: 4,
      itemsPerPage: 20,
      pageIndex: 0,
      startIndex: 0,
      totalItems: 4,
      totalPages: 1,
    },
  };
}

async function _genMileageListItem() {
  return {
    id: v4(),
    available: true,
    point: getRandomNumber(1000),
    comment: 'mileage',
    createdAt: new Date(),
  };
}

export async function genUserMileageList() {
  return {
    data: {
      items: [
        await _genMileageListItem(),
        await _genMileageListItem(),
        await _genMileageListItem(),
        await _genMileageListItem(),
      ],
      currentItemCount: 4,
      itemsPerPage: 20,
      pageIndex: 0,
      startIndex: 0,
      totalItems: 4,
      totalPages: 1,
    },
  };
}

async function _genUserDeliveryAddress(isDefault: boolean) {
  return {
    id: v4(),
    isDefault,
    name: '우리집',
    recipientName: 'david',
    address: {
      zipCode: '03455',
      address1: '서울특별시 은평구 응알모 261',
      address2: '3층',
    },
    mainPhoneNumber: '01033333333',
    subPhoneNumber: '01022222222',
  };
}

export async function genUserDeliveryAddress() {
  return {
    data: await _genUserDeliveryAddress(true),
  };
}

export async function genUserDeliveryAddressList() {
  return {
    data: {
      items: [
        await _genUserDeliveryAddress(true),
        await _genUserDeliveryAddress(false),
        await _genUserDeliveryAddress(false),
        await _genUserDeliveryAddress(false),
      ],
      currentItemCount: 4,
      itemsPerPage: 20,
      pageIndex: 0,
      startIndex: 0,
      totalItems: 4,
      totalPages: 1,
    },
  };
}

async function _genCouponListItem(benefit: any) {
  return {
    id: v4(),
    code: v4(),
    coupon: {
      name: '상품 적용 쿠폰!',
      benefit,
    },
    availableDate: {
      minimum: new Date(2021, 1, 2),
      maximum: new Date(2021, 12, 31),
    },
  };
}

export async function genUserCouponList() {
  return {
    data: {
      items: [
        await _genCouponListItem({
          subType: 'ABSOLUTE',
          value: 4000,
        }),
        await _genCouponListItem({
          subType: 'RATIO',
          value: 40,
          maximum: 50000,
        }),
        await _genCouponListItem({
          subType: 'RATIO',
          value: 50,
        }),
      ],
      currentItemCount: 4,
      itemsPerPage: 20,
      pageIndex: 0,
      startIndex: 0,
      totalItems: 4,
      totalPages: 1,
    },
  };
}

async function _genComment() {
  return {
    id: v4(),
    author: {
      displayName: 'author',
    },
    content: 'content',
  };
}

export async function genComment() {
  return {
    data: {
      ...(await _genComment()),
    },
  };
}

export async function genCommentList() {
  return {
    data: {
      items: [
        await _genComment(),
        await _genComment(),
        await _genComment(),
        await _genComment(),
      ],
      currentItemCount: 4,
      itemsPerPage: 20,
      pageIndex: 0,
      startIndex: 0,
      totalItems: 4,
      totalPages: 1,
    },
  };
}

function _genCSItems(targetOrderItem: string) {
  return {
    id: v4(),
    createdAt: new Date(),
    updatedAt: new Date(),
    code: v4(),
    type: CustomerServiceItemType.SOURCE,
    orderItemId: targetOrderItem,
  };
}

async function _genCSData() {
  const order = await getRealOrderDetail();
  return {
    id: v4(),
    createdAt: new Date(),
    updatedAt: new Date(),
    type: CustomerServiceType.CANCEL,
    code: v4(),
    status: CustomerServiceStatus.PROCESSING,
    reason: 'CS사유',
    reasonDetail: '상세한 이유 상세한 이유 상세한 이유 상세한 이유',
    order: order.data,
    items: [_genCSItems(order.data.items[0].id)],
  };
}

export async function genCSDetail() {
  return {
    data: await _genCSData(),
  };
}

export async function genCSList() {
  return {
    data: {
      items: [
        await _genCSData(),
        await _genCSData(),
        await _genCSData(),
        await _genCSData(),
      ],
      currentItemCount: 4,
      itemsPerPage: 20,
      pageIndex: 0,
      startIndex: 0,
      totalItems: 4,
      totalPages: 1,
    },
  };
}

export async function genFile() {
  return {
    data: _genImageFile(),
  };
}

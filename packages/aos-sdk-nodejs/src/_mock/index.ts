/**
 * @copyright Copyright © 2018-2019 Corretto, Inc. All rights reserved.
 */

import { sign } from 'jsonwebtoken';
import { v4 } from 'uuid';

async function _genImageFile() {
  return {
    original: {
      location: 'https://picsum.photos/1110/400'
    },
    '1x': {
      location: 'https://picsum.photos/1110/400'
    },
    '2x': {
      location: 'https://picsum.photos/1110/400'
    },
    '3x': {
      location: 'https://picsum.photos/1110/400'
    },
  }
}

export async function genArticleList() {
  return {
    data: {
      id: v4(),
      title: '타이틀',
      content: '내용',
      createdAt: new Date(),
    },
  };
}

export async function genArticleDetail() {
  return {
    data: {
      id: v4(),
      title: '타이틀',
      content: '내용',
      createdAt: new Date(),
      author: '김작가',
    },
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

export async function genCategoryList(): Promise<any> {
  return {
    data: {
      currentItemCount: 5,
      itemsPerPage: 20,
      pageIndex: 0,
      startIndex: 0,
      totalItems: 5,
      totalPages: 10,
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
      totalPages: 10,
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
      items: [
        await genProductOptionItem(),
        await genProductOptionItem(),
        await genProductOptionItem(),
        await genProductOptionItem(),
      ],
      variants: [
        await genProductVariant(),
        await genProductVariant(),
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
    data: await _genProductDetail(),
  };
}

export async function genProductOptionItem() {
  return {
    id: v4(),
    name: '옵션명',
    values: [
      await genProductOptionItemValue(),
      await genProductOptionItemValue(),
      await genProductOptionItemValue(),
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
    id: v4(),
    content: 'adsflajsdlkfjasdl',
    score: 4.5,
    createdAt: new Date(),
    orderItem: {
      id: v4(),
      code: v4(),
      quantity: getRandomNumber(10),
      review: undefined,
      product: {
        id: v4(),
        name: '상품',
        price: 123,
        // option
      },
      // variant?: ProductVariantJson;
      deliveryItem: v4(),
      customerServiceItem: v4(),
      discounts: [],
      coupons: [],
      mileages: [],
      status: 'DRAFT',
      stats: {},
      createdAt: new Date(),
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
        await genReviewItem(),
      ],
      currentItemCount: 5,
      itemsPerPage: 20,
      pageIndex: 0,
      startIndex: 0,
      totalItems: 5,
      totalPages: 10,
    },
  };
}

export async function genOrder() {
  return {
    data: {
      status: 'DRAFT',
      type: 'ORDER',
      code: v4(),
      id: v4(),
      title: '제목제목',
      price: getRandomNumber(10000),
      content: 'sodydsodyd',
      availableCoupons: [],
      stats: {
        product: {
          basic: {
            price: getRandomNumber(100000),
            priceBeforeTax: getRandomNumber(100000),
            taxPrice: getRandomNumber(100000),
            priceBeforeDiscount: getRandomNumber(100000),
            discountPrice: getRandomNumber(100000),
            couponPrice: getRandomNumber(100000),
            mileagePoint: getRandomNumber(100000),
          },
        },
        mileagePoint: getRandomNumber(100000),
        discountPrice: getRandomNumber(100000),
        couponPrice: getRandomNumber(100000),
        price: getRandomNumber(100000),
        priceBeforeDiscount: getRandomNumber(100000),
        priceBeforeTax: getRandomNumber(100000),
        taxPrice: getRandomNumber(100000),
      },
    },
  };
}

async function genReviewItem() {
  return {
    id: v4(),
    content: 'content content content content sample',
    score: 3.4,
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
    featureImages: [await _genImageFile(), await _genImageFile(), await _genImageFile()],
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
      await genProductItem()
    ]
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
      }
    }
  }

}

export async function genLogin(secret: string) {
  const accessToken = await sign({
    kid: '627f6dbe-0f44-43b1-a376-9c2ead272fa2',
  }, secret);

  const user = await genUser();

  const idToken = await sign(user, secret);

  return {
    data: {
      access_token: accessToken,
      expires_in: 86400,
      id_token: idToken,
      refresh_token: accessToken,
      scope: "openid profile",
      token_type: "Bearer"
    },
  };
}

export async function genJoin() {
  return {
    data: {
      success: true
    },
  };
}

export async function genLogout() {
  return {
    data: {
      success: true
    },
  };
}

export async function genChangePassword() {
  return {
    data: {
      success: true
    },
  };
}

export async function _genBanner(sectionName: string = 'sectionName') {
  return {
    title: 'title',
    sectionName: sectionName,
    pc: {
      link: 'http://localhost:3000'
    },
    image: {
      original: {
        location: 'https://picsum.photos/1110/400'
      },
      '1x': {
        location: 'https://picsum.photos/1110/400'
      },
      '2x': {
        location: 'https://picsum.photos/1110/400'
      },
      '3x': {
        location: 'https://picsum.photos/1110/400'
      },
    }
  }
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
    }
  };
}
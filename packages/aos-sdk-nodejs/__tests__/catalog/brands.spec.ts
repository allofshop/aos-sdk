/**
 * @copyright Copyright © 2018-2019 Corretto, Inc. All rights reserved.
 */

// import * as aos from '../../src';
describe('Brand', () => {
  it('init', async () => {
    expect('a').toBe('a');
  });
});
// describe('Brand', () => {
//   it('Brand 리스트 - Q', async () => {
//     const response = await aos.Catalog.getBrands({ names: ['ghi', 'sdjfk'] });

//     expect(response).toBeDefined();
//   });

//   it('Brand Detail', async () => {
//     const response = await aos.Catalog.getBrand('604eb6101d50d920ab428f4d');

//     expect(response).toMatchObject({
//       apiVersion: '1.0',
//       context: 'context',
//       method: 'GET',
//       data: {
//         id: '604eb6101d50d920ab428f4d',
//         code: '00000000',
//         name: '브랜드',
//         description: '브랜드 설명',
//       },
//     });
//   });
// });

/**
 * @copyright Copyright © 2018-2019 Corretto, Inc. All rights reserved.
 */
import * as AosSdkNodejsLite from '../src';

 describe('Category', () => {
  it('init', async () => {
    expect('a').toBe('a');
    AosSdkNodejsLite.initialize({
      host: 'http://localhost:3000',
      apiKey: '44',
      secret: '33',
      shopId: '22',
      version: 4,
    })
    // AosSdk.User.createUserCard({});
  });
});
// import * as aos from '../../src';

// describe('Category', () => {
//   it('Category 레스트 - No Query', async () => {
//     const response = await aos.Catalog.getCategories({});

//     expect(response).toBeDefined();
//   });

//   it('Category Tree 리스트 - No Query', async () => {
//     const response = await aos.Catalog.getCategoryTree({});

//     expect(response).toMatchObject({
//       apiVersion: '1.0',
//       context: 'context',
//       method: 'GET',
//     });
//     expect(response.data).toMatchObject({
//       currentItemCount: 3,
//       itemsPerPage: 20,
//       startIndex: 0,
//       pageIndex: 0,
//       totalItems: 3,
//       totalPages: 1,
//     });
//     expect(response.data.items).toHaveLength(3);
//     expect(response.data.items[0]).toMatchObject({
//       id: response.data.items[0].id,
//       name: '2-2 카테고리',
//       description: '2-2 카테고리',
//       order: 2,
//       displayable: false,
//       soldoutExhibitionType: 'DONT-CARE',
//       useAdultAuthentication: false,
//       path: `${response.data.items[2].id}#${response.data.items[0].id}`,
//       parent: response.data.items[2].id,
//       level: 2,
//     });
//     expect(response.data.items[0].discounts).toHaveLength(0);
//     expect(response.data.items[0].children).toHaveLength(0);
//     expect(response.data.items[1]).toMatchObject({
//       id: response.data.items[1].id,
//       name: '2-1 카테고리',
//       description: '2-1 카테고리 입니다.',
//       order: 1,
//       displayable: true,
//       soldoutExhibitionType: 'DONT-CARE',
//       useAdultAuthentication: false,
//       discounts: [],
//       path: `${}#604ebd1eef305b2fdbe02b4b`,
//       parent: '604b18596d8f083b920d6d6c',
//       level: 2,
//       children: [],
//     });

//     console.log(response.data.items[1]);
//     console.log(response.data.items[2]);
//     console.log('!!!!!!!!!!!!!!');
//   });
// });

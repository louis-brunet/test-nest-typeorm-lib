// import { ObjectLiteral, SelectQueryBuilder } from 'typeorm';
//
// import { Mapper, Page, PageOptions } from 'neptune-utils';
//
// export const paginate = async <T extends ObjectLiteral>(
//   options: PageOptions,
//   queryBuilder: SelectQueryBuilder<T>,
// ) => {
//   const finalQuery = queryBuilder.skip(options.offset).take(options.limit);
//   const [items, count] = await finalQuery.getManyAndCount();
//
//   return Mapper.toClass(Page<T>, {
//     metadata: {
//       page: options.page,
//       perPage: options.perPage,
//       total: count,
//     },
//     items,
//   });
// };

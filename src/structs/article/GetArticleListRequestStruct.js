import { object, optional, defaulted, integer, string } from 'superstruct';

export const GetArticleListRequestStruct = object({
  offset: defaulted(integer(), 0),
  take: defaulted(integer(), 10),
  orderBy: defaulted(string(), "recent"),
  word: optional(string()),
});

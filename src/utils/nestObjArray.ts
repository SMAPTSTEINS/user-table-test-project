import { User } from '../types/types';

export const nestObjArray = (items: User[], id = 0): User[] => {
  const result = [...items]
    .filter((item) => item.parentId === id)
    .map((item) => ({
      ...item,
      childrenNodes: nestObjArray(items, item.id),
    }))
    .sort((prevUser, nextUser) => nextUser.childrenNodes.length - prevUser.childrenNodes.length);

  return result;
};

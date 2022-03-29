export type NestedObject<T> = {
  id: number;
  parentId: number;
  childrenNodes?: T[];
};

export interface User extends NestedObject<User> {
  isActive: boolean;
  balance: string;
  name: string;
  email: string;
}

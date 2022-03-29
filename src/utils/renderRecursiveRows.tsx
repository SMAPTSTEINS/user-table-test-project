import UserTableRow from '../components/TableRow';
import { User } from '../types/types';
import { nestObjArray } from './nestObjArray';

/**
 * Функция возвращает массив рекурсивных компонентов TableRow.
 * @param arr - Массив объектов.
 * @param nestingLevel - Уровень вложенности, на котором вызывается функция.
 * @param recursion - Нужно ли создавать дерево объектов из данного массива.
 * @returns Массив компонентов с вложенными объектами-потомками.
 */
export const renderRecursiveUserRows = (arr: User[], nestingLevel: number, recursion = false) => {
  const array = recursion ? nestObjArray(arr) : arr;
  return array.map((user) => {
    return <UserTableRow {...user} key={user.id} nesting={nestingLevel} childrenNodes={user.childrenNodes || []} />;
  });
};

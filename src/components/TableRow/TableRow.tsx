import React, { useState } from 'react';
import cn from 'classnames';

import './TableRow.scss';

import { NestedObject, User } from '../../types/types';
import { renderRecursiveUserRows } from '../../utils/renderRecursiveRows';

/**
 * @param childrenNodes - Массив вложенных объектов.
 * @param nesting - уровень вложенности компонента.
 */
interface IUserTableRowProps extends User {
  childrenNodes: User[];
  nesting: number;
}

/**
 * Рекурсивный компонент отображающий поля объекта в ряде таблицы и поля его потомков.
 */
const UserTableRow: React.FC<IUserTableRowProps> = ({ id, name, email, balance, isActive, childrenNodes, nesting }) => {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <>
      <tr
        className="table-row"
        onClick={() => {
          if (childrenNodes && childrenNodes.length) setShowChildren((showChildren) => !showChildren);
        }}
        style={{ transform: 'scaleY(1)' }}
      >
        <td className="user-info">
          <div
            className={cn('user-info user-id', {
              arrow: childrenNodes && childrenNodes.length,
              down: showChildren,
            })}
            style={{
              paddingLeft: nesting ? `${nesting * 0.75}rem` : '0.55rem',
            }}
          >
            {id}
          </div>
        </td>
        <td className="user-info">{name}</td>
        <td className="user-info">{email}</td>
        <td className="user-info">{balance}</td>
        <td className="user-info">{isActive ? 'active' : 'inactive'}</td>
      </tr>
      {showChildren && renderRecursiveUserRows(childrenNodes!, nesting + 1)}
    </>
  );
};

export default UserTableRow;

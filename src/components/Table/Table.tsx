import React, { useMemo, useState } from 'react';
import './Table.scss';

import { NestedObject, User } from '../../types/types';
import { renderRecursiveUserRows } from '../../utils/renderRecursiveRows';

/**
 * @param data - данные передаваемые таблице.
 */
interface ITableProps<T extends NestedObject<T>> {
  data: T[];
}

const Table: React.FC<ITableProps<User>> = ({ data }) => {
  const [showOnlyActive, setShowOnlyActive] = useState(false);
  const userElements = useMemo(
    () => renderRecursiveUserRows(showOnlyActive ? data.filter((user) => user.isActive) : data, 0, true),
    [data, showOnlyActive],
  );

  return (
    <table className="table">
      <thead className="table-header">
        <th className="table-header-cell">Id</th>
        <th className="table-header-cell">Name</th>
        <th className="table-header-cell">Email</th>
        <th className="table-header-cell">Balance</th>
        <th
          className="table-header-cell user-status"
          onClick={() => setShowOnlyActive((showOnlyActive) => !showOnlyActive)}
        >
          Status
        </th>
      </thead>
      <tbody className="table-body">{userElements}</tbody>
    </table>
  );
};

export default Table;

// app/components/DataTable.tsx
import React, { useMemo } from 'react';
import { sort, useSortBy, useFilters, ColumnDef } from '@tanstack/react-table';
import { Payment } from '../../../lib/payment';
import { columns } from './Columns';

interface DataTableProps {
  data: Payment[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const memoizedColumns = useMemo(() => columns, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns: memoizedColumns, data }, useFilters, useSortBy);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value || undefined);
  };

  return (
    <div className="overflow-x-auto">
      <input
        value={state.globalFilter || ''}
        onChange={handleFilterChange}
        placeholder="Search all columns"
        className="mb-4 rounded border p-2"
      />
      <table {...getTableProps()} className="min-w-full border bg-white">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="border px-4 py-2"
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="border px-4 py-2">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

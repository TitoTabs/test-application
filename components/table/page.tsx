// Table.tsx
import React from "react";

export type Column<T> = {
  key: keyof T;
  header: React.ReactNode;
};

export type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
  emptyState?: React.ReactNode;
  rowKey?: (row: T, index: number) => React.Key;
};

// A simple table component that displays data in a tabular format.
export default function Table<T extends Record<string, any>>({
  columns,
  data,
  emptyState = "No data available.",
  rowKey = (_, index) => index,
}: TableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200 bg-white">
      <table className="min-w-full text-left text-sm text-gray-700">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="px-4 py-3 font-medium uppercase tracking-wide"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-6 text-center text-gray-400"
              >
                {emptyState}
              </td>
            </tr>
          ) : (
            data.map((row, idx) => (
              <tr key={rowKey(row, idx)} className="border-t hover:bg-gray-50">
                {columns.map((col) => (
                  <td key={String(col.key)} className="px-4 py-3">
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

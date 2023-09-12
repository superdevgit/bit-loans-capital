const Table = ({ content }: { content: any[] }) => {
  return (
    <table className="table-auto border-separate border border-slate-500  w-full lg:w-[80%]">
      <thead>
        <tr>
          <th className="p-1 md:p-3 border border-slate-600 bg-slate-400">
            Loan Amount
          </th>
          <th className="p-1 md:p-3 border border-slate-600 bg-slate-400">
            Loan Type
          </th>
          <th className="p-1 md:p-3 border border-slate-600 bg-slate-400">
            Collateral
          </th>
          <th className="p-1 md:p-3 border border-slate-600 bg-slate-400">Interest</th>
          <th className="p-1 md:p-3 border border-slate-600 bg-slate-400">Duration</th>
        </tr>
      </thead>
      <tbody className="space-y-4">
        {content.map((item: any) => (
          <TableRow key={item.row} row={item} />
        ))}
      </tbody>
    </table>
  );
};

const TableRow = ({ row }: { row: any }) => {
  return (
    <>
      <tr className={`${row.row % 2 === 0 ? "bg-gray-200" : ""}`}>
        <td rowSpan={2} className="p-1 md:p-3 border border-slate-700">
          {row.loanAmount}
        </td>
        <td className="p-1 md:p-3 border border-slate-700">{row.normal.loanType}</td>
        <td className="p-1 md:p-3 border border-slate-700">{row.normal.collateral}</td>
        <td rowSpan={2} className="p-1 md:p-3 border border-slate-700">
          {row.normal.interest}
        </td>
        <td rowSpan={2} className="p-1 md:p-3 border border-slate-700">
          {row.normal.duration}
        </td>
      </tr>
      <tr className={`${row.row % 2 === 0 ? "bg-gray-200" : ""}`}>
        {/* <td rowSpan={2} className="p-1 md:p-3 border border-slate-700">$8K-$50K</td> */}
        <td className="p-1 md:p-3 border border-slate-700">
          {row.emergency.loanType}
        </td>
        <td className="p-1 md:p-3 border border-slate-700">
          {row.emergency.collateral}
        </td>
        {/* <td className="p-1 md:p-3 border border-slate-700">4.50%</td>
            <td className="p-1 md:p-3 border border-slate-700">10 Years</td> */}
      </tr>
    </>
  );
};
export default Table;

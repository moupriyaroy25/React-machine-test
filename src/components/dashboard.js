import fakeData from "./MOCK_DATA.json";
import { useMemo } from 'react';
import { useSortBy, useTable } from 'react-table';
import './dashboard.css';
import { useState } from "react";
import Chart from "./Chart";

const Dashboard = () => {
  // console.log(fakeData);

  const [isChecked,setIsChecked] = useState(false);
  console.log(isChecked);

  

  const data = useMemo(()=>fakeData,[]);
  const columns = useMemo(()=>[
    {
      Header: "ID",
      accessor:"id",
    },
    {
      Header: "Campaigns",
      accessor:"campaigns",
    },
    {
      Header: "Click",
      accessor:"clicks",
    },
    {
      Header: "Cost",
      accessor:"cost",
    },
    {
      Header: "Gender",
      accessor:"gender",
    },
    {
      Header: "Conversion",
      accessor:"conversions",
    },
    {
      Header: "Revenue",
      accessor:"revenue",
    },
],
[]
);

  const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = useTable({columns,data},useSortBy);
  return (
    <div className="container">
        <div>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup)=>(
              <tr{...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column)=>(
                    <th{...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render("Header")}
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
            {rows.map((row)=>{
              prepareRow(row);
              return(
                <tr{...row.getRowProps()}>
                {row.cells.map((cell)=>(
                  <td{...cell.getCellProps()}>
                  {cell.render("Cell")}</td>
                ))}

                </tr>
              );

            })}
          </tbody>
        </table>
        </div>
        <div className="donut-button">
        <input type="checkbox" onChange={()=>setIsChecked(!isChecked)}/>
        {isChecked? <Chart/>:''}
        </div>
    </div>
  )
}

export default Dashboard;
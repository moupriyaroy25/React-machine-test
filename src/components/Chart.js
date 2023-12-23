import React ,{useState, useEffect}from "react";
import Chart from 'react-apexcharts';

function DonutChart()
{
  return(

    <React.Fragment>
      <div className='container-fluid mt-3 mb-3'>
      <h2 className="text-left">Donut Chart</h2>
      <Chart
      type="donut"
      width={1300}
      height={ 540}
      series={[45,65,67]}

      options={{
        labels:['male','female','unknown']
      }}
      />
      </div>
    </React.Fragment>
  );

}
export default DonutChart;
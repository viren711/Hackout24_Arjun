import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);
  console.log(data);
  const [chartData, setChartData] = useState([]);
  const [forestArea, setForestArea] = useState([]);
  // const forestArea=data.received_data.map(item=>item["forest_Area(%)"]);
  // const landArea=data.received_data.map(item=>item["land_Area(%)"]);
  const years = data.received_data.map((item) => item["year"]);
  const [landArea, setLandArea] = useState([]);
  useEffect(() => {
    if (chartRef.current) {
      const data1 = data.received_data.map((item) => item["forest Area(%)"]);
      setForestArea(data1);
      const data2 = data.received_data.map((item) => item["land_Area(%)"]);
      setLandArea(data2);
      console.log(data1, data2);
      // data.received_data.map((e)=>{
      //     console.log(e);
      //     // setLandArea(prev=>[...prev,e?.land_Area])
      // })
      const chartOptions = {
        chart: {
          height: "100%",
          maxWidth: "100%",
          type: "line",
          fontFamily: "Inter, sans-serif",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 6,
        },
        grid: {
          show: true,
          strokeDashArray: 4,
          padding: {
            left: 2,
            right: 2,
            top: -26,
          },
        },
        series: [
          {
            name: "Forest Area",
            data: data1,
            color: "#1A56DB",
          },
          {
            name: "Land Area",
            data: data2,
            color: "#7E3AF2",
          },
        ],
        legend: {
          show: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          categories: years,
          //   categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
            },
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
      };
      // if(document.getElementById('area-chart') &&   typeof ApexCharts !== 'undefined')
      // {
      // }
      if (data1 && data2) {
        const chart = new ApexCharts(chartRef.current, chartOptions);
        chart.render();
        return () => chart.destroy();
      }
    }
    // Cleanup chart on component unmount
    // return () => {
    //   chart.destroy();
    // };
  }, [chartRef]);

  return (
    <div className="max-w-full w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 my-4 h-[40vh]">
      <div className="flex justify-between">
        <div>
          {/* <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">32.4k</h5> */}
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Deforestation over years
          </p>
        </div>
        {/* <div
        className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
        12%
        <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
        </svg>
      </div> */}
      </div>
      <div id="line-chart" ref={chartRef}></div>
    </div>
  );
};

export default ChartComponent;

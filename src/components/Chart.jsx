import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
function LineChart({historical}) {
    const [chart,setChart]=useState([["Date","Price"]])

    useEffect(()=>{
        let dataCopy=[["Date","Price"]]
        if(historical.prices){
            historical.prices.map((item)=>{
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
            })
            setChart(dataCopy)
        }
    },[historical])

  return (
    <Chart
    chartType='LineChart'
    data={chart}
    height='90vh'
    width='100%'
    legendToggle
    
    />
  )
}

export default LineChart
import './App.css';
import React from 'react';

import CanvasJSReact from './assets/canvasjs.react';
import { useState } from 'react';



function App() {
  const [select, setselect] = useState("line")
  //var CanvasJSReact = require('./canvasjs.react');
  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  var arrnw = [
    { x: 10, y: 71 },
    { x: 20, y: 55 },
    { x: 30, y: 50 },
    { x: 40, y: 65 },
    { x: 50, y: 71 },
    { x: 60, y: 68 },
    { x: 70, y: 38 },
    { x: 80, y: 92 },
    { x: 90, y: 54 },
    { x: 100, y: 60 },
    { x: 110, y: 21 },
    { x: 120, y: 49 },
    { x: 130, y: 36 }
  ]
  


  const options = {
    animationEnabled: true,
    animationDuration: 2000,
    exportEnabled: true,
    theme: "light1", //"light1", "dark1", "dark2"
    culture: "es",
    title: {
      text: "value"
    },
    axisY: {
      includeZero: true
    },
    data: [{
      type: select, //change type to bar, line, area, pie, etc
      //indexLabel: "{y}", //Shows y value on all Data Points
      indexLabelFontColor: "#5A5757",
      indexLabelPlacement: "inside",
      dataPoints: arrnw
    }]
  }

  var min_x = Math.min(...arrnw.map(item => item.x));
  var max_x = Math.max(...arrnw.map(item => item.x));
  var min_y = Math.min(...arrnw.map(item => item.y));
  var max_y = Math.max(...arrnw.map(item => item.y));

  return (
    <div className="App">

      <select onChange={(e)=>setselect(e.target.value)}>
        
        <option value="bar">bar</option>
        <option value="line">line</option>
        <option value="area">area</option>
        <option value="pie">pie</option>
        <option value="spline">spline</option>
        <option value="stepLine">stepLine</option>

      </select>

      <div align="center" style={{ height: "50%", width: "50%", alignText: "center" , align: "center"}}>
        <CanvasJSChart options={options}
        /* onRef = {ref => this.chart = ref} */
        />

        <h3>max x: {max_x}, max y: {max_y}</h3>
        <h3>min x: {min_x}, min y: {min_y}</h3>
        <h3>min x: {max_x}, min_y: {min_y}</h3>

      </div>

    </div>
  );
}

export default App;

import React from 'react';
import BarChartWithDH from '@visdesignlab/data-hunches-react';
import './App.css';

function App() {
  const exampleData = [{ label: "a", value: 9, categorical: 'A' }, { label: "b", value: 2, categorical: 'B' }, { label: "c", value: 2, categorical: 'A' }, { label: "d", value: 3, categorical: 'A' }, { label: "e", value: 5, categorical: 'A' }, { label: "f", value: 7, categorical: 'A' }, { label: "g", value: 9, categorical: 'C' }, { label: "h", value: 5, categorical: 'B' }];
  return (

    <div className="App">
      <BarChartWithDH dataSet={exampleData} svgWidth={500} svgHeight={500} datasetName="test2" />
    </div>

  );
}

export default App;
import React from 'react';
import BarChartWithDH from '@visdesignlab/data-hunches-react';
import './App.css';

function App() {
  // const exampleData = [{ label: "a", value: 9, categorical: 'A' }, { label: "b", value: 2, categorical: 'B' }, { label: "c", value: 2, categorical: 'A' }, { label: "d", value: 3, categorical: 'A' }, { label: "e", value: 5, categorical: 'A' }, { label: "f", value: 7, categorical: 'A' }, { label: "g", value: 9, categorical: 'C' }, { label: "h", value: 5, categorical: 'B' }];



  const COVIDData = [
    { categorical: 'Europe', label: "Austria", value: 2978.887 },
    { categorical: 'Oceania', label: "Australia", value: 872.619 },
    { categorical: 'North America', label: 'Canada', value: 159.527 },
    { categorical: 'Europe', label: 'France', value: 807.867 },
    { categorical: 'Europe', label: 'Germany', value: 1614.237 },
    { categorical: 'Oceania', label: 'New Zealand', value: 2886.32 },
    { categorical: 'Europe', label: 'Norway', value: 2301.186 },
    { categorical: 'Europe', label: 'Sweden', value: 236.456 },
    { categorical: 'Europe', label: 'United Kingdom', value: 611.56 },
    { categorical: 'North America', label: 'United States', value: 186.2 },
  ];
  return (

    <div className="App">
      <BarChartWithDH />
    </div>

  );
}

export default App;
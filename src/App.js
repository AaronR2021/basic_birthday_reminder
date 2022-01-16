import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [dataList, setDataList] = useState(data);
  return (
    <div className="card">
      <h2 className="heading">{dataList && dataList.length} Birthdays today</h2>
      {dataList&&dataList.map((indiv) => {
        return <List {...indiv} />;
      })}
      <button onClick={()=>{setDataList()}}>Clear All</button>
    </div>
  );
}

export default App;

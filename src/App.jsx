import React, { useEffect, useState } from 'react';
import { getResponse } from './components/api/requestData';
import { ProgramManagment } from './components/program/ProgramManagment';
import { ReiewBlock } from './components/reviewBlock/ReiewBlock';

const App = () => {
  const [resFromApi, setResFromApi] = useState([])
  const getData = async () => {
    const data = await getResponse()
    setResFromApi(data)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container">
      <h1>Специализированные дисциплины</h1>
      {resFromApi.map((el, i) => <ProgramManagment key={el._id} title={el.title} subjects={el.specializedSubjects} />)}
      <ReiewBlock />
    </div>
  );
}

export default App;

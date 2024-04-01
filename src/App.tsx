import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CloudStrore from './Components/CloudStore/CloudStrore';
import RelationalDatabase from './Components/RelationalDatabase/RelationalDatabase';
import Kafka from './Components/Kafka/kafka';
import { CustomField } from './Components/CustomField/CustomField';
import Test from './Components/jsonForms/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cloud-store" element={<CloudStrore />}></Route>
          <Route path="/relational-db" element={<RelationalDatabase />}></Route>
          <Route path="/kafka" element={<Kafka />}></Route>
          <Route path="/custom" element={<CustomField />}></Route>
          <Route path="/jsonform" element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

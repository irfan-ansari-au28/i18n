import React, { useState } from 'react';
import './App.css';


import { useTranslation } from 'react-i18next';
import Form from './components/Form';

function App() {
  const { i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    location: '',
    typeOfLoan: ''
  });

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <h1>Loan Application Form</h1>
      <Form formData={formData} setFormData={setFormData} />

      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('hi')}>Hindi</button>
      <button onClick={() => handleLanguageChange('bn')}>Bengali</button>
    </div>
  );
}

export default App;

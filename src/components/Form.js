import React from 'react';
import { useTranslation } from 'react-i18next';

function Form({ formData, setFormData }) {
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <div>
        <label>{t('name')}: </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>{t('address')}: </label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </div>
      <div>
        <label>{t('location')}: </label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
      </div>
      <div>
        <label>{t('typeOfLoan')}: </label>
        <input type="text" name="typeOfLoan" value={formData.typeOfLoan} onChange={handleChange} />
      </div>
    </form>
  );
}

export default Form;

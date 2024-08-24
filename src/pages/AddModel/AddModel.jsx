import React from 'react';
import EditForm from '../../components/EditForm/EditForm';
import '../EditingModel/EditingModel.scss';

const AddModel = () => {
  return (
    <div className='editingmodel'>
      <h2 className='editingmodel__title'>Добавление модели</h2>
      <EditForm />
    </div>
  );
};

export default AddModel;

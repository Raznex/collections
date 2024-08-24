import React from 'react';
import './EditingModel.scss';
import EditForm from '../../components/EditForm/EditForm';

const EditingModel = () => {
  return (
    <div className='editingmodel'>
      <h2 className='editingmodel__title'>Редактирование</h2>
      <EditForm />
    </div>
  );
};

export default EditingModel;

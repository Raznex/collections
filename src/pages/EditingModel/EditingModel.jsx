import React from 'react';
import './EditingModel.scss';
import { useLocation } from 'react-router-dom';
import EditForm from '../../components/EditForm/EditForm';

const EditingModel = () => {
  const location = useLocation().pathname;
  return (
    <div className='editingmodel'>
      <h2 className='editingmodel__title'>Редактирование</h2>
      <EditForm location={location} />
    </div>
  );
};

export default EditingModel;

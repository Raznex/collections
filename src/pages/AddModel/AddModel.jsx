import React from 'react';
import EditForm from '../../components/EditForm/EditForm';
import '../EditingModel/EditingModel.scss';
import { useLocation } from 'react-router-dom';

const AddModel = () => {
  const location = useLocation().pathname;
  return (
    <div className='editingmodel'>
      <h2 className='editingmodel__title'>Добавление модели</h2>
      <EditForm location={location} />
    </div>
  );
};

export default AddModel;

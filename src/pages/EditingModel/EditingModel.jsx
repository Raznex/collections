import React from 'react';
import './EditingModel.scss';
import { useLocation } from 'react-router-dom';
import EditForm from '../../components/EditForm/EditForm';
import { constLanguagePack } from '../../utils/Language/LanguagePack';
import { useStore } from '../../utils/store/store';

const EditingModel = () => {
  const location = useLocation().pathname;
  const { language } = useStore();
  return (
    <div className='editingmodel'>
      <h2 className='editingmodel__title'>
        {constLanguagePack.Sorting[language]}
      </h2>
      <EditForm location={location} />
    </div>
  );
};

export default EditingModel;

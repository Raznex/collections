import React from 'react';
import EditForm from '../../components/EditForm/EditForm';
import '../EditingModel/EditingModel.scss';
import { useLocation } from 'react-router-dom';
import { constLanguagePack } from '../../utils/Language/LanguagePack';
import { useStore } from '../../utils/store/store';

const AddModel = () => {
  const location = useLocation().pathname;
  const { language } = useStore();
  return (
    <div className='editingmodel'>
      <h2 className='editingmodel__title'>
        {constLanguagePack.AddModel[language]}
      </h2>
      <EditForm location={location} />
    </div>
  );
};

export default AddModel;

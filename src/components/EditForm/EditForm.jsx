import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';
import CreateInput from '../CreateInput/CreateInput';

import './EditForm.scss';

import CurrencySelect from '../CurrencySelect/CurrencySelect';
import {
  addModel,
  addModelToFavourite,
  editModel,
  getDetailModel,
} from '../../utils/api';
import { useNavigate, useParams } from 'react-router-dom';

const EditForm = ({ location }) => {
  const [images, setImages] = useState([]);
  const [card, setCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [damage, setDamage] = useState('Не повреждена');
  const [currency, setCurrency] = useState('RUB');
  const [defaultValues, setDefaultValues] = useState({
    modelName: '',
    manufacturer: '',
    price: '',
    modelCode: '',
    category: '',
    year: '',
    location: '',
  });

  useEffect(() => {
    if (location === '/editmodel') {
      setDefaultValues({
        modelName: '1',
        manufacturer: '2',
        price: '3',
        modelCode: '4',
        category: '5',
        year: '6',
        location: '7',
      });
      setDamage('damage');
    }
  }, []);

  const cardId = useParams().id;
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    getDetailModel(cardId)
      .then((data) => {
        setCard(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const page = window.location.pathname;
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues,
  });
  const onSubmit = (data) => {
    if (location === '/editmodel') {
      editModel({ damage, ...data }, cardId).then(() => {
        navigate(`/product/${cardId}`);
      });
    } else {
      addModel({ damage, ...data }, cardId).then((res) => {
        navigate(`/product/${res.id}`);
      });
    }
  };
  return (
    <>
      {isLoading ? (
        <p className='loading'>Загрузка...</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className='editForm'>
          <div className='editForm__info'>
            <div className='editForm__inputs editForm__inputs_left1'>
              <div className='editForm__input'>
                <label htmlFor='modelName' className='editForm__label'>
                  Название модели
                </label>
                <div className='editForm__input-container'>
                  <Controller
                    name='modelName'
                    control={control}
                    rules={{
                      required: 'Поле обязательно для заполнения',
                    }}
                    render={({ field }) => (
                      <CreateInput
                        {...field}
                        error={!!errors.modelName}
                        placeholder={'Название модели'}
                      />
                    )}
                  />
                  {errors.modelName && (
                    <p className='editForm__error'>
                      {errors.modelName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='editForm__input'>
                <label htmlFor='modelName' className='editForm__label'>
                  Производитель
                </label>
                <div className='editForm__input-container'>
                  <Controller
                    name='manufacturer'
                    control={control}
                    rules={{
                      required: 'Поле обязательно для заполнения',
                    }}
                    render={({ field }) => (
                      <CreateInput
                        {...field}
                        error={!!errors.manufacturer}
                        placeholder={'Производитель'}
                      />
                    )}
                  />
                  {errors.manufacturer && (
                    <p className='editForm__error'>
                      {errors.manufacturer.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className='editForm__inputs editForm__inputs_right1'>
              <div className='editForm__input'>
                <label htmlFor='modelName' className='editForm__label'>
                  Цена
                </label>
                <div className='editForm__input-container'>
                  <Controller
                    name='price'
                    control={control}
                    rules={{
                      required: 'Поле обязательно для заполнения',
                    }}
                    render={({ field }) => (
                      <CreateInput
                        {...field}
                        error={!!errors.modelName}
                        placeholder={'Цена'}
                      />
                    )}
                  />
                  {errors.price && (
                    <p className='editForm__error'>{errors.price.message}</p>
                  )}
                  <div className='editForm__currency'>
                    <CurrencySelect
                      setCurrency={setCurrency}
                      currency={currency}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className='editForm__title'>Характеристики</h3>
          <div className='editForm__info'>
            <div className='editForm__inputs editForm__inputs_left2'>
              <div className='editForm__input'>
                <label htmlFor='modelCode' className='editForm__label'>
                  Код модели
                </label>
                <div className='editForm__input-container'>
                  <Controller
                    name='modelCode'
                    control={control}
                    rules={{
                      required: 'Поле обязательно для заполнения',
                    }}
                    render={({ field }) => (
                      <CreateInput
                        {...field}
                        error={!!errors.modelCode}
                        placeholder={'Код модели'}
                      />
                    )}
                  />
                  {errors.modelCode && (
                    <p className='editForm__error'>
                      {errors.modelCode.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='editForm__input'>
                <label htmlFor='category' className='editForm__label'>
                  Категория
                </label>
                <div className='editForm__input-container'>
                  <Controller
                    name='category'
                    control={control}
                    rules={{
                      required: 'Поле обязательно для заполнения',
                    }}
                    render={({ field }) => (
                      <CreateInput
                        {...field}
                        error={!!errors.manufacturer}
                        placeholder={'Категория'}
                      />
                    )}
                  />
                  {errors.category && (
                    <p className='editForm__error'>{errors.category.message}</p>
                  )}
                </div>
              </div>
              <div className='editForm__input'>
                <label htmlFor='modelName' className='editForm__label'>
                  Год выпуска
                </label>
                <div className='editForm__input-container'>
                  <Controller
                    name='year'
                    control={control}
                    rules={{
                      required: 'Поле обязательно для заполнения',
                    }}
                    render={({ field }) => (
                      <CreateInput
                        {...field}
                        error={!!errors.year}
                        placeholder={'Год выпуска'}
                      />
                    )}
                  />
                  {errors.year && (
                    <p className='editForm__error'>{errors.year.message}</p>
                  )}
                </div>
              </div>
            </div>
            <div className='editForm__inputs editForm__inputs_right2'>
              <div className='editForm__input'>
                <label htmlFor='location' className='editForm__label'>
                  Место нахождения
                </label>
                <div className='editForm__input-container'>
                  <Controller
                    name='location'
                    control={control}
                    rules={{
                      required: 'Поле обязательно для заполнения',
                    }}
                    render={({ field }) => (
                      <CreateInput
                        {...field}
                        error={!!errors.location}
                        location={'location'}
                        placeholder={'Место нахождения'}
                      />
                    )}
                  />
                  {errors.location && (
                    <p className='editForm__error'>{errors.location.message}</p>
                  )}
                </div>
              </div>
              <div className='editForm__input editForm__input_radio'>
                <p className='editForm__label'>Упаковка</p>
                <div className='editForm__radio-buttons'>
                  <div className='editForm__radio-btn'>
                    <label htmlFor='radio-1' className='editForm__radio-label'>
                      <div
                        className={`editForm__circle ${damage === 'Повреждена' ? 'editForm__circle_active' : ''}`}
                      ></div>
                      Повреждена
                    </label>
                    <input
                      type='radio'
                      id='radio-1'
                      value='Повреждена'
                      checked={damage === 'Повреждена'}
                      onChange={() => setDamage('Повреждена')}
                    />
                  </div>
                  <div className='editForm__radio-btn'>
                    <label htmlFor='radio-2' className='editForm__radio-label'>
                      <div
                        className={`editForm__circle ${damage === 'Не повреждена' ? 'editForm__circle_active' : ''}`}
                      ></div>
                      Не повреждена
                    </label>
                    <input
                      type='radio'
                      id='radio-2'
                      value='Не повреждена'
                      checked={damage === 'Не повреждена'}
                      onChange={() => setDamage('Не повреждена')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className='editForm__title'>Фотографии</h3>
          <div className='editForm__image-preview'>
            {images.map((image, index) => (
              <div key={index} className='editForm__image-container'>
                <img
                  src={image.preview}
                  alt={`preview ${index}`}
                  className='editForm__photo'
                />
                <div
                  className='editForm__delete-icon'
                  onClick={() => handleRemoveImage(index)}
                >
                  <Trash2 />
                </div>
              </div>
            ))}
            <label htmlFor='addPhoto' className='editForm__file_label'>
              <Plus className='editForm__plus' />
            </label>
            <input
              className='editForm__file'
              id='addPhoto'
              type='file'
              accept='image/*'
              multiple
              onChange={handleImageChange}
            />
          </div>
          <h3 className='editForm__title'>Описание</h3>
          <div className='editForm__info'>
            <Controller
              name='description'
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder='Описание модели'
                  className='editForm__textarea'
                />
              )}
            />
          </div>
          <div className='editForm__buttons'>
            {page === '/editmodel' ? (
              <>
                <button className='editForm__button'>Сохранить</button>
                <button className='editForm__button editForm__button_archieve'>
                  В архив
                </button>
              </>
            ) : (
              <button className='editForm__button'>Добавить модель</button>
            )}
          </div>
        </form>
      )}
    </>
  );
};

export default EditForm;

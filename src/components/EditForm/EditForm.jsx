import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';
import CreateInput from '../CreateInput/CreateInput';

import './EditForm.scss';

import CurrencySelect from '../Selects/CurrencySelect/CurrencySelect';
import {
  addModel,
  addModelToFavourite,
  deleteModel,
  editModel,
  getDetailModel,
  getDetailModelForEdit,
} from '../../utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from '../../utils/store/store';
import ManufacturerSelect from '../Selects/ManufacturerSelect/ManufacturerSelect';

const EditForm = ({ location }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [damage, setDamage] = useState('off');
  const [currency, setCurrency] = useState('RUB');
  const [defaultValues, setDefaultValues] = useState({
    collectable_name: '',
    Производитель: '',
    article: '',
    Категория: '',
    Год: '',
    scale: '',
    Местонахождение: '',
    quantity: '',
    buy_price: '',
    description: '',
  });

  const { setErrorPopup } = useStore();
  const cardId = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    if (cardId) {
      setIsLoading(true);
      getDetailModelForEdit(cardId)
        .then((data) => {
          const newDefaultValues = {
            collectable_name:
              data.form_data.collectable_name || 'Название модели',
            Производитель: 'data.form_data.Производитель' || 'Производитель',
            article: data.form_data.article || 'article',
            Категория: 'data.form_data.Категория' || 'Категория',
            Год: 'data.form_data.Год' || 'Год',
            scale: data.form_data.scale || 'Масштаб',
            Местонахождение:
              'data.form_data.Местонахождение' || 'Местонахождение',
            quantity: data.form_data.quantity || 'Колличество',
            buy_price: data.form_data.buy_price || 'Цена',
            description: data.form_data.description,
          };
          setDefaultValues(newDefaultValues);
          reset(newDefaultValues);
          setCurrency(data.form_data.buy_price_currency);
          data.form_data.is_damaged ? setDamage('off') : setDamage('on');
          setImages(data.photos);
          setIsLoading(false);
        })
        .catch(() => {
          setErrorPopup(true);
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
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
    reset,
  } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    if (location === `/editmodel/${cardId}`) {
      editModel({ damage, currency, ...data }, images, cardId)
        .then(() => {
          navigate(`/product/${cardId}`);
        })
        .catch(() => {
          setErrorPopup(true);
        });
    } else {
      addModel({ damage, currency, ...data }, images)
        .then((res) => {
          navigate(`/product/${res.model_id}`);
        })
        .catch(() => {
          setErrorPopup(true);
        });
    }
  };

  const deleteCard = () => {
    deleteModel(cardId)
      .then(() => {
        navigate('/my-models');
      })
      .catch(() => setErrorPopup(true));
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
                <label htmlFor='collectable_name' className='editForm__label'>
                  Название модели
                </label>
                <div className='editForm__input-container'>
                  <Controller
                    name='collectable_name'
                    control={control}
                    rules={{
                      required: 'Поле обязательно для заполнения',
                    }}
                    render={({ field }) => (
                      <CreateInput
                        {...field}
                        error={!!errors.collectable_name}
                        placeholder={'Название модели'}
                      />
                    )}
                  />
                  {errors.collectable_name && (
                    <p className='editForm__error'>
                      {errors.collectable_name.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='editForm__input'>
                <label htmlFor='Производитель' className='editForm__label'>
                  Производитель
                </label>
                <div className='editForm__input-container'>
                  <Controller
                    name='Производитель'
                    control={control}
                    render={({ field }) => (
                      <ManufacturerSelect
                        {...field}
                        options={[
                          'Hot Wheels',
                          'Majorette',
                          'Matchbox',
                          'Mini GT',
                          'Poprace',
                          'Tarmac Works',
                        ]}
                        placeholder='Выберите производителя'
                      />
                    )}
                  />
                  {errors.Производитель && (
                    <p className='editForm__error'>
                      {errors.Производитель.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className='editForm__inputs editForm__inputs_right1'>
              <div className='editForm__input'>
                <label htmlFor='buy_price' className='editForm__label'>
                  Цена
                </label>
                <div className='editForm__input-container'>
                  <Controller
                    name='buy_price'
                    control={control}
                    render={({ field }) => (
                      <CreateInput
                        {...field}
                        error={!!errors.buy_price}
                        placeholder={'Цена'}
                      />
                    )}
                  />
                  {errors.buy_price && (
                    <p className='editForm__error'>
                      {errors.buy_price.message}
                    </p>
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
                <label htmlFor='article' className='editForm__label'>
                  Код модели
                </label>
                <div className='editForm__input-container'>
                  <Controller
                    name='article'
                    control={control}
                    render={({ field }) => (
                      <CreateInput
                        {...field}
                        error={!!errors.article}
                        placeholder={'Код модели'}
                      />
                    )}
                  />
                  {errors.article && (
                    <p className='editForm__error'>{errors.article.message}</p>
                  )}
                </div>
              </div>
              <div className='editForm__input'>
                <label htmlFor='Категория' className='editForm__label'>
                  Категория
                </label>
                <div className='editForm__input-container'>
                  <Controller
                    name='Категория'
                    control={control}
                    render={({ field }) => (
                      <CreateInput
                        {...field}
                        error={!!errors.Категория}
                        placeholder={'Категория'}
                      />
                    )}
                  />
                  {errors.Категория && (
                    <p className='editForm__error'>
                      {errors.Категория.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='editForm__input'>
                <label htmlFor='Год' className='editForm__label'>
                  Год выпуска
                </label>
                <div className='editForm__input-container'>
                  <Controller
                    name='Год'
                    control={control}
                    render={({ field }) => (
                      <CreateInput
                        {...field}
                        error={!!errors.Год}
                        placeholder={'Год выпуска'}
                      />
                    )}
                  />
                  {errors.Год && (
                    <p className='editForm__error'>{errors.Год.message}</p>
                  )}
                </div>
              </div>
              <div className='editForm__input'>
                <label htmlFor='Местонахождение' className='editForm__label'>
                  Масштаб
                </label>
                <div className='editForm__input-container'>
                  <Controller
                    name='scale'
                    control={control}
                    rules={{
                      required: 'Поле обязательно для заполнения',
                    }}
                    render={({ field }) => (
                      <CreateInput
                        {...field}
                        error={!!errors.scale}
                        placeholder={'Масштаб'}
                      />
                    )}
                  />
                  {errors.scale && (
                    <p className='editForm__error'>{errors.scale.message}</p>
                  )}
                </div>
              </div>
              <div className='editForm__input'>
                <label htmlFor='quantity' className='editForm__label'>
                  Колличество
                </label>
                <div className='editForm__input-container'>
                  <Controller
                    name='quantity'
                    control={control}
                    rules={{
                      required: 'Поле обязательно для заполнения',
                    }}
                    render={({ field }) => (
                      <CreateInput
                        {...field}
                        error={!!errors.quantity}
                        placeholder={'Количество'}
                      />
                    )}
                  />
                  {errors.quantity && (
                    <p className='editForm__error'>{errors.quantity.message}</p>
                  )}
                </div>
              </div>
            </div>
            <div className='editForm__inputs editForm__inputs_right2'>
              <div className='editForm__input'>
                <label htmlFor='Местонахождение' className='editForm__label'>
                  Место нахождения
                </label>
                <div className='editForm__input-container'>
                  <Controller
                    name='Местонахождение'
                    control={control}
                    render={({ field }) => (
                      <CreateInput
                        {...field}
                        error={!!errors.Местонахождение}
                        location={'location'}
                        placeholder={'Место нахождения'}
                      />
                    )}
                  />
                  {errors.Местонахождение && (
                    <p className='editForm__error'>
                      {errors.Местонахождение.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='editForm__input editForm__input_radio'>
                <p className='editForm__label'>Упаковка</p>
                <div className='editForm__radio-buttons'>
                  <div className='editForm__radio-btn'>
                    <label htmlFor='radio-1' className='editForm__radio-label'>
                      <div
                        className={`editForm__circle ${damage === 'off' ? 'editForm__circle_active' : ''}`}
                      ></div>
                      Не повреждена
                    </label>
                    <input
                      type='radio'
                      id='radio-1'
                      value='Повреждена'
                      checked={damage === 'off'}
                      onChange={() => setDamage('off')}
                    />
                  </div>
                  <div className='editForm__radio-btn'>
                    <label htmlFor='radio-2' className='editForm__radio-label'>
                      <div
                        className={`editForm__circle ${damage === 'on' ? 'editForm__circle_active' : ''}`}
                      ></div>
                      Повреждена
                    </label>
                    <input
                      type='radio'
                      id='radio-2'
                      value='on'
                      checked={damage === 'on'}
                      onChange={() => setDamage('on')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className='editForm__title'>Фотографии</h3>
          <div className='editForm__image-preview'>
            {images.length
              ? images.map((image, index) => (
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
                ))
              : ''}
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
            {page === `/editmodel/${cardId}` ? (
              <>
                <button type={'submit'} className='editForm__button'>
                  Сохранить
                </button>
                <button className='editForm__button editForm__button_archieve'>
                  В архив
                </button>
                <button
                  type={'button'}
                  onClick={() => deleteCard()}
                  className='editForm__button editForm__button_delete'
                >
                  Удалить
                </button>
              </>
            ) : (
              <button type={'submit'} className='editForm__button'>
                Добавить модель
              </button>
            )}
          </div>
        </form>
      )}
    </>
  );
};

export default EditForm;

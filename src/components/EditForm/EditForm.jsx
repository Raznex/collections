import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import CreateInput from '../CreateInput/CreateInput';
import './EditForm.scss';
import { Plus, Trash2 } from 'lucide-react';
import { useParams } from 'react-router-dom';

const EditForm = () => {
  const [images, setImages] = useState([]);
  const [defaultValues, setDefaultValues] = useState({
    modelName: '',
    manufacturer: '',
    price: '',
    modelCode: '',
    category: '',
    year: '',
  });
  const [damage, setDamage] = useState('Не повреждена');
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
    watch,
    register,
    formState: { errors },
    control,
  } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => console.log(data, damage);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='editForm'>
      <div className='editForm__info'>
        <div className='editForm__inputs editForm__inputs_left1'>
          <div className='editForm__input'>
            <label htmlFor='modelName' className='editForm__label'>
              Название модели
            </label>
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
              <p className='editForm__error'>{errors.modelName.message}</p>
            )}
          </div>
          <div className='editForm__input'>
            <label htmlFor='modelName' className='editForm__label'>
              Производитель
            </label>
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
              <p className='editForm__error'>{errors.manufacturer.message}</p>
            )}
          </div>
        </div>
        <div className='editForm__inputs editForm__inputs_right1'>
          <div className='editForm__input'>
            <label htmlFor='modelName' className='editForm__label'>
              Цена
            </label>
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
              <p className='editForm__error'>{errors.modelCode.message}</p>
            )}
          </div>
          <div className='editForm__input'>
            <label htmlFor='category' className='editForm__label'>
              Категория
            </label>
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
          <div className='editForm__input'>
            <label htmlFor='modelName' className='editForm__label'>
              Год выпуска
            </label>
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
        <div className='editForm__inputs editForm__inputs_right2'>
          <div className='editForm__input'>
            <label htmlFor='location' className='editForm__label'>
              Место нахождения
            </label>
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
                  placeholder={'Место нахождения'}
                />
              )}
            />
            {errors.location && (
              <p className='editForm__error'>{errors.location.message}</p>
            )}
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
        <textarea
          name='description'
          id='modelDescription'
          cols='30'
          rows='10'
          placeholder='Описание'
          className='editForm__textarea'
        ></textarea>
      </div>
      <div className='editForm__buttons'>
        {page === '/editmodel' ? (
          <>
            <button className='editForm__button'>Сохранить</button>
            <button className='editForm__button'>В архив</button>
          </>
        ) : (
          <button className='editForm__button'>Добавить модель</button>
        )}
      </div>
    </form>
  );
};

export default EditForm;

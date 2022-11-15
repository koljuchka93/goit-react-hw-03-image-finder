import { useState, useEffect } from 'react';

import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

import { fetchImages } from './Api/Api';

export const App = () => {
  
  const [images, setImages] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [searchQuery, setQuery] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [showModal, setModal] = useState(false);
  const [largeImage, setlargeImage] = useState('');

  // Запрос за картинками при обновлении инпута
  useEffect(() => {
    if (!searchQuery) return;

    getImages();
    // eslint-disable-next-line
  }, [searchQuery]);

  // Принимаем с формы запрос и пишем в стейт + сбрасываем после отправки стейт
  const onChangeQuery = query => {
    setImages([]);
    setPage(1);
    setQuery(query);
    setLoading(false);
    setModal(false);
    setlargeImage('');
  };

  // Получаем дату из фетча
  const getImages = async () => {
    setLoading(true);

    try {
      const { hits } = await fetchImages(searchQuery, currentPage);

      setImages(prev => [...prev, ...hits]);

      setPage(prevPage => prevPage + 1);

      if (currentPage !== 1) {
        scrollOnLoadButton();
      }
    } catch (error) {
      console.log('Something wrong with App', error);
    } finally {
      setLoading(false);
    }
  };

  // Получает полное изображение, пишет его в стейт и открывает модалку
  const handleGalleryItem = fullImageUrl => {
    setlargeImage(fullImageUrl);
    setModal(true);
  };

  // Переключение модалки
  const toggleModal = () => {
    setModal(prevModal => !prevModal);
  };

  // Скролл при клике на кнопку
  const scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const needToShowLoadMore = images.length > 0 && images.length >= 12;
  
  return (
    <>
    <Searchbar onSearch={onChangeQuery} />

    <ImageGallery images={images} onImageClick={handleGalleryItem} />

    {needToShowLoadMore && <Button onLoadMore={getImages} />}

    {showModal && (
      <Modal onClose={toggleModal}>
        <div>
        </div>
        <img src={largeImage} alt=""/>
      </Modal>
    )}

    {isLoading && <Loader />}

  </>
  );
};

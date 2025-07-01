import { useEffect, useState, useSyncExternalStore } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar";
import { fetchImages } from "./Api";
import { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { LoadMoreBtn } from "./components/LoadMoreBtn";
import ImageModal from "./components/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };
  const getImages = async () => {
    try {
      setLoading(true);
      const data = await fetchImages(searchText, page);
      setImages(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (searchText) {
      getImages();
    }
  }, [searchText, page]);

  const handleSearch = (text) => {
    setSearchText(text);
    setPage(1);
    setImages([]); // önceki sonuçları temizle
    setError(null);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleSearch} value={searchText} />
      {error && <ErrorMessage />}
      <ImageGallery images={images} onImageClick={openModal} />
      <ImageModal isOpen={isOpen} onClose={close} image={selectedImage} />
      {loading && <Loader />}

      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}

      <ImageModal isOpen={isOpen} onClose={close} />
    </>
  );
}

export default App;

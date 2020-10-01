export default (instance) => {
  const getAllPhotos = (params = {}) => {
    return instance.get('/photos', { params });
  };

  const getAllCollections = (params = {}) => {
    return instance.get('/collections', { params });
  };

  const getPhotosByCollection = (id, params = {}) => {
    return instance.get(`/collections/${id}/photos`, { params });
  };

  return {
    photos: {
      get: {
        all: getAllPhotos,
        byCollection: getPhotosByCollection,
      },
    },
    collections: {
      get: {
        all: getAllCollections,
      },
    },
  };
};

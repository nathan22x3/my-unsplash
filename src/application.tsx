import { useAppDispatch, useAppSelector } from 'app/hooks';
import { fetchAllPhotos, selectPhotos } from 'app/photo-slice';
import Gallery from 'components/gallery/gallery.component';
import Photo from 'components/gallery/photo.component';
import MainLayout from 'components/layouts/main.layout';
import { useEffect } from 'react';

export interface ApplicationProps {}

const Application: React.FunctionComponent<ApplicationProps> = () => {
  const photos = useAppSelector(selectPhotos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllPhotos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout>
      <Gallery>
        {photos.map((photo) => (
          <Photo key={photo._id} {...photo} />
        ))}
      </Gallery>
    </MainLayout>
  );
};

export default Application;

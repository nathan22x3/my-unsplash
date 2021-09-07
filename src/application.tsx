import photoApi from 'apis/photo.api';
import Gallery from 'components/gallery/gallery.component';
import Photo from 'components/gallery/photo.component';
import MainLayout from 'components/layouts/main.layout';
import { Photo as IPhoto } from 'interfaces/photo.interface';
import { useEffect, useState } from 'react';

export interface ApplicationProps {}

const Application: React.FunctionComponent<ApplicationProps> = () => {
  const [photos, setPhotos] = useState<Array<IPhoto>>([]);

  useEffect(() => {
    (async () => {
      const res = await photoApi.getAll();
      setPhotos(res);
    })();
  }, []);

  console.log(photos);

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

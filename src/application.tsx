import Gallery from 'components/gallery/gallery.component';
import Image, { ImageProps } from 'components/gallery/image.component';
import MainLayout from 'components/layouts/main.layout';

const data: ImageProps[] = [
  { src: 'https://picsum.photos/1080', alt: 'c3ce83f9-e945-45a1-8fbf-76492314f3fd' },
  { src: 'https://picsum.photos/1080/1920', alt: '5f78b678-8bae-4db6-a08e-d88d2d3cd9a0' },
  { src: 'https://picsum.photos/960/1050', alt: '86eb449c-5c9f-480e-bb61-3f949c10ab95' },
  { src: 'https://picsum.photos/1280/720', alt: '3de7f342-7217-4a76-b2fd-81d9836ce88c' },
  { src: 'https://picsum.photos/600/980', alt: '41423cfb-5d4b-48a7-b704-c5a9c7b2101a' },
  { src: 'https://picsum.photos/720/1280', alt: '812d4629-4648-46df-a0e5-9a6021e2cf9e' },
  { src: 'https://picsum.photos/1200/700', alt: '3949e343-b243-4e79-af8c-ff17e267a5a1' },
  { src: 'https://picsum.photos/1200/1400', alt: '4bcfdc60-aba5-458a-bf55-7c27a0e1fc6f' },
  { src: 'https://picsum.photos/680/900', alt: '91a1289c-cde9-4a30-b074-c43bb13b303f' },
  { src: 'https://picsum.photos/960/1280', alt: '415a9190-baf8-42aa-9f32-b29369e78cae' },
];

export interface ApplicationProps {}

const Application: React.FunctionComponent<ApplicationProps> = () => {
  return (
    <MainLayout>
      <Gallery>
        {data.map((image) => (
          <Image key={image.alt} {...image} />
        ))}
      </Gallery>
    </MainLayout>
  );
};

export default Application;

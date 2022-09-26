import image1src from 'images/main1.jpg';
import image2src from 'images/main2.jpg';
import image3src from 'images/main3.jpg';
import image4src from 'images/main4.jpg';
import image5src from 'images/main5.jpg';

export default interface HomeImages {
  src: string;
  id: number;
}

export const HOME_IMAGES: HomeImages[] = [
  { id: 1, src: `${image1src.src}` },
  { id: 2, src: `${image2src.src}` },
  { id: 3, src: `${image3src.src}` },
  { id: 4, src: `${image4src.src}` },
  { id: 5, src: `${image5src.src}` },
];

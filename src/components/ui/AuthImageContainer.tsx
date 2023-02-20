import { LazyLoadImage } from 'react-lazy-load-image-component';
import ImagePlaceholder from './ImagePlaceholder';

interface IProps {
  image: string;
  register?: boolean;
  firstText: string;
  secondText: string;
}

export default function AuthImageContainer({
  image,
  register,
  firstText,
  secondText,
}: IProps) {
  return (
    <div className="col-span-6 hidden h-full w-full items-center bg-slate-50 p-4 lg:flex">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className={`relative z-10 text-4xl font-bold `}>{firstText}</h1>
        <h1 className="relative z-10  mt-2 text-4xl font-bold text-violet-500">
          {secondText}
        </h1>
        <LazyLoadImage
          src={image}
          width={600}
          height={400}
          placeholder={<ImagePlaceholder />}
          alt="Image Alt"
          className="-mt-16"
        />
      </div>
    </div>
  );
}

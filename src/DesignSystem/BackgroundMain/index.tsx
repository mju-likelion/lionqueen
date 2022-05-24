import type { ComponentPropsWithoutRef } from 'react';
import { cls, getClassNames } from '~lib/utils';
import Wallpaper from '../../../public/image/wallpaper.svg';
import Trees from '../../../public/image/trees.svg';

type BackgroundProps = {
  // eslint-disable-next-line react/require-default-props
  className?: string;
} & ComponentPropsWithoutRef<'div'>;

const BackgroundMain = (props: BackgroundProps) => {
  const { className = '', children, ...restProps } = props;

  const pageContainer = cls('min-h-screen', 'bg-primary-skyblue', 'flex', 'items-center');
  const background = cls('min-h-[1024px]', 'min-w-full', 'relative', 'flex', 'items-center');

  const backgroundImage = cls(
    'absolute',
    'left-[50%]',
    'top-[50%]',
    'translate-x-[-50%]',
    'translate-y-[-50%]',
  );

  const tree = cls(
    'absolute',
    'left-[50%]',
    'top-[115%]',
    'translate-x-[-50%]',
    'translate-y-[-115%]',
  );

  const board = cls(
    'w-[1014px]',
    'h-[708px]',
    'bg-primary-yellow',
    'border-[10px]',
    'border-[#ffbb54]',
    'rounded-[30px]',
    'absolute',
    'left-[50%]',
    'top-[30%]',
    'translate-x-[-50%]',
    'translate-y-[-30%]',
  );

  const lineContainer = cls(
    'w-[440px]',
    'absolute',
    'flex',
    'top-[-15px]',
    'left-[25%]',
    'right-[25%]',
    'mx-auto',
    'justify-between',
  );

  const lineStyles = cls('w-[16px]', 'h-[118px]', 'rounded-[10px]', 'bg-[#cd853f]', 'pb-[10px]');

  const contentContainer = cls(
    'w-[912px]',
    'h-[542px]',
    'mx-auto',
    'rounded-[15px]',
    'bg-[#ffffffcc]',
    'mt-[102px]',
    getClassNames(className),
  );

  return (
    <div className={pageContainer}>
      <div className={background}>
        <Wallpaper className={backgroundImage} />
        <div className={board}>
          <div className={lineContainer}>
            <div className={lineStyles} />
            <div className={lineStyles} />
          </div>
          <div className={contentContainer} {...restProps}>
            {children}
          </div>
          <Trees className={tree} />
        </div>
      </div>
    </div>
  );
};

export default BackgroundMain;

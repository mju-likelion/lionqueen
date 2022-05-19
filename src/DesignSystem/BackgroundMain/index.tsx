import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';
import { cls, getClassNames } from '~lib/utils';

type BackgroundProps = {
  // eslint-disable-next-line react/require-default-props
  className?: string;
} & ComponentPropsWithoutRef<'div'>;

const BackgroundMain = (props: BackgroundProps) => {
  const { className = '', children, ...restProps } = props;

  const styles = cls(
    'w-[1014px]',
    'h-[708px]',
    'bg-primary-yellow',
    'border-[10px]',
    'border-[#ffbb54]',
    'rounded-[30px]',
    'relative',
    getClassNames(className),
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
    getClassNames(className),
  );
  const lineStyles = cls(
    'w-[16px]',
    'h-[118px]',
    'rounded-[10px]',
    'bg-[#cd853f]',
    'pb-[10px]',
    getClassNames(className),
  );
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
    <div className={styles} {...restProps}>
      <div className={lineContainer}>
        <div className={lineStyles} />
        <div className={lineStyles} />
      </div>
      <div className={contentContainer}>{children}</div>
    </div>
  );
};

export default BackgroundMain;

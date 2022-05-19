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
    getClassNames(className),
  );

  const lineStyles = cls('w-[16px]', 'h-[118px]', 'rounded-[10px]', 'bg-[#cd853f]', 'pb-[10px]');

  return (
    <div className={styles} {...restProps}>
      <div className="w-[440px] flex mx-auto justify-between">
        <div className={lineStyles} />
        <div className={lineStyles} />
      </div>
      <div className="w-[912px] h-[542px] mx-auto rounded-[15px] bg-[#ffffffcc]">{children}</div>
    </div>
  );
};

export default BackgroundMain;

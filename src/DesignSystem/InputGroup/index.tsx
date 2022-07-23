import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';
import * as Style from './styles';

type Props = {
  children: React.ReactElement;
  id?: string;
  label?: React.ReactNode;
  error?: string[] | string;
  fullWidth?: boolean;
  labelPos?: 'up' | 'left';
  labelDist?: number;
  contentWidth?: string;
} & ComponentPropsWithoutRef<'input'>;
/*
 * @param inputChild = label의 id
 * @param id = label의 id
 * @param label = label의 값
 * @param error = input에 대한 에러
 * @param labelPos = label이 인풋기준 위치 ('left' or 'up')
 * @param labelDist = label과 input 사이의 거리
 * @param fullWidth = inputGroup의 fullwidth를 주거나 안주거나 <boolean>
 * @param contentWidth = 라벨을 제외한 내용의 width값 <string>
 */
function InputGroup({
  children,
  id,
  label,
  error = [],
  labelPos = 'up',
  labelDist = 0,
  fullWidth,
  contentWidth = '',
}: Props) {
  return (
    <Style.Container fullWidth={fullWidth} labelPos={labelPos} dist={labelDist}>
      <Style.LabelBox htmlFor={id} error={error}>
        {label}
      </Style.LabelBox>
      <Style.Content contentWidth={contentWidth}>
        <Style.InputBox pos={labelPos} dist={labelDist}>
          {React.cloneElement(children, { id })}
        </Style.InputBox>
        {error !== [] && <Style.ErrorBox>{error}</Style.ErrorBox>}
      </Style.Content>
    </Style.Container>
  );
}

export default InputGroup;

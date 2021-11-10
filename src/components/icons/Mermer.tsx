import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as MermerIcon } from './images/mermer.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={MermerIcon} viewBox="0 0 150 58" {...props} />;
}

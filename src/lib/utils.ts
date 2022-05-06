export function cls(...classnames: string[]) {
  return classnames.join(' ');
}

export function getClassNames(className: string) {
  return className !== ''
    ? className
        .split(' ')
        .map(a => `${a} !important`)
        .join(' ')
    : '';
}

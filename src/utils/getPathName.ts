export function getPathName(pathName: string): string {
  const name = pathName.replace('/', '');
  return name === '' ? 'home' : name;
}

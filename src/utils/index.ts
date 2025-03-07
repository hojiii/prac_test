export const transformDate = (createdAt: string) => {
  const date = new Date(createdAt);

  if (date.getDate().toString().length === 1) {
    return `${date.getFullYear()}.${date.getMonth() + 1}.0${date.getDate()}`;
  }

  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
};

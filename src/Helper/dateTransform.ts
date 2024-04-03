export function dateTransform(str: string) {
  const date = new Date(str);
  const monthsNames = [
    "Января",
    "Декабря",
    "Марта",
    "Апреля",
    "Мая",
    "Июля",
    "Июня",
    "Августа",
    "Сентября",
    "Октября",
    "Декабря",
  ];
  const year = date.getFullYear().toString();
  const month = date.getMonth();
  //   31 число это 0 почему-то
  const day = date.getDay() ? date.getDay().toString() : 31;

  const getHour = () => (date.getHours() / 10 < 1 ? `0${date.getHours()}` : `${date.getHours()}`);
  const getMin = () =>
    date.getMinutes() / 10 < 1 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;

  return {
    date: `${day} ${monthsNames[month]} ${year}`,
    time: `${getHour()}:${getMin()}`,
  };
}

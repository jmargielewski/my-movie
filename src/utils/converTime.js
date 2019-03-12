export default (time) => {
  const t = time.split(' ')[0];
  const hours = Math.trunc(t / 60);
  const minutes = t % 60;
  return `${hours} hours ${minutes} minutes`;
};

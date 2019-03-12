export default (data) => {
  const url = Object.keys(data)
    .reduce((acc, current) => {
      acc.push(`${current}=${encodeURIComponent(data[current])}`);
      return acc;
    }, [])
    .join('&');

  return `?${url}`;
};

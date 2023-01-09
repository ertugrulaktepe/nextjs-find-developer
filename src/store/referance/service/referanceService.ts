const getReferanceList = async () => {
  const response = await fetch('/api/get-referanceList');
  const data = await response.json();
  console.log(data);

  return data;
};
export const referanceService = {
  getReferanceList,
};

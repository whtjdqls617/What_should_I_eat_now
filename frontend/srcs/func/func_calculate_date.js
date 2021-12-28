export const makeDateString = () => {
  const now = new Date();
  const year = now.getFullYear().toString();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const dateString = "@" + year + "_" + month + "_" + day;

  return dateString;
};

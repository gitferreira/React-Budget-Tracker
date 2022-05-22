//HELPERS

//Generate random (unique) ID
export const generateId = () => {
  const random = Math.random().toString(36).substr(2);
  const date = Date.now().toString(36);

  return random + date;
};

//Format date - Support 99.8%
export const formatDate = (date) => {
  const newDate = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return newDate.toLocaleDateString("en-US", options);
};

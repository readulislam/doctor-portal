const TotalPageCounter = (totalData, limit) => {
  const totalPages = parseInt(totalData) / parseInt(limit);
  return Math.ceil(totalPages);
};

export default TotalPageCounter;

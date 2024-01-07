export const createPagination = (currentPage, lastPage) => {
  const delta = 2;
  const left = currentPage - delta;
  const right = currentPage + delta + 1;

  const rangeWithDots = [];

  const addPage = (page) => rangeWithDots.push(page);
  const addDots = () => rangeWithDots.push('...');

  addPage(1);

  left > 2 && (left > 3 ? addDots() : addPage(2));

  const startPage = Math.max(2, left);
  const endPage = Math.min(right, lastPage);

  Array.from({ length: endPage - startPage }, (_, index) => startPage + index).forEach((page) => addPage(page));

  right < lastPage - 1 && (right < lastPage - 2 ? addDots() : addPage(lastPage - 1));

  lastPage > 1 && addPage(lastPage);

  return rangeWithDots;
};

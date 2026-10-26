export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const formatMonthYear = (date: string | Date): string => {
  return new Date(date).toLocaleDateString("id-ID", {
    month: "long",
    year: "numeric",
  });
};

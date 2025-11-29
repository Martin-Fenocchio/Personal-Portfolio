export const calculateReadingTime = (content: string): number => {
  const words = content.split(/\s+/).filter((word) => word.length > 0).length;
  const minutes = Math.ceil(words / 200);
  return Math.max(1, minutes);
};


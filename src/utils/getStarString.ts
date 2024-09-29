export const THOUSAND_SEPARATOR = 1000;

export const getStarString = (rawStars: number) => {
  if (rawStars >= THOUSAND_SEPARATOR) {
    const stars = Math.round(rawStars / THOUSAND_SEPARATOR);
    return `${stars}k`;
  }

  return rawStars.toString();
};

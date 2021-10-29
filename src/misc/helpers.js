export const getInitialsFromName = name => {
  const parts = name.toUpperCase().split(' ', 2);
  if (parts.length > 1) {
    return parts[0][0] + parts[1][0];
  }

  return parts[0][0];
};

export const getInitialsFromName = name => {
  const parts = name.toUpperCase().split(' ', 2);
  if (parts.length > 1) {
    return parts[0][0] + parts[1][0];
  }

  return parts[0][0];
};

export const transformToArrWithId = snapVal => {
  return snapVal
    ? Object.keys(snapVal).map(roomId => {
        return { ...snapVal[roomId], id: roomId };
      })
    : [];
};

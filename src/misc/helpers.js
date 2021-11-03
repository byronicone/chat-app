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

export async function getUserUpdates(userId, keyToUpdate, value, db) {
  const updates = {};

  updates[`/profiles/${userId}/${keyToUpdate}`] = value;

  const getMsgs = db
    .ref('/messages')
    .orderByChild('author/uid')
    .equalTo(userId)
    .once('value');

  const getRooms = db
    .ref('/rooms')
    .orderByChild('lastMessage/author/uid')
    .equalTo(userId)
    .once('value');

  const [mSnap, rSnap] = await Promise.all([getMsgs, getRooms]);

  mSnap.forEach(msgSnap => {
    updates[`/messages/${msgSnap.key}/author/${keyToUpdate}`] = value;
  });

  rSnap.forEach(roomSnap => {
    updates[`/rooms/${roomSnap.key}/lastMessage/author/${keyToUpdate}`] = value;
  });

  return updates;
}

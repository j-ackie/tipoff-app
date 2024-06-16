const createEntity = <T extends { id: string }>(
  props: Omit<Partial<T>, 'id'> & { id: string }
): T => {
  const { id, ...rest } = props;

  console.log({
    id,
    ...rest,
  } as T);
  return {
    id,
    ...rest,
  } as T;
};

const firebaseObjectToEntity = <T extends { id: string }>(
  id: string,
  firebaseObject: Omit<T, 'id'>
): T => {
  return createEntity<T>({ id, ...firebaseObject });
};

const firebaseObjectsToEntities = <T extends { id: string }>(
  firebaseObjects: Record<string, Omit<T, 'id'>>
): T[] => {
  return Object.keys(firebaseObjects).map((id) =>
    firebaseObjectToEntity<T>(id, firebaseObjects[id])
  );
};

export { createEntity, firebaseObjectToEntity, firebaseObjectsToEntities };

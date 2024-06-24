const createEntity = <T extends { id: string }>(
  props: Omit<Partial<T>, 'id'> & { id: string }
): T => {
  const { id, ...rest } = props;

  return {
    id,
    ...rest,
  } as T;
};

const createEntityWithoutId = <T extends { id: string }>(
  props: Omit<Partial<T>, 'id'>
): Omit<T, 'id'> => {
  const { ...rest } = props;

  return {
    ...rest,
  } as Omit<T, 'id'>;
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

export {
  createEntity,
  createEntityWithoutId,
  firebaseObjectToEntity,
  firebaseObjectsToEntities,
};

import { initializeApp } from "firebase/app";
import { getDatabase, ref as dbRef, set, get, remove } from "firebase/database";
import {
  getStorage,
  uploadBytes,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const storage = getStorage(app);

export async function getTodo(userId) {
  return get(dbRef(database, `todos/${userId}`)).then((snapshot) => {
    const items = snapshot.val() || {};
    return Object.values(items);
  });
}

export async function addNewTodo({ todo, userId }) {
  return set(dbRef(database, `todos/${userId}/${todo.id}`), todo);
}

export async function updateTodo({ userId, todo }) {
  return set(dbRef(database, `todos/${userId}/${todo.id}`), todo);
}

export async function removeTodo({ userId, id }) {
  return remove(dbRef(database, `todos/${userId}/${id}`));
}

export async function addNewPhoto({ photo, imageUrl, id }) {
  const date = photo.when;
  return set(dbRef(database, `photos/${date}/${id}`), {
    ...photo,
    id,
    image: imageUrl,
  });
}

export async function getPhoto(date){
  return get(dbRef(database, `photos/${date}`)).then(snapshot => {
    const items = snapshot.val() || {}
    return Object.values(items);
  })
}

export async function removePhoto({photo}){
  const databaseRef = `photos/${photo.when}/${photo.id}`;
  return remove(dbRef(database, databaseRef))
}

export async function uploadPhoto({ blob, id }) {
  const imageRef = storageRef(storage, `photos/${id}.png`);

  return uploadBytes(imageRef, blob).then((snapshot) =>
    getDownloadURL(snapshot.ref).then((downloadURL) => {
      return downloadURL;
    })
  );
}

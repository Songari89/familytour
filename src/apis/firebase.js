import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import { getDatabase, ref, set, get, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export async function getTodo(userId){
  return get(ref(database, `todos/${userId}`)).then(snapshot => {
    const items = snapshot.val() || {};
    return Object.values(items)
  })
}

export async function addNewTodo ({todo, userId}) {
  return set(ref(database, `todos/${userId}/${todo.id}`),todo)
}

export async function updateTodo({userId, todo}){
  return set(ref(database, `todos/${userId}/${todo.id}`), todo);
} 

export async function removeTodo({userId, id}){
  return remove(ref(database, `todos/${userId}/${id}`))
}

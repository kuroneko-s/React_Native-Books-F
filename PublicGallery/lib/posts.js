import firestore from '@react-native-firebase/firestore';

export const postsCollection = firestore().collection('posts');

export function createPost({user, photoURL, description}) {
  // ID를 알고잇을때에는 doc.set, 모를땐 add
  return postsCollection.add({
    user,
    photoURL,
    description,
    createAt: firestore.FieldValue.serverTimestamp(),
  });
}

export async function getPosts(id) {
  const doc = await postsCollection.doc(id).get();
  return doc.data();
}
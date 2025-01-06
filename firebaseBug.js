The Firebase SDK might throw an error if you try to access a property of a document snapshot before the data has fully loaded.  This often happens when you access data within the `onSnapshot` listener before the initial snapshot has been received.

```javascript
// Incorrect:
db.collection('myCollection').onSnapshot((snapshot) => {
  console.log(snapshot.docs[0].data().myField); // May throw error
});

// Correct:
db.collection('myCollection').onSnapshot((snapshot) => {
  snapshot.docChanges().forEach(change => {
    if (change.type === 'added') {
      console.log(change.doc.data().myField);
    }
  });
});
```
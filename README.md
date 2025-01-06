# Firebase Data Access Before Load Error

This repository demonstrates a common error in Firebase when accessing document data before the snapshot is fully loaded. The bug occurs when attempting to access properties of a document snapshot immediately within an `onSnapshot` listener.

The solution provided uses the `docChanges()` method to ensure data is accessed only after the document has loaded.

## Bug

The `firebaseBug.js` file illustrates the erroneous approach, where accessing `snapshot.docs[0].data().myField` before data is fully loaded causes an error.

## Solution

The `firebaseBugSolution.js` file demonstrates the correct approach, using `docChanges()` to reliably access data within the listener.

## Setup

1.  Ensure you have Node.js and npm installed.
2.  Clone this repository.
3.  Install Firebase: `npm install firebase`
4.  Configure your Firebase project (replace placeholders in the code with your actual config).
5.  Run the JavaScript files to observe the difference.
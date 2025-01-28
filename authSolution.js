//Improved onAuthStateChanged listener
firebase.auth().onAuthStateChanged((user) => {
  // Debounce function to handle rapid authentication changes
  let debounceTimeout;
  const debouncedUpdate = (user) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      updateUI(user);
    }, 500); // Adjust debounce time as needed
  };

  // Handle authentication state changes
  if (user) {
    // User is signed in, see docs for a list of available properties
    const uid = user.uid;
    debouncedUpdate(user); //use debounced version
  } else {
    // User is signed out
    debouncedUpdate(null); //use debounced version
  }
}, (error) => {
  //Handle potential errors
  console.error("Error in onAuthStateChanged:", error);
});

//Function that updates your UI
function updateUI(user){ 
  //your logic to update the UI based on the authentication status  
}
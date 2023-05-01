const firebaseConfig = {
    apiKey: "AIzaSyC8kDUkz8lzxp49o-pnTRIFjhM7w4sbHM4",
    authDomain: "webtech-4ef16.firebaseapp.com",
    databaseURL: "https://webtech-4ef16-default-rtdb.firebaseio.com",
    projectId: "webtech-4ef16",
    storageBucket: "webtech-4ef16.appspot.com",
    messagingSenderId: "355393278941",
    appId: "1:355393278941:web:d507f7a564544241739c34",
    measurementId: "G-01Q06MVF4F"
  };
    firebase.initializeApp(firebaseConfig);
    
    // Get a reference to the database service
    var database = firebase.database();
    
    // Get a reference to the table
    var table = document.getElementById('table');
    
    // Function to fetch all data from Firebase and display it in the table
    function fetchData() {
      var ref = database.ref('users');
      ref.on('value', function(snapshot) {
        // Clear the table first
        table.innerHTML = '<thead><tr><th>First Name</th><th>Last Name</th><th>Username</th><th>Password</th><th>Favorite Subject</th></tr></thead><tbody>';
    
        // Loop through the data and add each row to the table
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          table.innerHTML += '<tr><td>' + childData.firstname + '</td><td>' + childData.lastname + '</td><td>' + childData.username + '</td><td>' + childData.password + '</td><td>' + childData.favourite_subject + '</td></tr>';
        });
    
        // Close the table body
        table.innerHTML += '</tbody>';
      });
    }
    
    // Call the fetchData function to display the data when the page loads
    fetchData();
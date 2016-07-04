// Javascript to be added

var joinEMailBtn = document.getElementById('button-yellow');

joinEMailBtn.addEventListener('click', function(){
  prompt("Enter your email:");
  thanks();
});

function thanks() {
  joinEMailBtn.innerText = "Thanks for your email!";
}

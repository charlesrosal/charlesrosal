document.getElementById('registration-form').addEventListener('submit', function (event) {
  event.preventDefault(); 

  const firstName = document.getElementById('first-name').value;
  const middleName = document.getElementById('middle-name').value || '';
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const suffix = document.getElementById('suffix').value || '';
  const phone = document.getElementById('phone').value;
  const idNumber = document.getElementById('idnumber').value;
  const batch = document.getElementById('batch').value || '';
  const technologies = document.getElementById('technologies').value;
  const gender = document.getElementById('gender').value || '';

  
});

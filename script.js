document.getElementById('user-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = parseInt(document.getElementById('age').value.trim());
  const hobby = document.getElementById('hobby').value.trim();
  const messageEl = document.getElementById('message');

  messageEl.textContent = "";

  if (!validateField('Full Name', fullName)) return;
  if (!validateEmail(email)) return;
  if (!validateAge(age)) return;
  if (!validateField('Hobby', hobby)) return;

  if (age > 18) {
    addPersonToList({ fullName, email, age, hobby });
    document.getElementById('user-form').reset();
  } else {
    messageEl.textContent = "You must be over 18 to submit";
  }
});

function validateField(fieldName, value) {
  if (!value) {
    alert(`${fieldName} is required.`);
    return false;
  }
  return true;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  return true;
}

function validateAge(age) {
  if (isNaN(age) || age <= 0) {
    alert("Please enter a valid age greater than 0.");
    return false;
  }
  return true;
}

function addPersonToList(person) {
  const list = document.getElementById('people-list');

  const div = document.createElement('div');
  div.className = 'person-card';
  div.innerHTML = `
    <p><strong>Full Name:</strong> ${person.fullName}</p>
    <p><strong>Email:</strong> ${person.email}</p>
    <p><strong>Age:</strong> ${person.age}</p>
    <p><strong>Hobby:</strong> ${person.hobby}</p>
  `;

  list.appendChild(div);
}

function signup() {
  const u = document.getElementById('auth-username').value;
  const p = document.getElementById('auth-password').value;
  if (localStorage.getItem(`user_${u}`)) {
    alert('User already exists!');
    return;
  }
  localStorage.setItem(`user_${u}`, p);
  alert('Signup successful! You can now login.');
}

function login() {
  const u = document.getElementById('auth-username').value;
  const p = document.getElementById('auth-password').value;
  const saved = localStorage.getItem(`user_${u}`);
  if (saved === p) {
    localStorage.setItem('activeUser', u);
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    loadPatients();
  } else {
    alert('Invalid credentials');
  }
}

function logout() {
  localStorage.removeItem('activeUser');
  location.reload();
}

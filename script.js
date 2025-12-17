javascript
function login() {
  document.getElementById('loginBox').classList.add('hidden');
  document.getElementById('mainApp').classList.remove('hidden');
}

function toggleDelivery(value) {
  const alamat = document.getElementById('alamatBox');
  if (value === 'delivery') {
    alamat.classList.remove('hidden');
  } else {
    alamat.classList.add('hidden');
  }
}

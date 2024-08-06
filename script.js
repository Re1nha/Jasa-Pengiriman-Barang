function showSection(sectionId) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => {
    if (section.id === sectionId) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  });
}

const form = document.getElementById('transaksiForm');
const transaksiList = document.getElementById('transaksiList');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const pengirim = document.getElementById('pengirim').value;
  const alamatP = document.getElementById('alamatP').value;
  const penerima = document.getElementById('penerima').value;
  const alamatT = document.getElementById('alamatT').value;
  const jumlah = document.getElementById('jumlah').value;
  
  const transaksiItem = document.createElement('div');
  transaksiItem.innerHTML = `<p>Nama Pengirim: ${pengirim}</p>
                             <p>Alamat Pengirim: ${alamatP}</p>
                             <p>Nama Penerima: ${penerima}</p>
                             <p>Alamat Tujuan: ${alamatT}
                             <p>Jumlah: ${jumlah}</p>
                             <hr>`;
  
  transaksiList.appendChild(transaksiItem);
  
  form.reset();
});
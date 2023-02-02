const reportBtn = document.querySelector('.create-report');
reportBtn.addEventListener('click', showModal);

const saveBtn = document.querySelector('.btn-save');
saveBtn.addEventListener('click', showToast);

function showModal() {
  const modal = document.querySelector('.modal');
  const htmlBody = document.querySelector('body');

  modal.classList.add('open');
  htmlBody.style.overflow = 'hidden';

  const exitModal = document.querySelectorAll('.modal-exit');
  exitModal.forEach((exit) => {
    exit.addEventListener('click', () => {
      modal.classList.remove('open');
      htmlBody.style.overflow = 'auto';
    });
  });
}

function showToast() {
  const toast = document.querySelector('.custom-toast');
  toast.classList.add('open');
  const exitToast = document.querySelector('.toast-close');
  exitToast.addEventListener('click', () => {
    toast.classList.remove('open');
  });
  setTimeout(() => exitToast.click(), 3000);
}

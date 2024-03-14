const images = document.querySelectorAll('.gallery img');
const modalImage = document.getElementById('modalImage');
const modalInfo = document.getElementById('modalInfo');
const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));

images.forEach((img) => {
  img.addEventListener('click', () => {
    modalImage.src = '';
    modalInfo.textContent = '';
    imageModal.show();
  });
});

// Open modal with clicked image
function openModal(img) {
  let modal = document.getElementById("modal");
  let modalImg = document.getElementById("modal-img");
  let caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src;
  caption.innerHTML = img.alt;
}

// Close modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

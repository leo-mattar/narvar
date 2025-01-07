const iframe = document.querySelector(".c-modal iframe");
const trigger = document.querySelector(".c-video-contain.assist-page");
const modal = document.querySelector(".c-modal");
const modalCloseBtn = document.querySelector(".c-modal-close-btn");
const body = document.querySelector("body");

// Initialize the Vimeo Player instance
const player = new Vimeo.Player(iframe);

function openModal() {
  modal.classList.add("is-open");
  player.play();
  body.classList.add("no-scroll");
}

function closeModal() {
  modal.classList.remove("is-open");
  player.pause();
  body.classList.remove("no-scroll");
}

trigger.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);

// Close the modal when clicking outside the iframe or modal content
modal.addEventListener("click", event => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

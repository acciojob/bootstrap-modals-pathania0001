//your code here
  const button = document.getElementById("open-modal")
  const modal = document.getElementById("newton-modal")
  const closebtns = document.getElementsByClassName("cross");
   Array.from(closebtns).forEach((btn)=>btn.addEventListener("click",closeModal));
   button.onclick = openModal;
function openModal() {
  modal.classList.add("show");
  modal.style.display = "block";
  modal.removeAttribute("aria-hidden");
  modal.setAttribute("aria-modal", "true");
}

function closeModal() {
  modal.classList.remove("show");
//modal.classList.add("modal-backdrop");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  modal.removeAttribute("aria-modal");
}
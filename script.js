// === Profile Photo Change ===
document.getElementById("editPhotoBtn").addEventListener("click", () => {
  const upload = document.createElement("input");
  upload.type = "file";
  upload.accept = "image/*";
  upload.onchange = function () {
    const file = upload.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("profileImage").src = e.target.result;
        localStorage.setItem("profileImage", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  upload.click();
});

const savedImage = localStorage.getItem("profileImage");
if (savedImage) {
  document.getElementById("profileImage").src = savedImage;
}

// === Typing Animation ===
const texts = [
  "BCA Student",
  "Web Developer",
  "Tech Enthusiast",
  "Karate Player"
];
let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typingText");

function typeEffect() {
  if (charIndex < texts[index].length) {
    typingElement.innerHTML += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.innerHTML = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();

// === Certificates ===
function saveCertificates() {
  const certLinks = {
    python: document.getElementById("pythonCert").value,
    web: document.getElementById("webCert").value,
    karate: document.getElementById("karateCert").value
  };
  localStorage.setItem("certLinks", JSON.stringify(certLinks));
  alert("Certificates saved!");
}

function openModal() {
  const savedLinks = JSON.parse(localStorage.getItem("certLinks"));
  if (savedLinks) {
    document.getElementById("link1").href = savedLinks.python || "#";
    document.getElementById("link2").href = savedLinks.web || "#";
    document.getElementById("link3").href = savedLinks.karate || "#";
  }
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
  if (event.target === document.getElementById("modal")) {
    closeModal();
  }
};

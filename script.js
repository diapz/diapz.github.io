const roleElement = document.getElementById('role');
const roles = ['Geoffrey Diapana','Geoffrey "Fr3y" Diapana'];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;
let typingSpeed = 150; 
let deletingSpeed = 200; 
let pauseBeforeDeleting = 1200; 
let pauseAfterDeleting = 3550; 

function type() {
    if (deleting) {
        if (charIndex > 8) {
            roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, deletingSpeed);
        } else {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, pauseBeforeDeleting);
        }
    } else {
        if (charIndex < roles[roleIndex].length) {
            roleElement.textContent = roles[roleIndex].substring(0, charIndex + 1);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            deleting = true;
            setTimeout(type, pauseAfterDeleting); 
        }
    }
}

type();
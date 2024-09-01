const roleElement = document.getElementById('role');
const roles = ['Geoffrey Diapana'];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;
let typingSpeed = 150; 
let deletingSpeed = 200; 
let pauseBeforeDeleting = 2200; 
let pauseAfterDeleting = 550; 

function type() {
    if (deleting) {
        if (charIndex > 1) {
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
const roleElement = document.getElementById('fashionRole');
const roles = ['by Isabelle Rodriguez | 1 day ago'];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;
let typingSpeed = 99; 
let deletingSpeed = 200; 
let pauseBeforeDeleting = 2200; 
let pauseAfterDeleting = 5500; 

function type() {
    if (deleting) {
        if (charIndex > 23) {
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
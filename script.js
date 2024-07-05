function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}
function redirectToKominfo() {
            window.location.href = "https://www.kominfo.go.id";
        }
function redirectToGitHub() {
            window.location.href = "https://github.com/Scytheluck";
        }
        
function redirectToForm() {
            window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSfKOldc8d9EUXC_dqTQ_CYWXSF0yP5Lsc-S8rV7JDT57-l49g/viewform?usp=sf_link";
      }
function sendEmail(plan) {
            window.location.href = `mailto:hasyimramon46@gmail.com?subject=Join ${plan}&body=I would like to join the ${plan}.`;
        }  
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});
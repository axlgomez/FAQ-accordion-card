const questions = document.querySelectorAll('.card__question');

 function toggleFaq () {

    const itemToggle = this.getAttribute("aria-expanded");
    
    for (let i = 0; i < questions.length; i++) {
        questions[i].setAttribute("aria-expanded", false);   
    }
        
    if (itemToggle == "false") {
        this.setAttribute('aria-expanded', 'true');
    }

};

questions.forEach((item) => item.addEventListener("click", toggleFaq));

import anime from 'animejs/lib/anime.es.js';

const textNode = document.querySelector(".SpecialText")

if (textNode && textNode.textContent){
    textNode.innerHTML = textNode.textContent.replace(/ (-|#|@){1}/g, s => s[1]+s[0]).replace(/(\S*)/g, m => {
        return `<span class="word">` +
            m.replace(/\S(-|#|@)?/g, "<span class='letter'>$&</span>") +
            `</span>`;
    });
}

anime({
    targets: '.text span',
    translateY: ["10px", "0"],
    opacity: [0, 1],
    delay: anime.stagger(100)
});
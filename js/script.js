const botao = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

botao.addEventListener('click', () =>{
    menu.classList.toggle('ativo');
    if(menu.classList.contains('ativo')){
        botao.textContent = "✕"
    }else{
        botao.textContent='☰'
    }
});
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const icon = question.querySelector('.icon');
    const isOpen = item.classList.contains('ativo');

    // fecha todos
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('ativo');
      i.querySelector('.icon').textContent = '+';
    });

    // se estava fechado, abre
    if (!isOpen) {
      item.classList.add('ativo');
      icon.textContent = '–';
    }
    // se estava aberto, não faz nada → fica fechado
  });
});


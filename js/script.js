document.addEventListener("DOMContentLoaded", () => {
    // размытие фона шапки
    const header = document.getElementById('header');
    const h_content = document.getElementById('h-content');
    window.addEventListener("scroll", () => {
        header.classList.toggle('glass', scrollY > 80);
        h_content.classList.toggle('glass', scrollY > 80);
    })

    // меню бургер
    const btn_mb = document.getElementById('btn-mb');
    btn_mb.addEventListener("click", () => {
        header.classList.toggle('open-menu');
        document.body.classList.toggle('open-menu');
    })

    // кнопка "вверх"
    const upper = document.getElementById('upper');
    // появление
    window.addEventListener('scroll', () => {
        upper.classList.toggle('visible', scrollY > 80);
    })
    // при клике возвращаемся в самый вверх
    upper.addEventListener('click', () => {
        window.scrollTo(0, 0);
    })

    // загрузка фотографии (input file)
    let imageField_add = document.querySelector('#file-add');
    let imageField_edit = document.querySelector('#file-edit');
    let label1 = document.querySelector('label[for="file-add"]');
    let label2 = document.querySelector('label[for="file-edit"]');

    imageField_add.addEventListener('change', () => {
        label1.innerText = 'Имеется фото';
        label1.style.color = 'white';
        label1.style.backgroundColor = 'var(--color2)';
    });
    imageField_edit.addEventListener('change', () => {
        label2.innerText = 'Имеется фото';
        label2.style.color = 'white';
        label2.style.backgroundColor = 'var(--color2)';
    })
})
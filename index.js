const appNode = document.getElementById('app');

const menu1 = [
    {
        title: 'Фитнес-коктейли',
        isNew: true
    },
    {
        title: 'Смусси',
        desc: 'Яркий микс свежих фруктов',
        isNew: false
    },
    {
        title: 'Хиты сезона',
        isNew: false
    }
]

const menu2 = [
    {
        title: 'Фитнес-коктейли',
        isNew: true
    },
    {
        title: 'Смусси',
        desc: 'Яркий микс свежих фруктов',
        isNew: false
    }
]


function createSectionHTML(section) {
    let descHTML = ''
    if (section.desc) {
        descHTML = `<p>${section.desc}</p>`;

    }

    let isNewHTML = ''
    if (section.isNew) {
        isNewHTML = '<div>NEW</div>'
    }

    return `
        <div>
            ${isNewHTML}
            <h2>${section.title}</h2>
            ${descHTML}
        </div>
    `;
}

function render(sections) {
    let html = ''
    sections.forEach(section => {
        html += createSectionHTML(section)
    });

    appNode.innerHTML = html
}


// вот запускается программа
render(menu1)

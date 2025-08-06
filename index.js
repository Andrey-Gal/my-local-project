// Получаем узел для отображения меню
const appNode = document.getElementById('app');

// Данные меню (как раньше)
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
];

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
];

// Функции для генерации и отображения секций меню
function createSectionHTML(section) {
  let descHTML = '';
  if (section.desc) {
    descHTML = `<p>${section.desc}</p>`;
  }

  let isNewHTML = '';
  if (section.isNew) {
    isNewHTML = '<div>NEW</div>';
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
  let html = '';
  sections.forEach(section => {
    html += createSectionHTML(section);
  });
  appNode.innerHTML = html;
}

// Отображаем полное меню (три пункта)
render(menu1);

// Настраиваем воспроизведение фанфар по клику на кнопки
const sound = document.getElementById('celebration-sound');

function playSound() {
  sound.currentTime = 0;
  sound.play();
}

document.getElementById('celebrate-btn').addEventListener('click', playSound);
document.getElementById('cheer-btn').addEventListener('click', playSound);

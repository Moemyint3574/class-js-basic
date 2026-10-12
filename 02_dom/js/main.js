// console.log(`success!`);

// const mainTitle = document.getElementById('main-title');
// console.log(mainTitle);

// const title = document.querySelector('#main-title');
// console.dir(title);

// console.log(document.body);
// console.log(document.documentElement);

// const introText = document.getElementById('intro');
// console.log(introText);

// const changeButton = document.querySelector('#change-btn');
// console.log(changeButton);

// const mainTitle = document.getElementById('main-title');
// console.log(mainTitle.textContent);

// const day = 12;
// const week = `Monday`;
// mainTitle.textContent = `今日は${day}日の${week}です。`;

// const introText = document.querySelector('#intro');
// console.log(introText.innerHTML);

// introText.innerHTML = `ようこぞ！<strong>JS</strong>の正解へ！`;

// console.log(document.body.textContent);
// console.log(document.body.innerHTML);

// introText.textContent = `ようこぞ！<strong>JS</strong>の正解へ！`;

// const mainTitle = document.getElementById('main-title');
// mainTitle.textContent = `Moemyint`;

// const introText = document.querySelector('#intro');
// introText.innerHTML = `途中で<br>改行がある文書です</br>`;

// const changeBtn = document.querySelector('#change-btn');
// changeBtn.innerHTML = `<strong>内容を変更する</strong>`;


// let newSize = 50;
// mainTitle.style.fontSize = `${newSize}px`;

// changeBtn.addEventListener('click', () => {
//     mainTitle.style.color = '#ff3366';
//     mainTitle.style.backgroundColor = '#333333';

//     introText.style.fontSize = `30px`;
//     introText.style.letterSpacing = `1em`;
//     introText.style.marginTop = `100px`;

// });

//課題です//

const themeTitle = document.getElementById('theme-title');

const themeDesc = document.getElementById('theme-desc');

const btnLight = document.querySelector('#btn-light');
const btnDark = document.querySelector('#btn-dark');
const btnSky = document.querySelector('#btn-sky');

btnLight.addEventListener('click', () => {
    themeTitle.textContent = `今のテーマ：☀️ ライトモード`;
    themeTitle.style.color = '#333333';
    document.body.style.backgroundColor = '#f0f4f8';

    themeDesc.style.color = '#333333';
});

btnDark.addEventListener('click', () => {
    themeTitle.textContent = `今のテーマ：🌙 ダークモード`;
    themeTitle.style.color = '#ffffff';
    document.body.style.backgroundColor = '#1E293B';

    themeDesc.style.color = '#ffffff';
});

btnSky.addEventListener('click', () => {
    themeTitle.textContent = `今のテーマ：🫐 Skyblueモード`;
    themeTitle.style.color = '#0284C7';
    document.body.style.backgroundColor = '#E0F2FE';

    themeDesc.style.color = '#0284C7';
});

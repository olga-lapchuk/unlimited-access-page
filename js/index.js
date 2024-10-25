function updateTime() {
    const timeDisplay = document.getElementById('time-display');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    timeDisplay.textContent = `${hours}:${minutes}`;
}

setInterval(updateTime, 60000);
updateTime();

const userLang = navigator.language || navigator.userLanguage;
const queryLang = new URLSearchParams(window.location.search).get('lang');
const supportedLangs = ['en', 'es', 'fr', 'de', 'ja', 'pt'];

let lang = supportedLangs.includes(queryLang) ? queryLang : (supportedLangs.includes(userLang.slice(0, 2)) ? userLang.slice(0, 2) : 'en');

loadLanguageStrings(lang);

function loadLanguageStrings(language) {
    fetch(`./lang/${language}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('title').innerHTML = data["Get Unlimited <br>Access"];
            document.getElementById('option1').innerHTML = data["Unlimited Art <br>Creation"];
            document.getElementById('option2').innerHTML = data["Exclusive <br>Styles"];
            document.getElementById('option3').innerHTML = data["Magic Avatars <br>With 20% Off"];
            document.getElementById('yearly-access').innerText = data["YEARLY ACCESS"];
            document.getElementById('best-offer').innerText = data["BEST OFFER"];
            document.getElementById('yearly-price').innerHTML = data["Just {{price}} per year"].replace('{{price}}', '$39.99');
            document.getElementById('weekly-access').innerText = data["WEEKLY ACCESS"];
            document.getElementById('weekly-price').innerHTML = data["{{price}} <br>per week"].replace('{{price}}', '$6.99');
            document.getElementById('terms').innerText = data["Terms of Use"];
            document.getElementById('privacy').innerText = data["Privacy Policy"];
            document.getElementById('restore').innerText = data["Restore"];
            document.getElementById('continue-btn').innerText = data["Continue"];
        })
        .catch(error => console.error('Ошибка при загрузке языков:', error));
}

document.getElementById('continue-btn').addEventListener('click', function() {
    window.location.href = "#";
});

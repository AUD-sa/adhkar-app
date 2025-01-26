const dhikrData = {
    morning: [
        { id: 'morning_0', text: "الله لا إله إلا هو الحي القيوم لا تأخذه سنة ولا نوم له ما في السماوات وما في الأرض من ذا الذي يشفع عنده إلا بإذنه يعلم ما بين أيديهم وما خلفهم ولا يحيطون بشيء من علمه إلا بما شاء وسع كرسيه السماوات والأرض ولا يؤوده حفظهما وهو العلي العظيم.", times: 1 },
        { id: 'morning_1', text: "قل هو ٱلله أحد، ٱلله ٱلصمد، لم يلد ولم يولد، ولم يكن لهۥ كفوا أحدۢ.", times: 3 },
        { id: 'morning_2', text: "قل أعوذ برب ٱلفلق، من شر ما خلق، ومن شر غاسق إذا وقب، ومن شر ٱلنفثت فى ٱلعقد، ومن شر حاسد إذا حسد.", times: 3 },
        { id: 'morning_3', text: "قل أعوذ برب ٱلناس، ملك ٱلناس، إله ٱلناس، من شر ٱلوسواس ٱلخناس، ٱلذى يوسوس فى صدور ٱلناس، من ٱلجنة وٱلناس.", times: 3 },
        { id: 'morning_4', text: "أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، ربِّ أسألك خير ما في هذا اليوم وخير ما بعده وأعوذ بك من شر ما في هذا اليوم وشر ما بعده، ربِّ أعوذ بك من الكسل وسوء الكبر، ربِّ أعوذ بك من عذاب في النار وعذاب في القبر.", times: 1 },
        { id: 'morning_5', text: "اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور.", times: 1 },
        { id: 'morning_6', text: "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي وأبوء بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت.", times: 1 },
        { id: 'morning_7', text: "اللهم إني أصبحت أشهدك وأشهد حملة عرشك وملائكتك وجميع خلقك أنك أنت الله لا إله إلا أنت وحدك لا شريك لك وأن محمداً عبدك ورسولك.", times: 4 },
        { id: 'morning_8', text: "اللهم ما أصبح بي من نعمة أو بأحد من خلقك فمنك وحدك لا شريك لك فلك الحمد ولك الشكر.", times: 1 },
        { id: 'morning_9', text: "اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت. اللهم إني أعوذ بك من الكفر والفقر وأعوذ بك من عذاب القبر لا إله إلا أنت.", times: 3 },
        { id: 'morning_10', text: "حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم.", times: 7 },
        { id: 'morning_11', text: "اللهم إني أسألك العفو والعافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي، اللهم استر عوراتي وآمن روعاتي، اللهم احفظني من بين يدي ومن خلفي وعن يميني وعن شمالي ومن فوقي وأعوذ بعظمتك أن أغتال من تحتي.", times: 1 },
        { id: 'morning_12', text: "اللهم عالم الغيب والشهادة فاطر السماوات والأرض، رب كل شيء ومليكه، أشهد أن لا إله إلا أنت، أعوذ بك من شر نفسي ومن شر الشيطان وشركه وأن أقترف على نفسي سوءاً أو أجره إلى مسلم.", times: 1 },
        { id: 'morning_13', text: "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم.", times: 3 },
        { id: 'morning_14', text: "رضيت بالله رباً وبالإسلام ديناً وبمحمد صلى الله عليه وسلم نبياً.", times: 3 },
        { id: 'morning_15', text: "يا حي يا قيوم برحمتك أستغيث أصلح لي شأني كله ولا تكلني إلى نفسي طرفة عين.", times: 1 }
    ],
    evening: [
        { id: 'evening_0', text: "الله لا إله إلا هو الحي القيوم لا تأخذه سنة ولا نوم له ما في السماوات وما في الأرض من ذا الذي يشفع عنده إلا بإذنه يعلم ما بين أيديهم وما خلفهم ولا يحيطون بشيء من علمه إلا بما شاء وسع كرسيه السماوات والأرض ولا يؤوده حفظهما وهو العلي العظيم.", times: 1 },
        { id: 'evening_1', text: "قل هو ٱلله أحد، ٱلله ٱلصمد، لم يلد ولم يولد، ولم يكن لهۥ كفوا أحدۢ.", times: 3 },
        { id: 'evening_2', text: "قل أعوذ برب ٱلفلق، من شر ما خلق، ومن شر غاسق إذا وقب، ومن شر ٱلنفثت فى ٱلعقد، ومن شر حاسد إذا حسد.", times: 3 },
        { id: 'evening_3', text: "قل أعوذ برب ٱلناس، ملك ٱلناس، إله ٱلناس، من شر ٱلوسواس ٱلخناس، ٱلذى يوسوس فى صدور ٱلناس، من ٱلجنة وٱلناس.", times: 3 },
        { id: 'evening_4', text: "أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، ربِّ أسألك خير ما في هذه الليلة وخير ما بعدها وأعوذ بك من شر ما في هذه الليلة وشر ما بعدها، ربِّ أعوذ بك من الكسل وسوء الكبر، ربِّ أعوذ بك من عذاب في النار وعذاب في القبر.", times: 1 },
        { id: 'evening_5', text: "اللهم بك أمسينا وبك أصبحنا وبك نحيا وبك نموت وإليك المصير.", times: 1 },
        { id: 'evening_6', text: "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي وأبوء بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت.", times: 1 },
        { id: 'evening_7', text: "اللهم إني أمسيت أشهدك وأشهد حملة عرشك وملائكتك وجميع خلقك أنك أنت الله لا إله إلا أنت وحدك لا شريك لك وأن محمداً عبدك ورسولك.", times: 4 },
        { id: 'evening_8', text: "اللهم ما أمسى بي من نعمة أو بأحد من خلقك فمنك وحدك لا شريك لك فلك الحمد ولك الشكر.", times: 1 },
        { id: 'evening_9', text: "اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت. اللهم إني أعوذ بك من الكفر والفقر وأعوذ بك من عذاب القبر لا إله إلا أنت.", times: 3 },
        { id: 'evening_10', text: "حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم.", times: 7 },
        { id: 'evening_11', text: "اللهم إني أسألك العفو والعافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي، اللهم استر عوراتي وآمن روعاتي، اللهم احفظني من بين يدي ومن خلفي وعن يميني وعن شمالي ومن فوقي وأعوذ بعظمتك أن أغتال من تحتي.", times: 1 },
        { id: 'evening_12', text: "اللهم عالم الغيب والشهادة فاطر السماوات والأرض، رب كل شيء ومليكه، أشهد أن لا إله إلا أنت، أعوذ بك من شر نفسي ومن شر الشيطان وشركه وأن أقترف على نفسي سوءاً أو أجره إلى مسلم.", times: 1 },
        { id: 'evening_13', text: "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم.", times: 3 },
        { id: 'evening_14', text: "رضيت بالله رباً وبالإسلام ديناً وبمحمد صلى الله عليه وسلم نبياً.", times: 3 },
        { id: 'evening_15', text: "يا حي يا قيوم برحمتك أستغيث أصلح لي شأني كله ولا تكلني إلى نفسي طرفة عين.", times: 1 }
    ]
};

let currentDhikrIndex = {
    morning: 0,
    evening: 0
};
let dhikrCounter = {
    morning: {},
    evening: {}
};
let totalCounter = {
    morning: 0,
    evening: 0
};
let totalCounts = {
    morning: 0,
    evening: 0
};
let completedDhikr = {
    morning: [],
    evening: []
};
let currentDhikrType = null;

const homePage = document.getElementById('home-page');
const morningPage = document.getElementById('morning-page');
const eveningPage = document.getElementById('evening-page');
const sidebar = document.getElementById('sidebar');
const dhikrList = document.getElementById('dhikr-list');
const themeIcon = document.querySelector('.theme-toggle i');

function toggleTheme() {
    const root = document.documentElement;
    const newTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = newTheme;
    themeIcon.classList.toggle('fa-adjust');
    themeIcon.classList.toggle('fa-moon');
    localStorage.setItem('theme', newTheme);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
    if (savedTheme === 'dark') {
        themeIcon.classList.remove('fa-adjust');
        themeIcon.classList.add('fa-moon');
    }
}

function openDhikr(type) {
    currentDhikrType = type;
    homePage.style.display = 'none';
    if (type === 'morning') {
        morningPage.style.display = 'block';
        eveningPage.style.display = 'none';
    } else if (type === 'evening') {
        eveningPage.style.display = 'block';
        morningPage.style.display = 'none';
    }
    loadDhikr(type, 0);
    updateSidebar(type);
}

function loadDhikr(type, index) {
    currentDhikrIndex[type] = index;
    const dhikrTextElement = document.getElementById(`${type}-dhikr-text`);
    const dhikrNumberElement = document.getElementById(`${type}-dhikr-number`);
    const counterElement = document.getElementById(`${type}-counter`);
    const countBtn = document.getElementById(`${type}-count-btn`);
    const progressBarFill = document.getElementById(`${type}-progress-bar-fill`);

    const currentDhikr = dhikrData[type][index];
    dhikrTextElement.textContent = currentDhikr.text;
    dhikrNumberElement.textContent = index + 1;
    dhikrCounter[type][currentDhikr.id] = dhikrCounter[type][currentDhikr.id] || 0;
    counterElement.textContent = `(العدد: ${dhikrCounter[type][currentDhikr.id]} / ${currentDhikr.times})`;
    updateProgress(type, progressBarFill);
    if (dhikrCounter[type][currentDhikr.id] === currentDhikr.times) {
        countBtn.textContent = 'تم';
        countBtn.classList.add('completed');
    } else {
        countBtn.textContent = 'اضغط للعد';
        countBtn.classList.remove('completed');
    }
    updateSidebar(type);
}

function calculateTotalCounts(type) {
    totalCounts[type] = dhikrData[type].reduce((sum, dhikr) => sum + dhikr.times, 0);
}

function updateProgress(type, progressBarFill) {
    calculateTotalCounts(type);
    let totalCompleted = 0;
    for (const id in dhikrCounter[type]) {
        totalCompleted += dhikrCounter[type][id];
    }

    const progress = totalCompleted / totalCounts[type];
    progressBarFill.style.width = `${progress * 100}%`;
}

function countOrNextDhikr(type) {
    const countBtn = document.getElementById(`${type}-count-btn`);
    if (countBtn.classList.contains('completed')) {
        moveToNext(type);
    } else {
        countDhikr(type);
    }
}

function countDhikr(type) {
    const counterElement = document.getElementById(`${type}-counter`);
    const countBtn = document.getElementById(`${type}-count-btn`);
    const currentDhikr = dhikrData[type][currentDhikrIndex[type]];
    const progressBarFill = document.getElementById(`${type}-progress-bar-fill`);
    dhikrCounter[type][currentDhikr.id] = (dhikrCounter[type][currentDhikr.id] || 0) + 1;
    counterElement.textContent = `(العدد: ${dhikrCounter[type][currentDhikr.id]} / ${currentDhikr.times})`;
    updateProgress(type, progressBarFill);
    if (dhikrCounter[type][currentDhikr.id] === currentDhikr.times) {
        countBtn.textContent = 'تم';
        countBtn.classList.add('completed');
    }
}

function moveToNext(type) {
    const countBtn = document.getElementById(`${type}-count-btn`);
    if (countBtn.classList.contains('completed')) {
        const currentIndex = currentDhikrIndex[type];
        if (!completedDhikr[type].includes(currentIndex)) {
            completedDhikr[type].push(currentIndex);
        }
        let nextIndex = currentIndex + 1;
        if (nextIndex >= dhikrData[type].length) {
            nextIndex = 0;
            alert('تمت جميع الأذكار');
        }
        loadDhikr(type, nextIndex);
    }
}

function previousDhikr(type) {
    let previousIndex = currentDhikrIndex[type] - 1;
    if (previousIndex < 0) {
        previousIndex = dhikrData[type].length - 1;
    }
    loadDhikr(type, previousIndex);
}

function goBack() {
    morningPage.style.display = 'none';
    eveningPage.style.display = 'none';
    homePage.style.display = 'block';
    currentDhikrType = null;
    sidebar.style.display = 'none';
}

function toggleSidebar() {
    sidebar.classList.toggle('open');
}

function updateSidebar(type) {
    dhikrList.innerHTML = '';
    if (type) {
        dhikrData[type].forEach((dhikr, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span class="dhikr-number">${index + 1}</span> ${dhikr.text.substring(0, 60)}...`;
            if (completedDhikr[type].includes(index)) {
                listItem.innerHTML += '<i class="fas fa-check" style="color: green; margin-right: 5px;"></i>';
            }
            if (currentDhikrIndex[type] === index) {
                listItem.classList.add('active');
            }
            listItem.addEventListener('click', () => {
                loadDhikr(type, index);
                sidebar.classList.remove('open');
            });
            dhikrList.appendChild(listItem);
        });
    }
}

// Initialize sidebar on page load with null values or previously saved state
updateSidebar(currentDhikrType);
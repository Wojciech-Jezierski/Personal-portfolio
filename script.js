function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    scrollToElement('#skills');
});

link3.addEventListener('click', () => {
    scrollToElement('#projects');
});


const footer = document.getElementById("footer")
const footer1 = document.getElementById("footer1")
const footer2 = document.getElementById("footer2")
const readMore = document.getElementById("readMore");

footer.addEventListener('click', () => {
    scrollToElement('nav');
});

footer1.addEventListener('click', () => {
    scrollToElement('.header');
});

footer2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

readMore.addEventListener('click', () => {
    scrollToElement('.header');
});


const HR = document.getElementById("HR");
const Logistic = document.getElementById("Logistic");
const Garden = document.getElementById("Garden");
const Weather = document.getElementById("WeatherApp");
const Expense = document.getElementById("ExpenseTracker")

HR.addEventListener('click', () => {
    scrollToElement('#hrDasbhoard');
});

Logistic.addEventListener('click', () => {
    scrollToElement('#liveTrackApp');
});

Garden.addEventListener('click', () => {
    scrollToElement('#gardenWebsite');
});

Weather.addEventListener('click', () => {
    scrollToElement('#weatherApp');
});

Expense.addEventListener('click', () => {
    scrollToElement('#expenseTracker');
});


import 'bootstrap';

// Chart options
import myChart from './Chart/Chart';

window.addEventListener('DOMContentLoaded', () => {

// Function for change filter btn style
const filterBtn = document.querySelector('#filter-btn');

const changeStyleFilterBtn = () => {
    const filterBtnOverlay = document.querySelector('#headingOne');
    const cardBorder = document.querySelector('#card-border');
    
    filterBtnOverlay.classList.toggle('card-header');
    cardBorder.classList.toggle('border-0');
    filterBtn.classList.toggle('active');
}


filterBtn.addEventListener('click', changeStyleFilterBtn);

const yearFiltersActive = document.querySelectorAll('.year-filter');

yearFiltersActive.forEach((item) => {
    item.addEventListener('click', (event) => {
        yearFiltersActive.forEach((item) => {
            item.classList.remove('active');
        });
        event.target.classList.add('active');
    });
})

})
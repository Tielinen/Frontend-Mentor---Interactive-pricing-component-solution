'use strict'

const rangeElement = document.querySelector('.content-container__range.js');
const pageviewsElement = document.querySelector('.content-container__pageviews.js');
const priceElement = document.querySelector('.content-container__price.js');
const yearlyBillingElement = document.querySelector('.content-container__yearly_billing.js');

const colorActive = '#a4f3eb';
const colorPassive = '#ecf0fb';

const rangeValues = [
  {pageviews: '10K', price: 8, backgroundStyle: colorPassive},
  {pageviews: '50K', price: 12, backgroundStyle: `linear-gradient(to right, ${colorActive} 25%, ${colorPassive} 0%)`},
  {pageviews: '100K', price: 16, backgroundStyle: `linear-gradient(to right, ${colorActive} 50%, ${colorPassive} 0%)`},
  {pageviews: '500K', price: 24, backgroundStyle: `linear-gradient(to right, ${colorActive} 75%, ${colorPassive} 0%)`},
  {pageviews: '1M', price: 36, backgroundStyle: colorActive}
];

let currentPrice = null;


handleRangeElement();
rangeElement.addEventListener('change', handleRangeElement)
yearlyBillingElement.addEventListener('change', handleYearlyDiscount)

function handleRangeElement() {
  const rangeValue = rangeValues[Number(rangeElement.value) - 1];

  if (rangeValue) {
    pageviewsElement.innerText = rangeValue.pageviews;
    currentPrice = rangeValue.price;
    rangeElement.style.background = rangeValue.backgroundStyle;

    handleYearlyDiscount();
  }
}

function handleYearlyDiscount() {

  priceElement.innerText = (yearlyBillingElement.checked) ?
    `$${currentPrice * 0.75}.00` : `$${currentPrice}.00`;
}

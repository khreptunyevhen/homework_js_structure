"use strict";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "CAD",
});

const FED_TAX = 0.05;
const PROV_TAX = 0.09975;

function money_calc() {
  let price_meal = +document.getElementById("price-meal").value;
  let number_of_person = +document.getElementById("person").value;
  let tip = +document.getElementById("tips").value;

  let before_tax_block = document.getElementById("before-tax");
  let percentage_tip_block = document.getElementById("percentage-tip");
  let prov_tax_block = document.getElementById("prov-tax");
  let fed_tax_block = document.getElementById("fed-tax");
  let total_with_tax_block = document.getElementById("total-with-tax");
  let total_tip_block = document.getElementById("total-tip");
  let pay_person_block = document.getElementById("pay-person");
  let error_message_block = document.getElementById("error");

  if (number_of_person > 0 && price_meal > 0) {
    let total_before_tax =
      number_of_person * price_meal + number_of_person * price_meal * tip;
    let per_tip = tip * 100;
    let prov_tax = total_before_tax * PROV_TAX;
    let fed_tax = total_before_tax * FED_TAX;
    let total_with_tax = total_before_tax + prov_tax + fed_tax;
    let total_tip = number_of_person * price_meal * tip;
    let pay_person = total_with_tax / number_of_person;

    before_tax_block.textContent = formatter.format(total_before_tax);
    percentage_tip_block.textContent = `${per_tip}%`;
    prov_tax_block.textContent = formatter.format(prov_tax);
    fed_tax_block.textContent = formatter.format(fed_tax);
    total_with_tax_block.textContent = formatter.format(total_with_tax);
    total_tip_block.textContent = formatter.format(total_tip);
    pay_person_block.textContent = formatter.format(pay_person);
    error_message_block.innerHTML = "";
  } else {
    error_message_block.innerHTML =
      "The numbers of persons or the price of the meal should be positive number.";
    before_tax_block.textContent = "";
    percentage_tip_block.textContent = "";
    prov_tax_block.textContent = "";
    fed_tax_block.textContent = "";
    total_with_tax_block.textContent = "";
    total_tip_block.textContent = "";
    pay_person_block.textContent = "";
  }
}

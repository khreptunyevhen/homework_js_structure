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

  if (number_of_person > 0 && price_meal > 0) {
    let total_before_tax =
      number_of_person * price_meal + number_of_person * price_meal * tip;
    let per_tip = tip * 100;
    let prov_tax = total_before_tax * PROV_TAX;
    let fed_tax = total_before_tax * FED_TAX;
    let total_with_tax = total_before_tax + prov_tax + fed_tax;
    let total_tip = number_of_person * price_meal * tip;
    let pay_person = total_with_tax / number_of_person;

    document.getElementById("before-tax").textContent =
      formatter.format(total_before_tax);
    document.getElementById("percentage-tip").textContent = `${per_tip}%`;
    document.getElementById("prov-tax").textContent =
      formatter.format(prov_tax);
    document.getElementById("fed-tax").textContent = formatter.format(fed_tax);
    document.getElementById("total-with-tax").textContent =
      formatter.format(total_with_tax);
    document.getElementById("total-tip").textContent =
      formatter.format(total_tip);
    document.getElementById("pay-person").textContent =
      formatter.format(pay_person);
    document.getElementById("error").innerHTML = "";
  } else {
    document.getElementById("error").innerHTML =
      "The numbers of persons or the price of the meal should be positive number.";
    document.getElementById("before-tax").textContent = "";
    document.getElementById("percentage-tip").textContent = "";
    document.getElementById("prov-tax").textContent = "";
    document.getElementById("fed-tax").textContent = "";
    document.getElementById("total-with-tax").textContent = "";
    document.getElementById("total-tip").textContent = "";
    document.getElementById("pay-person").textContent = "";
    document.getElementById("pay-person").textContent = "";
  }
}

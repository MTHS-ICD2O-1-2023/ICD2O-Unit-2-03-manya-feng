// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: Mar 2024
// This file contains the JS functions for index.html

/**
 * This function gets users street name and number and shows it back to user.
 */
function enterClicked() {
  // input
  const streetName = document.getElementById("street-name").value
  const streetNumber = parseInt(document.getElementById("number-entered").value)

  // output
  document.getElementById("user-info").innerHTML =
    "Your address is: " + streetNumber + " " + streetName + "."
}
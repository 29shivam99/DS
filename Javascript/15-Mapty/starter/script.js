'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// this is not able to set background as red
//document.documentElement.style.setProperty('background-color', 'red');

// this is able to
//document.documentElement.style.setProperty('--color-dark--1', 'red');

// using the navigator.geolocation
// we used

navigator.geolocation.getCurrentPosition(
  function (position) {
    console.log(position);
    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;
    let mapURL = `https://www.google.com/maps/@${latitude},${longitude},15.97z?entry=ttu`;
    console.log(mapURL);
    const coordinates = [latitude, longitude];
    var map = L.map('map').setView(coordinates, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(coordinates)
      .addTo(map)
      .bindPopup('This is your current location.')
      .openPopup();
  },
  function (errot) {
    alert('Could not fetch your current location!');
  }
);

document.getElementById('map').addEventListener('click', function () {});

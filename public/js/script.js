// Initialize and add the map
function initMap() {
// The location
const akadNikah = { lat: -0.9225054940582557, lng: 100.35991095174292 };
const resepsi = { lat: -0.9225054940582557, lng: 100.35991095174292 };
const unduhMantu = { lat: -0.9225054940582557, lng: 100.35991095174292 };
// The map, centered the location
const map1 = new google.maps.Map(document.getElementById("akadNikah"), {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: akadNikah,
});
const map2 = new google.maps.Map(document.getElementById("resepsi"), {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: resepsi,
});
const map3 = new google.maps.Map(document.getElementById("unduhMantu"), {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: unduhMantu,
});
// The marker, positioned the location
const markerAkadNikah = new google.maps.Marker({
    position: akadNikah,
    map: map1,
});
const markerResepsi = new google.maps.Marker({
    position: resepsi,
    map: map2,
});
const markerUnduhMantu = new google.maps.Marker({
    position: unduhMantu,
    map: map3,
});

}
// Musik
const track = document.getElementById('track');
const button = document.getElementById('play-pause');

function playPause() {
    if(track.paused) {
        track.play();
        button.className = "bi-pause-fill";
    } else {
        track.pause();
        button.className = "bi-play-fill";
    }
}
// Button Music
button.addEventListener('click', playPause);
track.addEventListener('ended', function() {
    button.className = "bi-play-fill";
});
// Gallery glightbox
const lightbox = GLightbox({
    closeOnOutsideClick: false,
    loop: true
});

// script.js

// Initialize Materialize components like the modal
$(document).ready(function() {
    $('.modal').modal();
});

// Example: Open a modal when a button is clicked
function showModal() {
    $('#modal1').modal('open');
}
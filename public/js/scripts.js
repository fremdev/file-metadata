document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('form');
  var fileInput = document.querySelector('form input[type=file]');
  form.addEventListener('submit', function(e){
      if(!fileInput.value) {
        e.preventDefault();
        alert('You must select a file!');
      }
  });
});

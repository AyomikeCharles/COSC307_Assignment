
document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Start the slideshow
    var slideshowInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
});

function openMobileMenu(){
    const height = document.getElementById('mobile_nav_menu').style.height = '100px'
    const open = document.getElementById('openIcon').style.display = 'none'
    const close = document.getElementById('closeIcon').style.display = 'block'

}

function closeMobileMenu(){
    const height = document.getElementById('mobile_nav_menu').style.height = '0'
    const open = document.getElementById('openIcon').style.display = 'block'
    const close = document.getElementById('closeIcon').style.display = 'none'
}



const handleSubmit = (e) =>{
  const value = document.getElementById('newsletter').value
  if(value === ''){
     document.getElementById('newsletter-error').style.display = 'block'
  }else{
    alert('you have subscribe to our newsletter')
    value = ''
  }
  
}

const addComment = () =>{

  const name = document.getElementById('name').value
  const comment = document.getElementById('comment').value

  if(!name){
    document.getElementById('name_error').style.display = 'block'
  }

  if(!comment){
    document.getElementById('comments_error').style.display = 'block'
  }

  if(name && comment){
    document.getElementById('name_error').style.display = 'none'
    document.getElementById('comments_error').style.display = 'none'
    document.getElementById('comments').innerHTML += `<div class="comment"><div><b>${name}</b></div>${comment}</div>`
    document.getElementById('comment').value = ''
    document.getElementById('name').value = ''
  }


}

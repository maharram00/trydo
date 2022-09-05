var mySlider = [
    "photo/portfolio-1.jpg",
    "photo/portfolio-2.jpg",
    "photo/portfolio-3.jpg",
    "photo/portfolio-4.jpg",
]
var img = document.querySelector(".box img")
img.src = mySlider[0];
var next = document.querySelector(".next")
var back = document.querySelector(".back")
var currentSlide = 0;

next.onclick=nextSlider
function nextSlider(){
    currentSlide=(currentSlide+1+mySlider.length)%mySlider.length;
    img.src=mySlider[currentSlide]
}
back.onclick=prevSlider
function prevSlider(){
    currentSlide=(currentSlide-1+mySlider.length)%mySlider.length;
    img.src=mySlider[currentSlide]
}




window.addEventListener("load",function (){
    document.body.classList.add("loaded");
});

window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });
  
  const customer_counter = document.getElementById("customer-counter");
  const coffee_counter = document.getElementById("coffee-counter");
  const hoursofwork_counter = document.getElementById("hoursofwork-counter");
  
  const TargetElement = function (element, start) {
    this.element = element;
    this.start = start;
  };
  
  const CoffeeObj = new TargetElement(coffee_counter, 0);
  
  const CustomerObj = new TargetElement(customer_counter, 0);
  
  const HoursOfWorkObj = new TargetElement(hoursofwork_counter, 0);
  
  function countUpTo(count, obj, delay) {
    obj.element.textContent = obj.start;
    if (obj.start < count) {
      obj.start++;
      setInterval(function () {
        countUpTo(count, obj, delay);
      }, delay);
    }
  }
  
  countUpTo(2500, CustomerObj, 50);
  
  countUpTo(1200, CoffeeObj, 50);
  
  countUpTo(685, HoursOfWorkObj, 50);
  
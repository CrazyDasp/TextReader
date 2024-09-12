const bookContent = document.querySelector(".book__content");

const fontSize = Array.from(document.querySelectorAll(".font-size"));

const bookControlBackground = document.querySelector(".book__control_background");
const backgroundColor = Array.from(bookControlBackground.querySelectorAll(".color"));

const bookControlColor = document.querySelector(".book__control_color");
const textColor = Array.from(bookControlColor.querySelectorAll(".color"));

function getTextColor(elem) {
  let result = elem.getAttribute("data-text-color");
  return result;
};

function getBackgroundColor(elem) {
  let result = elem.getAttribute("data-bg-color");
  return result;
};

function getSize(elem) {
  let result = elem.getAttribute("data-size");
  return result;
};

fontSize.forEach(element => {
  element.addEventListener("click", (event) => {
    
    fontSize.forEach(elem => {
      elem.classList.remove("font-size_active");
    });
    
    event.preventDefault();
    
    if (getSize(element) == "small") {
      bookContent.classList.remove("book_fs-big");
      bookContent.classList.add("book_fs-small");
      element.classList.add("font-size_active");
    } else if (getSize(element) == "big") {
      bookContent.classList.remove("book_fs-small");
      bookContent.classList.add("book_fs-big");
      element.classList.add("font-size_active");
    } else {
      bookContent.classList.remove("book_fs-big");
      bookContent.classList.remove("book_fs-small");
      element.classList.add("font-size_active");
    };   
  });
});

backgroundColor.forEach(element => {
  element.addEventListener("click", (event) => {
    
    backgroundColor.forEach(elem => {
      elem.classList.remove("color_active");
    });
    
    event.preventDefault();
    
    if (getBackgroundColor(element) == "gray") {
      bookContent.classList.remove("book_bg-black");
      bookContent.classList.remove("book_bg-white");
      bookContent.classList.add("book_bg-gray");
      element.classList.add("color_active");
    } else if (getBackgroundColor(element) == "white") {
      bookContent.classList.remove("book_bg-black");
      bookContent.classList.remove("book_bg-gray");
      bookContent.classList.add("book_bg-white");
      element.classList.add("color_active");
    } else {
      bookContent.classList.remove("book_bg-white");
      bookContent.classList.remove("book_bg-gray");
      bookContent.classList.add("book_bg-black");
      element.classList.add("color_active");
    };   
  });
});

textColor.forEach(element => {
  element.addEventListener("click", (event) => {
    
    textColor.forEach(elem => {
      elem.classList.remove("color_active");
    });
    
    event.preventDefault();
    
    if (getTextColor(element) == "gray") {
      bookContent.classList.remove("book_color-black");
      bookContent.classList.remove("book_color-whitesmoke");
      bookContent.classList.add("book_color-gray");
      element.classList.add("color_active")
    } else if (getTextColor(element) == "whitesmoke") {
      bookContent.classList.remove("book_color-black");
      bookContent.classList.remove("book_color-gray");
      bookContent.classList.add("book_color-whitesmoke");
      element.classList.add("color_active")
    } else {
      bookContent.classList.remove("book_color-whitesmoke");
      bookContent.classList.remove("book_color-gray");
      bookContent.classList.add("book_color-black");
      element.classList.add("color_active")
    };
  });
});
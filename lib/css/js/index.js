scrollingElement = (document.scrollingElement || document.body)

// jQuery
function scrollSmoothToBottom(id) {
  $(scrollingElement).animate({
    scrollTop: document.body.scrollHeight
  }, 1500);
}

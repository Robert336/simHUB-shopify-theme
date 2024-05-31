
// function for show/hiding the extra specs within Choose Your Rig section.
function changeContent(element) {
  const button = element; 
  const card = button.closest('.rig-card');
  const cardId = card.id;
  const mediaElement = card.querySelector('.card-media');
  const contentElement = document.getElementById('content-' + cardId);
  const specsElement = document.getElementById('extra-specs-' + cardId);

  // show/hide extra specs on button click
  if (specsElement.className.search('extra-specs--hidden') !== -1) {

    card.style.justifyContent = 'space-between';

    specsElement.className = 'extra-specs--show';
    contentElement.classList.add('rig-info--expanded');
    
    mediaElement.style.height = '10%';
    mediaElement.style.overflow = 'hidden';
    
    button.textContent = 'Show Less';
  } else {
    specsElement.className = 'extra-specs--hidden';
    card.style.justifyContent = '';
    
    mediaElement.style.height = '';
    mediaElement.style.overflow = '';

    button.textContent = 'Click to view specs';
  }

}
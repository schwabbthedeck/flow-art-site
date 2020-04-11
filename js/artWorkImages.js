// React component built not using JSX
// Easy to reuse for art components
const e = React.createElement;

class ArtWorkCard extends React.Component {
  render() {
    return e(
      'div', { className: "main-art-container" }, [
      e('div', { className: "image-container" },
        e('img', { "data-enlargable": "data-enlargable", src: this.props.photoPath, alt: this.props.description }, null)
      ),
      e('div', { className: "info-container" }, [
        e('h3', null, this.props.description),
        e('h5', null, this.props.size),
        e('h6', null, this.props.price)
      ])
    ]);
  }
}

// Find all DOM containers for art work cards
document.querySelectorAll('.artWorkCard')
  .forEach(domContainer => {
    const photoPath = domContainer.dataset.photopath;
    const description = domContainer.dataset.description;
    const size = domContainer.dataset.size;
    const price = domContainer.dataset.price;
    ReactDOM.render(
      e(ArtWorkCard, { photoPath: photoPath, description: description, size: size, price: price }),
      domContainer
    );
  });

// Code to enlarge image to viewport on clicking
// Source: https://stackoverflow.com/questions/18545077/image-fullscreen-on-click
$('img[data-enlargable]').addClass('img-enlargable').click(function () {
  var src = $(this).attr('src');
  var modal;
  function removeModal() { modal.remove(); $('body').off('keyup.modal-close'); }
  modal = $('<div>').css({
    background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
    backgroundSize: 'contain',
    width: '100%', height: '100%',
    position: 'fixed',
    zIndex: '10000',
    top: '0', left: '0',
    cursor: 'zoom-out'
  }).click(function () {
    removeModal();
  }).appendTo('body');
  //handling ESC
  $('body').on('keyup.modal-close', function (e) {
    if (e.key === 'Escape') { removeModal(); }
  });
});
var containerEl = document.querySelector('#mixitup-container');
var mixer = mixitup(containerEl, {
  selectors: {
    target: '.item',
    control: '[data-mixitup-control]'
  },
  callbacks: {
    onMixClick: function(state, originalEvent) {
      document.getElementById('report').innerHTML = 'Control: <b>' + this.innerText + '</b> was clicked.';
    }
  }
});
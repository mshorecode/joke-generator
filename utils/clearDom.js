const clearDom = () => {
  document.querySelector('#joke-setup').innerHTML = '';
  document.querySelector('#joke-delivery').innerHTML = '';
  document.querySelector('#joke-btn').innerHTML = '';
  document.querySelector('#punchline-btn').innerHTML = '';
  document.querySelector('#reset-btn').innerHTML = '';
};

export default clearDom;

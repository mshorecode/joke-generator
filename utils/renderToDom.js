const renderToDom = (divId, html) => {
  const div = document.querySelector(divId);
  div.innerHTML = html;
};

export default renderToDom;

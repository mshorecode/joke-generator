import renderToDom from '../utils/renderToDom';

const showSetup = (response) => {
  const setup = `<p>${response.setup}</p>`;

  renderToDom('#joke-setup', setup);
};

const showDelivery = (response) => {
  const delivery = `<p>${response.delivery}</p>`;

  renderToDom('#joke-delivery', delivery);
};

export { showSetup, showDelivery };

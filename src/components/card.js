class Card {
  constructor(data, templateSelector) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._href = data.href;
    this._title = data.title;
    this._type = data.type;
    this._model = data.model;
    this._brand = data.make;
    this._price = data.price_currency + " " + data.price;
    this._year = data.year;
    this._mileage = data.mileage;
    this._mileageMeasure = " " + data.mileage_measure;
    this._axleconfig = data.axle_configuration;
    this._power = data.power;
    this._powerMeasure = " " + data.power_measure;
    this._payload = data.payload;
    this._grossweight = data.gross_weight;
    this._imgname = data.image;
    this._imgalt = data.title;
    this._src = require(`../img/${this._imgname}`);
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".cards__item")
      .cloneNode(true);
    return cardElement;
  }

  _checkText(param, measure, paramText) {
    if (param) {
      this._param = `${paramText} ${param}${measure}. `;
      this._descriptionEl.append(this._param);
    }
  }

  _checkParams(param, measure) {
    if (param) {
      this._paramItem = document.createElement("li");
      this._paramItem.className = "cards__params-item";
      this._paramItem.textContent = param + measure;
      this._paramsList.append(this._paramItem);
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._imageEl = this._element.querySelector(".cards__img");
    this._imageEl.alt = this._imgalt;
    this._imageEl.src = this._src;
    this._titleEl = this._element.querySelector(".cards__title");
    this._titleEl.textContent = this._title;
    this._descriptionEl = this._element.querySelector(".cards__description");
    this._checkText(this._type, "", "Type:");
    this._checkText(this._model, "", "Model:");
    this._checkText(this._brand, "", "Brand:");
    this._checkText(
      this._mileage,
      this._mileageMeasure,
      "This vehicle mileage is "
    );
    this._paramsList = this._element.querySelector(".cards__params");
    this._checkParams(this._year, "");
    this._checkParams(this._axleconfig, "");
    this._checkParams(this._power, this._powerMeasure);
    this._checkParams(this._payload, "");
    this._checkParams(this._grossweight, "");
    this._linkEl = this._element.querySelector(".cards__link");
    this._linkEl.href = this._href;
    this._element.querySelector(".cards__price").textContent = this._price;
    return this._element;
  }
}

export { Card };

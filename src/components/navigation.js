class Navigation {
    constructor(data, templateSelector, itemSelector,linkSelector)
    {
        this._data = data;
        this._templateSelector = templateSelector;
        this._itemSelector = itemSelector;
        this._linkSelector = linkSelector;
        this._text = data.text;
        this._href = data.href;
    }


    _getTemplate() {
        const navElement = document
          .querySelector(this._templateSelector)
          .content.querySelector(this._itemSelector)
          .cloneNode(true);
        return navElement;
    }

    generateNavItem() {
        this._element = this._getTemplate();
        this._navLink = this._element.querySelector(this._linkSelector);
        this._navLink.textContent = this._text;
        this._navLink.href = this._href;
        return this._element;
    }
}

export { Navigation };
class Dot {
    constructor (parent) {
        this._isActive = true;
        if (parent) {
            this._element = document.createElement('div');
            this._element.classList.add('dot');
            this._parent = parent;
            this._parent.appendChild(this._element);
            this.relocate()
            this._radius = this._element.offsetWidth / 2;
        }
    }

    relocate () {
        this._position = {
            x: Math.random() * (this._parent.offsetWidth - 24),
            y: Math.random() * (this._parent.offsetHeight - 24)
        };
        this._element.style.bottom = `${this._position.y}px`;
        this._element.style.left = `${this._position.x}px`;
    }

    isTouchingCar (car) {
        const center = {
            x: this._position.x + this._radius,
            y: this._position.y + this._radius
        }
        for (const corner of car.corners) {
            if ((this._radius ** 2) >= ((center.x - corner.x) ** 2) + ((center.y - corner.y) ** 2)) {
                return true;
            }
        }
        return false;
    }
}

export default Dot
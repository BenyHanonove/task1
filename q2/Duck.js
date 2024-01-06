class Duck{
    constructor(_name, _color, _age, _weight, _image ,_quackSound) {
        this.name = _name;
        this.color = _color;
        this.age = _age;
        this.weight = _weight;
        this.image = _image;
        this.quackSound = _quackSound;
        this.audio = new Audio(this.quackSound);
    }

    show(){
        return `<h2>${this.name}</h2>` + 
        `<p>${this.color}</p>` + 
        `<p>${this.age}</p>` + 
        `<p>${this.weight}</p>` +
        `<img src="${this.image}" alt="${this.name}'s image" width="80" height="80"/>`;
    }

    quack(){
        const num = parseInt((this.weight * this.age) / 2);
        let quackString = '<p>';
            for (let i = 0; i < num; i++) {
                quackString += 'quack ';
                }
            quackString += "</p>";

            const playSound = (count) => {
                if (count <= 0) return;
                this.audio.play();
                setTimeout(() => {
                    playSound(count - 1);
                }, 1500);
            };
        
            playSound(3);


            return quackString;                
    }
}

window.Duck = Duck;

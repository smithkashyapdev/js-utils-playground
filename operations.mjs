class Animal {
    eat = () => {
        console.log('eating')
    }
}

class Bird extends Animal {
    fly = () => {
        console.log('flying')
    }
}

class SeaAnimal extends Animal {
    swim = () => {
        console.log('swim')
    }
}


const animal = new Animal()
const bird = new Bird()
const seaAnimal = new SeaAnimal()

animal.eat()
bird.eat()
bird.fly()
seaAnimal.swim()
animal.__proto__.b = 4
console.log(Object.getPrototypeOf(seaAnimal.__proto__.__proto__.__proto__) === null)


function isInstanceOf(object, baseObject) {
    let extracted = Object.getPrototypeOf(object)
    const baseProto =
    typeof baseObject === "function" ? baseObject.prototype : baseObject;
    while(extracted) {
        if(extracted === baseProto) {
            return true
        }
        extracted = Object.getPrototypeOf(extracted)
    }

    return false
}

console.log(isInstanceOf(seaAnimal, null))
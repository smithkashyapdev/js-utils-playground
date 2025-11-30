import { HashSet } from "./utils/ds/HashSetStore.js"

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
    while (extracted) {
        if (extracted === baseProto) {
            return true
        }
        extracted = Object.getPrototypeOf(extracted)
    }

    return false
}

console.log(isInstanceOf(seaAnimal, null))


const mhash = new HashSet()
mhash.set("1", "smith")
console.log(mhash.get("1"))

const set = new WeakSet()

class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}


const node1 = new Node("1")

const node2 = new Node("2")

const node3 = new Node("3")

node1.next = node2
node2.next = node3
node3.next = node1

let currentNode = node1

while (currentNode) {
    let next = currentNode.next
    if (!set.has(currentNode)) {
        set.add(currentNode)
        if (set.has(next)) {
            currentNode.next = null
        }
        currentNode = next
    } else {
        currentNode = null
    }

}

currentNode = node1

while (currentNode) {
    console.log(currentNode.value)
    currentNode = currentNode.next
}

const complexArray = [
    100,
    "start",
    [1, 2, 3],
    { title: "Nested Object", tags: ["js", "dom"] },
    () => console.log("Inside function"),
    [
        "deep",
        99,
        [() => console.log("Deep function"), "deepest", { level: 3 }]
    ]
];

Array.prototype.filterComplexArray = function (cb) {
   
    const array = this

    const filter = (array, test)=>{
        const filterResult = []
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if(Array.isArray(element)) {
                const res = filter(element, test)
                filterResult.push(res)
            } else {
                if(test(element)) {
                    filterResult.push(element)
                }
            }
        }

        return filterResult
    }

    return filter(array, cb)
}

const result = complexArray.filterComplexArray((item) => {
    if(typeof item === "string") {
        return true
    }
    return false
})

console.log(result)
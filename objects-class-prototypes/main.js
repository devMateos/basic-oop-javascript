// Objetos literales
const antonio = {
    name: 'Antonio',
    age: 28,
    knownTechnologies: [
        'HTML',
        'CSS',
        'JavaScript'
    ],
    learnTechnology(newTechnology) {
        this.knownTechnologies.push(newTechnology);
    }
};

antonio.knownTechnologies.push('Vue');

// Prototipos
function Developer(name, age, knownTechnologies) {
    this.name = name;
    this.age = age;
    this.knownTechnologies = knownTechnologies;
}

// Los métodos se pueden crear dentro o fuera de la función constructora, pero es recomendable hacerlo fuera, de la siguiente forma, ya que de lo contrario todas las instancias de este prototipo heredarían esa función, algo que funcionaría al rendimiento
Developer.prototype.learnTechnology = function (newTechnology) {
    this.knownTechnologies.push(newTechnology);
}

const juanita = new Developer(
    'Juanita',
    25,
    [
        'PHP',
        'Laravel',
    ]
)

// Prototipos con la sintaxis de clases
// En ES2016, ahora podemos usar la palabra clave Class , así como los métodos mencionados anteriormente para manipular el prototype. Las clases de JavaScript son atractivas para los desarrolladores con experiencia en programación orientada a objetos, pero esencialmente hace lo mismo que el anterior.
class Developer2 {
    constructor({
        name,
        age,
        knownTechnologies = [],
        email,
    }) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.knownTechnologies = knownTechnologies;
    }

    learnTechnology(newTechnology) {
        this.knownTechnologies.push(newTechnology);
    }
}

const miguel = new Developer2({
    name: 'Miguel',
    email: 'miguelito@email.com',
    age: 28,
})
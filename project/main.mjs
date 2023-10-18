function videoPlay(id) {
    const secretURL = 'https://platzi.com/' + id;
    console.log('Se está reproduciendo desde la url: ' + secretURL);
}
function videoStop(id) {
    const secretURL = 'https://platzi.com/' + id;
    console.log('Pausamos la url: ' + secretURL);
}

export class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    play() {
        videoPlay(this.videoID);
    }
    pause() {
        videoStop(this.videoID);
    }
}

// COURSES
class Course {
    constructor({
        name,
        professor,
        classes = [],
    }) {
        this._name = name;
        this.professor = professor;
        this.classes = classes;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombre) {
        if (nuevoNombre.includes("malo")) {
            alert("Ese nombre no es válido");
        } else {
            this._name = nuevoNombre;
        }
    }
}

const basicProgrammingCourse = new Course({
    name: 'Curso Gratis de Programación Básica',
    professor: 'Freddy Vega',
    classes: [],
})
const HTMLCSSCourse = new Course({
    name: 'Curso de HTML y CSS',
    professor: 'Estefany Aguilar',
    classes: [],
})
const javascriptCourse = new Course({
    name: 'Curso de JavaScript',
    professor: 'Daniel De Granda',
    classes: [],
})
const dataBusinessCourse = new Course({
    name: 'Curso de Data Business',
    professor: 'Luis Novelo',
    classes: [],
})
const pythonCourse = new Course({
    name: 'Curso de Python',
    professor: 'Carlos Alarcón',
    classes: [],
})
const csCourse = new Course({
    name: 'Curso de C#',
    professor: 'Miguel Teheran',
    classes: [],
})
const unityCourse = new Course({
    name: 'Curso de Unity',
    professor: 'Ruth Margarita García',
    classes: [],
})

// LEARNING PATHS
class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const webDevelopmentSchool = new LearningPath({
    name: 'Escuela de Desarrollo Web',
    courses: [
        basicProgrammingCourse,
        HTMLCSSCourse,
        javascriptCourse,
    ]
})
const dataScienceSchool = new LearningPath({
    name: 'Escuela de Data Science',
    courses: [
        basicProgrammingCourse,
        dataBusinessCourse,
        pythonCourse,
    ]
})
const videogameSchool = new LearningPath({
    name: 'Escuela de Videojuegos',
    courses: [
        basicProgrammingCourse,
        csCourse,
        unityCourse,
    ]
})

// STUDENT
class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPath = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses = approvedCourses;
        this.learningPath = learningPath;
    }
}

const juan = new Student({
    name: 'Juan',
    username: 'juanito',
    email: 'juanito@email.com',
    twitter: 'juan_ito',
})
const miguel = new Student({
    name: 'Miguel',
    username: 'miguelito',
    email: 'miguelito@email.com',
    twitter: 'miguel_ito',
})
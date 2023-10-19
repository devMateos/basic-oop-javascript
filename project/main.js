class Comment {
    constructor({
        content,
        studentName,
        studentRole = 'student',
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publish() {
        console.log(`${this.studentName} (${this.studentRole})`);
        console.log(`${this.likes} likes`);
        console.log(this.content);
    }
}



function videoPlay(id) {
    const secretURL = 'https://platzi.com/' + id;
    console.log('Se está reproduciendo desde la url: ' + secretURL);
}
function videoStop(id) {
    const secretURL = 'https://platzi.com/' + id;
    console.log('Pausamos la url: ' + secretURL);
}

class PlatziClass {
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
        teacher,
        classes = [],
        isFree = false,
        lang = 'spanish',
    }) {
        this._name = name;
        this.teacher = teacher;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
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
    teacher: 'Freddy Vega',
    isFree: true,
})
const HTMLCSSCourse = new Course({
    name: 'Curso de HTML y CSS',
    teacher: 'Estefany Aguilar',
    lang: 'english',
})
const javascriptCourse = new Course({
    name: 'Curso de JavaScript',
    teacher: 'Daniel De Granda',
})
const dataBusinessCourse = new Course({
    name: 'Curso de Data Business',
    teacher: 'Luis Novelo',
})
const pythonCourse = new Course({
    name: 'Curso de Python',
    teacher: 'Carlos Alarcón',
})
const csCourse = new Course({
    name: 'Curso de C#',
    teacher: 'Miguel Teheran',
})
const unityCourse = new Course({
    name: 'Curso de Unity',
    teacher: 'Ruth Margarita García',
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

    publishComment(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publish();
    }
}

class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`Lo sentimos, ${this.name}, solo puedes tomar cursos gratuitos`);
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        if (newCourse.lang !== 'english') {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`Lo sentimos, ${this.name}, con tu suscripción no puedes tomar cursos en inglés`);
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publishComment(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: 'teacher',
        });
        comment.publish();
    }
}



const juan = new FreeStudent({
    name: 'Juan',
    username: 'juanito',
    email: 'juanito@email.com',
    twitter: 'juan_ito',
})

const miguel = new BasicStudent({
    name: 'Miguel',
    username: 'miguelito',
    email: 'miguelito@email.com',
    twitter: 'miguel_ito',
})

const freddy = new TeacherStudent({
    name: 'Freddy Vega',
    username: 'freddier',
    email: 'freddier@email.com',
    twitter: 'freddier',
})
// Parent Class
class School {
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name(){
        return this._name
    }

    get level(){
        return this._level
    }

    get numberOfStudents(){
        return this._numberOfStudents
    }

    set numberOfStudents(newNumberOfStudents){

        if (typeof(newNumberOfStudents) === 'number') {
            this._numberOfStudents = newNumberOfStudents
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
    }

    quickFacts(){
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }

    static pickSubstituteTeacher(substituteTeachers){
        let idx = Math.floor(Math.random() * substituteTeachers.length)

        return substituteTeachers[idx]
    }
}


class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy, level="primary"){
        super(name, level, numberOfStudents);
        this._pickupPolicy = pickupPolicy
    }

    get pickupPolicy(){
        return this._pickupPolicy
    }
}


class MiddleSchool extends School {
    constructor(name, numberOfStudents, level="middle"){
        super(name, level, numberOfStudents);
    }
}


class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams, level="high"){
        super(name, level, numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams(){

        this._sportsTeams.forEach(sport => console.log(sport))
    }
}



// Test Class Functionality
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 'primary', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

console.log(lorraineHansbury);
lorraineHansbury.quickFacts()
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))


console.log("\n======================\n")

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
console.log(alSmith)
alSmith.sportsTeams

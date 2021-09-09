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


class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy, level="primary"){
        super(name, level, numberOfStudents);
        this._pickupPolicy = pickupPolicy
    }

    get pickupPolicy(){
        return this._pickupPolicy
    }
}


class Middle extends School {
    constructor(name, numberOfStudents, level="middle"){
        super(name, level, numberOfStudents);
    }
}


class High extends School {
    constructor(name, numberOfStudents, sportsTeams, level="high"){
        super(name, level, numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams(){

        this._sportsTeams.forEach(sport => console.log(sport))
    }
}


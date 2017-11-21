class Email {
    constructor(email) {
        if (this.validateMail(email)) {
            this.email = email;
        }
        else {
            throw new Error('Incorrect Email Format');
        }
    }
    validateMail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(this.email);
    }
}

class Invitation {
    constructor(toPerson, message) {
        this.message = message;
        this.toPerson = toPerson;
    }
    sendInvitation() {
        let inviteMessage = 'hello ' + this.toPerson + ', please come to my office';
    }
}

class Person {
    constructor(firstName, surname, email, age, phoneNumber) {
        this.email = email;
        this.firstName = firstName;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
    }
    greet() {
        return 'Hello';
    }
}

class Lecturer extends Person {
    constructor(firstName, surname, email, age, phoneNumber, course) {
        super(firstName, surname, email, age, phoneNumber);
        this.course = course;
    }
    callForStudents() {
        return 'All students are to converge for a meeting in the lecture hall';
    }
    greet() {
        return 'Hello Class';
    }
}

class HeadOfDepartment extends Person {
    constructor(firstName, surname, email, age, phoneNumber, department) {
        super(firstName, surname, email, age, phoneNumber);
        this.department = department;
    }
    callStaffMeeting() {
        return 'All lecturers are to converge for a staff meeting in the conference room';
    }

    inviteStaff(lecturer, message) {
        let invitation = new Invitation(lecturer.firstName, message);
        return invitation;
    }
}



export {
    Email,
    Invitation,
    Person,
    Lecturer,
    HeadOfDepartment
}
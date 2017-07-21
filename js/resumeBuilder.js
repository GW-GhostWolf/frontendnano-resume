var bio = {
    "name": "Michael Kneeland",
    "role": "Developer - Web specialist",
    "welcomeMessage": "Howdy. Welcome to my 5th project for Udacity's Web Front End Web Developer Nanodegree",
    "biopic": "images/fry.jpg",
    "contacts": {
        "mobile": "123-456-7890",
        "email": "you.dont.get@that.com",
        "github": "somethingIdontRemember",
        "twitter": "",
        "location": "San Antonio, Texas",
    },
    "skills": ["C#", "ECMA", "TypeScript", "Angular", "HTML5"],
    "display": function () {
        // top header information - name and role
        var header = $("#header");
        header.prepend(HTMLheaderRole.replace("%data%", this.role));
        header.prepend(HTMLheaderName.replace("%data%", this.name));

        // contacts in header
        var topContacts = $("#topContacts");
        topContacts.append(HTMLcontactGeneric.replace("%contact%", "Cell").replace("%data%", this.contacts.mobile));
        topContacts.append(HTMLcontactGeneric.replace("%contact%", "Email").replace("%data%", this.contacts.email));
        topContacts.append(HTMLcontactGeneric.replace("%contact%", "GitHub").replace("%data%", this.contacts.github));
        if (this.contacts.twitter) {
            topContacts.append(HTMLcontactGeneric.replace("%contact%", "Twitter").replace("%data%", this.contacts.twitter));
        }
        topContacts.append(HTMLcontactGeneric.replace("%contact%", "Location").replace("%data%", this.contacts.location));
        // contacts in footer
        var bottomContacts = $("#footerContacts");
        bottomContacts.append(HTMLcontactGeneric.replace("%contact%", "Cell").replace("%data%", this.contacts.mobile));
        bottomContacts.append(HTMLcontactGeneric.replace("%contact%", "Email").replace("%data%", this.contacts.email));
        bottomContacts.append(HTMLcontactGeneric.replace("%contact%", "GitHub").replace("%data%", this.contacts.github));
        if (this.contacts.twitter) {
            bottomContacts.append(HTMLcontactGeneric.replace("%contact%", "Twitter").replace("%data%", this.contacts.twitter));
        }
        bottomContacts.append(HTMLcontactGeneric.replace("%contact%", "Location").replace("%data%", this.contacts.location));

        // other header information - picture, welcome, skills
        header.append(HTMLbioPic.replace("%data%", this.biopic));
        header.append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));

        // only show skills if it is truthy and length > 0
        if (this.skills && this.skills.length > 0) {
            header.append(HTMLskillsStart);
            var skills = $("#skills");
            this.skills.forEach((skill) => {
                skills.append(HTMLskills.replace("%data%", skill));
            });
        }
    } // display
}; // bio

var education = {
    "schools": [
        { "name": "Baylor", "location": "Waco, TX", "degree": "BS", "dates": "2000-2001", "url": "http://www.baylor.edu", "majors": ["Computer Science"] },
        { "name": "UTSA", "location": "San Antonio, TX", "degree": "BS", "dates": "2001-2003", "url": "http://www.utsa.edu", "majors": ["Math", "Statistics"] }
    ],
    "onlineCourses": [
        { "title": "Intro JavaScript", "school": "Udacity", "dates": "Jun 2017", "url": "http://www.udacity.com/" }
    ],
    "display": function () {
        var ed = $("#education");
        this.schools.forEach((school) => {
            var edEntry = $(HTMLschoolStart);
            edEntry.append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));
            edEntry.append(HTMLschoolDates.replace("%data%", school.dates));
            edEntry.append(HTMLschoolLocation.replace("%data%", school.location));
            edEntry.append(HTMLschoolMajor.replace("%data%", school.majors.join(", ")));
            ed.append(edEntry);
        });
        ed.append(HTMLonlineClasses);
        this.onlineCourses.forEach((course) => {
            var edEntry = $(HTMLschoolStart);
            edEntry.append(HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school));
            edEntry.append(HTMLonlineDates.replace("%data%", course.dates));
            edEntry.append(HTMLonlineURL.replace("%data%", course.url));
            ed.append(edEntry);
        });
    } // display
}; // education

var work = {
    "jobs": [
        { "employer": "", "title": "", "location": "", "dates": "", "description": "" }
    ],
    "display": function () {
        var exp = $("#workExperience");
    } // display
}; // work

var projects = {
    projects: [
        { "title": "", "dates": "", "description": "", "images": [""] }
    ],
    "display": function () {
        var proj = $("#projects");

    } // display
}; // projects

bio.display();
education.display();
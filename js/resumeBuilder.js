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

        // contacts in header and footer
        var topContacts = $("#topContacts");
        var bottomContacts = $("#footerContacts");
        var contact = undefined;
        function HTMLcontact(key, value) {
            return value ? HTMLcontactGeneric.replace("%contact%", key).replace("%data%", value) : undefined;
        }

        contact = HTMLcontact("Cell", this.contacts.mobile);
        topContacts.append(contact);
        bottomContacts.append(contact);
        contact = HTMLcontact("Email", this.contacts.email);
        topContacts.append(contact);
        bottomContacts.append(contact);
        contact = HTMLcontact("GitHub", this.contacts.github);
        topContacts.append(contact);
        bottomContacts.append(contact);
        contact = HTMLcontact("Twitter", this.contacts.twitter);
        topContacts.append(contact);
        bottomContacts.append(contact);
        contact = HTMLcontact("Location", this.contacts.location);
        topContacts.append(contact);
        bottomContacts.append(contact);

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
        { "name": "Baylor", "location": "Waco, TX", "degree": "BS", "dates": "2010-2011", "url": "http://www.baylor.edu", "majors": ["Computer Science"] },
        { "name": "UTSA", "location": "San Antonio, TX", "degree": "BS", "dates": "2011-2013", "url": "http://www.utsa.edu", "majors": ["Math", "Statistics"] }
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
        { "employer": "AT&T", "title": "Senior Web Developer", "location": "Naples, FL", "dates": "2014-current", "description": "Lead web developer on team of 7" }
    ],
    "display": function () {
        var exp = $("#workExperience");
        this.jobs.forEach((job) => {
            var workEntry = $(HTMLworkStart);
            workEntry.append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));
            workEntry.append(HTMLworkDates.replace("%data%", job.dates));
            workEntry.append(HTMLworkLocation.replace("%data%", job.location));
            workEntry.append(HTMLworkDescription.replace("%data%", job.description));
            exp.append(workEntry);
        });
    } // display
}; // work

var projects = {
    projects: [
        { "title": "APE", "dates": "2014 - 2016", "description": "Agent Profile single point of data entry", "images": ["https://www.mindtools.com/media/Diagrams/Flow-Charts-Figure-5.jpg", "http://artcuratorforkids.com/wp-content/uploads/2015/02/IMG_1956.jpg"] }
    ],
    "display": function () {
        var proj = $("#projects");
        this.projects.forEach((project) => {
            var projEntry = $(HTMLprojectStart);
            projEntry.append(HTMLprojectTitle.replace("%data%", project.title));
            projEntry.append(HTMLprojectDates.replace("%data%", project.dates));
            projEntry.append(HTMLprojectDescription.replace("%data%", project.description));
            project.images.forEach((img) => {
                projEntry.append(HTMLprojectImage.replace("%data%", img));
            });
            proj.append(projEntry);
        });
    } // display
}; // projects

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

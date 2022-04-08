const itSchool = {
    // свойства
    name: "Simple Online School",
    description: "Simple online school description",
    maxGroupCount: 5,
    maxStudentsCountPerGroup: 12,
    availableCourses: ["Front-end Basic", "Front-end Pro"],
    startedGroups: [],
    __callbacks: {},
    startLearningGroup(courseName, amountOfStudents) {
        if (this.availableCourses.includes(courseName)) {
            if (amountOfStudents <= this.maxStudentsCountPerGroup) {
                if (!this.startedGroups.some((startedGroup) => startedGroup.courseName === courseName)) {
                    this.startedGroups.push({courseName, amountOfStudents});
                    this.dispatch("GROUP_STARTED", courseName);   
                } else {
                    this.dispatch("GROUP_ALREADY_STARTED", courseName);
                }
            } else {
                this.dispatch("AMOUNT_OF_STUDENTS", amountOfStudents);
            }
        } else {
            this.dispatch("NOT_SUPPORTED_COURSE", courseName); 
        }
    },
    endLearningGroup(courseName) {
        if (this.startedGroups.some((startedGroup) => startedGroup.courseName === courseName)) {
            this.startedGroups = this.startedGroups.filter((startedGroup) => startedGroup.courseName !== courseName);
            this.dispatch("GROUP_ENDED", courseName);           
        } else {
            this.dispatch("NOT_EXISTING_GROUP"); 
        }
    },
    on(eventName, callback) {
        this.__callbacks[eventName] = callback;   
    },
    dispatch(eventName, data) {
        this.__callbacks[eventName] && this.__callbacks[eventName](data);
    }
};
itSchool.on(
    "GROUP_STARTED",
    (courseName) => console.log(`~~~ Started ${courseName} group! ~~~`),
);
itSchool.on(
    "GROUP_ENDED",
    (courseName) => console.log(`~~~ Group with ${courseName} successfully finished! ~~~`),
);
itSchool.on(
    "AMOUNT_OF_STUDENTS",
    (amountOfStudents) => console.log(`~~~ We not supported ${amountOfStudents} amount of students. ~~~`),
);
itSchool.on(
    "GROUP_ALREADY_STARTED",
    (courseName) => console.log(`~~~ Group with ${courseName} course already started. ~~~`),
);
itSchool.on(
    "NOT_SUPPORTED_COURSE",
    (courseName) => console.log(`~~~ Sorry, course ${courseName} not supported yet. ~~~`),
);
itSchool.on(
    "NOT_EXISTING_GROUP",
    console.log(`~~~ You are trying to finish not existing learning group! ~~~`),
);

itSchool.startLearningGroup("Front-end Pro", 10);
itSchool.startLearningGroup("Front-end Basic", 13);
itSchool.startLearningGroup("Python Basic", 6);
itSchool.endLearningGroup("Front-end Pro");
itSchool.endLearningGroup("Python Basic");
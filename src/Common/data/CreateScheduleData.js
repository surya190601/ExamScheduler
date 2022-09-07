export const CreateScheduleData = [
    {
        branch: 'B.E',
        department: 'EEE',
        semester: '1',
        examType: 'Model',
        fnFrom: { hour: '9', minute: '30', AMOrPM: 'AM' },
        fnTo: { hour: '12', minute: '30', AMOrPM: 'AM' },
        anFrom: {
            hour: '1',
            minute: '30',
            AMOrPM: 'PM',
        },
        anTo: { hour: '3', minute: '30', AMOrPM: 'PM' },
        subjectsCount: '5',
        labsCount: '2',
        subjectDetails: [
            {
                code: '19QSA011',
                name: 'Measurement and Instrumentation',
                date: '2022-08-22',
                isNoon: false,
            },
            {
                code: '19HSM002',
                name: 'Electrical Machines',
                isNoon: false,
                date: '2022-08-24',
            },
            {
                code: '19ASR008',
                name: 'Power Systems',
                isNoon: false,
                date: '2022-08-26',
            },
            {
                code: '19CTR105',
                name: 'Microcontrollers',
                isNoon: false,
                date: '2022-08-29',
            },
            {
                code: '19MNS202',
                name: 'Control Systems',
                isNoon: false,
                date: '2022-08-31',
            },
        ],
        labDetails: [
            {
                code: '19QSA011',
                name: 'Measurement and Instrumentation',
                isNoon: true,
                date: '2022-08-05',
            },
            {
                code: '19HSM002',
                name: 'Electrical Machines',
                isNoon: true,
                date: '2022-08-07',
            },
        ],
        createdTime: "01/08/2022 11:00AM",
        isAlloted: false
    },
    {
        branch: 'B.Tech',
        department: 'IT',
        semester: '3',
        examType: 'Semester',
        fnFrom: { hour: '9', minute: '30', AMOrPM: 'AM' },
        fnTo: { hour: '12', minute: '30', AMOrPM: 'AM' },
        anFrom: {
            hour: '1',
            minute: '30',
            AMOrPM: 'PM',
        },
        anTo: { hour: '3', minute: '30', AMOrPM: 'PM' },
        subjectsCount: '5',
        labsCount: '2',
        subjectDetails: [
            {
                code: '19QSA011',
                name: 'Measurement and Instrumentation',
                date: '2022-08-22',
                isNoon: false,
            },
            {
                code: '19HSM002',
                name: 'Electrical Machines',
                isNoon: false,
                date: '2022-08-24',
            },
            {
                code: '19ASR008',
                name: 'Power Systems',
                isNoon: false,
                date: '2022-08-26',
            },
            {
                code: '19CTR105',
                name: 'Microcontrollers',
                isNoon: false,
                date: '2022-08-29',
            },
            {
                code: '19MNS202',
                name: 'Control Systems',
                isNoon: false,
                date: '2022-08-31',
            },
        ],
        labDetails: [
            {
                code: '19QSA011',
                name: 'Measurement and Instrumentation',
                isNoon: true,
                date: '2022-08-05',
            },
            {
                code: '19HSM002',
                name: 'Electrical Machines',
                isNoon: true,
                date: '2022-08-07',
            },
        ],
        createdTime: "01/08/2022 11:00AM",
        isAlloted: true
    },
]

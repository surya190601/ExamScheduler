export const FormData = {
    branchanddep: [
      {
        branch: "B.E",
        deps: ["ECE", "EEE", "MECH"],
      },
      {
        branch: "B.TECH",
        deps: ["IT", "CSE"],
      },
    ],
    semester: {
      EEE: [
        {
          exam: "Internals",
          subjects: {
            subjectcode: [
              "19QSA011",
              "19HSM002",
              "19ASR008",
              "19CTR105",
              "19MNS202",
            ],
            subjectname: [
              "Measurement and Instrumentation",
              "Electrical Machines",
              "Power Systems",
              "Microcontrollers",
              "Control Systems",
            ],
          },
          labs: {
            labcode: ["19QSA011", "19HSM002"],
            labname: ["Measurement and Instrumentation", "Electrical Machines"],
          },
        },
  
        {
          exam: "Model",
          subjects: {
            subjectcode: [
              "19QSA011M",
              "19HSM002M",
              "19ASR008M",
              "19CTR105M",
              "19MNS202M",
            ],
            subjectname: [
              "Measurement and InstrumentationMod",
              "Electrical MachinesMod",
              "Power SystemsMod",
              "MicrocontrollersMod",
              "Control SystemsMod",
            ],
          },
          labs: {
            labcode: ["19QSA011M", "19HSM002M"],
            labname: ["Measurement and InstrumentationM", "Electrical MachinesM"],
          },
        },
      ],
    },
  };
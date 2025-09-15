const employees = [ 
  {
    id: "emp001",
    firstName: "Aarav",
    email: "r@r.com",
    password: "123",
    taskNumber: 3,
    taskStats: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        title: "Prepare weekly report",
        description: "Summarize the team's progress for the week.",
        taskDate: "2025-05-25",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client follow-up",
        description: "Email client for feedback on recent delivery.",
        taskDate: "2025-05-28",
        category: "Communication",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix bug #342",
        description: "Resolve login issue affecting some users.",
        taskDate: "2025-05-20",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: "emp002",
    firstName: "Ishita",
    email: "employee2@example.com",
    password: "123",
    taskNumber: 4,
    taskStats: { active: 2, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        title: "Update user guide",
        description: "Revise the product documentation for version 2.0.",
        taskDate: "2025-05-29",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Data backup",
        description: "Ensure database backup is running daily.",
        taskDate: "2025-05-30",
        category: "IT",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Team training session",
        description: "Organize a session on new software features.",
        taskDate: "2025-05-22",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "System check",
        description: "Run diagnostics on all company machines.",
        taskDate: "2025-05-27",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: "emp003",
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskNumber: 3,
    taskStats: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        title: "Create marketing poster",
        description: "Design a poster for the new product launch.",
        taskDate: "2025-05-26",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Check competitor pricing",
        description: "Research market trends and pricing structures.",
        taskDate: "2025-05-24",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Social media campaign",
        description: "Plan and schedule posts for the next month.",
        taskDate: "2025-05-30",
        category: "Social Media",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: "emp004",
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskNumber: 4,
    taskStats: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        title: "Revise onboarding materials",
        description: "Update the employee onboarding guide.",
        taskDate: "2025-05-23",
        category: "HR",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Interview candidates",
        description: "Conduct interviews for developer roles.",
        taskDate: "2025-05-28",
        category: "Recruitment",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Send performance reviews",
        description: "Email the finalized review reports.",
        taskDate: "2025-05-20",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Prepare policy update",
        description: "Draft new company leave policy proposal.",
        taskDate: "2025-05-31",
        category: "Policy",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: "emp005",
    firstName: "Kabir",
    email: "employee5@example.com",
    password: "123",
    taskNumber: 5,
    taskStats: { active: 3, newTask: 2, completed: 1, failed: 1 },
    tasks: [
      {
        title: "Fix UI bugs",
        description: "Resolve front-end issues on the dashboard.",
        taskDate: "2025-05-27",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Deploy new build",
        description: "Push the latest app version to production.",
        taskDate: "2025-05-29",
        category: "DevOps",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Refactor codebase",
        description: "Improve code structure and eliminate redundancy.",
        taskDate: "2025-05-24",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Run unit tests",
        description: "Ensure full test coverage of new modules.",
        taskDate: "2025-05-30",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Code review",
        description: "Review pull requests from the junior team.",
        taskDate: "2025-05-23",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];


const admins = [
  {
    id: "admin001",
     
    email: "admin@example.com",
    password: "123"
  }
];
export const setLocalStorage = () => {
    localStorage.setItem("employees"/* es name se data save hoga */, JSON.stringify(employees)); //json.stringify() is used to convert the array into a string before saving it in localStorage
    localStorage.setItem("admins", JSON.stringify(admins));
    

}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    //console.log(JSON.parse(employees)) 
    //               //JSON.parse() is used to convert the string back into an array
    const admins = JSON.parse(localStorage.getItem("admins"));
    return{employees,admins};
    


}


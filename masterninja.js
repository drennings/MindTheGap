var masterninja;


masterninja = {
  "dimensions": [{
    "name": "Coordination",
    "linkid": "test",
    "description": "dim desc",
    "subcategories": [
      {
        "name": "Structure",
        "linkid": "test",
        "description": "subdesc",
        "tools": [{
          "name": "SonarQube",
          "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "description": "Code analysis tool",
          "linkid": "sonarqube"
        },
        {
          "name": "Codefactor",
          "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "description": "Code analysis tool",
          "linkid": "codefactor"
        }]
      },
      {
        "name": "Dependencies",
        "linkid": "test",
        "description": "subdesc",
        "tools": [{
          "name": "Trello",
          "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "description": "Project mangaging tool for SCRUM & Agile",
          "linkid": "coordination_dependencies_trello"
        },
        {
          "name": "Github",
          "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "description": "Version control platform tool",
          "linkid": "coordination_dependencies_github"
        }]
      }
      ,
      {
        "name": "Documentation",
        "linkid": "test",
        "description": "subdesc",
        "tools": [{

          "name": "Github Wiki",
          "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "description": "Project documentation management tool",
          "linkid": "github_wiki"
        },
        {
          "name": "ReadTheDocs",
          "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "description": "Project documentation manegement tool",
          "linkid": "readthedocs"
        }]
      },
      {
        "name": "Progress",
        "linkid": "test",
        "description": "subdesc",
        "tools": [{

          "name": "Github",
          "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "description": "Project mangaging tool for SCRUM & Agile",
          "linkid": "coordination_progress_github"
        },
        {
          "name": "Palantir",
          "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "description": "Software development conflict detection tool",
          "linkid": "palantir"
        }]
      }]
  }
    ,
  {
    "name": "Communication",
    "linkid": "test",
    "description": "dim desc",
    "subcategories": [
      {
        "name": "Sharing",
        "linkid": "test",
        "description": "subdesc",
        "tools": [
          {
            "name": "InVision",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": 'A web-based (and mobile) app that lets designers/developers turn their work into active prototypes with animations. Clients can provide feedback and comments directly on the site and track progress in real-time by looking at your to-do list.',
            "linkid": "invision"
          },
          {
            "name": "ConceptShare",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "A communication tool especially designed for creative types. It helps you streamline the review and approval process for any project, and it allows for online proofing with workflow automation, which means you can work with clients from one place without having to send a hundred emails back and forth.",
            "linkid": "conceptshare"
          },
          {
            "name": "Screen hero",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Screen sharing software that works well in combination with Slack. Screen Hero allows members of the team to share their screen in real time, and to allow multiple cursors so you can actually pair program on someone else’s machine.",
            "linkid": "screenhero"
          }]
      },
      {
        "name": "Freely",
        "linkid": "test",
        "description": "subdesc",
        "tools": [
          {
            "name": "Slack",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 150],
            "description": "A popular communication tool, and for good reason. It takes the best of email and live-chat features and combines them into one app that you can use on your desktop or mobile device. Aside from private messages you can also create collaborative boards around different projects or topics, which is helpful if you’re working with a larger team of people or on multiple projects with a single client at once.",
            "linkid": "slack"
          },
          {
            "name": "Skype",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 150],
            "description": "An instant messaging app that provides online text message and audio/video chat services, but also has more advanced features that can be used to share files and communicate with one another",
            "linkid": "skype"
          }]
      },
      {
        "name": "Todo's",
        "linkid": "test",
        "description": "subdesc",
        "tools": [
          {
            "name": "Asana",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 100],
            "description": "A free project management tool designed to help teams track projects from start to finish. One of its best features is that it lets you see the overall progress of your project step by step, so your clients know exactly how long something will take without having to bug you about it.",
            "linkid": "asana"
          },
          {
            "name": "Wunderlist",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "A to-do list tool that helps you plan your individual tasks, set notifications and reminders, and collaborate with clients so they can see exactly what you’re up to and when you’re working. It is available on both desktop and mobile so you can update it on the go. If you have clients who want to see the project laid out in detail, this will help.",
            "linkid": "wunderlist"
          }]
      }]
  }
    ,
  {
    "name": "Cultural",
    "linkid": "test",
    "description": "dim desc",
    "subcategories": [
      {
        "name": "Managing",
        "linkid": "test",
        "description": "subdesc",
        "tools": [
          {
            "name": "GlobeSmart",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Managing tool for cultural teams",
            "linkid": "globesmart"
          },
          {
            "name": "Git",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Version control tool",
            "linkid": "git"
          },
          {
            "name": "GitHub",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Version control platform tool",
            "linkid": "github"
          },
          {
            "name": "Trello",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Project mangaging tool for SCRUM & Agile",
            "linkid": "trello"
          },
          {
            "name": "Jira",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Project mangaging tool for Agile",
            "linkid": "jira"
          },
          {
            "name": "Slack",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Chat tool",
            "linkid": "slack"
          },
          {
            "name": "Skype",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Videocall tool",
            "linkid": "skype"
          }]
      },
      {
        "name": "Staff",
        "linkid": "test",
        "description": "subdesc",
        "tools": [
        {
          "name":"Linkedin",
          "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "description": "Business- and employment-oriented social networking service",
          "linkid": "linkedin"
        }]
      },
      {
        "name": "Training",
        "linkid": "test",
        "description": "subdesc",
        "tools": [
          {
            "name": "duolingo",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Language learning tool",
            "linkid": "duolingo"
          }]
      }]
  }
    ,
  {
    "name": "Team bonding",
    "linkid": "test",
    "description": "dim desc",
    "subcategories": [
      {
        "name": "External",
        "linkid": "test",
        "description": "subdesc",
        "tools": [
          {
            "name": "Ariadne",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "A tool for fostering external social capital through a digital library of knowledge called a Knowledge Pool System (KPS).",
            "linkid": "Ariadne"
          }]
      },
      {
        "name": "Internal",
        "linkid": "test",
        "description": "subdesc",
        "tools": [
          {
            "name": "WIP",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "This is a work in progress.",
            "linkid": "WIP"
          }]
      }]
  }
  ]
};

var masterninja;

example = {
  "Skills": {
    "dimension": {
      "name": "Coordination",
      "linkid": "test",
      "subcategorie": {
        "name": "Structure",
        "tool": {
          "name":"SonarQube",
          "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description": "Code analysis tool", "linkid": "sonarqube"
        }
      }
    }
  }
}

masterninja = {
  "Skills": {
    "Coordination": {
      "Structure": {
        "SonarQube": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"Code analysis tool","linkid":"sonarqube" },
        "Codefactor": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"Code analysis tool","linkid":"codefactor" },
      },
      "Dependencies": {
        "Trello": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"Project mangaging tool for SCRUM & Agile","linkid":"coordination_dependencies_trello" },
        "Github": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"Version control platform tool","linkid":"coordination_dependencies_github" },
      },
      "Documentation": {
        "Github Wiki": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"Project documentation management tool","linkid":"github_wiki" },
        "ReadTheDocs": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"Project documentation manegement tool","linkid":"readthedocs" },
      },
      "Progress": {
        "Github": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"Project mangaging tool for SCRUM & Agile","linkid":"coordination_progress_github" },
        "Palantir": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"Software development conflict detection tool","linkid":"palantir" }
      }
    },
    "Communication": {
      "Sharing": {
        "Appear.In": {"array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description": "Appearin focuses on remote distrubted teams, so essentially build for GSE. It is build to work in your browser by creating a new chatroom what enables you to share your screen and do group conversations.", "linkid": "appearin" },
        "InVision": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":'A web-based (and mobile) app that lets designers/developers turn their work into active prototypes with animations. Clients can provide feedback and comments directly on the site and track progress in real-time by looking at your to-do list.',"linkid":"invision" },
        "ConceptShare": {"array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description": "A communication tool especially designed for creative types. It helps you streamline the review and approval process for any project, and it allows for online proofing with workflow automation, which means you can work with clients from one place without having to send a hundred emails back and forth.", "linkid":"conceptshare" },
        "Screen hero": {"array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description": "Screen sharing software that works well in combination with Slack. Screen Hero allows members of the team to share their screen in real time, and to allow multiple cursors so you can actually pair program on someone else’s machine.", "linkid": "screenhero"},
        "BlueJeeans": {"array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description": "BlueJeans is a cloud video conferencing platform, which enables your remote teams to video conference on any platform with ease. Seeing the other party when communicating can be a beneficial factor for bonding and expressing yourself, which is hard to do in GSE because of the distance between remote teams.", "linkid": "bluejeans"}
      },
      "Free talk": {
        "Slack": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 150], "description":"A popular communication tool, and for good reason. It takes the best of email and live-chat features and combines them into one app that you can use on your desktop or mobile device. Aside from private messages you can also create collaborative boards around different projects or topics, which is helpful if you’re working with a larger team of people or on multiple projects with a single client at once.","linkid":"slack" },
        "Skype": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 150], "description":"An instant messaging app that provides online text message and audio/video chat services, but also has more advanced features that can be used to share files and communicate with one another","linkid":"skype" },
      },
      "Todo's": {
        "Asana": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 100], "description":"A free project management tool designed to help teams track projects from start to finish. One of its best features is that it lets you see the overall progress of your project step by step, so your clients know exactly how long something will take without having to bug you about it.","linkid":"asana" },
        "Wunderlist": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"A to-do list tool that helps you plan your individual tasks, set notifications and reminders, and collaborate with clients so they can see exactly what you’re up to and when you’re working. It is available on both desktop and mobile so you can update it on the go. If you have clients who want to see the project laid out in detail, this will help.","linkid":"wunderlist" },
        "Basecamp": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"	Basecamp is a very popular web-based project management tool that helps multiple groups rally around a single project. Because the project is the focus, you can create a system where both you and the client are on the same page about various stages of the project.", "linkid": "basecamp"}
      }
    },
    "Cultural": {
      "Managing": {
        "GlobeSmart": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"Managing tool for cultural teams","linkid":"globesmart" },
        "Git": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"Version control tool","linkid":"git" },
        "GitHub": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"Version control platform tool","linkid":"github" },
        "Trello": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"Project mangaging tool for SCRUM & Agile","linkid":"trello" },
        "Jira": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"Project mangaging tool for Agile","linkid":"jira" },
        "Slack": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"Chat tool","linkid":"slack" },
        "Skype": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"Videocall tool","linkid":"skype" }
      },
      "Staff": {
        "Linkedin": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"Business- and employment-oriented social networking service","linkid":"linkedin" }
      },
      "Training": {
        "duolingo": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"Language learning tool","linkid":"duolingo" }
      }
    },
    "Team bonding": {
      "External": {
        "Ariadne": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"A tool for fostering external social capital through a digital library of knowledge called a Knowledge Pool System (KPS).","linkid":"Ariadne" },
      },
	  "Internal": {
		  "WIP": { "array":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50], "description":"This is a work in progress.","linkid":"WIP" },
	  }
    }
  }
};

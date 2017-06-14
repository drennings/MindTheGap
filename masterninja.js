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
      }      ,
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
    "linkid": "communicationtools",
    "description": "Communication is key in software engineering, but with globally distributed engineering it may very well be even more important, while it is also harder to maintain. In addition, this is not limited to the planned communication (such as the daily stand ups and sprint reflections). The well renowned 'Allen Curve' from the seventies (<a href='https://www.osti.gov/scitech/biblio/710021'>[6]</a>) describes that a gap between two people over 50 meter (or more) drastically reduces the chance of unplanned communicaton.",
    "subcategories": [
      {
        "name": "Sharing",
        "linkid": "share",
        "description": "Communication in teams can happen for several reasons, one of them is sharing code, designs and/or concepts. There are many tools that benefit communication and workflow, in this section a few are named that stand out. All these tools can help to virtually close the gap to increase unplanned communication. There are a few types of applications that work via a sharing concept, most of them focus on sharing concepts, pieces of code or design quickly to the development team, management and/or clients.	Combined with communication aspects like a bulletin board per project or instant note sharing per design screen helps engagement across multiple people that does not necessarily have to be close to each other. Another benefit some sharing applications bring, is the possibility to share your whole screen, this benefits developers that are far away from each other while they can still work via pair programming.",
        "tools": [
          {
            "name": "Appear.In",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Appearin focuses on remote distrubted teams, so essentially build for GSE. It is build to work in your browser by creating a new chatroom what enables you to share your screen and do group conversations.",
            "linkid": "appearin"
          },
          {
            "name": "BlueJeans",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "BlueJeans is a cloud video conferencing platform, which enables your remote teams to video conference on any platform with ease. Seeing the other party when communicating can be a beneficial factor for bonding and expressing yourself, which is hard to do in GSE because of the distance between remote teams.",
            "linkid": "bluejeans"
          },
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
        "name": "Free talk",
        "linkid": "freely",
        "description": "Aside from the communication solely based on work related stuff, it is important that employees also have tools that can be used for all kind of random talk. So the last section of communication is about free talk. This helps the creativity flow and can improve working relations. There are a lot of tools for this, think of instant messaging and social platforms.	We will discuss a few that stand out for office use and explain the popularity and why they are suited best for GSE.",
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
        "linkid": "tasks",
        "description": "To-do's can be seen as a subcategory of coordination, but we make a distinction between coordination tools for management purposes and coordination tools that heavily increase communication between developers. Tools that ease the work of developers are more likely to be used often by them. If these tools in turn also have social features, the chance for unplanned communication increases.	That is why the following tools are beneficial for not only communication but also project progress.",
        "tools": [
          {
            "name": "Asana",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 100],
            "description": "A free project management tool designed to help teams track projects from start to finish. One of its best features is that it lets you see the overall progress of your project step by step, so your clients know exactly how long something will take without having to bug you about it.",
            "linkid": "asana"
          },
          {
            "name": "Basecamp",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 100],
            "description": "Basecamp is a very popular web-based project management tool that helps multiple groups rally around a single project. Because the project is the focus, you can create a system where both you and the client are on the same page about various stages of the project.",
            "linkid": "basecamp"
          },
          {
            "name": "Trello",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 100],
            "description": "Trello is much like Basecamp, however it focuses more on management then communication, it is still increasing the chance of unplanned communication because deveopers work in one organized place. Much like Basecamp the advantages lie in a centralized place for organizing communication and isssues.",
            "linkid": "trello"            
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

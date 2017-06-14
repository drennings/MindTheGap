var masterninja;


masterninja = {
  "dimensions": [{
    "name": "Coordination",
    "linkid": "coordination", 
    "description": "Coordination between software developing teams is crucial for a project's success. In global software development coordination is more difficult because of the distance. Bringing teams closer together with project management tools increases the ease of coordination.",
    "subcategories": [
      {
        "name": "Structure",
        "linkid": "centralstruct",
        "description": "When teams know what to do they can work independently. Having a centralized project structure makes it clear for everyone involved how the project takes shape and this makes communication about it more easy.",
        "tools": [{
          "name": "SonarQube",
          "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "description": "SonarQube is an open source platform for continuous inspection of code quality. It offers analysis of project structure, bugs, vulnerabilities and code smells.",
          "backgroundlogo": "images/logos/sonarqube.png",
          "linkid": "sonarqube"
        },
        {
          "name": "Codefactor",
          "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "description": "Codefactor is an automated static analysis tool for software projects. It has seamless integration with github and analyses every part of a sofware project.",
          "backgroundlogo": "images/logos/codefactor.png",
          "linkid": "codefactor"
        }]
      },
      {
        "name": "Dependencies",
        "linkid": "identification_dependencies",
        "description": "Identifying dependencies in a project is important for task division between teams. Especially when working with teams spread around the globe it is important that two remote teams are not working on dependent parts of the project.",
        "tools": [{
          "name": "Trello",
          "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "description": "Trello is an online project manegement application for SCRUM and Agile. It offers easy task management with project boards and cards for individual tasks which can be commented on and be assigned to team members.",
          "backgroundlogo": "images/logos/trello.png",
          "linkid": "trello_coordination"
        },
        {
          "name": "Github",
          "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "description": "Github is a version control tool for software projects. Github makes management of software clear and accesible.",
          "backgroundlogo": "images/logos/github.png",
          "linkid": "githubdep"
        },
        {
          "name": "Agile Cockpit",
          "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "description": "Agile Cockpit is a project management platform and offers features for team, project and portfolio management.",
          "backgroundlogo": "images/logos/agilecockpit.png",
          "linkid": "agilecokpitdep"
        }]
      }      ,
      {
        "name": "Documentation",
        "linkid": "documentation",
        "description": "Having a proper documentation is important for all succesful software projects. For globally distributed development however proper documentation is important as remote teams are not always able to communicate about the project directly. Being able to read about all the parts of a project is very important for understanding it before you can continue developing it.",
        "tools": [{

          "name": "Github Wiki",
          "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "description": "Github Wiki is a project documentation management tool. This tool makes it easy to create very clear project documentation.",
          "backgroundlogo": "images/logos/github.png",
          "linkid": "githubwiki"
        },
        {
          "name": "ReadTheDocs",
          "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "description": "ReadTheDocs is a project documentation manegement tool. They offer hosting of your project's documentation and a clear and structured way of presenting the documentation.",
          "backgroundlogo": "images/readthedocs.png",
          "linkid": "readthedocs"
        }]
      },
      {
        "name": "Progress",
        "linkid": "proganalysis",
        "description": "Keeping track of the progress of the project is useful for deciding what to implement next. With remote teams tracking the progress becomes more difficult. Online progress analysis tools can help in making this process easy.",
        "tools": [{

          "name": "Github",
          "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "description": "Github is a version control tool for software projects. Github makes management of software clear and accesible.",
          "backgroundlogo": "images/logos/github.png",
          "linkid": "githubana"
        },
        {
          "name": "JIRA",
          "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "description": "JIRA Software offers flexible issue and project tracking with agile tooling for software teams.",
          "backgroundlogo": "images/logos/mywonderfulllogo.png",
          "linkid": "jiraana"
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
        "backgroundlogo": "images/logos/mywonderfulllogo.png",        
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
            "backgroundlogo": "images/logos/mywonderfulllogo.png",
            "linkid": "invision"
          },
          {
            "name": "ConceptShare",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "A communication tool especially designed for creative types. It helps you streamline the review and approval process for any project, and it allows for online proofing with workflow automation, which means you can work with clients from one place without having to send a hundred emails back and forth.",
            "backgroundlogo": "images/logos/mywonderfulllogo.png",
            "linkid": "conceptshare"
          },
          {
            "name": "Screen hero",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Screen sharing software that works well in combination with Slack. Screen Hero allows members of the team to share their screen in real time, and to allow multiple cursors so you can actually pair program on someone else’s machine.",
            "backgroundlogo": "images/logos/mywonderfulllogo.png",
            "linkid": "screenhero"
          }]
      },
      {
        "name": "Free talk",
        "backgroundlogo": "images/logos/mywonderfulllogo.png",
        "linkid": "freely",
        "description": "Aside from the communication solely based on work related stuff, it is important that employees also have tools that can be used for all kind of random talk. So the last section of communication is about free talk. This helps the creativity flow and can improve working relations. There are a lot of tools for this, think of instant messaging and social platforms.	We will discuss a few that stand out for office use and explain the popularity and why they are suited best for GSE.",

        "tools": [
          {
            "name": "Slack",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 150],
            "description": "A popular communication tool, and for good reason. It takes the best of email and live-chat features and combines them into one app that you can use on your desktop or mobile device. Aside from private messages you can also create collaborative boards around different projects or topics, which is helpful if you’re working with a larger team of people or on multiple projects with a single client at once.",
            "backgroundlogo": "images/logos/mywonderfulllogo.png",
            "linkid": "slack"
          },
          {
            "name": "Skype",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 150],
            "description": "An instant messaging app that provides online text message and audio/video chat services, but also has more advanced features that can be used to share files and communicate with one another",
            "backgroundlogo": "images/logos/mywonderfulllogo.png",
            "linkid": "skype"
          }]
      },
      {
        "name": "Todo's",
        "linkid": "tasks",
        "backgroundlogo": "images/logos/mywonderfulllogo.png",
        "description": "To-do's can be seen as a subcategory of coordination, but we make a distinction between coordination tools for management purposes and coordination tools that heavily increase communication between developers. Tools that ease the work of developers are more likely to be used often by them. If these tools in turn also have social features, the chance for unplanned communication increases.	That is why the following tools are beneficial for not only communication but also project progress.",
        "tools": [
          {
            "name": "Asana",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 100],
            "description": "A free project management tool designed to help teams track projects from start to finish. One of its best features is that it lets you see the overall progress of your project step by step, so your clients know exactly how long something will take without having to bug you about it.",
            "backgroundlogo": "images/logos/mywonderfulllogo.png",
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
            "backgroundlogo": "images/logos/mywonderfulllogo.png",
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
        "backgroundlogo": "images/logos/mywonderfulllogo.png",
        "linkid": "test",
        "description": "subdesc",
        "tools": [
          {
            "name": "GlobeSmart",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Managing tool for cultural teams",
            "backgroundlogo": "images/logos/mywonderfulllogo.png",
            "linkid": "globesmart"
          },
          {
            "name": "Git",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Version control tool",
            "backgroundlogo": "images/logos/mywonderfulllogo.png",
            "linkid": "git"
          },
          {
            "name": "GitHub",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Version control platform tool",
            "backgroundlogo": "images/logos/mywonderfulllogo.png",
            "linkid": "github"
          },
          {
            "name": "Trello",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Project mangaging tool for SCRUM & Agile",
            "backgroundlogo": "images/logos/mywonderfulllogo.png",
            "linkid": "trello"
          },
          {
            "name": "Jira",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Project mangaging tool for Agile",
            "backgroundlogo": "images/logos/mywonderfulllogo.png",
            "linkid": "jira"
          },
          {
            "name": "Slack",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Chat tool",
            "backgroundlogo": "images/logos/mywonderfulllogo.png",
            "linkid": "slack"
          },
          {
            "name": "Skype",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Videocall tool",
            "backgroundlogo": "images/logos/mywonderfulllogo.png",
            "linkid": "skype"
          }]
      },
      {
        "name": "Staff",
        "backgroundlogo": "images/logos/mywonderfulllogo.png",
        "linkid": "test",
        "description": "subdesc",
        "tools": [
          {
            "name": "Linkedin",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Business- and employment-oriented social networking service",
            "backgroundlogo": "images/logos/mywonderfulllogo.png",
            "linkid": "linkedin"
          }]
      },
      {
        "name": "Training",
        "backgroundlogo": "images/logos/mywonderfulllogo.png",
        "linkid": "test",
        "description": "subdesc",
        "tools": [
          {
            "name": "duolingo",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "Language learning tool",
            "backgroundlogo": "images/logos/mywonderfulllogo.png",
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
        "backgroundlogo": "images/logos/mywonderfulllogo.png",
        "linkid": "test",
        "description": "subdesc",
        "tools": [
          {
            "name": "Ariadne",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "A tool for fostering external social capital through a digital library of knowledge called a Knowledge Pool System (KPS).",
            "backgroundlogo": "images/logos/mywonderfulllogo.png",
            "linkid": "Ariadne"
          }]
      },
      {
        "name": "Internal",
        "backgroundlogo": "images/logos/mywonderfulllogo.png",
        "linkid": "test",
        "description": "subdesc",
        "tools": [
          {
            "name": "WIP",
            "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
            "description": "This is a work in progress.",
            "backgroundlogo": "images/logos/mywonderfulllogo.png",
            "linkid": "WIP"
          }]
      }]
  }
  ]
};

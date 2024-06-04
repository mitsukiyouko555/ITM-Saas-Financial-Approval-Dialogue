# ITM-Saas-Financial-Approval-Dialogue
NOTE: This Repository is empty because this was a project that was originally coded on my own time but later turned into an Internal project at my company and as such, It is being hosted internally and I cannot host it on my public Github. 

Please read the Read Me for (non-confidential) details of what was created.

# Read Me

The premise of this project is that it is a form of which when filled out, does some calculations based on what was filled out and outputs formatted text so that the user can click on the Copy to Clipboard Button and generated content would be copied to their clipboard so that they can paste it.

The background of this is I was an SME of a product that a team in finance found quite complex to approve leading me to having to rewrite approvals for them rather often. I was also given the unique opportunity to become a shared resource with an engineering team - provided I learn certain things - among which was React.
​
I figured, well as SME of said product, I knew the math well and making a form with a calculator should be a simple thing to do and good practice for my first React app. Once I created it, I presented it internally. The Engineering Manager and the Management of the Finance team mentioned earlier, liked it so I figured I should let them use it.
​
They had concerns about security as it was originally hosted on Github pages as I'd coded this as a learning project outside of work and thus was in the "Gray Area".
​
Infosec wanted me to remove it from my Github (and I did of course). The engineering Manager sent me some resources to help me figure out how to host the site internally and on https.

I learned a lot from this experience as I created SSH key pairs, learned how to create and terminate Amazon EC2 Instances, used docker to host a React Site, and set up vite and nginx configs to support HTTPS (with help from a colleague on another team), learned to bind certs to docker, and more. I also did a full E2E testing on it before the release.
​
Unfortunately, unlike my other experiences here (please scroll down for more), I won't be able to post an image or visuals for this until I get approval from my company's legal team.

Languages And Other Components Used: HTML, CSS, Javascript, React, Vite Configs, Nginx Configs, Docker, EC2 Instance (CentOS), LDAP, SSH, SSL/HTTPS Certs, and SCP

HTML was used:
- for the content of the site as well as for the images

CSS was used:
- for styling the web app with a different font than the default as well as other design configs
 
Typescript was used:
- for creating 

React was used:
- for creating the web app
- I utilized props, UseEffect, UseState and more to make the calculations on the form work properly

Vite Configs was used:
- for setting up the base url
​
Nginx Configs was used:
- for taking in the SSL Certs to make the site HTTPS (once it was bound to docker)

Docker was used:
- for building the docker image for the React app
- I used volume bind to bind the SSL certs on my EC2 instance to the docker instance
- I also used "docker exec -it /bin/sh <docker id>" to get a shell on the instance 

Amazon EC2 (CentOS) was used:
- for creating an instance of which I could use to host my React App

SSH (and LDAP) was used:
- for logging into the EC2 Instance I created
- I also generated SSH Keys so that I could put them in LDAP (using an internal service) so that it syncs with active directory

SSL/HTTPS Certificates were used:
- for making the site HTTPS (Important because the copy to clipboard function of my React will not work without HTTPS)
- I got certs from an engineering team (per the process) and untar'd it so that I could volume bind it to Docker

SCP was used:
- for moving built docker images from my main laptop to the EC2 Machine (CentOS had an old version of docker that couldn't build multistage docker files so I had to build it on my windows laptop then SCP it over.)

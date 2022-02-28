# Capacity Counter   

## Contents
1. [Purpose](#purpose)  
    - [Problem Statement](#problem-statement)
    - [User Stories](#user-stories)
2. Tech Stack
3. Features
4. Testing
5. [Deployment](#deployment)
6. Acknowledgements

## Purpose
*Capacity Counter* is a tool for setting and tracking capacity in any situation where a pre-determined finite number of units can be accomodated. 

### Problem Statement  
Limited capacity is a commonplace consideration within event settings, as well as many entertainment, food services and  retail settings. In each of these cases, an organisation may have the capacity to accomodate a fixed number of patrons, and tracking the number of patrons already accomodated may be of paramount importance to avoid overcrowding, inability to adequately provide services, and the breach of fire safety regulations.  

While many simple counters exist, few of these possess the option for a user set their own upper limit and most are designed to count upwards indefinitely. The use of such a tool when dealing with finite numbers creates a number of issues which became particularly apparent during public health restrictions enacted in response to the Covid-19 pandemic which necessitated the widespread use of occupancy-monitoring.

With a background in event management, the developer's goal was to create a tool that could simply and effectively address this problem in an intelligent manner. However, the tool is certainly not limited to use in events, and need not be used to count people but might equally be employed to count a finite resource such as vaccines being administered at walk-in clinics, for example. Similarly, the site might be integrated into an existing UI as part of a suite of tools used within a that particular business or environment.
  
### User Stories  
  **Types of User** 
  + Restauranteurs  
  + Entertainment environments with walk-in availablity
  + Transport services  
  + Event Organisers  
  + Clinics, distribution centers and similar settings offering walk-in services dependent on finite resources or limited capacity
  + Employees of the above
  + and more.
  
  + As an organiser, manager or supervisor, I want to...  
    - Easily track occupancy/resources in a limited-capacity or fixed-resources situation.  
    - Set the parameters for capacity once per use, and not have to consult notes or any additional reminders of the maximum allowable capacity.  
    - Use a UI that allows me to name the units being counted in a way that seems logical and appropriate to my industy (e.g. people, tables, seats, etc.)
    - Hand control of the UI over to a member of staff without needing to relay instructions or explicity state the maximum allowable capacity to each staff member.  
  
  + As a staff member or other end-user, I want to...  
    - Track occupancy and capacity without needing to undertake a significant learning curve.
    - Hand control of the UI over to a colleague without the need to explain its functionality, controls or parameters in detail.
    - Use an intuive system that doesn't visually overwhelm me and allows me to see key information at a glance.
    - Use a system that will remember the maximum capacity for me and negate the need to relay this information to colleagues when taking breaks or changing roles.
    - Be reminded whenever nearing capacity so that I can respond with whatever action might be appropriate in my given situation, such as asking new attendees to wait until others have departed.
    - Be informed when the event has reached full capacity.
    - Use a system that will not cease to function in the event that capacity is exceeded, whether in reality or through user error, but notifies me of the fact and allows me to correct the situation.


## Features

## Testing  
JavaScript code was run through JSHint.com with no errors or warnings.
<img src="assets/images/js-hint-screencap.png" alt="JSHint.com identifies no errors and issues no warnings in relation to the JavaScript code." width="90%" height="auto"> 

 
Google's [Lighthouse tool](https://developers.google.com/web/tools/lighthouse) in Chrome's Dev tools was used to generate scores on Performance, Accessibility, Best Practices and SEO. In each case, the site was scored 100.
<img src="assets/images/lighthouse-pp2.png" alt="Google's Lighthouse scores the site at 100 on all tested variables." width="50%" height="auto">

## Deployment
<details><summary>
Click to Expand: Deployment Procedure
</summary></br>  

The site was deployed to GitHub pages using the following procedure:
1. Select the repository within the developer's GitHub account (previously set to public)
2. Select "Settings".
3. Navigate to the "Pages" section within "Settings".
4. Under the heading "Source", select "Branch:main" (set to "None" by default).
5. Deploy page to GitHub pages (note: there may a delay of several minutes before a site can be viewed at the link then provided by GitHub).  

### Forking & Cloning Repositories  
Forking a repository allows one to make a copy with which to experiment without affecting or jeopardising the original. This does not require any special permissions from or direct contact with the original developer, provided the repository in question is public rather than private. You may wish to do this either to experiment with and learn from another party's code, or aid in improving an oper-source project by offering changes (note that forking is distinct from [branching](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)). To do this, one must have a GitHub account and be logged in. Then, simply visit the main page of the repository in question, and select the "Fork" option located in the upper-right corner (desktop) as shown in the image below. [Learn more about forks from GitHub Docs](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository).  
<img src="assets/images/fork-repository-example.png" alt="Example of GitHub interface showing the option to fork a repository." width="50%" height="auto"> 

Forking a repository does not create locally-stored copies of its files on your computer. To achieve this, you will also need to Clone the repository. For example, you may wish to do this if you wish to have a functioning copy of another party's code in under to compile and execute it locally. Cloning options are found under the "Code" drop-down button of a repository's main page, as shown in the image below. [Learn more about cloning from GitHub Docs](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository).  
<img src="assets/images/clone-repository-example.png" alt="Example of GitHub interface showing the available cloning options." width="50%" height="auto">  

</details>
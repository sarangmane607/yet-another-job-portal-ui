# Demo Application for Telstra
"Yet Another Job Portal"

### Application is deployed on internet, access it **[here](https://yet-another-job-portal.web.app/)** 
###### *Because backend(java) is deployed on free heroku server, APIs are little bit slow.*
<br/>


### Technologies/Frameworks Used
##### Front-End/UI
1. React
2. Redux (4.0)
3. Router
4. [material-ui](material-ui.com)
5. GitHub actions for continuous deployment at firebase servers

##### Back-End/Java
1. Java (1.8 and above)
2. Spting boot (2.2.6)
3. JPA
4. JWT (JSON Web Toke, For stateless server)
5. h2 in memory database
6. GitHub actions for continuous deployment at heroku servers
<br/>


### There are two repositories for this project<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. React front end ui. [repo here](https://github.com/sarangmane607/yet-another-job-portal-ui) <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Backend written in java, spring framework. [repo here](https://github.com/sarangmane607/yet-another-job-portal-backend)<br/>
    
Currently **backend (java)** is deployed on **[heroku](https://www.heroku.com/)** cloud and **front-end ui (react)** is deployed on **[firebase](https://firebase.google.com/)** server
<br/>
<br/>

### Steps to start react on local machine
*Note : nodejs installation is required on machine*

1. check-out **[this](https://github.com/sarangmane607/yet-another-job-portal-ui)** repo

2. run below commands from inside repo folder

```
npm install
npm run start:dev
```
##### ***If your backend is not running on 8080 port then modify ```REACT_APP_API_BASE_URL``` parameter from  ```.env.development``` file***
##### ***React ui will start on 3000 port(usually). if not change ```REACT_APP_REACT_URI``` parameter from  ```.env.development``` file***
<br/>
<br/>

### Steps to start backend(java) on local machine
1. check-out **[this](https://github.com/sarangmane607/yet-another-job-portal-backend)** repo
2. modify below parameter in ```src\main\resources\application.yml``` file to point it to your react app <br/>
i.e ```http://localhost:3000/oauth2/redirect```
```
    ...
    authorizedRedirectUris:
      - https://yet-another-job-portal.web.app/oauth2/redirect
    ...
```
3. open command prompt
4. change directory to repo
5. run ```mvn install``` to build spring boot's fat jar file
6. run ```java -jar target/yet-another-job-portal-0.0.1-SNAPSHOT.jar```
<br/>
<br/>

### User guide for site

1. On landing page, you will see few options in **header**
   1. **Home**
      Displayed welcome banner and current job openings
      if you are logged in on site it will show "Apply" button.
   2. **Login**
      There are 3 ways to login into site
      1. Google
      2. Githug (you profile emailid on github should be public and should have public name account)
      3. singup on site itself
   3. **Sign Up**
      Basic signup with 3 fields Name, Email id and Password
   4. **My Applications**
      If *logged in*, this page will show all jobs where you have applied in past. <br/>
      It also shows your application's/candidature status
   5. **Logout**
      Logs out of system
 <br/>
 <br/>
 
### Limitations / Unfinished bussiness / Enhancements

   1. Screens for HR where they can take actions on received applications.
   2. Application's worflow (integrations with JBPM or activity engines)
   3. User profile updation screens & resume upload.
   4. Filtering, sorting applicatons
   5. Filtering, sorting job opening
   6. Relevent Job openings for logged in users. (will need AI to figure out best matches)

### multi container applications in docker
##### an totally overshot fibunacci calculator that runs in multiple containers

* scope is a small app, that finds the fibbocnacci number of  given index
* store the numbers in a *postgress* and also store the already known indecies to *redis*
* then if the client request a computation we aggregate from this two databases
* also there is a *nginx* that handles the internal routing for the *client* and *worker* services

* we also will create several enviroments like
* **dev** runs locally
* **prod** will be deployed to AWS, after certain TRAVIS CI tests succed

consider the following:
![image](./assets/flow.png)

* this repo combines several services
* we have a 
  * **server** will combine and postgres and redis and knows our internal routes
  * **worker** will calculated fibonacci number 
  * **client** will ask for input and display relevant data
  * **nginx**  will redirect client request internally to `/api` or `/`





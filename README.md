# ActivityJar

Create activity jars and share them with your friends! You and anyone you permit can add activities to a jar. Once you're all together and are looking for a fun day activity, you can draw a random activity from the jar! Suggestions for local spots to do that activity will pop-up too!

In the works...
* Location-responsive notifications - Whenever you're near an activity in one of your jars, you will get a notification, allowing you to engage in some impromptu rock-climbing with your friends!

## Getting Started

ActivityJar has both a back-end and front-end server. The backend server acts as the REST API that will be consumed by the front-end application. Application data is persisted in a mongoDB database that can only be read from and written to through the REST API.

The front-end server is just that. It serves our front-end React application (and does some additional logging).

To get the app started in your local environment, follow the steps below!

### Prerequisites

[Node.js](https://nodejs.org/en/) (versions 6.11 and later)
```
sudo apt-get install node
```

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository

```
git clone https://github.com/matthewachan/activityjar
```

Navigate to the newly created folder and install the required packages for the front-end React application and server

```
cd ./activityjar
npm install
```

From that directory, navigate to the server folder and install the required packages for the back-end REST API
```
cd ./server
npm install
```


End with an example of getting some data out of the system or using it for a little demo

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [React.js](https://facebook.github.io/react/docs/react-api.html) - The front-end web framework used
* [Redux](http://redux.js.org/) - Flux-based framework for managing the app's data 
* [Express](https://expressjs.com/) - Robust framework for building servers and setting up routes
* [Google Places API](https://developers.google.com/places/web-service/) - Simple searching API for finding nearby places
* [Bootstrap](http://getbootstrap.com/) - Modern CSS styling and grid layout system
* [Auth0](https://auth0.com/docs) - JWT user authentication made easy

## Contributing

Comment below or shoot me an email at matthew.a.chan@gmail.com if you're interested in contributing!

## Authors

* **Matthew Chan** - *Main developer* - [PurpleBooth](https://github.com/matthewachan)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to my friends for suggesting improvements!


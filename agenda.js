// @todos 
// -[x] Map the original json and create categories, locations abd cities
// -[x] add default value for every option
// -[x] validate email input as valid email
// -[x] select events to subscribe to (add to dunmmy object )
// -[ ] date picker for date dropdown
// -[x] create events object with better date type
// -[x] style the needed data in the events boxes
// -[x] fitlers as one object
// -[X] check if event already selected before
// -[x] add selected class

var app = angular.module('calenderApp',[]);
app.controller('calender', function ($scope) {

    var eventsJson = [{
        "id": "HF",
        "title": "Hauts-Fonds",
        "date": "24 Septembre 2022",
        "enddate": "24 Septembre 2022",
        "time": "20H30",
        "location": "Temple des Batignolles",
        "city": "Paris",
        "categories": ["Public"],
        "fbevent" : "https://fb.me/e/1XdTvHe14",
        "status" : "next"
        }, 
        {
            "id": "SE",
            "title": "Sourdre Encore",
            "date": "14 Mars 2020",
            "enddate": "14 Mars 2020",
            "time": "20H30",
            "location": "Temple des Batignolles",
            "city": "Paris",
            "categories": ["Public"],
            "fbevent" : "https://fb.me/e/2OM0MxTG5",
            "status" : "done"
            }

    ]

    var events = [];
    var dates = [];
    var cities = [];
    var locations = [];
    var categories = [];

    eventsJson.forEach(function(event){
        event.date = new Date(event.date).toISOString();
        
      events.push(event);
        dates.push(event.date);
        cities.push(event.city);
        locations.push(event.location);
        categories = categories.concat(event.categories);
        
    })


  function clean(value, index, self) { 
    return value !== undefined && self.indexOf(value) === index;
  }  

  $scope.events = events.filter(clean);
  $scope.dates = dates.filter(clean);
  $scope.cities = cities.filter(clean);
  $scope.locations = locations.filter(clean);
  $scope.categories = categories.filter(clean);
  
  $scope.regisration = {}
  $scope.regisration.events = []
  $scope.register = function(){
    // Should be something like that
    // Api.registerEvent($scope.regisration)
    console.log($scope.regisration)
  }
  $scope.selectEvent = function(event, flag){
    if(flag){
        $scope.regisration.events.push(event); 
   } else {
        $scope.regisration.events.splice(event, 1)
   }
    
  }
});

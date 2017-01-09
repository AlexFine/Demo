// console.log("Rides service file loaded"); // Feedback
angular.module('ridesService', ['ionic'])
  .factory('testVariable', function() {
    return "Rides Service Works"
  })

  .factory('testFunction', function() {
      return function(num) {
        return num * 2
      }

  })

  .factory('retrieveSchedule', function($http) {
    // Pull from server
	var userID = "sam";
	var email = "menlohacks@gmail.com"
//	var time = '9:45 AM';
//  var date = [2016, 20, 4],
//	date = JSON.stringify(date);
//  var repeating = false;
//  var repeatedDays = [false, true, false, true, false, true, false];
//  var repeatedDays = JSON.stringify(repeatedDays)
//  var image = 'img/Golden.jpg';
//  var dropoff = 'Golden Gate Bridge, San Francisco, CA';
//  var pickup = 'Menlo School, Aherton, CA 94027'



  var url = "https://uberschedulerp.appspot.com/_ah/api/uberApi/v1/ride/return";
  $http.post(url, {
    "userID":userID
  }).then(function (resps) {
    console.log(resps)
  })



    var playlists = [
      {
        time: 'Xio Grande Meza',
        id: 1,
        date: new Date(2016, 20, 4),
        repeating: false,
        repeatedDays: [false, true, false, true, false, true, false],
        image: 'img/Golden.jpg',
        face: 'img/xio.jpg',
        dropoff: 'Golden Gate Bridge, San Francisco, CA',
        pickup: 'Menlo School, Atherton, CA 94027',
        race: ['Latina', 'Mexican', 'Salvadorian', 'Straight', 'Female', 'Cis-Gender', 'She/Her'], 

				key: 'ABCDEFG'
      },
      {
        time: 'Oliver Mancini',
        id: 2,
        date: new Date(2016, 20, 4),
        repeating: false,
        repeatedDays: [false, false, false, false, false, false, false],
        image: 'img/Art.jpg',
        face: 'img/oliver.jpg',
        dropoff: '755 Ocean Ave, San Francisco, CA',
        pickup: 'Menlo School, Atherton, CA 94027',
        race: ['White', 'Hawaii', 'California', 'Caucasian', 'Straight', 'Male', 'Cis-Gender', 'He/Him'],
				key: 'ABCDEFG'
      },
      {
        time: 'Maiyio Tayler-Jackson',
        id: 3,
        date: new Date(2016, 20, 4),
        repeating: false,
        repeatedDays: [false, true, false, true, false, true, false],
        image: 'img/Land.jpg',
        face: 'img/maiyio.JPG',
        dropoff: '680 Point Lobos Ave, San Francisco, CA 94121',
        pickup: 'Menlo School, Atherton, CA 94027',
        race: ['Black', 'African American', 'San Francisco', 'Straight', 'He/Him', 'Cis-Gender', 'Takis'],
				key: 'ABCDEFG'
      },
      {
        time: 'Brooke Peterson',
        id: 4,
        date: new Date(2016, 20, 4),
        repeating: false,
        repeatedDays: [false, true, false, true, false, true, false],
        image: 'img/Salesforce.jpg',
        face: 'img/brooke.jpg',
        dropoff: 'Salesforce Twoer, San Francisco, CA 94105',
        pickup: 'Menlo School, Atherton, CA 94027',
        race: ['White', 'German', 'British', 'Irish', 'French', 'Female', 'She/Her', 'Cis-Gender', 'Straight'],
				key: 'ABCDEFG'
      },
        {
        time: 'Catherine Fung',
        id: 5,
        date: new Date(2016, 20, 4),
        repeating: false,
        repeatedDays: [false, true, false, true, false, true, false],
        image: 'img/Land.jpg',
        face: 'img/Fung.JPG',
        dropoff: 'Salesforce Twoer, San Francisco, CA 94105',
        pickup: 'Menlo School, Atherton, CA 94027',
        race: ['Asian', 'Chinese', 'California', 'Female', 'She/Her', 'Cis-Gender', 'Straight'],
				key: 'ABCDEFG'
        },
        {
        time: 'Alex Fine',
        id: 6,
        date: new Date(2016, 20, 4),
        repeating: false,
        repeatedDays: [false, true, false, true, false, true, false],
        image: 'img/Golden.jpg',
        face: 'img/alex.png',
        dropoff: 'Salesforce Twoer, San Francisco, CA 94105',
        pickup: 'Menlo School, Atherton, CA 94027',
        race: ['White', 'Jewish', 'Russian', 'Polish', 'Dutch', 'New York', 'He/Him', 'Cis-Gender', 'Straight'],
				key: 'ABCDEFG'
        },
        {
            time: 'Jackson Vachal',
        id: 7,
        date: new Date(2016, 20, 4),
        repeating: false,
        repeatedDays: [false, true, false, true, false, true, false],
        image: 'img/Art.jpg',
        face: 'img/jack.jpg',
        dropoff: 'Salesforce Twoer, San Francisco, CA 94105',
        pickup: 'Menlo School, Atherton, CA 94027',
        race: ['White', 'Jewish', 'Polish', 'Czech', 'Vermont', 'He/Him', 'Cis-Gender', 'Straight'],
				key: 'ABCDEFG'
        },
        {
            time: 'David Ludeke',
        id: 8,
        date: new Date(2016, 20, 4),
        repeating: false,
        repeatedDays: [false, true, false, true, false, true, false],
        image: 'img/Golden.jpg',
        face: 'img/david2.jpg',
        dropoff: 'Salesforce Twoer, San Francisco, CA 94105',
        pickup: 'Menlo School, Atherton, CA 94027',
        race: ['White', 'German', 'English', 'Irish', 'Scottish', 'Male', 'He/Him', 'Straight', 'Cis-Gender'],
				key: 'ABCDEFG'
        },
        {
            time: 'Eva Denman',
        id: 9,
        date: new Date(2016, 20, 4),
        repeating: false,
        repeatedDays: [false, true, false, true, false, true, false],
        image: 'img/Salesforce.jpg',
        face: 'img/eva.jpg',
        dropoff: 'Salesforce Twoer, San Francisco, CA 94105',
        pickup: 'Menlo School, Atherton, CA 94027',
        race: ['White', 'Swiss-American', 'German', 'Dutch', 'Swedish', 'She/Her', 'Straight', 'Cis-Gender', 'Female'],
				key: 'ABCDEFG'
        },
        {
            time: 'Hilda Gonzalez',
        id: 10,
        date: new Date(2016, 20, 4),
        repeating: false,
        repeatedDays: [false, true, false, true, false, true, false],
        image: 'img/Golden.jpg',
        face: 'img/hilda.jpg',
        dropoff: 'Salesforce Twoer, San Francisco, CA 94105',
        pickup: 'Menlo School, Atherton, CA 94027',
        race: ['Latina', 'Mayan', 'Straight', 'Female', 'She/Her', 'Cis-Gender'],
				key: 'ABCDEFG'
        },
        {
            time: 'Audrey Neri',
        id: 11,
        date: new Date(2016, 20, 4),
        repeating: false,
        repeatedDays: [false, true, false, true, false, true, false],
        image: 'img/Art.jpg',
        face: 'img/audrey.png',
        dropoff: 'Salesforce Twoer, San Francisco, CA 94105',
        pickup: 'Menlo School, Atherton, CA 94027',
        race: ['Mexican', 'Chinese', 'Catholic', 'Straight', 'Cis-Gender', 'Female', 'She/Her'],
				key: 'ABCDEFG'
        },
        {
            time: 'Jane Liu',
        id: 12,
        date: new Date(2016, 20, 4),
        repeating: false,
        repeatedDays: [false, true, false, true, false, true, false],
        image: 'img/Land.jpg',
        face: 'img/jane.jpg',
        dropoff: 'Salesforce Twoer, San Francisco, CA 94105',
        pickup: 'Menlo School, Atherton, CA 94027',
        race: ['Chinese-American', 'Catholic', 'Straight', 'Female', 'Cis-Gender', 'She/Her'],
				key: 'ABCDEFG'
        },
        {
            time: 'Alana Leventhal',
        id: 13,
        date: new Date(2016, 20, 4),
        repeating: false,
        repeatedDays: [false, true, false, true, false, true, false],
        image: 'img/Salesforce.jpg',
        face: 'img/alana.jpg',
        dropoff: 'Salesforce Twoer, San Francisco, CA 94105',
        pickup: 'Menlo School, Atherton, CA 94027',
        race: ['Japanese-American', 'Japanese', 'Jewish', 'Caucasian', 'Straight', 'She/Her', 'Cis-Gender', 'Female'],
				key: 'ABCDEFG'
        },
        {
            time: 'Omar Patterson',
        id: 14,
        date: new Date(2016, 20, 4),
        repeating: false,
        repeatedDays: [false, true, false, true, false, true, false],
        image: 'img/Art.jpg',
        face: 'img/omar.jpg',
        dropoff: 'Salesforce Twoer, San Francisco, CA 94105',
        pickup: 'Menlo School, Atherton, CA 94027',
        race: ['Black', 'Latino', 'Catholic', 'Oakland', 'Seattle', 'Male', 'Straight', 'Cis-Gender'],
				key: 'ABCDEFG'
        }
    ];


    return playlists
  })

  .factory('pushSchedule', function() {
    return function(playlist) {
      console.log("Pushing playlist:", playlist);
      // Push to server
    }
  })

  .factory('timeEstimate', function($http) {
    return function(long, lat, end_lat, end_long) {
      baseurl = "https://sandbox-api.uber.com/v1/estimates/price"

      parameters = {
        'server_token': 'ikGvlAJSejPSY6bUp7APhxkwyu5ermguZnreUaCd',
        'start_latitude': lat,
        'start_longitude': long,
        'end_latitude': end_lat,
        'end_longitude': end_long,
      }

      url = baseurl + "?" + "server_token=" + parameters['server_token'] + "&start_latitude=" + parameters[
          'start_latitude'] + "&start_longitude=" + parameters['start_longitude']+"&end_latitude=" + parameters[
        'end_latitude'] + "&end_longitude=" + parameters['end_longitude']
      $http.get(url).success(function(data){
        return data
      })

    }

  })

.directive('googleplace', function(){
	return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    model.$setViewValue(element.val());
                });
            });
        }
    };
});

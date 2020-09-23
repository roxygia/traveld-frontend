export const allTrips = [
    {
      "id": 1,
      "title": "A trip",
      "itinerary": "The first trip",
      "goal": 6,
      "image": "https://via.placeholder.com/300.jpg",
      "is_open": true,
      "date_created": "2020-03-20T14:28:23.382748Z",
      "organiser": 1,
      "cost": 500,
      "duration": 7,
      "start_date": "2020-06-20T14:28:23.382748Z"
    },
    {
      "id": 2,
      "title": "A trip",
      "itinerary": "The first trip",
      "goal": 6,
      "image": "https://via.placeholder.com/300.jpg",
      "is_open": true,
      "date_created": "2020-03-20T14:28:23.382748Z",
      "organiser": 1,
      "cost": 500,
      "duration": 7,
      "start_date": "2020-06-20T14:28:23.382748Z"
    },
    {
      "id": 3,
      "title": "A Second trip",
      "itinerary": "Going skiing",
      "goal": 10,
      "image": "https://via.placeholder.com/300.jpg",
      "is_open": true,
      "date_created": "2020-03-20T14:28:23.382748Z",
      "organiser": 1,
      "cost": 850,
      "duration": 14,
      "start_date": "2020-06-20T14:28:23.382748Z"
    },
    {
      "id": 4,
      "title": "Hiking for beginners",
      "itinerary": "This hike is an overnight trip over 8 days to complete the Billibum track",
      "goal": 3,
      "image": "https://via.placeholder.com/300.jpg",
      "is_open": true,
      "date_created": "2020-03-20T14:28:23.382748Z",
      "organiser": 1,
      "cost": 200,
      "duration": 7,
      "start_date": "2020-06-20T14:28:23.382748Z"
    },
    {
      "id": 5,
      "title": "Fly to Exmouth",
      "itinerary": "Long weekend trip to exmouth",
      "goal": 4,
      "image": "https://via.placeholder.com/300.jpg",
      "is_open": true,
      "date_created": "2020-03-20T14:28:23.382748Z",
      "organiser": 1,
      "cost": 600,
      "duration": 3,
      "start_date": "2020-06-20T14:28:23.382748Z"
    }
  ];

export const oneTrip = {
    "id": 1,
    "title": "A trip",
    "itinerary": "The first trip",
    "goal": 6,
    "image": "https://via.placeholder.com/300.jpg",
    "is_open": true,
    "date_created": "2020-03-20T14:28:23.382748Z",
    "organiser": 1,
    "cost": 500,
    "duration": 7,
    "start_date": "2020-06-20T14:28:23.382748Z",
    "pledges": [
      {
        "id": 1,
        "amount": 1,
        "comment": "Hello!",
        "anonymous": false,
        "trip_mate": 1,
        "trip_id": 1
      },
      {
        "id": 2,
        "amount": 1,
        "comment": "Second Pledge!",
        "anonymous": false,
        "trip_mate": 1,
        "trip_id": 1
      }
    ]
  }

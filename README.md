# Restaurant Reservation System

![image](https://user-images.githubusercontent.com/4285385/215355003-27e90242-1f47-4d38-b061-e87891bfb0c7.png)

**Live App Link:** https://josh-c-restaurant-reservation-app-qf5b.onrender.com

## Description

This is a Restaurant Reservation System. This system allows the restaurant to create, update, view, delete reservations, as well as seat customers at various tables within the restaurant.

## API Documentation: 

|Route                               |Method|Status Code|Description                                                        |
|:-----------------------------------|:----:|:---------:|:------------------------------------------------------------------|
|/reservations                       |GET   |200        |Returns a list of reservations for the current date                |
|/reservations?date=####-##-##       |GET   |200        |Returns a list of reservations for the given date                  |
|/reservations                       |POST  |201        |Creates a new reservation                                          |
|/reservations/:reservation_id       |GET   |200        |Returns the reservation for the given ID                           |
|/reservations/:reservation_id       |PUT   |200        |Updates the reservation for the given ID                           |
|/reservations/:reservation_id/status|PUT   |200        |Updates the status of the reservation for the given ID             |
|/tables                             |GET   |200        |Returns a list of tables                                           |
|/tables                             |POST  |201        |Creates a new table                                                |
|/tables/:table_id                   |GET   |200        |Returns the table for the given ID                                 |
|/tables/:table_id/seat              |PUT   |200        |Seats a reservation at the given table_id                          |        
|/tables/:table_id/seat              |DELETE|200        |Changes the occupied status to be unoccupied for the given table_id|

## Reservation JSON Example

```JSON
{
"reservation_id": 1,
"first_name": "Frank",
"last_name": "Palicky",
"mobile_number": "202-555-0153",
"reservation_date": "2020-12-30",
"reservation_time": "20:00",
"people": 1,
"created_at": "2020-12-10T08:31:32:326Z",
"updated_at": "2020-12-10T08:31:32:326Z"
}
```

## Table JSON Example

```JSON
{
"table_id": 2,
"table_name": "#2",
"capacity": 6,
"occupied": false,
"reservation_id": null
}
```

## Technologies & Tools
- React
  - React hooks
  - React router
- Node
- PostgreSQL
- Express
- CSS
- Bootstrap4
- HTML
- JavaScript
- RESTful APIs

## Local Database setup
This will require you to create a database to store all your table data, this will require a .env file:

```Javascript
// back-end .env example -> connects to database
DATABASE_URL=enter-your-production-database-url-here
DATABASE_URL_DEVELOPMENT=enter-your-development-database-url-here
DATABASE_URL_TEST=enter-your-test-database-url-here
DATABASE_URL_PREVIEW=enter-your-preview-database-url-here
LOG_LEVEL=info

// front-end .env example -> connects to server
REACT_APP_API_BASE_URL=http://localhost:5001
```

## To run locally
1. Fork & Clone the repostory
2. Run `npm install`
3. Run `npm run start:dev` to start developer environment

# abode-similar-homes-monthly-cost-neighborhood-facts

## Start Project

start server - run command: $ npm start

## API Documentation

### READ

#### Recieve Neighborhood Data and Nearby Homes for specefic Neighborhood
```
GET /api/neighborhood/id
```

### UPDATE

#### Update Neighborhood Info
```
PUT /api/neighborhood/id/{column}/{change}
```

### CREATE

#### Add house Listing to users Liked List
 
```
PUT /api/likes/{user_id}/{house_id}
```

#### Create New User

```
PUT /api/users/{user_name}
```

### DELETE

#### Delete House From like List
```
DELETE /api/likes/{user_id}/{house_id}
```

'


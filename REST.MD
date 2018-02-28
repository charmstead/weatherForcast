# WEATHER FORECAST REST Requests

# The REST endpoints are divided into five:

1. API endpoint for fetching all dates for which weather information is available.
2. API endpoint to fetch weather information for a particular date, if not available returns 404-error.
3. API endpoint to add weather information for a particular day.
4. API endpoint to delete weather information for a particular day.
5. API endpoint to forecast weather information for the next seven days.



# API ENDPOINTS

## GET ALL AVAILABLE DATES

GET /historical/

****Request:****

```
GET /historical/
Host: localhost:4000

```

****Returns:****

```
HTTP 200 OK

[
    {
        "DATE": "20130114"
    },
    {
        "DATE": "20130119"
    },
    {
        "DATE": "20130124"
    },
    {
        "DATE": "20130129"
    },
    {
        "DATE": "20130203"
    },
    {
        "DATE": "20130208"
    },
    {
        "DATE": "20130213"
    },
    {
        "DATE": "20130218"
    },
    ...
]

```

## GET WEATHER INFORMATION FOR A PARTICULAR DATE

GET /historical/:date

****Request:****

```
GET /historical/:date
Host: localhost:4000

```

****Returns:****

```
HTTP 200 OK

{
    "DATE": "20180211",
    "TMAX": 30.5,
    "TMIN": 12.2
}

```
****Error:****
```
HTTP 404 NOT FOUND
```

## ADD WEATHER INFORMATION FOR A PARTICULAR DATE

POST /historical/:date

****Request:****

```
POST /historical/:date
Host: localhost:4000

Auth: 
Content-type: application/json
Accept: application/json

{
    "DATE": "20180211",
    "TMAX": 30.5,
    "TMIN": 12.2
}

```

****Returns:****

```
HTTP 201 OK

{
    "DATE": "20180211",
}

```


## DELETE WEATHER INFORMATION FOR A PARTICULAR DATE

DELETE /historical/:date

****Request:****

```
DELETE /historical/:date
Host: localhost:4000

```

****Returns:****

```
HTTP 200 OK

{success:true}

```
****Error:****
```
HTTP 404 {error:"cannot delete a data not found"}
```


## GET WEATHER FORECAST FOR SEVEN DAYS RANGE

GET /forecast/:date

****Request:****

```
GET /forecast/:date
Host: localhost:4000

```

****Returns:****

```
HTTP 200 OK

[
    {
        "DATE": "20170216",
        "TMAX": 37.2,
        "TMIN": 26.4
    },
    {
        "DATE": "20170217",
        "TMAX": 44.4,
        "TMIN": 30.6
    },
    {
        "DATE": "20170218",
        "TMAX": 72.6,
        "TMIN": 42.6
    },
    {
        "DATE": "20170219",
        "TMAX": 74.3,
        "TMIN": 45.1
    },
    {
        "DATE": "20170220",
        "TMAX": 63.3,
        "TMIN": 44
    },
    {
        "DATE": "20170221",
        "TMAX": 54.2,
        "TMIN": 32.7
    },
    {
        "DATE": "20170222",
        "TMAX": 57.8,
        "TMIN": 32.6
    }
]

```


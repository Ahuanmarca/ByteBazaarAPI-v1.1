# ByteBazaar API

**WORK IN PROGRESS**

Backend API to be consumed by the ByteBazaar video game online store.

This API can receive requests, make CRUD operation on the store's database and return data for the frontend.

```
Document version: 1.0
Last updated: 2024-02-06
```

## Table of contents

- Authentication
  - `/auth/login`
  - `/auth/register`
  - `/auth/validate/:emailToken`
- Game Titles
  - `/gameTitles/create`
  - `/gameTitles/all`
  - `/gameTitles/:id`
  - `/gameTitles/productId/:id` - **Deprecate**
  - `/gameTitles/updateGenres/:id`
  - `/gameTitles/delete/:id`
- Genres
  - `/genres/all`
  - `/genres/create` - **TODO**
- Orders
  - `/orders/:uderId`
- Products
  - `/products/all`
  - `/products/:id`
  - `/products/related/:id`
  - `/products/recommended`
  - `/products/buy`
- Users
  - `/users/id/:id`
  - `/users/profile`

# API

## Authentication

### `/auth/login`

- Verb: **POST**
- Logins the user by returning a token.

Request example

``` json
{
    "email": "alice@alice.al",
    "password": "alice"
}
```

Response example

``` json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWMwOTJlNjdhYWVjZjQ5MzdmZmFkMmYiLCJpYXQiOjE3MDcyNDc1MjYsImV4cCI6MTcwNzI1MTEyNn0.uq3_YAqk6mPcwGrQWckujF4Y-u-z0TgCzM1EdH6xK6o"
}
```

### `/auth/register`

- Verb: POST
- Begins user registration. Sends email with link to validate user.

Request example

``` json
{
    "email": "jane@jane.ja",
    "password": "jane",
    "repeatedPassword": "jane",
    "firstName": "Jane",
    "lastName": "Doe"
}
```

Response example. The token can be used to validate the user on `/auth/validate/:emailToken` route.

``` json
{
    "msg": "We have just sent you a confirmation email—please check your inbox.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWMyOGFkNjQwZDQ0ZWIwY2MxNzBmM2MiLCJpYXQiOjE3MDcyNDgzNDQsImV4cCI6MTcwNzI1MTk0NH0.msjdHJqCmPIrszSUxmqG-BhRRe4wipvLCn1wXGVMvVc"
}
```

### `/auth/validate/:emailToken`

- Verb: GET
- Validates registered user with token sent by `/auth/register`
- Returns confirmation

---

## Game Titles

- `/gameTitles/create` (POST) creates a Game Title and returns the created title.
- `/gameTitles/all` (GET) returns al existing titles.
- `/gameTitles/:id` (GET) returns one title by id.
- `/gameTitles/productId/:id` (GET) returns one title by product id.
  - **TODO**: Deprecate in favor `/products/:id`, which returns the Product with nested Game Title.
- `/gameTitles/delete/:id` (DELETE) performs a 'soft delete' of a Game Title.

Example of returned Game Title

``` json
{
    "_id": "65be7fb98709074a53fa39df",
    "title": "Elden Ring",
    "description": "Description of Elden Ring",
    "image": "https://cdn-products.eneba.com/resized-products/qx8Tbt_P4s0CUWhUi0zXERfNW1s7_qGS5WbBO_uVudI_350x200_1x-0.jpeg",
    "deleted": false,
    "genres": [
        {
            "_id": "65b1574188e7a12afad2a587",
            "name": "action"
        },
        {
            "_id": "65b1574188e7a12afad2a592",
            "name": "role"
        }
    ],
    "__v": 0
},
```

- `/gameTitles/updateGenres/:id` (PATCH) inserts genres on existing Game Title.

Inserts genres on a Game Title. Genres must already exist on the database.

Receives Game Title id as param and genres data on the body. 

Example of body:

``` json
{
    "genres": [
        "sandbox",
        "puzzle"
    ]
}
```

---

## Genres

- `/genres/all` returns array with all existing genres
- `/genres/create` - **TODO**: IMPLEMENT THIS ROUTE.

Returned array with genres examples (showing only two elements for brevity):

``` json
[
    {
        "_id": "65b1574188e7a12afad2a58a",
        "name": "sports",
        "__v": 0
    },
    {
        "_id": "65b1574188e7a12afad2a58f",
        "name": "fight",
        "__v": 0
    }
]
```

## Orders

### `/:uderId`
- returns orders by user id
- **NOTE: WILL BE DEPRECATED IN FAVOR OF REFERENCING THE ORDERS IN THE USER MODEL**
- **TBD**: Should we restrict (or manipulate) the returned data so it's more user friendly?

Returned orders by a user example

``` json
[
    {
        "_id": "65c254f540d44eb0cc170f23",
        "user": "65c092e67aaecf4937ffad2f",
        "products": [
            {
                "product": {
                    "_id": "65c09ac91d4efb377d475e80",
                    "gameTitle": {
                        "_id": "65be7fb98709074a53fa3a12",
                        "title": "Sekiro",
                        "description": "Description of Sekiro",
                        "image": "https://cdn-products.eneba.com/resized-products/ISgxWrW54C8AX-kdRMqFMbqv1QR4TNeUVoc3G2-5Mo4_350x200_1x-0.jpeg",
                        "deleted": false,
                        "genres": [
                            {
                                "_id": "65b1574188e7a12afad2a587",
                                "name": "action",
                                "__v": 0
                            }
                        ],
                        "__v": 0
                    },
                    "platform": {
                        "_id": "65be7c6ad525bda9b2ee3fb9",
                        "name": "PlayStation5",
                        "__v": 0
                    },
                    "stock": 5,
                    "listedDate": "2020-01-01T00:00:00.000Z",
                    "price": 50,
                    "__v": 0
                },
                "quantity": 2,
                "price": 50,
                "_id": "65c254f540d44eb0cc170f24"
            },
            {
                "product": {
                    "_id": "65c09ac91d4efb377d475e88",
                    "gameTitle": {
                        "_id": "65be7fb98709074a53fa3a14",
                        "title": "PAC-MAN 256",
                        "description": "Description of PAC-MAN 256",
                        "image": "https://cdn-products.eneba.com/resized-products/YLwP0jbkMrspCZRB9EOeO3fqcIsifMUp_TOIKCPY0BM_350x200_1x-0.jpeg",
                        "deleted": false,
                        "genres": [
                            {
                                "_id": "65b1574188e7a12afad2a589",
                                "name": "arcadian",
                                "__v": 0
                            }
                        ],
                        "__v": 0
                    },
                    "platform": {
                        "_id": "65be7c6ad525bda9b2ee3fbd",
                        "name": "PC",
                        "__v": 0
                    },
                    "stock": 100,
                    "listedDate": "2020-01-01T00:00:00.000Z",
                    "price": 20,
                    "__v": 0
                },
                "quantity": 1,
                "price": 20,
                "_id": "65c254f540d44eb0cc170f25"
            }
        ],
        "total": 120,
        "date": "2024-02-06T15:49:09.251Z",
        "__v": 0
    }
]
```

## Products

**NOTE** / **TBD**: I think the `/buy` route should belong to `/orders` instead of `/products`.

- `/procucts/all/` returns an array of all existing products.
- `/products/:id/` returns one product by it's id.
- `/products/related/:id` accepts a products id as a parameter, returns an array of related products
- `/products/recommended` returns an array of recommended products, based on the user's last order. If the user has no orders, returns the most recent products.

Returned product example:
``` json
{
    "_id": "65c092e67aaecf4937ffad34",
    "gameTitle": {
        "title": "Elden Ring",
        "image": "https://cdn-products.eneba.com/resized-products/qx8Tbt_P4s0CUWhUi0zXERfNW1s7_qGS5WbBO_uVudI_350x200_1x-0.jpeg",
        "deleted": false,
        "genres": [
            {
                "name": "action"
            },
            {
                "name": "role"
            }
        ]
    },
    "platform": {
        "_id": "65be7c6ad525bda9b2ee3fb8",
        "name": "PlayStation4"
    },
    "stock": 5,
    "price": 50
}
```

### `/products/buy`

Creates an order. A user must be logged in.

Accepts order data in the body.

``` json
{
    "products": [
        {
            "product": "65c09ac91d4efb377d475e80",
            "quantity": 2
        },
        {
            "product": "65c09ac91d4efb377d475e88",
            "quantity": 1
        }
    ],
    "paymentMethod": "credit"
}
```

Returns the created order and the remaining credit of the user.

``` json
{
    "order": {
        "user": "65c092e67aaecf4937ffad2f",
        "products": [
            {
                "product": "65c09ac91d4efb377d475e80",
                "quantity": 2,
                "price": 50,
                "_id": "65c254f540d44eb0cc170f24"
            },
            {
                "product": "65c09ac91d4efb377d475e88",
                "quantity": 1,
                "price": 20,
                "_id": "65c254f540d44eb0cc170f25"
            }
        ],
        "total": 120,
        "_id": "65c254f540d44eb0cc170f23",
        "date": "2024-02-06T15:49:09.251Z",
        "__v": 0
    },
    "credit": 260
}
```

## Users

- `/users/id/:id` returns user profile by id
- `/users/profile` returns current user profile (user must be logged in)

Returned user example

``` json
{
    "_id": "65c092e67aaecf4937ffad2f",
    "firstName": "Alice",
    "lastName": "Cooper",
    "isAdmin": false,
    "email": "alice@alice.al",
    "password": "$2a$05$r9mgGvs/h/d3xV1CWU1QuOh.7ujVdlSQnY6Uk//f6z/zub46UBTeu",
    "validated": true,
    "credit": 260,
    "points": 0,
    "__v": 0
}
```


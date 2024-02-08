# ByteBazaar API

**WORK IN PROGRESS**

Backend API to be consumed by the ByteBazaar video game online store.

This API can receive requests, make CRUD operation on the store's database and return data for the frontend.

It also has basic authentication and authorization.

```
Document version: 2
Last updated: 2024-02-08
```

# API

## Authentication

- **Route: `/auth/login`**
  - Action: Logs in the user and returns a token.
  - Verb: POST
  - Example: https://bytebazaar-api.onrender.com/auth/login
  - Requires email and password passed on request body.
```json
// Login request example
{
  "email": "alice@alice.al",
  "password": "alice"
}
```
- **Route: `/auth/register`**
  - Action: Begins user registration. Sends email with link to validate user.
  - Verb: POST
  - Example: https://bytebazaar-api.onrender.com/auth/register
  - Requires email, password, repeated password, first name and last name passed on request body.
``` json
// Register request example
{
  "email": "jane@jane.ja",
  "password": "jane",
  "repeatedPassword": "jane",
  "firstName": "Jane",
  "lastName": "Doe"
}
```
- **Route: `/auth/validate/:emailToken`**
  - Validates registered user with token sent by `/auth/register`
  - Verb: GET
---

## Game Titles

- **Route: `/gameTitles/all`**
  - Action: Returns array with all Game Titles. 
  - Verb: GET
  - Example: https://bytebazaar-api.onrender.com/gameTitles/all

- **Route: `/gameTitles/:id`**
  - Action: Returns one Game Title by it's id.
  - Verb: GET
  - Example: https://bytebazaar-api.onrender.com/gameTitles/65be7fb98709074a53fa39df

- **Route: `/gameTitles/create`**
  - Action: Creates one Game Title and returns it.
  - Verb: POST
  - Example: https://bytebazaar-api.onrender.com/gameTitles/create
  - Accepts Json data on the request body.
``` json
// Example body to create Game Title
{
  "title": "Final Fantasy III",
  "description": "Save the World from Kefka!",
  "image": "https://cdn.mobygames.com/covers/3906896-final-fantasy-iii-snes-front-cover.jpg",
  "genres": ["role", "adventure"]
}
```
- **Route: `/gameTitles/updateGenres/:id`**
    - TODO: Generalize this route so it can update all fields of the Game Title, including adding and removing genres.
    - TESTED 2024-02-08, NOT INSERTING THE GENRES ON THE GAME TITLE
  - Action: Adds genres to one Game Title. Genres must already exist on the database.
  - Verb: PATCH
  - Example: https://bytebazaar-api.onrender.com/gameTitles/updateGenres/65be7fb98709074a53fa39df
  - Accepts an array of 'genres' on the request body. Genres must already exist on the database.
``` json
// Example body to update Game Title:
{
    "genres": [
        "fight",
        "sandbox"
    ]
}
```

## Genres

- **Route: `/genres/all`**
  - Action: Returns array with all existing genres
  - Verb: GET

- **Route: `/genres/create`** - TODO (Not implemented)
  - Action: Creates genres
  - Verb: POST

## Orders

- **Route: `/orders/:uderId`**
    - **NOTE: WILL BE DEPRECATED IN FAVOR OF REFERENCING THE ORDERS IN THE USER MODEL**
  - Verb: GET
  - Action: Returns all orders by user id
  - Example: https://bytebazaar-api.onrender.com/orders/65c092e67aaecf4937ffad2f

## Products

**NOTE** / **TBD**: I think the `/buy` route should belong to `/orders` instead of `/products`.

- **Route: `/procucts/all/`**
  - Verb: GET
  - Action: Returns an array of all existing products.
  - Example: https://bytebazaar-api.onrender.com/products/all

- **Route: `/products/:id/`**
  - Verb: GET
  - Action: Returns one product by it's id.
  - Example: https://bytebazaar-api.onrender.com/products/65c092e67aaecf4937ffad34?

- **Route: `/products/related/:id`**
  - Verb: GET
  - Action: Accepts a products id as a parameter, returns an array of related products
  - Example: https://bytebazaar-api.onrender.com/products/related/65c092e67aaecf4937ffad34?

- **Route: `/products/recommended`**
  - Verb: GET
  - Action: Returns an array of recommended products, based on the user's last order. If the user has no orders, returns the most recent products.
  - Example: https://bytebazaar-api.onrender.com/products/recommended
  - USER MUST BE LOGGED IN

- **Route: `/products/buy`**
  - Verb: POST
  - Action: Creates an order. A user must be logged in.
  - Example: https://bytebazaar-api.onrender.com/products/buy
  - Accepts order data in the request body.

```json
// Order data example, passed in the request body
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

## Users

- **Route: `/users/id/:id`**
  - Verb: GET
  - Returns user profile by id
  - Example: https://bytebazaar-api.onrender.com/users/id/65c092e67aaecf4937ffad2f

- **Route: `/users/profile`**
  - Verb: GET
  - Returns current user profile (user must be logged in)
  - Example: https://bytebazaar-api.onrender.com/users/profile

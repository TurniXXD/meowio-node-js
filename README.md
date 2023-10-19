# Meowio blogging engine

- Multitenancy blogging engine allows multiple tenants to use the same backend and deploy their own blog
- Tenant first sends request for creation to backend with credentials. Tenant is also given single owner user, that he can use to access his blog with management privileges. His user is not given a role, that would require column with same records for all users except one, but his ownership is checked by verifying same ceredentials for tenant and user on login request.

## Setup

- Copy or rename the `.env.example` files in client and server
- Start DB container `docker-compose up -d`
- Install packages `pnpm i`
- Run the client and the server concurrently in watch mode `pnpm start`
- Server will automatically create database schema, run seed after it is initialized `cd server && pnpm db:seed`

- To sign in as owner use these credentials

``` txt
username: smart@guy.dev
password: B3H_appy
```

- To sign in as user use these credentials

``` txt
username: not_that_smart@guy.dev
password: St4y_sad
```

## Playground

- Example login mutation

```gql
mutation login($username: String!, $password: String!) {
  login(
    input: {username: $username, password: $password}    
  ) {
    access_token
    expires_in
    token_type
  }
}
```

- Provide `X-API-KEY` header in HTTP HEADERS

```json
{
  "X-API-KEY": "af36f597-2455-42b2-96c6-c120ce3953a7"
}
```

- And QUERY VARIABLES

```json
{"username": "smart@guy.dev", "password": "B3H_appy"}
```

- I found some differences between the figma design and the github assignment. It is possible that I just misunderstood the assignemnt. I try to be the smartest but sometimmes I fail. Whenever there was a difference I preferred to use the solution in swagger as a source of truth.
- This is the list of things I didn't understand, and I would be open to contemplating or discussing these things with someone:
  - There was email in login form in figma, but there is username in swagger
  - In one example is perex and in different one is content
  - Maybe it is just a design thing, but it was strange to me, that even though it is single user blog there was author specified in every article
  - There was __log in__ button on articles route in figma, but this route is protected in swagger, so I assumed that user can't view articles without signing in

- I really don't like to rush things, and I want to be sure about what I am doing. I was hoping that I could do more, but I didn't have the time.
- I believe that this project shows some of my abilities, and I am excited about your code review

## Project roadmap

1. Visualize project in whimsical
2. Visualize database structure
3. Init repo with [python script](https://github.com/TurniXXD/py-repo-init)
4. Setup monorepo with pnpm
5. Create basic routing with react router
6. Setup i18n
7. Create basic types with type orm
8. Connect to DB and synchronize
9. Create API routes
10. Setup authorization on server
11. Setup swagger
12. Setup client - server authorization
13. Image upload
14. Create article
15. Get all articles
16. Show single article details
17. Update auth setup to allow for separate handeling of user and owner
18. Add GraphQL usage example, ability to update or remove articles from playground
19. Seed DB script and mock data

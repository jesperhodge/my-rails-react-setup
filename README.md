# A Rails 5 and React 16 boilerplate

### Libraries / Gems used:
- yarn
- React Router (a slight hassle to remove)
- MaterialUI / easily removable
- Clearance gem: adds simple signUp and Email functionality for users, easily configurable, can be removed easily as well

### Functionality already set up:
- User model
- roles and teams for users
- Signup and Login backend
- an empty frontend with some space for stuff and a header using material-ui (easy to change, you can replace material-ui)

### Functionality that really needs to be added or customized:
- Build a frontend for your signup the way you prefer it
- Refactor the whatwg-fetch call that allows you to send requests to your rails server
- a database that is not mysqlite (for production at least), e.g. mysql or better, postgres
- require / allow authentication
- the copyright line at the bottom of the page is just for fun, you can remove it or do whatever you want, the license is MIT.

### Setup (incomplete instructions)
- install ruby (2.3.3)
- `bundle install`
- install Node if you haven't
- install yarn
- `yarn install`
- copy config/database.example.yml into database.yml (change what you see fit)
- `bin/rails db:setup`
- `bin/rails server`
- in a new terminal tab: `bin/webpack-dev-server`
- open localhost:3000 in the browser.

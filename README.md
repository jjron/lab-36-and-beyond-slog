# Lab-36 Firebase auth

Firebase authentication differs from Mongo in that we don't need to create a user model or fleshed-out routes for signup and login. With Mongo, once a user signed up or logged in they would stay logged in and the token would be open for use by others to make requests. With Firebase once a token is generated the user is "logged out", meaning the token no longer persists in localStorage as it did with Mongo.

### Sass Doc
- `::before` and `::after` pseudo-selectors insert content before or after the selected element
- position
  - `static` - default position value, elements display in order, top to bottom, first to last
  - `relative` - allow offsets to top, bottom, left, right relative to the element's normal position
  - `absolute` - allow offsets to top, bottom, left, right relative to the closest parent element with a `position: relative;`
  - `fixed` - fixes the element's position in the viewport even when scrolling
- display
  - `inline`
    - elements can be placed to the right and left of each other
    - margin/padding: left and right, but not top or bottom
    - no width or height value
  - `block`
    - elements take up 100% page width
    - can set all margin/padding, width/height values
  - `inline-block`
    - elements can be placed to the right and left of each other
    - can set all margin/padding, width/height values

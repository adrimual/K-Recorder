# The Consult


## Description

"The consult" is a social media application made for those who want to share their problems with others writting or with audios. Maybe someone can find you a solution, who knows...

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault.
- **Index** - As a user I want to be able to access the Index and see the users' posts, log in and sign in.
- **sign up** - As a user I want to sign up on the web page so that I can see other people's posts and comment them.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account.
- **logout** - As a user I want to be able to log out so that I can make sure no one will access my account.
- **edit user** - As a user I want to be able to edit or delete my profile.
- **posts listing** - As a user I want to see more details of the posts.
- **comment posts** - As a user I want to be able to comment a post.
- **Record and upload** - As a user I want to record myself and uploaded it on my profile
  ​
  ​
  ​

## Server Routes (Back-end):

| **Method** | **Route**                      | **Description**                                                          | Request - Body                             |
| ---------- | ------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------ |
| `GET`      | `/`                            | First app show.                                                          |                                            |
| `GET`      | `auth/login`                   | Renders `login` form view.                                               |                                            |
| `POST`     | `auth/login`                   | Sends Login form data to the server.                                     | { email, password }                        |
| `GET`      | `auth/signup`                  | Renders `signup` form view.                                              |                                            |
| `POST`     | `auth/signup`                  | Sends Sign Up info to the server and creates user in the DB.             | { name, email, password }                  |
| `GET`      | `profile/userprofile`          | Private route. Renders `profile` form view.                              |                                            |
| `GET`      | `edit/edit-profile`            | Private route. Renders `edit-profile` form view.                         |                                            |
| `POST`     | `edit/edit-profile`            | Private route. Sends edit-profile info to server and updates user in DB. | { name, email, password, profilepic, bio } |
| `GET`      | `edit/favorites`               | Private route. Render the `favorites` view.                              |                                            |
| `POST`     | `edit/edit-profile/delete/:id` | Private route. Deletes de current user.                                  |                                            |
| `POST`     | `private/favorites/:songtId`   | Private route. Deletes the existing favorite from the current user.      |                                            |
| `DELETE`   | `private/songs/:songId`        | Private route. Deletes the existing songs from the current user.         |                                            |
| `GET`      | `search`                       | Renders `search-bar` view.                                               |                                            |
| `GET`      | `search/details/:id`           | Render `song` view with the particular video.                            |                                            |
| `GET`      | `auth/logout`                  | Kills the current session                                                |                                            |
|            |                                |                                                                          |                                            |

​
​
User model
​

```
{
  name: {type: String},
  email: {type: String, required: true},
  password: {type: String, required: true},
  posts:[{type: Schema.Types.ObjectId, ref: "Song"}],
  profilepic: {type: String, default: "../public/images/avatar.png"},
  favouriteSongs: [{type: Schema.Types.ObjectId, ref: "Song"}],
  bio:{type:String}
}
```

Songs
​

```
{
  artist: {type: String},
  userId: {type: Schema.Types.ObjectId, ref: "User"},
  title: {type: String},
  song: {type: String},
  description:{type:String}
​
},{
  timestamp:true
}
```

## Backlog

[See the Trello board.](https://trello.com/b/Ni3giVKf/ironhackproject)
​
​
​

## Links

### Git

The url to your repository and to your deployed project
​
[Repository Link](https://gist.github.com/ross-u/8f91ec13aeaf35a1ba7603848284703f)
​
[Deploy Link](https://k-recorder.herokuapp.com/)
​
​
​

### Prezi

The link to the presentation
​
[Prezi link](https://prezi.com/lxa9rptr8rlf/?utm_campaign=share&utm_medium=copy)

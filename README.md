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

- **Record and upload** - As a user I want to record myself and uploaded it on my profile.

- **Delete post** - As a user I want to be able to delete my posts.
  
  

## Server Routes (Back-end):

| **Method** | **Route**                      | **Description**                                              | Request - Body                             |
| ---------- | ------------------------------ | ------------------------------------------------------------ | ------------------------------------------ |
| `GET`      | `/`                            | First app show.                                              |                                            |
| `GET`      | `auth/login`                   | Renders `login` form view.                                   |                                            |
| `POST`     | `auth/login`                   | Sends Login form data to the server.                         | { email, password }                        |
| `GET`      | `auth/signup`                  | Renders `signup` form view.                                  |                                            |
| `POST`     | `auth/signup`                  | Sends Sign Up info to the server and creates user in the DB. | { name, email, password }                  |
| `GET`      | `profile/userprofile`          | Private route. Renders `profile` form view.                  |                                            |
| `GET`      | `edit/edit-profile`            | Private route. Renders `edit-profile` form view.             |                                            |
| `POST`     | `edit/edit-profile`            | Private route. Sends edit-profile info to server and updates user in DB. | { name, email, password, profilepic, bio } |
| `GET`      | `index`                        | Renders the Index view                                       |                                            |
| `POST`     | `edit/edit-profile/delete/:id` | Private route. Deletes de current user.                      |                                            |
| `POST`     | `private/favorites/:songtId`   | Private route. Deletes the existing favorite from the current user. |                                            |
| `DELETE`   | `private/songs/:songId`        | Private route. Deletes the existing songs from the current user. |                                            |
| `GET`      | `search`                       | Renders `search-bar` view.                                   |                                            |
| `GET`      | `search/details/:id`           | Render `song` view with the particular video.                |                                            |
| `GET`      | `auth/logout`                  | Kills the current session                                    |                                            |
| `GET`      | `add`                          | Renders the add audio view                                   |                                            |
| `POST`     | `add`                          | Adds the file to the DB                                      |                                            |
| `GET`      | `audio`                        | Renders the audio view                                       |                                            |
| `GET`      | `comments/:_id`                | Gets the current ID of the post and renders the comments view | populate from User model                   |
| `POST`     | `comments/:_id`                | Sends the comment to the DB                                  |                                            |



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



## Project structure

```
The-Consult/
├── .gitignore
├── app.js
├── bin
│   └── www
├── config
│   └── cloudinary.js
|	└── cloudinary-audio.js
├── models
│   ├── song.js
│   └── user.js
├── public
|	├── fonts
│   ├── images
│   ├── js
│   └── stylesheets
│       └── style.scss
├── package.json
├── routes
|	├── uploads
│   ├── add.js
│   ├── auth.js
│   ├── audio.js
│   ├── edit-profile.js
│   ├── home.js
│   ├── index.js
│   ├── logout.js
│   ├── post.js
│   ├── profile.js
│   ├── users.js
└── views
    ├── auth
    |	└── login.hbs
    │   └── signup.hbs
    ├── partials
    |		├── navbar.hbs
    |		├──	songcardIndex.hbs
    |		└── songcardIndex.hbs
    ├── profiles
    │   ├── edit-profile.hbs
    |	└── userprofile.hbs
    ├── add.hbs
    ├── audio.hbs
    ├── comments.hbs
    ├── profile.hbs
	├── error.hbs
	├── home.hbs
    ├── index.hbs
    ├── layout.hbs
    ├── search.hbs

```

## Backlog

[See the Trello board.](https://trello.com/b/gxk0HFRL/the-consult)



## Links

### Git

[Repository Link](https://gist.github.com/ross-u/8f91ec13aeaf35a1ba7603848284703f)
​
### Deploy
[Deploy Link](https://k-recorder.herokuapp.com/)
​
### Prezi
The link to the presentation
​
[Prezi link](https://prezi.com/lxa9rptr8rlf/?utm_campaign=share&utm_medium=copy)

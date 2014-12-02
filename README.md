Carabiner
=========
A grunt setup for clipping your web projects together.

Installation
------------
1. Clone the project
2. Run `npm install`
3. There is no step 3, get developing!

Development Groove
------------------
1. Run `grunt dev`
2. Write some html or haml into `html/` and save it
3. See your awesome page at `localhost:8080`
4. Add js and css or sass in the js and css folders
5. Notice how sass, css, js, html, haml, etc. are all compiled into /dist each time you save and think how awesome this is!
6. ???
7. Run `grunt` to do one last test, cleanup and build before sending your exceptional files to your server


Tasks
-----
|   Command  |                                         Action                                        |
|:----------:|:-------------------------------------------------------------------------------------:|
| grunt      | Full build: run tests, lint, concatenate and minify for distribution                  |
| grunt test | Run jamine and jshint                                                                 |
| grunt dev  | Run a webserver on localhost:8080 and recompile JS and CSS files when any are changed |

Config
------
- Define new tasks in `grunt/aliases.yaml`

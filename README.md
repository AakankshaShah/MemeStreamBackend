# MemeStreamBackend
I welcome you all to my full stack web application “Meme Stream”- a social media website built exclusively for memes.
Memes have become a daily source of entertainment for the millennium generation so we definitely should have a platform specifically dedicated to them.
The tech stack used here is -MERN.
MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.
•	MongoDB - document database
•	Express(.js) - Node.js web framework
•	React(.js) - a client-side JavaScript framework
•	Node(.js) - the premier JavaScript web server
Project directory structure:
•	Client:Frontend files
•	Server:Backend files
•	test_server.sh:To test the server
•	install.sh:To install the app
•	server_run.server:To run the server
•	sleep.sh:Used in testing the server
Inside the client:
•	The Form.js has the structure for the form
•	The Posts.js has the structure for all the posts
•	The Post.js has the structure for a singular post.
Meme stream has 3 required fields:
1.	Owner
2.	Caption
3.	Meme URL
Owner ,caption,meme url together act as the primary key for my database so to avoid duplicate data.
In addition to these I also have additional features like :
•	Liking a meme
•	Editing meme(without tempering with owner’ name)
•	Deleting a meme
•	Showcasing date of creation of meme
It shows the latest 100 memes on the page one below the other.
For starting the frontend ,navigate to client and install required dependencies and hit npm start.
For starting the backend ,navigate to server and install required dependencies and hit npm start.

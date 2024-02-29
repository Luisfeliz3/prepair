import db from "../models/index.js";


// Defining methods for the userController
export default {

   login: async (req, res) =>{
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
         _id: req.user._id,
         username: req.user.username,
         email: req.user.email,
         // comments: req.user.comments
      });
   },

   // Route (controller) for signing up a user. The user's password is automatically hashed and stored securely thanks to
	// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
	// otherwise send back an error
   signup: async (req, res) => {
		db.Users.create({
		// db.User.insertOne({
         username: req.body.username,
			email: req.body.email,
         password: req.body.password,
		})
      .then(() => {res.redirect(307, "/api/user/login") })
      .catch((err) => { res.status(401).json(err) });
   },
   
   // to be implemented in the front end
   logout: async (req, res) => {
		  // Set the token cookie to 'none' and expire after 5 seconds
        req.logout();
        res.redirect("/login");
        res.cookie('token', 'none', {
         expires: new Date(Date.now() + 5 * 1000), // 5 seconds
         httpOnly: true,
         
      }
      
      );
      res.status(200).json({ success: true, message: 'User logged out successfully' });
   },
   
   authenticate: async ( req, res)=> {
      // The user is not logged in, send back an empty object
      return !req.user
         ? res.status(401).end("user isn't logged in")
         // Otherwise send back the user's email and id
         // Sending back a password, even a hashed password, isn't a good idea
         : res.json({
               _id: req.user._id,
               username: req.user.username,
               email: req.user.email,
               // comments: req.user.comments
         })
   }

}

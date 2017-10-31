var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');

//CONNECT MONGOOSE
mongoose.connect('mongodb://localhost/starsdb');
// Use body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//MAKE MODEL
var StarSchema = new mongoose.Schema({
  author: {type: String, required:[true], minlength: 2},
  description: {type: String, required:[true, "Description must be at least 8 characters."], minlength: 8},
  title: {type: String, required:[true], unique: true},
  note: [{
      description: {type: String},
      author: {type: String}
  }],
  noteCount: {type: Number}
},{timestamps: true})

mongoose.model("Star", StarSchema);
var Stars =  mongoose.model('Star');

mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/public/bower_components'));
app.use(express.static(__dirname + '/public/dist'));

// Dashboard shows all the documents in the schema
app.get('/starDashboard', function(req, res){
    Stars.find({}, function(err, data){
        if(err){
            console.log('There was an error', err);
        }
        else {
            return res.json(data);
        }
    })
})

// topStars limits the query to 5 documents and grabs the ones with the most notes
app.get('/topStars', function(req, res){
    Stars.find({}, {}, {limit: 5, sort: {'noteCount': -1}}, function(err, data){
        if(err){
            console.log('There was an error', err);
        }
        else {
            return res.json(data);
        }
    })
})

// Creates a new document with required information
app.post('/createStar', function(req, res){
	console.log(req.body)
	var star = new Stars({title: req.body.title, author: req.body.author, description: req.body.description, noteCount: req.body.noteCount});
	star.save(function(err, results){
		if(err){
			return res.json(err)
		}
		else{
			console.log("I saved!")
			return res.json(results)
		}
	})
})

app.get('/show/:id', function(req, res){
	Stars.findOne({_id: req.params.id}, function(err, results){
		if(err){
			return res.json(err);
		}
		else{
			return res.json(results);
		}
	})
})

app.delete('/delete/:id', function(req, res){
	console.log(req.params.id);
	Stars.findByIdAndRemove({_id: req.params.id}, function(err, results){
		if(err){
			return res.json(err);
		}
		else{
			console.log("Document has been deleted");
			return res.json(results);
		}
	})
})

app.patch('/update/:id', function(req, res){
	console.log(req.body);
	Stars.update({_id: req.params.id}, {title: req.body.title, description: req.body.description}, function(err, results){
		if(err){
			return res.json(err);
		}
		else{
			console.log("Star has been updated");
			return res.json(results);
		}
	})
})

app.patch('/addNote/:id', function(req, res){
    console.log("the body: ",req.body);
    Stars.update({_id: req.params.id}, {'$push': {note: {description: req.body.description, author: req.body.author}}}, function(err, results){
        if(err){
            console.log("can't update", req.params.id)
            console.log(err)
            return res.json(err);
        }
        else{
            Stars.update({_id: req.params.id}, {$inc: {noteCount:1}}, function(err, final){
                if(err){
                    console.log("Can't increment");
                }
                else{
                    console.log("It finally works");
                    return res.json(final)
                }
            })
        }
    })
})

app.get('*', function(req, res){
	res.redirect('/');
})

app.listen(8000, function(){
    console.log('Server running on port 8000');
})

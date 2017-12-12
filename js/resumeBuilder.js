var bio = {
	'name': 'Jesus Bibieca',
	'age': 21, 
	'skills': ['Programming', 'Python', 'JS', 'CSS', 'Fast Learner', 'Passionate'],
	'role': 'Full Stack Developer',
	'contacts':{
		'tel': '809-222-2219',
		'cel': '829-939-4555',
		'github': 'https://github.com/jesusbibieca',
		'mail': 'jesusbibieca52@gmail.com',
		'location': 'Santo Domingo'
	},
	'picture': 'https://lh3.googleusercontent.com/-jvfcuYhGlVE/Wfi_ObBNf_I/AAAAAAAAAs0/aJG7Bu4S-8wcBppn7wGEUx3i-a3BtkiqACEwYBhgL/w139-h140-p/Profile.PNG',
	'message': 'This is the welcome msg for now.'
};

var work = {
	'jobs':[
	{
		'position': 'Electronic Technician',
		'employer': 'Telesistema 11',
		'years': 0.5,
		'location': 'Santo Domingo, DN',
		'date': '2017',
		'description': 'T11 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
	},
	{		
		'position': 'CSR',
		'employer': 'Convergys',
		'years': 2,
		'location': 'Santo Domingo, DN',
		'date': '2014-2016',
		'description': 'CVG Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
	},
	{	
		'position': 'Chat CSR',
		'employer': 'ERC',
		'years': 1.5,
		'location': 'Santo Domingo, DN',
		'date': '2016-2017',
		'description': 'ERC Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
	}
]};
var education = {
	'schools': [
	{
		'name': 'Universidad APEC',
		'years': '2014-2017',
		'"location': 'Santo Domingo',
		'mayor': 'Software Engineering',
		'dates': 2014,
		'url': 'unapec.edu.do' 
	}
	],
	'onlineCourses': [
	{
		'title': 'Intro to Computer Science',
		'school': 'Udacity',
		'date': 2017,
		'url': 'https://classroom.udacity.com/courses/cs101'
	},
	{
		'title': 'How to use Git and Github',
		'school': 'Udacity',
		'date': 2017,
		'url': 'https://classroom.udacity.com/courses/ud775'
	},
	{
		'title': 'Programming Foundations with Python',
		'school': 'Udacity',
		'date': 2017,
		'url': 'https://classroom.udacity.com/courses/ud036'
	},
	{
		'title': 'JavaScript Basics',
		'school': 'Udacity',
		'date': 2017,
		'url': 'https://classroom.udacity.com/courses/ud804'
	}
	]
};
var projects ={
	'python':[
	{
		'name': 'some name',
		'description': 'something about it',
		'url': 'url'
	}]
};
var bioPic = HTMLbioPic.replace('%data%', bio.picture);
$('#header').append(bioPic);

var formattedName = HTMLheaderName.replace('%data%', bio.name);
$('#header').append(formattedName);

var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
$('#header').append(formattedRole);

if (bio.skills){
	// console.log(bio.skills.length);
	$('#header').append(HTMLskillsStart);
	for(var x = 0; x < bio.skills.length; x++){
		var formattedSkill = HTMLskills.replace('%data%', bio.skills[x]);
		$('#skills').append(formattedSkill);
	}
};

for(each in work.jobs){
	// console.log('done');
	$('#workExperience').append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[each].employer);
	var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[each].position)
	var result = formattedEmployer.concat(formattedTitle);
	var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[each].location);
	var formattedDate = HTMLworkDates.replace('%data%', work.jobs[each].date);
	var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[each].description);
	$('.work-entry:last').append(result);	
	$('.work-entry:last').append(formattedLocation);	
	$('.work-entry:last').append(formattedDate);	
	$('.work-entry:last').append(formattedDescription);
};

$(document).click(function(loc){
	logClicks(loc.pageX, loc.pageY);
	// console.log();
});

$('#main').append(internationalizeButton);

function inName(name){
	names = name.split(' ');
	fName = names[0].substring(0,1).toUpperCase() + 
	names[0].substring(1).toLowerCase();
	lName = names[1].toUpperCase();

	return fName + ' ' + lName;
};

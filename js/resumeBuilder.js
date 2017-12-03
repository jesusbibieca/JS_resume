//$("#main").append("Jesus Bibieca");
var name = 'Jesus Bibieca';
var formattedName = HTMLheaderName.replace('%data%', name);
$('#header').append(formattedName);

var role = 'Full Stack Developer';
var formattedRole = HTMLheaderRole.replace('%data%', role);
$('#header').append(formattedRole);

var skills = ['Programming', 'Python', 'JS', 'CSS', 'Fast Learner', 'Passionate'];
// $('#main').append(skills.length);

var bio = {
	'name': 'Jesus',
	'age': 21,
	'skills': skills,
	'role': 'Full Stack Developer',
	'tel': '809-222-2219',
	'cel': '829-939-4555',
	'github': 'https://github.com/jesusbibieca',
	'mail': 'jesusbibieca52@gmail.com',
	'picture': 'https://lh3.googleusercontent.com/-jvfcuYhGlVE/Wfi_ObBNf_I/AAAAAAAAAs0/aJG7Bu4S-8wcBppn7wGEUx3i-a3BtkiqACEwYBhgL/w139-h140-p/Profile.PNG',
	'message': 'This is the welcome msg for now.'
};
$('#main').append(bio.name);

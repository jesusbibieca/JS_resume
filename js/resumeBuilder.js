//$("#main").append("Jesus Bibieca");
var name = 'Jesus Bibieca';
var formattedName = HTMLheaderName.replace('%data%', name);
$('#header').append(formattedName);

var role = 'Full Stack Developer';
var formattedRole = HTMLheaderRole.replace('%data%', role);
$('#header').append(formattedRole);

var skills = ['Awesomeness', 'Programming', 'Python', 'JS'];
$('#main').append(skills);
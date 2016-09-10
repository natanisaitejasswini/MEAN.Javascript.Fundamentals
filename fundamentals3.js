// person object
function personConstructor(name){
	var person= {
		name: name,
		distance_travelled: 0,
		say_name: function(){console.log(this.name)},
		say_something: function(pass_phrase){console.log(this.name + ' says ' + pass_phrase )},
		walk: function(){console.log(this.name + ' is walking '); this.distance_travelled += 3;},
		run: function(){console.log(this.name + ' is running '); this.distance_travelled += 10;},
		crawl: function(){console.log(this.name + ' is crawliing '); this.distance_travelled += 1;},
	}
	return person;
}
var jay = personConstructor('jay');
console.log(jay);
jay.say_name();
jay.say_something('i am cool');
jay.walk();
console.log(jay.distance_travelled);
jay.run();
console.log(jay.distance_travelled);
jay.crawl();
console.log(jay.distance_travelled);
console.log('+++++++++++++++')

// Ninjas construction
function ninjaConstuctor(name,cohort){
	var ninja = {
		name:name,
		cohort:cohort,
		belt_level: 0,
		status: function(){
			var belt_names = ['yellow','red','black'];
			console.log(name + ' is now a ' + belt_names[ninja.belt_level] + ' belt!');
		},
		level_up: function(){
			ninja.belt_level += 1;
			ninja.status();
		},
	}
	ninja.status();
	return ninja;
}
var teju = ninjaConstuctor('teju','july');
teju.level_up();
teju.level_up();
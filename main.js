function sound_Started()
{
	navigator.mediaDevices.getUserMedia({audio: true});
	classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/cDFeXCOFI/model.json", modelReady);
} 

function modelReady()
{ 
	classifier.classify(gotResults); 
}

var cat = 0;
var dog = 0;
var goat = 0;
var elephant = 0;
var Background_Noise = 0;

function gotResults(error, results)
{
	if(error)
	{
		error = console.log("It is not working")
		console.error(error);
	}
	else{
		console.log(results);
		random_number_r = Math.floor(Math.random() * 255) + 1;
		random_number_g = Math.floor(Math.random() * 255) + 1;
		random_number_b = Math.floor(Math.random() * 255) + 1;

		console.log("Red - "+random_number_r);
        console.log("Green - "+random_number_g);
        console.log("Blue - "+random_number_b);

		document.getElementById("object_animal").innerHTML = "Detected voice is of - "+results[0].label;
		document.getElementById("object_animal").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+");";
        document.getElementById("animal_detector").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
		document.getElementById("animal_detector").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace'

		img = document.getElementById("pet_images");
		

		if (results[0].label == "cat")
		{
			img.src = "cat.jpg";
			cat = cat + 1;
			ocument.getElementById("animal_detector").innerHTML = "Detected cat - "+ cat;
		}
		else if (results[0].label == "dog")
		{
			img.src = "dog.jpg"
			dog = dog + 1;
			document.getElementById("animal_detector").innerHTML = "Detected Dog - "+ dog;
		}
		else if (results[0].label == "elephant")
		{
			img.src = "elephant.jpg";
			elephant = elephant + 1;
			document.getElementById("animal_detector").innerHTML = "Detected elephant - "+ elephant;
		}
		else if (results[0].label == "goat")
		{
			img.src = "goat.jpg";
			goat = goat + 1;
			document.getElementById("animal_detector").innerHTML = "Detected goat - "+ goat;
		}
		else
		{
			img.src = "sound.gif";
			Background_Noise = Background_Noise + 1;
			document.getElementById("animal_detector").innerHTML = "Detected Background Noise - "+ Background_Noise;
		}
	}
}
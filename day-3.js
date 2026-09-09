let describeBtn = document.getElementById("describe-btn");
let outputArea = document.getElementById("output");
	function showPet(pet) {
		outputArea.textContent = pet.name + " comes from " + pet.origin + ".";
	}
	describeBtn.addEventListener("click", function () {
		showPet(pets[0]);
});
	
	describeBtn.addEventListener("click", function () {
		let randomIndex =
		Math.floor(Math.random() * pets.length);
			showPet(pets[randomIndex]);
});
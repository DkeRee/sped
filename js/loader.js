const content = document.getElementById("content");
const buttons = document.getElementsByClassName("selector-button");
const sublinks = ["introduction/introduction", "speedTest/speedTest", "settings/settings"];

//initialize page content to default to About Me
$(content).load("pages/introduction/introduction.html");


for (var i = 0; i < buttons.length; i++) {
	const link = sublinks[i];

	buttons[i].addEventListener("mousedown", () => {
		$(content).load(`pages/${link}.html`);
	});
}

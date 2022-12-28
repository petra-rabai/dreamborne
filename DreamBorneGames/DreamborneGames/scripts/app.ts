function sayHello() {
	const name = (document.getElementById("name") as HTMLInputElement).value;

	return "Hello" + name;
}
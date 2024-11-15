class MainPageNumber {
	mainNumber = $state(1);

	increment() {
		this.mainNumber++;
	}
}

export const mainPageNumber = new MainPageNumber();

class ComponentPageNumber {
	componentNumber = $state(100);

	decrement() {
		this.componentNumber--;
	}
}

export const componentPageNumber = new ComponentPageNumber();

class BackgroundSingleton {
	private static instance: BackgroundSingleton;
	private currentBackground: string | null = null;

	private constructor() {
		// Private constructor to prevent direct construction calls
	}

	public static getInstance(): BackgroundSingleton {
		if (!BackgroundSingleton.instance) {
			BackgroundSingleton.instance = new BackgroundSingleton();
		}
		return BackgroundSingleton.instance;
	}

	setBackground(background: string): void {
		this.currentBackground = background;
	}

	getBackground(): string | null {
		return this.currentBackground;
	}
}

const CurrentBackgroundSingleton = BackgroundSingleton.getInstance();
export default CurrentBackgroundSingleton;
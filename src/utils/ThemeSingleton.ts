class ThemeSingleton {
	private static instance: ThemeSingleton;
	private currentTheme: string | null = null;

	private constructor() { }

	public static getInstance(): ThemeSingleton {
		if (!ThemeSingleton.instance) {
			ThemeSingleton.instance = new ThemeSingleton();
		}
		return ThemeSingleton.instance;
	}

	setTheme(theme: string | null): void {
		this.currentTheme = theme;
	}

	getTheme(): string | null {
		return this.currentTheme;
	}
}

const themeSingletonInstance = ThemeSingleton.getInstance();
export default themeSingletonInstance;
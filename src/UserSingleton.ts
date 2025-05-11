class UserSingleton {
	private static instance: UserSingleton;
	private currentUser: string | null = null;

	private constructor() { }

	public static getInstance(): UserSingleton {
		if (!UserSingleton.instance) {
			UserSingleton.instance = new UserSingleton();
		}
		return UserSingleton.instance;
	}

	setUser(User: string | null): void {
		this.currentUser = User;
	}

	getUser(): string | null {
		return this.currentUser;
	}
}

const UserSingletonInstance = UserSingleton.getInstance();
export default UserSingletonInstance;
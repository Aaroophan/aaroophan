class UserSingleton {
	private static instance: UserSingleton;
	private currentUser: any = null;

	private constructor() { }

	public static getInstance(): UserSingleton {
		if (!UserSingleton.instance) {
			UserSingleton.instance = new UserSingleton();
		}
		return UserSingleton.instance;
	}

	setUserName(userData: any): void {
		this.currentUser = userData;
	}

	getUserName(): any {
		return this.currentUser;
	}
}

const CurrentUserNameSingleton = UserSingleton.getInstance();
export default CurrentUserNameSingleton;
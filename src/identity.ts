interface ICurrentUser {
	id: string;
	isAuthenticated: boolean;
}

class CurrentUser implements ICurrentUser {
	public id: string;
	public isAuthenticated: boolean;

	public constructor() {
		this.id = "UID0009994";
		this.isAuthenticated = true;
	}
}

export const currentUser = new CurrentUser();

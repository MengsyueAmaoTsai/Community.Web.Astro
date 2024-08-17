interface ICurrentUser {
	id: string;
	email: string;
	isAuthenticated: boolean;
}

class CurrentUser implements ICurrentUser {
	id: string;
	email: string;
	isAuthenticated: boolean;

	public constructor(id: string, email: string, isAuthenticated: boolean) {
		this.id = id;
		this.email = email;
		this.isAuthenticated = isAuthenticated;
	}
}

export const currentUser = new CurrentUser(
	"UID0009994",
	"community@richillcapital.com",
	true,
) as ICurrentUser;

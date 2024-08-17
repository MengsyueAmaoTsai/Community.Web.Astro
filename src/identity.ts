interface ICurrentUser {
	id: string;
	name: string;
	email: string;
	isAuthenticated: boolean;
}

class CurrentUser implements ICurrentUser {
	id: string;
	name: string;
	email: string;
	isAuthenticated: boolean;

	public constructor(
		id: string,
		name: string,
		email: string,
		isAuthenticated: boolean,
	) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.isAuthenticated = isAuthenticated;
	}
}

export const currentUser = new CurrentUser(
	"UID0009994",
	"Community User",
	"community@richillcapital.com",
	true,
) as ICurrentUser;

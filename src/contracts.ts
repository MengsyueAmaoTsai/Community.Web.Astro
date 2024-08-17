export type SignalSourceResponse = {
	id: string;
	name: string;
	description: string;
	isPublished: boolean;
	createdTime: Date;
};

export type SignalSourceDetailsResponse = SignalSourceResponse & {};

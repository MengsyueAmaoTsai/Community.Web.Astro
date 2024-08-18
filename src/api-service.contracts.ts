type TradingAppResponse = {
	id: string;
	name: string;
	description: string;
	category: string;
	createdTime: Date;
};

type SignalSourceResponse = {
	id: string;
	name: string;
	description: string;
	isPublished: boolean;
	createdTime: Date;
};

type SignalSourceDetailsResponse = SignalSourceResponse & {};

type TradingAppDetailsResponse = TradingAppResponse & {};

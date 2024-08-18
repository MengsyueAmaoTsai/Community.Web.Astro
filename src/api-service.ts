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

const BASE_ADDRESS = "http://localhost:11000";

interface IApiService {
	listTradingApps(): Promise<TradingAppResponse[]>;
	listSignalSources(): Promise<SignalSourceResponse[]>;
	getSignalSourceById(id: string): Promise<SignalSourceDetailsResponse>;
	getTradingAppById(id: string): Promise<TradingAppDetailsResponse>;
}

class ApiService implements IApiService {
	public getTradingAppById = async (
		id: string,
	): Promise<TradingAppDetailsResponse> => {
		const response = await fetch(`${BASE_ADDRESS}/api/v1/trading-apps/${id}`);

		if (!response.ok) {
			throw new Error("Failed to fetch trading app");
		}

		return response.json();
	};

	public getSignalSourceById = async (
		id: string,
	): Promise<SignalSourceDetailsResponse> => {
		const response = await fetch(`${BASE_ADDRESS}/api/v1/signal-sources/${id}`);

		if (!response.ok) {
			throw new Error("Failed to fetch signal source");
		}

		return response.json();
	};

	public listTradingApps = async (): Promise<TradingAppResponse[]> => {
		const response = await fetch(`${BASE_ADDRESS}/api/v1/trading-apps`);

		if (!response.ok) {
			throw new Error("Failed to fetch trading apps");
		}

		return response.json();
	};

	public listSignalSources = async (): Promise<SignalSourceResponse[]> => {
		const response = await fetch(`${BASE_ADDRESS}/api/v1/signal-sources`);

		if (!response.ok) {
			throw new Error("Failed to fetch signal sources");
		}

		return response.json();
	};
}

export const apiService = new ApiService() as IApiService;

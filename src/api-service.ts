type TradingAppResponse = { id: string };

type SignalSourceResponse = {
	id: string;
	name: string;
	description: string;
	isPublished: boolean;
	createdTime: Date;
};

const BASE_ADDRESS = "http://localhost:11000";

interface IApiService {
	listTradingApps(): Promise<TradingAppResponse[]>;
	listSignalSources(): Promise<SignalSourceResponse[]>;
}

class ApiService implements IApiService {
	public listTradingApps = async (): Promise<TradingAppResponse[]> => {
		throw new Error("Method not implemented.");
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

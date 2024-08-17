type TradingAppResponse = { id: string };

type SignalSourceResponse = {
	id: string;
	name: string;
	description: string;
	isPublished: boolean;
	createdTime: Date;
};

type SignalSourceDetailsResponse = SignalSourceResponse & {};

const BASE_ADDRESS = "http://localhost:11000";

interface IApiService {
	listTradingApps(): Promise<TradingAppResponse[]>;
	listSignalSources(): Promise<SignalSourceResponse[]>;
	getSignalSourceById(id: string): Promise<SignalSourceDetailsResponse>;
}

class ApiService implements IApiService {
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

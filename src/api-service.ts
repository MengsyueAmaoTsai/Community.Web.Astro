import type {
	SignalSourceDetailsResponse,
	SignalSourceResponse,
} from "./contracts";

interface IApiService {
	listSignalSources(): Promise<SignalSourceResponse[]>;
	getSignalSource(id: string): Promise<SignalSourceDetailsResponse>;
}

class ApiService implements IApiService {
	public listSignalSources = async (): Promise<SignalSourceResponse[]> => {
		const response = await fetch(
			"http://localhost:11000/api/v1/signal-sources",
		);

		if (!response.ok) {
			throw new Error("Failed to fetch signal sources");
		}

		return await response.json();
	};

	public getSignalSource = async (
		id: string,
	): Promise<SignalSourceDetailsResponse> => {
		const response = await fetch(
			`http://localhost:11000/api/v1/signal-sources/${id}`,
		);

		if (!response.ok) {
			throw new Error("Failed to fetch signal source details");
		}

		return await response.json();
	};
}

export const apiServiceSingleton = new ApiService();

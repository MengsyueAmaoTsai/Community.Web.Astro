interface IApiService {
	listTradingApps(): Promise<TradingAppResponse[]>;
	listSignalSources(): Promise<SignalSourceResponse[]>;
	getSignalSourceById(id: string): Promise<SignalSourceDetailsResponse>;
	getTradingAppById(id: string): Promise<TradingAppDetailsResponse>;
}

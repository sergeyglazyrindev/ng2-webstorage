import {Observable} from 'rxjs';

export interface StorageService {
	retrieve(key: string);
	
	store(key: string, value: any, expiresIn?: number);
	
	clear(key?: string);
	
	getStrategyName(): string;
	
	observe(key: string): Observable<any>;
}

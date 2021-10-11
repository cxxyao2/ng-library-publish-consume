import { Inject, Injectable, InjectionToken } from '@angular/core';

export interface ThirdPartyConfig {
  apiUrl: string;
  apiKey: string;
}

export const CustomConfig = new InjectionToken<ThirdPartyConfig>('config');

@Injectable({
  providedIn: 'root',
})
export class TestLightCalendarService {
  foo: string;

  constructor(@Inject('config') private config: ThirdPartyConfig) {
    this.foo = this.config.apiKey;
  }
}

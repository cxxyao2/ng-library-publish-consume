import { ModuleWithProviders, NgModule } from '@angular/core';
import { TestLightCalendarComponent } from './test-light-calendar.component';

import {
  ThirdPartyConfig,
  TestLightCalendarService,
} from './test-light-calendar.service';
@NgModule({
  declarations: [TestLightCalendarComponent],
  imports: [],
  exports: [TestLightCalendarComponent],
})
export class TestLightCalendarModule {
  static forRoot(
    config: ThirdPartyConfig
  ): ModuleWithProviders<TestLightCalendarModule> {
    // User config get logged here
    console.log(config);
    return {
      ngModule: TestLightCalendarModule,
      providers: [
        TestLightCalendarService,
        { provide: 'config', useValue: config },
      ],
    };
  }
}

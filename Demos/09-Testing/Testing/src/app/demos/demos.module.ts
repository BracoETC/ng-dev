import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemoService } from './demo.service';
import { FoodRowComponent } from './samples/integration-tests/food-row/food-row.component';
import { IntegrationTestComponent } from './samples/integration-tests/integration-test.component';
import { RatingPipe } from './samples/pipe/rating.pipe';
import { TestPipeComponent } from './samples/pipe/test-pipe.component';
import { FoodComponent } from './samples/simple-comp/food.component';
import { SimpleServiceComponent } from './samples/simple-service/simple-service.component';
import { UnitTestingComponent } from './samples/simple-tests/unit-testing.component';
import { FoodListComponent } from './samples/integration-tests/food-list/food-list.component';
import { SharedModule } from '../shared/shared.module';
import { UseMockComponent } from './samples/use-mock/use-mock.component';
import { ComponentEventsComponent } from './samples/component-events/component-events.component';
import { ComponentWriteComponent } from './samples/component-write/component-write.component';
import { MaterialComponent } from './samples/material/material.component';
import { Introe2eComponent } from './samples/introe2e/introe2e.component';
import { HttpTestsComponent } from './samples/http-tests/http-tests.component';
import { FoodHttpComponent } from './samples/http-tests/food-http/food-http.component';
import { SpyComponent } from './samples/spy/spy.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'unittesting', component: UnitTestingComponent },
      { path: 'testpipe', component: TestPipeComponent },
      { path: 'simpleservice', component: SimpleServiceComponent },
      { path: 'httptest', component: HttpTestsComponent },
      { path: 'simplecomp', component: FoodComponent },
      { path: 'integrationtests', component: IntegrationTestComponent },
      { path: 'mock', component: UseMockComponent },
      { path: 'component-events', component: ComponentEventsComponent },
      { path: 'component-write', component: ComponentWriteComponent },
      { path: 'harness', component: MaterialComponent },
      { path: 'e2e', component: Introe2eComponent },
      { path: 'spy', component: SpyComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    UnitTestingComponent,
    TestPipeComponent,
    FoodComponent,
    IntegrationTestComponent,
    SimpleServiceComponent,
    TestPipeComponent,
    RatingPipe,
    FoodComponent,
    FoodRowComponent,
    FoodListComponent,
    UseMockComponent,
    ComponentEventsComponent,
    ComponentWriteComponent,
    MaterialComponent,
    Introe2eComponent,
    HttpTestsComponent,
    FoodHttpComponent,
    SpyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
  ],
  providers: [DemoService],
})
export class DemosModule {}

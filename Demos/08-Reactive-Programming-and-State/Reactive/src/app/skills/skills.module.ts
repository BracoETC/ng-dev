import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
  EntityDataService,
  EntityDefinitionService,
  HttpUrlGenerator,
} from '@ngrx/data';
import { MaterialModule } from '../material.module';
import { CustomurlHttpGenerator } from './custom-url-generator';
import { SkillRowComponent } from './skill-row/skill-row.component';
import { SkillsContainerComponent } from './skills-container/skills-container.component';
import { SkillsDataService } from './skills-data.service';
import { SkillsEntityService } from './skills-entity.service';
import { SkillsKpiComponent } from './skills-kpi/skills-kpi.component';
import { entityMetadata } from './skills.metadata';
import { SkillsRoutingModule } from './skills.routing.module';

@NgModule({
  declarations: [
    SkillsContainerComponent,
    SkillsKpiComponent,
    SkillRowComponent,
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    SkillsEntityService,
    SkillsDataService,
    {
      provide: HttpUrlGenerator,
      useClass: CustomurlHttpGenerator,
    },
  ],
})
export class SkillsModule {
  constructor(
    entityDefinitionService: EntityDefinitionService,
    entityDataService: EntityDataService,
    skillsDataService: SkillsDataService
  ) {
    entityDefinitionService.registerMetadataMap(entityMetadata);
    entityDataService.registerService('Skill', skillsDataService);
  }
}

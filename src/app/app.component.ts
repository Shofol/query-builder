import { Component } from '@angular/core';
import { QueryBuilderConfig } from 'angular2-query-builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'query-builder';
  query = {
    condition: 'and',
    rules: [
      { field: 'name', operator: '=', value: 'Bob' },
      { field: 'gender', operator: '>=', value: 'm' }
    ]
  };

  queryConfig: QueryBuilderConfig = {
    fields: {
      name: { name: 'Name', type: 'string' },
      gender: {
        name: 'Gender',
        type: 'category',
        options: [
          { name: 'Male', value: 'm' },
          { name: 'Female', value: 'f' }
        ]
      }
    }

  }
}

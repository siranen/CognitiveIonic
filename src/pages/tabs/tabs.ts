import { Component } from '@angular/core';

import { UserPage } from '../user/user';
import { AnalysePage } from './../analyse/analyse';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UserPage;
  tab2Root = AnalysePage;

  constructor() {

  }
}

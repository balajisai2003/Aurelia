import {PLATFORM} from 'aurelia-framework'

export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Router Test';
    config.map([
      { route: ['','Home'], name: 'home', moduleId : PLATFORM.moduleName('index'), title:'Home' },
      { route: 'about', name: 'about', moduleId : PLATFORM.moduleName('about'), title:'Home' }

    ]);
  }
}
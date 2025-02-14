import {bindable} from 'aurelia-framework';

export class TodoList {
  @bindable value;

  valueChanged(newValue, oldValue) {
    //
  }
}

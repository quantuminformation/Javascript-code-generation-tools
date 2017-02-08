# Javascript-code-generation-tools

[DEMO](https://quantuminformation.github.io/Javascript-code-generation-tools/)

Helps do some of the repetitive stuff. Built with React

JSON:
* Generates ember data code from json.
* Generates ES6 classes code from json.
* Generates Typescript classes code from json.
* Generates Bootstrap 3 Form HTML code from json.

Give it this:
```js
{
  "shouldBeNumber1": "1",
  "shouldBeString1": ".1",
  "shouldBeBoolean1": "false",
  "shouldBeFragment1": {
    "FshouldBeNumber1": "1",
    "FshouldBeString1": "bar",
    "FshouldBeBoolean1": "false"
  }
}
```

Get this back (copy paste it into files):
####Ember data
```js
  import DS from 'ember-data';

export default DS.Model.extend({
  shouldBeNumber1: DS.attr("number"),
  shouldBeString1: DS.attr("string"),
  shouldBeBoolean1: DS.attr("boolean"),
  shouldBeFragment1: DS.hasOneFragment("shouldBeFragment1")
});

export default DS.ModelFragment.extend({
  FshouldBeNumber1: DS.attr("number"),
  FshouldBeString1: DS.attr("string"),
  FshouldBeBoolean1: DS.attr("boolean")
});
```
#### Typescript
```js
export class Foo {
  shouldBeNumber1: Number;
  shouldBeString1: String;
  shouldBeBoolean1: Boolean;
  shouldBeFragment1: shouldBeFragment1;
  constructor (object) {
    this.shouldBeNumber1 = object.shouldBeNumber1;
    this.shouldBeString1 = object.shouldBeString1;
    this.shouldBeBoolean1 = object.shouldBeBoolean1;
    this.shouldBeFragment1 = new shouldBeFragment1(object.shouldBeFragment1);
  }
}
export class shouldBeFragment1 {
  FshouldBeNumber1: Number;
  FshouldBeString1: String;
  FshouldBeBoolean1: Boolean;
  constructor (object) {
    this.FshouldBeNumber1 = object.FshouldBeNumber1;
    this.FshouldBeString1 = object.FshouldBeString1;
    this.FshouldBeBoolean1 = object.FshouldBeBoolean1;
  }
}
```
#### ES6
```js
export class Foo {
  constructor (object) {
    this.shouldBeNumber1 = object.shouldBeNumber1;
    this.shouldBeString1 = object.shouldBeString1;
    this.shouldBeBoolean1 = object.shouldBeBoolean1;
    this.shouldBeFragment1 = new shouldBeFragment1(object.shouldBeFragment1);
  }
}
export class shouldBeFragment1 {
  constructor (object) {
    this.FshouldBeNumber1 = object.FshouldBeNumber1;
    this.FshouldBeString1 = object.FshouldBeString1;
    this.FshouldBeBoolean1 = object.FshouldBeBoolean1;
  }
}
```
#### Bootstrap 3 Forms
```html
export class Foo {
<form>
  <div class="form-group">
    <label for="shouldBeNumber1">shouldBeNumber1:</label>
    <input type="number" class="form-control" id="shouldBeNumber1">
  </div>
  <div class="form-group">
    <label for="shouldBeString1">shouldBeString1:</label>
    <input class="form-control" id="shouldBeString1">
  </div>
  <div class="form-group">
    <label for="shouldBeBoolean1">shouldBeBoolean1:</label>
    <input type="checkbox" class="form-control" id="shouldBeBoolean1">
  </div>
</form>
<form>
  <div class="form-group">
    <label for="FshouldBeNumber1">FshouldBeNumber1:</label>
    <input type="number" class="form-control" id="FshouldBeNumber1">
  </div>
  <div class="form-group">
    <label for="FshouldBeString1">FshouldBeString1:</label>
    <input class="form-control" id="FshouldBeString1">
  </div>
  <div class="form-group">
    <label for="FshouldBeBoolean1">FshouldBeBoolean1:</label>
    <input type="checkbox" class="form-control" id="FshouldBeBoolean1">
  </div>
</form>
```
###Roadmap

* JSON Generate more interesting stuff from json api

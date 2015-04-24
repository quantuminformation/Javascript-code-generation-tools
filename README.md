# Javascript-code-generation-tools

Helps do some of the repetitive stuff.

Ember:
*Generates ember data code from json.

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

###Roadmap

* Ember
Generate more interesting stuff from json api

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


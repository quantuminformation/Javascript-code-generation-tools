import jsonCodeTools from './jsonCodeTools';
import * as actions from '../actions/'

let invalidJson = "Ehh whats up doc...!?"
let sampleJson =
  `
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
      `


 let options ={outputCodeType:'ES6'}
 const updateCodeGenerationOptions = actions.updateCodeGenerationOptions(options)



it('Updates the outputCodeType via the updateCodeGenerationOptions action', () => {
  expect(jsonCodeTools(undefined, updateCodeGenerationOptions))
  .toEqual(
    {"options": {"outputCodeType": "ES6"}, "outputCodeFromJSON": "", "sourceJSON": ""}
  );
});

# Getting started

## How to Build

The generated SDK requires AngularJS framework to work. If you do not already have angular downloaded, please go ahead and do it from [here](https://angularjs.org/).
You will also need to download and link [angular-moment](https://cdnjs.cloudflare.com/ajax/libs/angular-moment/1.0.1/angular-moment.min.js) and [moment.js](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js) with your project because the SDK internally uses moment.js.

## How to Use

The following section describes how to use the generated SDK in an existing/new project.

### 1. Configure Angular and Generated SDK
Perform the following steps to configure angular and the SDK:
+ Make a `scripts` folder inside the root folder of the project. If you already have a `scripts` folder, skip to the next step.
+ Move the `angular.min.js` file inside the scripts folder. 
+ Move the `EdiNationAPILib` folder inside the scripts folder.
+ If any of the Custom Types in your API have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will need to download angular-moment and moment.js. Move these 2 files into the `scripts` folder as well.

![folder-structure-image](https://apidocs.io/illustration/angularjs?step=folderStructure&workspaceFolder=EdiNation%20API-Angular&projectName=EdiNationAPILib)

### 2. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![open-folder-image](https://apidocs.io/illustration/angularjs?step=openFolder&workspaceFolder=EdiNation%20API-Angular)

### 3. Create an Angular Application
Since Angular JS is used for client-side web development, in order to use the generated library, you will have to develop an application first.
If you already have an angular application, [skip to Step 6](#6-include-sdk-references-in-html-file). Otherwise, follow these steps to create one:

+ In the IDE, click on `File` and choose `New File` to create a new file.
+ Add the following starting code in the file:
```js
var app = angular.module('myApp', []);
app.controller('testController', function($scope) 
{

});
```
+ Save it with the name `app.js` in the `scripts` folder.


### 4. Create HTML File
Skip to the next step if you are working with an existing project and already have an html file. Otherwise follow the steps to create one:
+ Inside the IDE, right click on the project folder name and select the `New File` option to create a new test file.
+ Save it with an appropriate name such as `index.html` in the root of your project folder.
`index.html` should look like this:
```html
<!DOCTYPE html>
<html>
<head>
	<title>Angular Project</title>
	<script></script>
</head>

<body>
</body>

</html>
```

![initial-html-code-image](https://apidocs.io/illustration/angularjs?step=initialCode&workspaceFolder=EdiNation%20API-Angular)

### 5. Including links to Angular in HTML file
Your HTML file needs to have a link to `angular.min.js` file to use Angular-JS. Add the link using `script` tags inside the `head` section of `index.html` like:
```html
<script src="scripts/angular.min.js" ></script>
```
If any of the Custom Types that you have defined have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will also need to link to angular-moment and moment.js like:
```html
<script src="scripts/angular.min.js" ></script>
<script src="scripts/moment.min.js" ></script>
<script src="scripts/angular-moment.min.js" ></script>
```

### 6. Include SDK references in HTML file
Import the reference to the generated SDK files inside your html file like:
```html
<head>
    ...
    <!-- Helper files -->
    <script src="scripts/EdiNationAPILib/Module.js"></script>
    <script src="scripts/EdiNationAPILib/Configuration.js"></script>
    <script src="scripts/EdiNationAPILib/ModelFactory.js"></script>
    <script src="scripts/EdiNationAPILib/ObjectMapper.js"></script>
    <script src="scripts/EdiNationAPILib/APIHelper.js"></script>
    <script src="scripts/EdiNationAPILib/Http/Client/HttpContext.js"></script>
    <script src="scripts/EdiNationAPILib/Http/Client/HttpClient.js"></script>
    <script src="scripts/EdiNationAPILib/Http/Request/HttpRequest.js"></script>
    <script src="scripts/EdiNationAPILib/Http/Response/HttpResponse.js"></script>

    <!-- API Controllers -->
    <script src="scripts/EdiNationAPILib/Controllers/BaseController.js"></script>
    <script src="scripts/EdiNationAPILib/Controllers/EdifactController.js"></script>
    <script src="scripts/EdiNationAPILib/Controllers/EdiModelController.js"></script>
    <script src="scripts/EdiNationAPILib/Controllers/X12Controller.js"></script>


    <!-- Models -->
    <script src="scripts/EdiNationAPILib/Models/BaseModel.js"></script>
    <script src="scripts/EdiNationAPILib/Models/UNA.js"></script>
    <script src="scripts/EdiNationAPILib/Models/S001.js"></script>
    <script src="scripts/EdiNationAPILib/Models/S002.js"></script>
    <script src="scripts/EdiNationAPILib/Models/S003.js"></script>
    <script src="scripts/EdiNationAPILib/Models/S004.js"></script>
    <script src="scripts/EdiNationAPILib/Models/S005.js"></script>
    <script src="scripts/EdiNationAPILib/Models/UNB.js"></script>
    <script src="scripts/EdiNationAPILib/Models/S006.js"></script>
    <script src="scripts/EdiNationAPILib/Models/S007.js"></script>
    <script src="scripts/EdiNationAPILib/Models/S008.js"></script>
    <script src="scripts/EdiNationAPILib/Models/UNG.js"></script>
    <script src="scripts/EdiNationAPILib/Models/UNE.js"></script>
    <script src="scripts/EdiNationAPILib/Models/EdifactGroup.js"></script>
    <script src="scripts/EdiNationAPILib/Models/UNZ.js"></script>
    <script src="scripts/EdiNationAPILib/Models/OperationDetail.js"></script>
    <script src="scripts/EdiNationAPILib/Models/OperationResult.js"></script>
    <script src="scripts/EdiNationAPILib/Models/EdifactInterchange.js"></script>
    <script src="scripts/EdiNationAPILib/Models/Link.js"></script>
    <script src="scripts/EdiNationAPILib/Models/EdiModel.js"></script>
    <script src="scripts/EdiNationAPILib/Models/ISA.js"></script>
    <script src="scripts/EdiNationAPILib/Models/TA1.js"></script>
    <script src="scripts/EdiNationAPILib/Models/GS.js"></script>
    <script src="scripts/EdiNationAPILib/Models/GE.js"></script>
    <script src="scripts/EdiNationAPILib/Models/X12Group.js"></script>
    <script src="scripts/EdiNationAPILib/Models/IEA.js"></script>
    <script src="scripts/EdiNationAPILib/Models/X12Interchange.js"></script>

    ...
</head>
```
> The `Module.js` file should be imported before the other files. After `Module.js`, `Configuration.js` should be imported.
> The `ModelFactory.js` file is needed by `ObjectMapper.js` file. The `ObjectMapper` in turn, is needed by `BaseController.js`.

### 7. Including link to `app.js` in HTML file
Link your `app.js` file to your `index.html` file like:
```html
<head>
	...
	<script src="scripts/app.js"></script>
</head>
```
> The link to app.js needs to be included at the very end of the head tag, after the SDK references have been added

### 8. Initializing the Angular App
You need to initialize your app and the controller associated with your view inside your `index.html` file. Do so like:
+ Add ng-app directive to initialize your app inside the `body` tag.
```html
<body ng-app="myApp">
```
+ Add ng-controller directive to initialize your controller and bind it with your view (`index.html` file).
```html
...
<body ng-app="myApp">
	<div ng-controller="testController">
		...
	</div>
	...
</body>
...
```

### 9. Consuming the SDK 
In order to use the generated SDK's modules, controllers and factories, the project needs to be added as a dependency in your angular app's module. This will be done inside the `app.js` file.
Add the dependency like this:

```js
var app = angular.module('myApp', ['EdiNationAPILib']);
```
At this point, the SDK has been successfully included in your project. Further steps include using a service/factory from the generated SDK. To see working example of this, please head on [over here](#list-of-controllers) and choose any class to see its functions and example usage.  

### 10. Running The App
To run the app, simply open up the `index.html` file in a browser.

![app-running](https://apidocs.io/illustration/angularjs?step=appRunning)

## Initialization


The Angular Application can be initialized as following:
```JavaScript
var app = angular.module('myApp', [EdiNationAPILib]);
// now controllers/services can be created which import
// the factories provided by the sdk
```
### Authentication
In order to setup authentication and initialization of the Angular App, you need the following information.

| Parameter | Description |
|-----------|-------------|
| ocpApimSubscriptionKey | API key to authenticate requests |



```js
var app = angular.module('myApp', [EdiNationAPILib]);

app.run(function(Configuration) {
    // Configuration parameters and credentials
    Configuration.ocpApimSubscriptionKey = 'ocpApimSubscriptionKey'; // API key to authenticate requests
    
});
```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [EdifactController](#edifact_controller)
* [EdiModelController](#edi_model_controller)
* [X12Controller](#x12_controller)

## <a name="edifact_controller"></a>![Class: ](https://apidocs.io/img/class.png ".EdifactController") EdifactController

### Get singleton instance

The singleton instance of the ``` EdifactController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, EdifactController, EdifactInterchange, OperationResult){
	});
```

### <a name="read"></a>![Method: ](https://apidocs.io/img/method.png ".EdifactController.read") read

> Reads an EDIFACT file and returns its contents translated to an array of EdifactInterchange objects.


```javascript
function read(fileName, ignoreNullValues, continueOnError, charSet, model, eancomS3)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| fileName |  ``` Required ```  | Upload File |
| ignoreNullValues |  ``` Optional ```  ``` DefaultValue ```  | Whether to ignore all null values in the response. The default is false. |
| continueOnError |  ``` Optional ```  ``` DefaultValue ```  | Whether to continue reading if a corrupt interchange is encountered. The default is false. |
| charSet |  ``` Optional ```  ``` DefaultValue ```  | The encoding of the file contents. The default is utf-8. The available values are: unicodeFFFE, utf-32, utf-32BE, us-ascii, iso-8859-1, utf-7, utf-8, utf-16. |
| model |  ``` Optional ```  | The model to use. By default, the API will infer the model based on the transaction and version identifiers. |
| eancomS3 |  ``` Optional ```  ``` DefaultValue ```  | The default syntax for EANCOM transactions. By default all EANCOM transactions will be translated and validated according to the rules of Syntax 4. Set this flag to true if you need Syntax 3 to be used. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EdifactController, $http, EdifactInterchange){
        var fileName = "";
        var ignoreNullValues = true;
        var continueOnError = true;
        var charSet = 'charSet';
        var model = 'model';
        var eancomS3 = true;


		$http.get(url).then(function(successData){
            file = successData;
            var result = EdifactController.read(fileName, ignoreNullValues, continueOnError, charSet, model, eancomS3);
        //Function call returns a promise
            result.then(function(success){
    			//success case
    			//getting context of response
    			console.log(success.getContext());
    		},function(err){
    			//failure case
    		});
    
    	}, function(errorData){
    
    	});
	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |
| 500 | Server Error |




### <a name="write"></a>![Method: ](https://apidocs.io/img/method.png ".EdifactController.write") write

> Translates an EdifactInterchange object to a raw EDIFACT interchange and returns it as a stream.


```javascript
function write(preserveWhitespace, charSet, postfix, sameRepetionAndDataElement, eancomS3, contentType, body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| preserveWhitespace |  ``` Optional ```  ``` DefaultValue ```  | Whether to preserve blank data elements so the output contains multiple delimiters instead of omitting any excess delimiters. The default is false. |
| charSet |  ``` Optional ```  ``` DefaultValue ```  | The encoding of the file contents. The default is utf-8. The available values are: unicodeFFFE, utf-32, utf-32BE, us-ascii, iso-8859-1, utf-7, utf-8, utf-16. |
| postfix |  ``` Optional ```  | The postfix to be applied at the end of each segment, just after the segment separator. This is usually a carriage return (CR), line feed (LF) or both. By default, there is no postfix. |
| sameRepetionAndDataElement |  ``` Optional ```  ``` DefaultValue ```  | Sometimes the same delimiter is used to denote data element separator and repetition separator as in IATA transactions. By default, this is false. |
| eancomS3 |  ``` Optional ```  ``` DefaultValue ```  | The default syntax for EANCOM transactions. By default all EANCOM transactions will be translated and validated according to the rules of Syntax 4. Set this flag to true if you need Syntax 3 to be used. |
| contentType |  ``` Optional ```  ``` DefaultValue ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | The EdifactInterchange object to translate to raw EDIFACT. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EdifactController, $http){
        var preserveWhitespace = False;
        var charSet = 'utf-8';
        var postfix = 'postfix';
        var sameRepetionAndDataElement = False;
        var eancomS3 = False;
        var contentType = 'Content-Type';
        var body = new EdifactInterchange|null({"key":"value"});


		$http.get().then(function(successData){
            file = successData;
            var result = EdifactController.write(preserveWhitespace, charSet, postfix, sameRepetionAndDataElement, eancomS3, contentType, body);
        //Function call returns a promise
            result.then(function(success){
    			//success case
    			//getting context of response
    			console.log(success.getContext());
    		},function(err){
    			//failure case
    		});
    
    	}, function(errorData){
    
    	});
	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |
| 500 | Server Error |




### <a name="validate"></a>![Method: ](https://apidocs.io/img/method.png ".EdifactController.validate") validate

> Validates an EdifactInterchange object according to the EDIFACT standard rules for each version and transaction.


```javascript
function validate(syntaxSet, skipTrailer, structureOnly, decimalPoint, eancomS3, contentType, body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| syntaxSet |  ``` Optional ```  | In case you need to validate against a syntax set, different than UNOA and UNOB, populate this filed with all of the allowed symbols, url-escaped.
            All data elements with alpha (A) or alphanumeric (AN) data types are validated against a syntax set of allowed characters. The supported syntax sets are UNOA and UNOB. The validator infers the correct syntax set from EdifactInterchange.UNB.SYNTAXIDENTIFIER_1.SyntaxIdentifier_1. The symbols added to this field will override the corresponding sets in both UNOA and UNOB. |
| skipTrailer |  ``` Optional ```  ``` DefaultValue ```  | You are allowed to validate an EdifactInterchange with missing interchange, functional group or transaction trailers (UNZ, UNE, UNT). This is because these will be automatically applied during the Write oprtaion so you don't have to worry about counting the items. By default it is expected that all trailers are present when you validate the EdifactInterchange and by default, this is set to false. To skip all trailer validation, set this to true. |
| structureOnly |  ``` Optional ```  ``` DefaultValue ```  | This is equivalent to HIPAA Snip level 1, where only the structure and control segments are validated. By default, this is set to false, however if you want to not validate things such as data types, number of repeteitions or dates, set this to true. |
| decimalPoint |  ``` Optional ```  ``` DefaultValue ```  | This could be either point . (default) or comma ,. |
| eancomS3 |  ``` Optional ```  ``` DefaultValue ```  | The default syntax for EANCOM transactions. By default all EANCOM transactions will be validated according to the rules of Syntax 4. Set this flag to true if you need Syntax 3 to be used. |
| contentType |  ``` Optional ```  ``` DefaultValue ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | The EdifactInterchange object to validate. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EdifactController, OperationResult){
        var syntaxSet = 'syntaxSet';
        var skipTrailer = False;
        var structureOnly = False;
        var decimalPoint = '.';
        var eancomS3 = False;
        var contentType = 'Content-Type';
        var body = new EdifactInterchange|null({"key":"value"});


		var result = EdifactController.validate(syntaxSet, skipTrailer, structureOnly, decimalPoint, eancomS3, contentType, body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |
| 500 | Server Error |




### <a name="ack"></a>![Method: ](https://apidocs.io/img/method.png ".EdifactController.ack") ack

> Generates functional and/or technical CONTRL acknowledment(s) for the requested EdifactInterchange.


```javascript
function ack(syntaxSet, detectDuplicates, tranRefNumber, interchangeRefNumber, ackForValidTrans, batchAcks, technicalAck, eancomS3, contentType, body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| syntaxSet |  ``` Optional ```  | In case you need to validate against a syntax set, different than UNOA and UNOB, populate this filed with all of the allowed symbols, url-escaped. All data elements with alpha (A) or alphanumeric (AN) data types are validated against a syntax set of allowed characters. The supported syntax sets are UNOA and UNOB. The validator infers the correct syntax set from EdifactInterchange.UNB.SYNTAXIDENTIFIER_1.SyntaxIdentifier_1. The symbols added to this field will override the corresponding sets in both UNOA and UNOB. |
| detectDuplicates |  ``` Optional ```  ``` DefaultValue ```  | If you need to detect duplicates as in functional groups or transactions with the same reference number, set this flag to true. The default is false. |
| tranRefNumber |  ``` Optional ```  ``` DefaultValue ```  | The default is 1. Set this to whatever the CONTRL UNH.MessageReferenceNumber_01 needs to be. |
| interchangeRefNumber |  ``` Optional ```  ``` DefaultValue ```  | The default is 1. Set this to whatever the CONTRL EdifactInterchange.UNB.InterchangeControlReference_5 needs to be. |
| ackForValidTrans |  ``` Optional ```  ``` DefaultValue ```  | The default is false. Set this to true if you need UCM loops included for all valid transaction as well. By default UCM loops are generated only for invalid transactions. |
| batchAcks |  ``` Optional ```  ``` DefaultValue ```  | The default is true. Set this to false if you need to generate separate EdifactInterchange for each acknowledgment. By default all acknowledgments are batched in the same EdifactInterchange. |
| technicalAck |  ``` Optional ```  | The default technical acknowledgment CONTRL is generated according to EdifactInterchange.UNB.AcknowledgementRequest_9. You can either enforce it to always generate technical CONTRLs or supress it to never generate any technical CONTRLs. This will override the flag in EdifactInterchange.UNB.AcknowledgementRequest_9.
            The available values are: default, enforce, suppress. |
| eancomS3 |  ``` Optional ```  ``` DefaultValue ```  | The default syntax for EANCOM transactions. By default all EANCOM transactions will be validated according to the rules of Syntax 4. Set this flag to true if you need Syntax 3 to be used. |
| contentType |  ``` Optional ```  ``` DefaultValue ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | The EdifactInterchange object to acknowledge. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EdifactController, EdifactInterchange){
        var syntaxSet = 'syntaxSet';
        var detectDuplicates = False;
        var tranRefNumber = 1;
        var interchangeRefNumber = 1;
        var ackForValidTrans = False;
        var batchAcks = True;
        var technicalAck = 'technicalAck';
        var eancomS3 = False;
        var contentType = 'Content-Type';
        var body = new EdifactInterchange|null({"key":"value"});


		var result = EdifactController.ack(syntaxSet, detectDuplicates, tranRefNumber, interchangeRefNumber, ackForValidTrans, batchAcks, technicalAck, eancomS3, contentType, body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |
| 500 | Server Error |




[Back to List of Controllers](#list_of_controllers)

## <a name="edi_model_controller"></a>![Class: ](https://apidocs.io/img/class.png ".EdiModelController") EdiModelController

### Get singleton instance

The singleton instance of the ``` EdiModelController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, EdiModelController, EdiModel){
	});
```

### <a name="upload"></a>![Method: ](https://apidocs.io/img/method.png ".EdiModelController.upload") upload

> Uploads a model file to a subscription. It must be a valid DOT NET assembly.


```javascript
function upload(fileName)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| fileName |  ``` Required ```  | Upload File |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EdiModelController, $http){
        var fileName = "";


		$http.get(url).then(function(successData){
            file = successData;
            var result = EdiModelController.upload(fileName);
        //Function call returns a promise
            result.then(function(success){
    			//success case
    			//getting context of response
    			console.log(success.getContext());
    		},function(err){
    			//failure case
    		});
    
    	}, function(errorData){
    
    	});
	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |
| 500 | Server Error |




### <a name="get_models"></a>![Method: ](https://apidocs.io/img/method.png ".EdiModelController.getModels") getModels

> Retrieves all models for a subscription.


```javascript
function getModels(system)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| system |  ``` Optional ```  ``` DefaultValue ```  | Whether to retrieve EdiNation's or custom uploaded models. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EdiModelController, EdiModel){
        var system = True;


		var result = EdiModelController.getModels(system);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |
| 500 | Server Error |




### <a name="get_model"></a>![Method: ](https://apidocs.io/img/method.png ".EdiModelController.getModel") getModel

> Retrieve a particular model file as a stream.


```javascript
function getModel(id, system)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | The model name. |
| system |  ``` Optional ```  ``` DefaultValue ```  | Whether to search in EdiNation's or custom uploaded models. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EdiModelController, $http){
        var id = 'id';
        var system = true;


		$http.get().then(function(successData){
            file = successData;
            var result = EdiModelController.getModel(id, system);
        //Function call returns a promise
            result.then(function(success){
    			//success case
    			//getting context of response
    			console.log(success.getContext());
    		},function(err){
    			//failure case
    		});
    
    	}, function(errorData){
    
    	});
	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |
| 500 | Server Error |




### <a name="mdelete"></a>![Method: ](https://apidocs.io/img/method.png ".EdiModelController.mdelete") mdelete

> Deletes a particular model from the custom models.


```javascript
function mdelete(id)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | The model name. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EdiModelController){
        var id = 'id';


		var result = EdiModelController.mdelete(id);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |
| 500 | Server Error |




[Back to List of Controllers](#list_of_controllers)

## <a name="x12_controller"></a>![Class: ](https://apidocs.io/img/class.png ".X12Controller") X12Controller

### Get singleton instance

The singleton instance of the ``` X12Controller ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, X12Controller, X12Interchange, OperationResult){
	});
```

### <a name="read"></a>![Method: ](https://apidocs.io/img/method.png ".X12Controller.read") read

> Reads an X12 file and returns its contents translated to an array of X12Interchange objects.


```javascript
function read(fileName, ignoreNullValues, continueOnError, charSet, model)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| fileName |  ``` Required ```  | Upload File |
| ignoreNullValues |  ``` Optional ```  ``` DefaultValue ```  | Whether to ignore all null values in the response. The default is false. |
| continueOnError |  ``` Optional ```  ``` DefaultValue ```  | Whether to continue reading if a corrupt interchange is encountered. The default is false. |
| charSet |  ``` Optional ```  ``` DefaultValue ```  | The encoding of the file contents. The default is utf-8. The available values are: unicodeFFFE, utf-32, utf-32BE, us-ascii, iso-8859-1, utf-7, utf-8, utf-16. |
| model |  ``` Optional ```  | The model to use. By default, the API will infer the model based on the transaction and version identifiers. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, X12Controller, $http, X12Interchange){
        var fileName = "";
        var ignoreNullValues = true;
        var continueOnError = true;
        var charSet = 'charSet';
        var model = 'model';


		$http.get(url).then(function(successData){
            file = successData;
            var result = X12Controller.read(fileName, ignoreNullValues, continueOnError, charSet, model);
        //Function call returns a promise
            result.then(function(success){
    			//success case
    			//getting context of response
    			console.log(success.getContext());
    		},function(err){
    			//failure case
    		});
    
    	}, function(errorData){
    
    	});
	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |
| 500 | Server Error |




### <a name="write"></a>![Method: ](https://apidocs.io/img/method.png ".X12Controller.write") write

> Translates an X12Interchange object to a raw X12 interchange and returns it as a stream.


```javascript
function write(preserveWhitespace, charSet, postfix, contentType, body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| preserveWhitespace |  ``` Optional ```  ``` DefaultValue ```  | Whether to preserve blank data elements so the output contains multiple delimiters instead of omitting any excess delimiters. The default is false. |
| charSet |  ``` Optional ```  ``` DefaultValue ```  | The encoding of the file contents. The default is utf-8. The available values are: unicodeFFFE, utf-32, utf-32BE, us-ascii, iso-8859-1, utf-7, utf-8, utf-16. |
| postfix |  ``` Optional ```  | The postfix to be applied at the end of each segment, just after the segment separator. This is usually a carriage return (CR), line feed (LF) or both. By default, there is no postfix. |
| contentType |  ``` Optional ```  ``` DefaultValue ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | The X12Interchange object to translate to raw X12. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, X12Controller, $http){
        var preserveWhitespace = False;
        var charSet = 'utf-8';
        var postfix = 'postfix';
        var contentType = 'Content-Type';
        var body = new X12Interchange|null({"key":"value"});


		$http.get().then(function(successData){
            file = successData;
            var result = X12Controller.write(preserveWhitespace, charSet, postfix, contentType, body);
        //Function call returns a promise
            result.then(function(success){
    			//success case
    			//getting context of response
    			console.log(success.getContext());
    		},function(err){
    			//failure case
    		});
    
    	}, function(errorData){
    
    	});
	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |
| 500 | Server Error |




### <a name="validate"></a>![Method: ](https://apidocs.io/img/method.png ".X12Controller.validate") validate

> Validates an X12Interchange object according to the X12 standard rules for each version and transaction.


```javascript
function validate(basicSyntax, syntaxSet, skipTrailer, structureOnly, contentType, body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| basicSyntax |  ``` Optional ```  ``` DefaultValue ```  | All data elements with alpha (A) or alphanumeric (AN) data types are validated against a syntax set of allowed characters. The default syntax set is the Extended, hence the default for this parameter is false. By setting this to true, validation will use the Basic syntax set. |
| syntaxSet |  ``` Optional ```  | In case you need to validate against a syntax set, different than Basic and Extended, populate this filed with all of the allowed symbols, url-escaped. |
| skipTrailer |  ``` Optional ```  ``` DefaultValue ```  | You are allowed to validate an X12Interchange with missing interchange, functional group or transaction trailers (IEA, GE, SE). This is because these will be automatically applied during the Write oprtaion so you don't have to worry about counting the items. By default it is expected that all trailers are present when you validate the X12Interchange and by default, this is set to false. To skip all trailer validation, set this to true. |
| structureOnly |  ``` Optional ```  ``` DefaultValue ```  | This is equivalent to HIPAA Snip level 1, where only the structure and control segments are validated. By default, this is set to false, however if you want to not validate things such as data types, number of repeteitions or dates, set this to true. |
| contentType |  ``` Optional ```  ``` DefaultValue ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | The X12Interchange object to validate. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, X12Controller, OperationResult){
        var basicSyntax = False;
        var syntaxSet = 'syntaxSet';
        var skipTrailer = False;
        var structureOnly = False;
        var contentType = 'Content-Type';
        var body = new X12Interchange|null({"key":"value"});


		var result = X12Controller.validate(basicSyntax, syntaxSet, skipTrailer, structureOnly, contentType, body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |
| 500 | Server Error |




### <a name="ack"></a>![Method: ](https://apidocs.io/img/method.png ".X12Controller.ack") ack

> Generates functional/implementation and/or technical acknowledment(s) for the requested X12Interchange.


```javascript
function ack(basicSyntax, syntaxSet, detectDuplicates, tranRefNumber, interchangeRefNumber, ackForValidTrans, batchAcks, technicalAck, ack, ak901isP, contentType, body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| basicSyntax |  ``` Optional ```  ``` DefaultValue ```  | All data elements with alpha (A) or alphanumeric (AN) data types are validated against a syntax set of allowed characters. The default syntax set is the Extended, hence the default for this parameter is false. By setting this to true, validation will use the Basic syntax set. |
| syntaxSet |  ``` Optional ```  | In case you need to validate against a syntax set, different than Basic and Extended, populate this filed with all of the allowed symbols, url-escaped. |
| detectDuplicates |  ``` Optional ```  ``` DefaultValue ```  | If you need to detect duplicates as in functional groups or transactions with the same reference number, set this flag to true. The default is false. |
| tranRefNumber |  ``` Optional ```  ``` DefaultValue ```  | The default is 1. Set this to whatever the 997 or 999 X12Interchange.ST.TransactionSetControlNumber_02 needs to be. In case there are multiple acknowledgments (for multiple functional groups), this will be starting reference number and every subsequent acknowledgment will have the previous reference number incremented with 1. |
| interchangeRefNumber |  ``` Optional ```  ``` DefaultValue ```  | The default is 1. Set this to whatever the 997 or 999 X12Interchange.ISA.InterchangeControlNumber_13 needs to be. |
| ackForValidTrans |  ``` Optional ```  ``` DefaultValue ```  | The default is false. Set this to true if you need AK2 loops included for all valid transaction as well. By default AK2 loops are generated only for invalid transactions. |
| batchAcks |  ``` Optional ```  ``` DefaultValue ```  | The default is true. Set this to false if you need to generate separate X12Interchange for each acknowledgment. By default all acknowledgments are batched in the same X12Interchange. |
| technicalAck |  ``` Optional ```  | The default technical acknowledgment TA1 is generated according to X12Interchange.ISA.AcknowledgementRequested_14. You can either enforce it to always generate TA1s or supress it to never generate any TA1s. This will override the flag in X12Interchange.ISA.AcknowledgementRequested_14.
            The available values are: default, enforce, suppress. |
| ack |  ``` Optional ```  ``` DefaultValue ```  | The default value is 997. The type of acknowledgment being generated. Set this to 999 if you need to generate an implementation instead of functional acknowledgment. The available values are: 997, 999. |
| ak901isP |  ``` Optional ```  ``` DefaultValue ```  | The value of the AK9's first element. By default it is "E". Set this to true if you want this value to be "P" instead. |
| contentType |  ``` Optional ```  ``` DefaultValue ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | The X12Interchange object to acknowledge. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, X12Controller, X12Interchange){
        var basicSyntax = False;
        var syntaxSet = 'syntaxSet';
        var detectDuplicates = False;
        var tranRefNumber = 1;
        var interchangeRefNumber = 1;
        var ackForValidTrans = False;
        var batchAcks = True;
        var technicalAck = 'technicalAck';
        var ack = '997';
        var ak901isP = False;
        var contentType = 'Content-Type';
        var body = new X12Interchange|null({"key":"value"});


		var result = X12Controller.ack(basicSyntax, syntaxSet, detectDuplicates, tranRefNumber, interchangeRefNumber, ackForValidTrans, batchAcks, technicalAck, ack, ak901isP, contentType, body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |
| 500 | Server Error |




[Back to List of Controllers](#list_of_controllers)




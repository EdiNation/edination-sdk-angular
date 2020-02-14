/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

angular.module('EdiNationAPILib')
    .factory('X12Controller', ['$q', 'Configuration', 'HttpClient', 'APIHelper', 'BaseController', X12Controller
    ]);

    function X12Controller($q, Configuration, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * Reads an X12 file and returns its contents translated to an array of X12Interchange objects.
             *
             * @param {string} fileName Upload File
             * @param {bool|null} ignoreNullValues [Optional] Whether to ignore all null values in the response.
             * The default is false.
             * @param {bool|null} continueOnError [Optional] Whether to continue reading if a corrupt interchange
             * is encountered. The default is false.
             * @param {string|null} charSet [Optional] The encoding of the file contents. The default is utf-8. The
             * available values are: unicodeFFFE, utf-32, utf-32BE, us-ascii, iso-8859-
             * 1, utf-7, utf-8, utf-16.
             * @param {string|null} model [Optional] The model to use. By default, the API will infer the model
             * based on the transaction and version identifiers.
             *
             * @return {promise<X12Interchange>}
             */
            read: function (fileName, ignoreNullValues, continueOnError, charSet, model) {
                // Assign default values
                ignoreNullValues = ignoreNullValues || false;
                continueOnError = continueOnError || false;
                charSet = charSet || 'utf-8';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/x12/read';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'ignoreNullValues': (ignoreNullValues !== null) ? ignoreNullValues : false,
                    'continueOnError': (continueOnError !== null) ? continueOnError : false,
                    'charSet': (charSet !== null) ? charSet : 'utf-8',
                    'model': model
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json',
                    'Ocp-Apim-Subscription-Key': Configuration.ocpApimSubscriptionKey
                };

                // prepare form data
                var _formDataDictionary = {
                    'fileName': fileName
                };

                // Remove null values
                APIHelper.cleanObject(_formDataDictionary);

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    headers: _headers,
                    formData: _formDataDictionary,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    var parsed = _result.body;
                    parsed = parsed.map(function(model){
                        return BaseController.getObjectMapper().mapObject(model, 'X12Interchange');
                    });
                    _result.body = parsed;
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    if (_result.code === 400) {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'Bad Request',
                            errorCode: 400,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    } else if (_result.code === 500) {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'Server Error',
                            errorCode: 500,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    } else {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'HTTP Response Not OK',
                            errorCode: _result.code,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    }
                });
                
                return _deffered.promise;
            },
            /**
             * Translates an X12Interchange object to a raw X12 interchange and returns it as a stream.
             *
             * @param {bool|null} preserveWhitespace [Optional] Whether to preserve blank data elements so the
             * output contains multiple delimiters instead of omitting any
             * excess delimiters. The default is false.
             * @param {string|null} charSet [Optional] The encoding of the file contents. The default is utf-8. The
             * available values are: unicodeFFFE, utf-32, utf-32BE, us-ascii, iso-8859-
             * 1, utf-7, utf-8, utf-16.
             * @param {string|null} postfix [Optional] The postfix to be applied at the end of each segment, just
             * after the segment separator. This is usually a carriage return (CR),
             * line feed (LF) or both. By default, there is no postfix.
             * @param {string|null} contentType [Optional] Example: application/json
             * @param {X12Interchange|null} body [Optional] The X12Interchange object to translate to raw X12.
             *
             * @return {promise<Binary>}
             */
            write: function (preserveWhitespace, charSet, postfix, contentType, body) {
                // Assign default values
                preserveWhitespace = preserveWhitespace || false;
                charSet = charSet || 'utf-8';
                contentType = contentType || 'application/json';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/x12/write';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'preserveWhitespace': (preserveWhitespace !== null) ? preserveWhitespace : false,
                    'charSet': (charSet !== null) ? charSet : 'utf-8',
                    'postfix': postfix
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'content-type': 'application/json; charset=utf-8',
                    'Content-Type': (contentType !== null) ? contentType : 'application/json',
                    'Ocp-Apim-Subscription-Key': Configuration.ocpApimSubscriptionKey
                };

                // Remove null values
                APIHelper.cleanObject(body);

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    headers: _headers,
                    body: body.toJSON()
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    if (_result.code === 400) {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'Bad Request',
                            errorCode: 400,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    } else if (_result.code === 500) {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'Server Error',
                            errorCode: 500,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    } else {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'HTTP Response Not OK',
                            errorCode: _result.code,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    }
                });
                
                return _deffered.promise;
            },
            /**
             * Validates an X12Interchange object according to the X12 standard rules for each version and
             * transaction.
             *
             * @param {bool|null} basicSyntax [Optional] All data elements with alpha (A) or alphanumeric (AN) data
             * types are validated against a syntax set of allowed characters. The
             * default syntax set is the Extended, hence the default for this
             * parameter is false. By setting this to true, validation will use the
             * Basic syntax set.
             * @param {string|null} syntaxSet [Optional] In case you need to validate against a syntax set,
             * different than Basic and Extended, populate this filed with all of
             * the allowed symbols, url-escaped.
             * @param {bool|null} skipTrailer [Optional] You are allowed to validate an X12Interchange with missing
             * interchange, functional group or transaction trailers (IEA, GE, SE).
             * This is because these will be automatically applied during the Write
             * oprtaion so you don't have to worry about counting the items. By
             * default it is expected that all trailers are present when you
             * validate the X12Interchange and by default, this is set to false. To
             * skip all trailer validation, set this to true.
             * @param {bool|null} structureOnly [Optional] This is equivalent to HIPAA Snip level 1, where only the
             * structure and control segments are validated. By default, this is
             * set to false, however if you want to not validate things such as
             * data types, number of repeteitions or dates, set this to true.
             * @param {string|null} contentType [Optional] Example: application/json
             * @param {X12Interchange|null} body [Optional] The X12Interchange object to validate.
             *
             * @return {promise<OperationResult>}
             */
            validate: function (basicSyntax, syntaxSet, skipTrailer, structureOnly, contentType, body) {
                // Assign default values
                basicSyntax = basicSyntax || false;
                skipTrailer = skipTrailer || false;
                structureOnly = structureOnly || false;
                contentType = contentType || 'application/json';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/x12/validate';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'basicSyntax': (basicSyntax !== null) ? basicSyntax : false,
                    'syntaxSet': syntaxSet,
                    'skipTrailer': (skipTrailer !== null) ? skipTrailer : false,
                    'structureOnly': (structureOnly !== null) ? structureOnly : false
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json',
                    'content-type': 'application/json; charset=utf-8',
                    'Content-Type': (contentType !== null) ? contentType : 'application/json',
                    'Ocp-Apim-Subscription-Key': Configuration.ocpApimSubscriptionKey
                };

                // Remove null values
                APIHelper.cleanObject(body);

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    headers: _headers,
                    body: body.toJSON()
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    var parsed = _result.body;
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'OperationResult');
                    _result.body = parsed;
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    if (_result.code === 400) {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'Bad Request',
                            errorCode: 400,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    } else if (_result.code === 500) {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'Server Error',
                            errorCode: 500,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    } else {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'HTTP Response Not OK',
                            errorCode: _result.code,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    }
                });
                
                return _deffered.promise;
            },
            /**
             * Generates functional/implementation and/or technical acknowledment(s) for the requested
             * X12Interchange.
             *
             * @param {bool|null} basicSyntax [Optional] All data elements with alpha (A) or alphanumeric (AN) data
             * types are validated against a syntax set of allowed characters. The
             * default syntax set is the Extended, hence the default for this
             * parameter is false. By setting this to true, validation will use the
             * Basic syntax set.
             * @param {string|null} syntaxSet [Optional] In case you need to validate against a syntax set,
             * different than Basic and Extended, populate this filed with all of
             * the allowed symbols, url-escaped.
             * @param {bool|null} detectDuplicates [Optional] If you need to detect duplicates as in functional
             * groups or transactions with the same reference number, set this
             * flag to true. The default is false.
             * @param {int|null} tranRefNumber [Optional] The default is 1. Set this to whatever the 997 or 999
             * X12Interchange.ST.TransactionSetControlNumber_02 needs to be. In
             * case there are multiple acknowledgments (for multiple functional
             * groups), this will be starting reference number and every subsequent
             * acknowledgment will have the previous reference number incremented
             * with 1.
             * @param {int|null} interchangeRefNumber [Optional] The default is 1. Set this to whatever the 997 or
             * 999 X12Interchange.ISA.InterchangeControlNumber_13 needs to
             * be.
             * @param {bool|null} ackForValidTrans [Optional] The default is false. Set this to true if you need
             * AK2 loops included for all valid transaction as well. By default
             * AK2 loops are generated only for invalid transactions.
             * @param {bool|null} batchAcks [Optional] The default is true. Set this to false if you need to
             * generate separate X12Interchange for each acknowledgment. By default
             * all acknowledgments are batched in the same X12Interchange.
             * @param {string|null} technicalAck [Optional] The default technical acknowledgment TA1 is generated
             * according to X12Interchange.ISA.AcknowledgementRequested_14. You
             * can either enforce it to always generate TA1s or supress it to
             * never generate any TA1s. This will override the flag in
             * X12Interchange.ISA.AcknowledgementRequested_14.              The
             * available values are: default, enforce, suppress.
             * @param {string|null} ack [Optional] The default value is 997. The type of acknowledgment being
             * generated. Set this to 999 if you need to generate an implementation
             * instead of functional acknowledgment. The available values are: 997, 999.
             * @param {bool|null} ak901isP [Optional] The value of the AK9's first element. By default it is "E".
             * Set this to true if you want this value to be "P" instead.
             * @param {string|null} contentType [Optional] Example: application/json
             * @param {X12Interchange|null} body [Optional] The X12Interchange object to acknowledge.
             *
             * @return {promise<X12Interchange>}
             */
            ack: function (basicSyntax,
                syntaxSet,
                detectDuplicates,
                tranRefNumber,
                interchangeRefNumber,
                ackForValidTrans,
                batchAcks,
                technicalAck,
                ack,
                ak901isP,
                contentType,
                body)
            {
                // Assign default values
                basicSyntax = basicSyntax || false;
                detectDuplicates = detectDuplicates || false;
                tranRefNumber = tranRefNumber || 1;
                interchangeRefNumber = interchangeRefNumber || 1;
                ackForValidTrans = ackForValidTrans || false;
                batchAcks = batchAcks || true;
                ack = ack || '997';
                ak901isP = ak901isP || false;
                contentType = contentType || 'application/json';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/x12/ack';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'basicSyntax': (basicSyntax !== null) ? basicSyntax : false,
                    'syntaxSet': syntaxSet,
                    'detectDuplicates': (detectDuplicates !== null) ? detectDuplicates : false,
                    'tranRefNumber': (tranRefNumber !== null) ? tranRefNumber : 1,
                    'interchangeRefNumber': (interchangeRefNumber !== null) ? interchangeRefNumber : 1,
                    'ackForValidTrans': (ackForValidTrans !== null) ? ackForValidTrans : false,
                    'batchAcks': (batchAcks !== null) ? batchAcks : true,
                    'technicalAck': technicalAck,
                    'ack': (ack !== null) ? ack : '997',
                    'ak901isP': (ak901isP !== null) ? ak901isP : false
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json',
                    'content-type': 'application/json; charset=utf-8',
                    'Content-Type': (contentType !== null) ? contentType : 'application/json',
                    'Ocp-Apim-Subscription-Key': Configuration.ocpApimSubscriptionKey
                };

                // Remove null values
                APIHelper.cleanObject(body);

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'POST',
                    queryUrl: _queryUrl,
                    headers: _headers,
                    body: body.toJSON()
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    var parsed = _result.body;
                    parsed = parsed.map(function(model){
                        return BaseController.getObjectMapper().mapObject(model, 'X12Interchange');
                    });
                    _result.body = parsed;
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    if (_result.code === 400) {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'Bad Request',
                            errorCode: 400,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    } else if (_result.code === 500) {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'Server Error',
                            errorCode: 500,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    } else {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'HTTP Response Not OK',
                            errorCode: _result.code,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    }
                });
                
                return _deffered.promise;
            }
        };
    }

}(angular));

/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

angular.module('EdiNationAPILib')
    .factory('EdifactController', ['$q',
        'Configuration',
        'HttpClient',
        'APIHelper',
        'BaseController',
        EdifactController
    ]);

    function EdifactController($q, Configuration, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * Reads an EDIFACT file and returns its contents translated to an array of EdifactInterchange objects.
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
             * @param {bool|null} eancomS3 [Optional] The default syntax for EANCOM transactions. By default all
             * EANCOM transactions will be translated and validated according to the
             * rules of Syntax 4. Set this flag to true if you need Syntax 3 to be used.
             *
             * @return {promise<EdifactInterchange>}
             */
            read: function (fileName, ignoreNullValues, continueOnError, charSet, model, eancomS3) {
                // Assign default values
                ignoreNullValues = ignoreNullValues || false;
                continueOnError = continueOnError || false;
                charSet = charSet || 'utf-8';
                eancomS3 = eancomS3 || false;

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/edifact/read';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'ignoreNullValues': (ignoreNullValues !== null) ? ignoreNullValues : false,
                    'continueOnError': (continueOnError !== null) ? continueOnError : false,
                    'charSet': (charSet !== null) ? charSet : 'utf-8',
                    'model': model,
                    'eancomS3': (eancomS3 !== null) ? eancomS3 : false
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
                        return BaseController.getObjectMapper().mapObject(model, 'EdifactInterchange');
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
             * Translates an EdifactInterchange object to a raw EDIFACT interchange and returns it as a stream.
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
             * @param {bool|null} sameRepetionAndDataElement [Optional] Sometimes the same delimiter is used to
             * denote data element separator and repetition separator
             * as in IATA transactions. By default, this is false.
             * @param {bool|null} eancomS3 [Optional] The default syntax for EANCOM transactions. By default all
             * EANCOM transactions will be translated and validated according to the
             * rules of Syntax 4. Set this flag to true if you need Syntax 3 to be used.
             * @param {string|null} contentType [Optional] Example: application/json
             * @param {EdifactInterchange|null} body [Optional] The EdifactInterchange object to translate to raw
             * EDIFACT.
             *
             * @return {promise<Binary>}
             */
            write: function (preserveWhitespace,
                charSet,
                postfix,
                sameRepetionAndDataElement,
                eancomS3,
                contentType,
                body)
            {
                // Assign default values
                preserveWhitespace = preserveWhitespace || false;
                charSet = charSet || 'utf-8';
                sameRepetionAndDataElement = sameRepetionAndDataElement || false;
                eancomS3 = eancomS3 || false;
                contentType = contentType || 'application/json';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/edifact/write';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'preserveWhitespace': (preserveWhitespace !== null) ? preserveWhitespace : false,
                    'charSet': (charSet !== null) ? charSet : 'utf-8',
                    'postfix': postfix,
                    'sameRepetionAndDataElement':
                        (sameRepetionAndDataElement !== null) ? sameRepetionAndDataElement : false,
                    'eancomS3': (eancomS3 !== null) ? eancomS3 : false
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
             * Validates an EdifactInterchange object according to the EDIFACT standard rules for each version and
             * transaction.
             *
             * @param {string|null} syntaxSet [Optional] In case you need to validate against a syntax set,
             * different than UNOA and UNOB, populate this filed with all of the
             * allowed symbols, url-escaped.              All data elements with
             * alpha (A) or alphanumeric (AN) data types are validated against a
             * syntax set of allowed characters. The supported syntax sets are UNOA
             * and UNOB. The validator infers the correct syntax set from
             * EdifactInterchange.UNB.SYNTAXIDENTIFIER_1.SyntaxIdentifier_1. The
             * symbols added to this field will override the corresponding sets in
             * both UNOA and UNOB.
             * @param {bool|null} skipTrailer [Optional] You are allowed to validate an EdifactInterchange with
             * missing interchange, functional group or transaction trailers (UNZ,
             * UNE, UNT). This is because these will be automatically applied during
             * the Write oprtaion so you don't have to worry about counting the
             * items. By default it is expected that all trailers are present when
             * you validate the EdifactInterchange and by default, this is set to
             * false. To skip all trailer validation, set this to true.
             * @param {bool|null} structureOnly [Optional] This is equivalent to HIPAA Snip level 1, where only the
             * structure and control segments are validated. By default, this is
             * set to false, however if you want to not validate things such as
             * data types, number of repeteitions or dates, set this to true.
             * @param {string|null} decimalPoint [Optional] This could be either point . (default) or comma ,.
             * @param {bool|null} eancomS3 [Optional] The default syntax for EANCOM transactions. By default all
             * EANCOM transactions will be validated according to the rules of Syntax 4.
             * Set this flag to true if you need Syntax 3 to be used.
             * @param {string|null} contentType [Optional] Example: application/json
             * @param {EdifactInterchange|null} body [Optional] The EdifactInterchange object to validate.
             *
             * @return {promise<OperationResult>}
             */
            validate: function (syntaxSet, skipTrailer, structureOnly, decimalPoint, eancomS3, contentType, body) {
                // Assign default values
                skipTrailer = skipTrailer || false;
                structureOnly = structureOnly || false;
                decimalPoint = decimalPoint || '.';
                eancomS3 = eancomS3 || false;
                contentType = contentType || 'application/json';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/edifact/validate';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'syntaxSet': syntaxSet,
                    'skipTrailer': (skipTrailer !== null) ? skipTrailer : false,
                    'structureOnly': (structureOnly !== null) ? structureOnly : false,
                    'decimalPoint': (decimalPoint !== null) ? decimalPoint : '.',
                    'eancomS3': (eancomS3 !== null) ? eancomS3 : false
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
             * Generates functional and/or technical CONTRL acknowledment(s) for the requested EdifactInterchange.
             *
             * @param {string|null} syntaxSet [Optional] In case you need to validate against a syntax set,
             * different than UNOA and UNOB, populate this filed with all of the
             * allowed symbols, url-escaped. All data elements with alpha (A) or
             * alphanumeric (AN) data types are validated against a syntax set of
             * allowed characters. The supported syntax sets are UNOA and UNOB. The
             * validator infers the correct syntax set from EdifactInterchange.UNB.
             * SYNTAXIDENTIFIER_1.SyntaxIdentifier_1. The symbols added to this
             * field will override the corresponding sets in both UNOA and UNOB.
             * @param {bool|null} detectDuplicates [Optional] If you need to detect duplicates as in functional
             * groups or transactions with the same reference number, set this
             * flag to true. The default is false.
             * @param {int|null} tranRefNumber [Optional] The default is 1. Set this to whatever the CONTRL UNH.
             * MessageReferenceNumber_01 needs to be.
             * @param {int|null} interchangeRefNumber [Optional] The default is 1. Set this to whatever the CONTRL
             * EdifactInterchange.UNB.InterchangeControlReference_5 needs to
             * be.
             * @param {bool|null} ackForValidTrans [Optional] The default is false. Set this to true if you need
             * UCM loops included for all valid transaction as well. By default
             * UCM loops are generated only for invalid transactions.
             * @param {bool|null} batchAcks [Optional] The default is true. Set this to false if you need to
             * generate separate EdifactInterchange for each acknowledgment. By
             * default all acknowledgments are batched in the same EdifactInterchange.
             * @param {string|null} technicalAck [Optional] The default technical acknowledgment CONTRL is
             * generated according to EdifactInterchange.UNB.
             * AcknowledgementRequest_9. You can either enforce it to always
             * generate technical CONTRLs or supress it to never generate any
             * technical CONTRLs. This will override the flag in
             * EdifactInterchange.UNB.AcknowledgementRequest_9.              The
             * available values are: default, enforce, suppress.
             * @param {bool|null} eancomS3 [Optional] The default syntax for EANCOM transactions. By default all
             * EANCOM transactions will be validated according to the rules of Syntax 4.
             * Set this flag to true if you need Syntax 3 to be used.
             * @param {string|null} contentType [Optional] Example: application/json
             * @param {EdifactInterchange|null} body [Optional] The EdifactInterchange object to acknowledge.
             *
             * @return {promise<EdifactInterchange>}
             */
            ack: function (syntaxSet,
                detectDuplicates,
                tranRefNumber,
                interchangeRefNumber,
                ackForValidTrans,
                batchAcks,
                technicalAck,
                eancomS3,
                contentType,
                body)
            {
                // Assign default values
                detectDuplicates = detectDuplicates || false;
                tranRefNumber = tranRefNumber || 1;
                interchangeRefNumber = interchangeRefNumber || 1;
                ackForValidTrans = ackForValidTrans || false;
                batchAcks = batchAcks || true;
                eancomS3 = eancomS3 || false;
                contentType = contentType || 'application/json';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/edifact/ack';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'syntaxSet': syntaxSet,
                    'detectDuplicates': (detectDuplicates !== null) ? detectDuplicates : false,
                    'tranRefNumber': (tranRefNumber !== null) ? tranRefNumber : 1,
                    'interchangeRefNumber': (interchangeRefNumber !== null) ? interchangeRefNumber : 1,
                    'ackForValidTrans': (ackForValidTrans !== null) ? ackForValidTrans : false,
                    'batchAcks': (batchAcks !== null) ? batchAcks : true,
                    'technicalAck': technicalAck,
                    'eancomS3': (eancomS3 !== null) ? eancomS3 : false
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
                        return BaseController.getObjectMapper().mapObject(model, 'EdifactInterchange');
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

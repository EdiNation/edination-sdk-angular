/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

angular.module('EdiNationAPILib')
    .factory('EdiModelController', ['$q',
        'Configuration',
        'HttpClient',
        'APIHelper',
        'BaseController',
        EdiModelController
    ]);

    function EdiModelController($q, Configuration, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * Uploads a model file to a subscription. It must be a valid DOT NET assembly.
             *
             * @param {string} fileName Upload File
             *
             * @return {promise<Void>}
             */
            upload: function (fileName) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/models';
                
                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
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
             * Retrieves all models for a subscription.
             *
             * @param {bool|null} system [Optional] Whether to retrieve EdiNation's or custom uploaded models.
             *
             * @return {promise<EdiModel>}
             */
            getModels: function (system) {
                // Assign default values
                system = system || true;

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/models';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'system': (system !== null) ? system : true
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json',
                    'Ocp-Apim-Subscription-Key': Configuration.ocpApimSubscriptionKey
                };

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'GET',
                    queryUrl: _queryUrl,
                    headers: _headers,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    var parsed = _result.body;
                    parsed = parsed.map(function(model){
                        return BaseController.getObjectMapper().mapObject(model, 'EdiModel');
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
             * Retrieve a particular model file as a stream.
             *
             * @param {string} id The model name.
             * @param {bool|null} system [Optional] Whether to search in EdiNation's or custom uploaded models.
             *
             * @return {promise<Binary>}
             */
            getModel: function (id, system) {
                // Assign default values
                system = system || true;

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/models/{id}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'id': id
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'system': (system !== null) ? system : true
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'Ocp-Apim-Subscription-Key': Configuration.ocpApimSubscriptionKey
                };

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'GET',
                    queryUrl: _queryUrl,
                    headers: _headers,
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
             * Deletes a particular model from the custom models.
             *
             * @param {string} id The model name.
             *
             * @return {promise<Void>}
             */
            mdelete: function (id) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/models/{id}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'id': id
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'Ocp-Apim-Subscription-Key': Configuration.ocpApimSubscriptionKey
                };

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'DELETE',
                    queryUrl: _queryUrl,
                    headers: _headers,
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
            }
        };
    }

}(angular));

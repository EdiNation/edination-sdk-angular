/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of EdifactInterchange
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('EdifactInterchange', ['BaseModel', EdifactInterchangeModel]);

    function EdifactInterchangeModel(BaseModel) {
        var EdifactInterchange = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.uNA = this.getValue(obj.uNA);
            this.uNB = this.getValue(obj.uNB);
            this.groups = this.getValue(obj.groups);
            this.uNZTrailers = this.getValue(obj.uNZTrailers);
            this.result = this.getValue(obj.result);
        };

        EdifactInterchange.prototype = new BaseModel();
        EdifactInterchange.prototype.constructor = EdifactInterchange;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        EdifactInterchange.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'uNA', realName: 'UNA', type: 'UNA' },
                { name: 'uNB', realName: 'UNB', type: 'UNB' },
                { name: 'groups', realName: 'Groups', array: true, type: 'EdifactGroup' },
                { name: 'uNZTrailers', realName: 'UNZTrailers', array: true, type: 'UNZ' },
                { name: 'result', realName: 'Result', type: 'OperationResult' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        EdifactInterchange.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {UNA|null}
         */
        EdifactInterchange.prototype.getUNA = function () {
            return this.uNA;
        };
    
        /**
         * Setter for UNA
         * 
         * @param {UNA|null} value 
         */
        EdifactInterchange.prototype.setUNA = function (value) {
            this.uNA = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {UNB}
         */
        EdifactInterchange.prototype.getUNB = function () {
            return this.uNB;
        };
    
        /**
         * Setter for UNB
         * 
         * @param {UNB} value 
         */
        EdifactInterchange.prototype.setUNB = function (value) {
            this.uNB = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        EdifactInterchange.prototype.getGroups = function () {
            return this.groups;
        };
    
        /**
         * Setter for Groups
         * 
         * @param {array} value 
         */
        EdifactInterchange.prototype.setGroups = function (value) {
            this.groups = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array|null}
         */
        EdifactInterchange.prototype.getUNZTrailers = function () {
            return this.uNZTrailers;
        };
    
        /**
         * Setter for UNZTrailers
         * 
         * @param {array|null} value 
         */
        EdifactInterchange.prototype.setUNZTrailers = function (value) {
            this.uNZTrailers = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {OperationResult|null}
         */
        EdifactInterchange.prototype.getResult = function () {
            return this.result;
        };
    
        /**
         * Setter for Result
         * 
         * @param {OperationResult|null} value 
         */
        EdifactInterchange.prototype.setResult = function (value) {
            this.result = value;
        };
    
        return EdifactInterchange;
    }

}(angular));

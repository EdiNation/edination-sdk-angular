/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of OperationResult
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('OperationResult', ['BaseModel', OperationResultModel]);

    function OperationResultModel(BaseModel) {
        var OperationResult = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.lastIndex = this.getValue(obj.lastIndex);
            this.details = this.getValue(obj.details);
            this.status = this.getValue(obj.status);
        };

        OperationResult.prototype = new BaseModel();
        OperationResult.prototype.constructor = OperationResult;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        OperationResult.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'lastIndex', realName: 'LastIndex' },
                { name: 'details', realName: 'Details', array: true, type: 'OperationDetail' },
                { name: 'status', realName: 'Status' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        OperationResult.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int|null}
         */
        OperationResult.prototype.getLastIndex = function () {
            return this.lastIndex;
        };
    
        /**
         * Setter for LastIndex
         * 
         * @param {int|null} value 
         */
        OperationResult.prototype.setLastIndex = function (value) {
            this.lastIndex = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array|null}
         */
        OperationResult.prototype.getDetails = function () {
            return this.details;
        };
    
        /**
         * Setter for Details
         * 
         * @param {array|null} value 
         */
        OperationResult.prototype.setDetails = function (value) {
            this.details = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        OperationResult.prototype.getStatus = function () {
            return this.status;
        };
    
        /**
         * Setter for Status
         * 
         * @param {string|null} value 
         */
        OperationResult.prototype.setStatus = function (value) {
            this.status = value;
        };
    
        return OperationResult;
    }

}(angular));

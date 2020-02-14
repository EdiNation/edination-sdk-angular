/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of X12Interchange
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('X12Interchange', ['BaseModel', X12InterchangeModel]);

    function X12InterchangeModel(BaseModel) {
        var X12Interchange = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.segmentDelimiter = this.getValue(obj.segmentDelimiter);
            this.dataElementDelimiter = this.getValue(obj.dataElementDelimiter);
            this.iSA = this.getValue(obj.iSA);
            this.tA1 = this.getValue(obj.tA1);
            this.groups = this.getValue(obj.groups);
            this.iEATrailers = this.getValue(obj.iEATrailers);
            this.result = this.getValue(obj.result);
        };

        X12Interchange.prototype = new BaseModel();
        X12Interchange.prototype.constructor = X12Interchange;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        X12Interchange.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'segmentDelimiter', realName: 'SegmentDelimiter' },
                { name: 'dataElementDelimiter', realName: 'DataElementDelimiter' },
                { name: 'iSA', realName: 'ISA', type: 'ISA' },
                { name: 'tA1', realName: 'TA1', type: 'TA1' },
                { name: 'groups', realName: 'Groups', array: true, type: 'X12Group' },
                { name: 'iEATrailers', realName: 'IEATrailers', array: true, type: 'IEA' },
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
        X12Interchange.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        X12Interchange.prototype.getSegmentDelimiter = function () {
            return this.segmentDelimiter;
        };
    
        /**
         * Setter for SegmentDelimiter
         * 
         * @param {string} value 
         */
        X12Interchange.prototype.setSegmentDelimiter = function (value) {
            this.segmentDelimiter = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        X12Interchange.prototype.getDataElementDelimiter = function () {
            return this.dataElementDelimiter;
        };
    
        /**
         * Setter for DataElementDelimiter
         * 
         * @param {string} value 
         */
        X12Interchange.prototype.setDataElementDelimiter = function (value) {
            this.dataElementDelimiter = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {ISA}
         */
        X12Interchange.prototype.getISA = function () {
            return this.iSA;
        };
    
        /**
         * Setter for ISA
         * 
         * @param {ISA} value 
         */
        X12Interchange.prototype.setISA = function (value) {
            this.iSA = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {TA1|null}
         */
        X12Interchange.prototype.getTA1 = function () {
            return this.tA1;
        };
    
        /**
         * Setter for TA1
         * 
         * @param {TA1|null} value 
         */
        X12Interchange.prototype.setTA1 = function (value) {
            this.tA1 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        X12Interchange.prototype.getGroups = function () {
            return this.groups;
        };
    
        /**
         * Setter for Groups
         * 
         * @param {array} value 
         */
        X12Interchange.prototype.setGroups = function (value) {
            this.groups = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array|null}
         */
        X12Interchange.prototype.getIEATrailers = function () {
            return this.iEATrailers;
        };
    
        /**
         * Setter for IEATrailers
         * 
         * @param {array|null} value 
         */
        X12Interchange.prototype.setIEATrailers = function (value) {
            this.iEATrailers = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {OperationResult|null}
         */
        X12Interchange.prototype.getResult = function () {
            return this.result;
        };
    
        /**
         * Setter for Result
         * 
         * @param {OperationResult|null} value 
         */
        X12Interchange.prototype.setResult = function (value) {
            this.result = value;
        };
    
        return X12Interchange;
    }

}(angular));

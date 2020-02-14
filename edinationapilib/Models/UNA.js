/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of UNA
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('UNA', ['BaseModel', UNAModel]);

    function UNAModel(BaseModel) {
        var UNA = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.componentDataElement = this.getValue(obj.componentDataElement);
            this.dataElement = this.getValue(obj.dataElement);
            this.decimalNotation = this.getValue(obj.decimalNotation);
            this.releaseIndicator = this.getValue(obj.releaseIndicator);
            this.reserved = this.getValue(obj.reserved);
            this.segment = this.getValue(obj.segment);
        };

        UNA.prototype = new BaseModel();
        UNA.prototype.constructor = UNA;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        UNA.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'componentDataElement', realName: 'ComponentDataElement' },
                { name: 'dataElement', realName: 'DataElement' },
                { name: 'decimalNotation', realName: 'DecimalNotation' },
                { name: 'releaseIndicator', realName: 'ReleaseIndicator' },
                { name: 'reserved', realName: 'Reserved' },
                { name: 'segment', realName: 'Segment' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        UNA.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNA.prototype.getComponentDataElement = function () {
            return this.componentDataElement;
        };
    
        /**
         * Setter for ComponentDataElement
         * 
         * @param {string|null} value 
         */
        UNA.prototype.setComponentDataElement = function (value) {
            this.componentDataElement = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNA.prototype.getDataElement = function () {
            return this.dataElement;
        };
    
        /**
         * Setter for DataElement
         * 
         * @param {string|null} value 
         */
        UNA.prototype.setDataElement = function (value) {
            this.dataElement = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNA.prototype.getDecimalNotation = function () {
            return this.decimalNotation;
        };
    
        /**
         * Setter for DecimalNotation
         * 
         * @param {string|null} value 
         */
        UNA.prototype.setDecimalNotation = function (value) {
            this.decimalNotation = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNA.prototype.getReleaseIndicator = function () {
            return this.releaseIndicator;
        };
    
        /**
         * Setter for ReleaseIndicator
         * 
         * @param {string|null} value 
         */
        UNA.prototype.setReleaseIndicator = function (value) {
            this.releaseIndicator = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNA.prototype.getReserved = function () {
            return this.reserved;
        };
    
        /**
         * Setter for Reserved
         * 
         * @param {string|null} value 
         */
        UNA.prototype.setReserved = function (value) {
            this.reserved = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNA.prototype.getSegment = function () {
            return this.segment;
        };
    
        /**
         * Setter for Segment
         * 
         * @param {string|null} value 
         */
        UNA.prototype.setSegment = function (value) {
            this.segment = value;
        };
    
        return UNA;
    }

}(angular));

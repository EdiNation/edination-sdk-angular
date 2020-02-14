/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of IEA
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('IEA', ['BaseModel', IEAModel]);

    function IEAModel(BaseModel) {
        var IEA = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.numberOfIncludedGroups1 = this.getValue(obj.numberOfIncludedGroups1);
            this.interchangeControlNumber2 = this.getValue(obj.interchangeControlNumber2);
        };

        IEA.prototype = new BaseModel();
        IEA.prototype.constructor = IEA;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        IEA.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'numberOfIncludedGroups1', realName: 'NumberOfIncludedGroups_1' },
                { name: 'interchangeControlNumber2', realName: 'InterchangeControlNumber_2' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        IEA.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        IEA.prototype.getNumberOfIncludedGroups1 = function () {
            return this.numberOfIncludedGroups1;
        };
    
        /**
         * Setter for NumberOfIncludedGroups1
         * 
         * @param {string|null} value 
         */
        IEA.prototype.setNumberOfIncludedGroups1 = function (value) {
            this.numberOfIncludedGroups1 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        IEA.prototype.getInterchangeControlNumber2 = function () {
            return this.interchangeControlNumber2;
        };
    
        /**
         * Setter for InterchangeControlNumber2
         * 
         * @param {string|null} value 
         */
        IEA.prototype.setInterchangeControlNumber2 = function (value) {
            this.interchangeControlNumber2 = value;
        };
    
        return IEA;
    }

}(angular));

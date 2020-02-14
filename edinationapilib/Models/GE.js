/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of GE
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('GE', ['BaseModel', GEModel]);

    function GEModel(BaseModel) {
        var GE = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.numberOfIncludedSets1 = this.getValue(obj.numberOfIncludedSets1);
            this.groupControlNumber2 = this.getValue(obj.groupControlNumber2);
        };

        GE.prototype = new BaseModel();
        GE.prototype.constructor = GE;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        GE.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'numberOfIncludedSets1', realName: 'NumberOfIncludedSets_1' },
                { name: 'groupControlNumber2', realName: 'GroupControlNumber_2' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        GE.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        GE.prototype.getNumberOfIncludedSets1 = function () {
            return this.numberOfIncludedSets1;
        };
    
        /**
         * Setter for NumberOfIncludedSets1
         * 
         * @param {string|null} value 
         */
        GE.prototype.setNumberOfIncludedSets1 = function (value) {
            this.numberOfIncludedSets1 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        GE.prototype.getGroupControlNumber2 = function () {
            return this.groupControlNumber2;
        };
    
        /**
         * Setter for GroupControlNumber2
         * 
         * @param {string|null} value 
         */
        GE.prototype.setGroupControlNumber2 = function (value) {
            this.groupControlNumber2 = value;
        };
    
        return GE;
    }

}(angular));

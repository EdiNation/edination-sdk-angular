/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of UNZ
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('UNZ', ['BaseModel', UNZModel]);

    function UNZModel(BaseModel) {
        var UNZ = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.interchangeControlCount1 = this.getValue(obj.interchangeControlCount1);
            this.interchangeControlReference2 = this.getValue(obj.interchangeControlReference2);
        };

        UNZ.prototype = new BaseModel();
        UNZ.prototype.constructor = UNZ;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        UNZ.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'interchangeControlCount1', realName: 'InterchangeControlCount_1' },
                { name: 'interchangeControlReference2', realName: 'InterchangeControlReference_2' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        UNZ.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNZ.prototype.getInterchangeControlCount1 = function () {
            return this.interchangeControlCount1;
        };
    
        /**
         * Setter for InterchangeControlCount1
         * 
         * @param {string|null} value 
         */
        UNZ.prototype.setInterchangeControlCount1 = function (value) {
            this.interchangeControlCount1 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNZ.prototype.getInterchangeControlReference2 = function () {
            return this.interchangeControlReference2;
        };
    
        /**
         * Setter for InterchangeControlReference2
         * 
         * @param {string|null} value 
         */
        UNZ.prototype.setInterchangeControlReference2 = function (value) {
            this.interchangeControlReference2 = value;
        };
    
        return UNZ;
    }

}(angular));

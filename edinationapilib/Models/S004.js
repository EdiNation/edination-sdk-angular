/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of S004
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('S004', ['BaseModel', S004Model]);

    function S004Model(BaseModel) {
        var S004 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.date1 = this.getValue(obj.date1);
            this.time2 = this.getValue(obj.time2);
        };

        S004.prototype = new BaseModel();
        S004.prototype.constructor = S004;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        S004.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'date1', realName: 'Date_1' },
                { name: 'time2', realName: 'Time_2' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        S004.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S004.prototype.getDate1 = function () {
            return this.date1;
        };
    
        /**
         * Setter for Date1
         * 
         * @param {string|null} value 
         */
        S004.prototype.setDate1 = function (value) {
            this.date1 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S004.prototype.getTime2 = function () {
            return this.time2;
        };
    
        /**
         * Setter for Time2
         * 
         * @param {string|null} value 
         */
        S004.prototype.setTime2 = function (value) {
            this.time2 = value;
        };
    
        return S004;
    }

}(angular));

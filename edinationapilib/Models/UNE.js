/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of UNE
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('UNE', ['BaseModel', UNEModel]);

    function UNEModel(BaseModel) {
        var UNE = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.groupControlCount1 = this.getValue(obj.groupControlCount1);
            this.groupReferenceNumber2 = this.getValue(obj.groupReferenceNumber2);
        };

        UNE.prototype = new BaseModel();
        UNE.prototype.constructor = UNE;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        UNE.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'groupControlCount1', realName: 'GroupControlCount_1' },
                { name: 'groupReferenceNumber2', realName: 'GroupReferenceNumber_2' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        UNE.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNE.prototype.getGroupControlCount1 = function () {
            return this.groupControlCount1;
        };
    
        /**
         * Setter for GroupControlCount1
         * 
         * @param {string|null} value 
         */
        UNE.prototype.setGroupControlCount1 = function (value) {
            this.groupControlCount1 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        UNE.prototype.getGroupReferenceNumber2 = function () {
            return this.groupReferenceNumber2;
        };
    
        /**
         * Setter for GroupReferenceNumber2
         * 
         * @param {string|null} value 
         */
        UNE.prototype.setGroupReferenceNumber2 = function (value) {
            this.groupReferenceNumber2 = value;
        };
    
        return UNE;
    }

}(angular));

/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of S007
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('S007', ['BaseModel', S007Model]);

    function S007Model(BaseModel) {
        var S007 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.applicationRecipientIdentification1 = this.getValue(obj.applicationRecipientIdentification1);
            this.identificationCodeQualifier2 = this.getValue(obj.identificationCodeQualifier2);
        };

        S007.prototype = new BaseModel();
        S007.prototype.constructor = S007;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        S007.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'applicationRecipientIdentification1', realName: 'ApplicationRecipientIdentification_1' },
                { name: 'identificationCodeQualifier2', realName: 'IdentificationCodeQualifier_2' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        S007.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S007.prototype.getApplicationRecipientIdentification1 = function () {
            return this.applicationRecipientIdentification1;
        };
    
        /**
         * Setter for ApplicationRecipientIdentification1
         * 
         * @param {string|null} value 
         */
        S007.prototype.setApplicationRecipientIdentification1 = function (value) {
            this.applicationRecipientIdentification1 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S007.prototype.getIdentificationCodeQualifier2 = function () {
            return this.identificationCodeQualifier2;
        };
    
        /**
         * Setter for IdentificationCodeQualifier2
         * 
         * @param {string|null} value 
         */
        S007.prototype.setIdentificationCodeQualifier2 = function (value) {
            this.identificationCodeQualifier2 = value;
        };
    
        return S007;
    }

}(angular));

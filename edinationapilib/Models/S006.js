/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of S006
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('S006', ['BaseModel', S006Model]);

    function S006Model(BaseModel) {
        var S006 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.applicationSenderIdentification1 = this.getValue(obj.applicationSenderIdentification1);
            this.identificationCodeQualifier2 = this.getValue(obj.identificationCodeQualifier2);
        };

        S006.prototype = new BaseModel();
        S006.prototype.constructor = S006;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        S006.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'applicationSenderIdentification1', realName: 'ApplicationSenderIdentification_1' },
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
        S006.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S006.prototype.getApplicationSenderIdentification1 = function () {
            return this.applicationSenderIdentification1;
        };
    
        /**
         * Setter for ApplicationSenderIdentification1
         * 
         * @param {string|null} value 
         */
        S006.prototype.setApplicationSenderIdentification1 = function (value) {
            this.applicationSenderIdentification1 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S006.prototype.getIdentificationCodeQualifier2 = function () {
            return this.identificationCodeQualifier2;
        };
    
        /**
         * Setter for IdentificationCodeQualifier2
         * 
         * @param {string|null} value 
         */
        S006.prototype.setIdentificationCodeQualifier2 = function (value) {
            this.identificationCodeQualifier2 = value;
        };
    
        return S006;
    }

}(angular));

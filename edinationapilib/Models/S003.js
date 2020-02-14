/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of S003
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('S003', ['BaseModel', S003Model]);

    function S003Model(BaseModel) {
        var S003 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.interchangeRecipientIdentification1 = this.getValue(obj.interchangeRecipientIdentification1);
            this.identificationCodeQualifier2 = this.getValue(obj.identificationCodeQualifier2);
            this.interchangeRecipientInternalIdentification3 =
          this.getValue(obj.interchangeRecipientInternalIdentification3);
            this.interchangeRecipientInternalSubIdentification4 =
          this.getValue(obj.interchangeRecipientInternalSubIdentification4);
        };

        S003.prototype = new BaseModel();
        S003.prototype.constructor = S003;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        S003.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'interchangeRecipientIdentification1', realName: 'InterchangeRecipientIdentification_1' },
                { name: 'identificationCodeQualifier2', realName: 'IdentificationCodeQualifier_2' },
                {
                    name: 'interchangeRecipientInternalIdentification3',
                    realName: 'InterchangeRecipientInternalIdentification_3',
                },
                {
                    name: 'interchangeRecipientInternalSubIdentification4',
                    realName: 'InterchangeRecipientInternalSubIdentification_4',
                }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        S003.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S003.prototype.getInterchangeRecipientIdentification1 = function () {
            return this.interchangeRecipientIdentification1;
        };
    
        /**
         * Setter for InterchangeRecipientIdentification1
         * 
         * @param {string|null} value 
         */
        S003.prototype.setInterchangeRecipientIdentification1 = function (value) {
            this.interchangeRecipientIdentification1 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S003.prototype.getIdentificationCodeQualifier2 = function () {
            return this.identificationCodeQualifier2;
        };
    
        /**
         * Setter for IdentificationCodeQualifier2
         * 
         * @param {string|null} value 
         */
        S003.prototype.setIdentificationCodeQualifier2 = function (value) {
            this.identificationCodeQualifier2 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S003.prototype.getInterchangeRecipientInternalIdentification3 = function () {
            return this.interchangeRecipientInternalIdentification3;
        };
    
        /**
         * Setter for InterchangeRecipientInternalIdentification3
         * 
         * @param {string|null} value 
         */
        S003.prototype.setInterchangeRecipientInternalIdentification3 = function (value) {
            this.interchangeRecipientInternalIdentification3 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S003.prototype.getInterchangeRecipientInternalSubIdentification4 = function () {
            return this.interchangeRecipientInternalSubIdentification4;
        };
    
        /**
         * Setter for InterchangeRecipientInternalSubIdentification4
         * 
         * @param {string|null} value 
         */
        S003.prototype.setInterchangeRecipientInternalSubIdentification4 = function (value) {
            this.interchangeRecipientInternalSubIdentification4 = value;
        };
    
        return S003;
    }

}(angular));

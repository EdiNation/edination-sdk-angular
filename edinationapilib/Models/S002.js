/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of S002
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('S002', ['BaseModel', S002Model]);

    function S002Model(BaseModel) {
        var S002 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.interchangeSenderIdentification1 = this.getValue(obj.interchangeSenderIdentification1);
            this.identificationCodeQualifier2 = this.getValue(obj.identificationCodeQualifier2);
            this.interchangeSenderInternalIdentification3 = this.getValue(obj.interchangeSenderInternalIdentification3);
            this.interchangeSenderInternalSubIdentification4 =
          this.getValue(obj.interchangeSenderInternalSubIdentification4);
        };

        S002.prototype = new BaseModel();
        S002.prototype.constructor = S002;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        S002.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'interchangeSenderIdentification1', realName: 'InterchangeSenderIdentification_1' },
                { name: 'identificationCodeQualifier2', realName: 'IdentificationCodeQualifier_2' },
                {
                    name: 'interchangeSenderInternalIdentification3',
                    realName: 'InterchangeSenderInternalIdentification_3',
                },
                {
                    name: 'interchangeSenderInternalSubIdentification4',
                    realName: 'InterchangeSenderInternalSubIdentification_4',
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
        S002.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S002.prototype.getInterchangeSenderIdentification1 = function () {
            return this.interchangeSenderIdentification1;
        };
    
        /**
         * Setter for InterchangeSenderIdentification1
         * 
         * @param {string|null} value 
         */
        S002.prototype.setInterchangeSenderIdentification1 = function (value) {
            this.interchangeSenderIdentification1 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S002.prototype.getIdentificationCodeQualifier2 = function () {
            return this.identificationCodeQualifier2;
        };
    
        /**
         * Setter for IdentificationCodeQualifier2
         * 
         * @param {string|null} value 
         */
        S002.prototype.setIdentificationCodeQualifier2 = function (value) {
            this.identificationCodeQualifier2 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S002.prototype.getInterchangeSenderInternalIdentification3 = function () {
            return this.interchangeSenderInternalIdentification3;
        };
    
        /**
         * Setter for InterchangeSenderInternalIdentification3
         * 
         * @param {string|null} value 
         */
        S002.prototype.setInterchangeSenderInternalIdentification3 = function (value) {
            this.interchangeSenderInternalIdentification3 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S002.prototype.getInterchangeSenderInternalSubIdentification4 = function () {
            return this.interchangeSenderInternalSubIdentification4;
        };
    
        /**
         * Setter for InterchangeSenderInternalSubIdentification4
         * 
         * @param {string|null} value 
         */
        S002.prototype.setInterchangeSenderInternalSubIdentification4 = function (value) {
            this.interchangeSenderInternalSubIdentification4 = value;
        };
    
        return S002;
    }

}(angular));

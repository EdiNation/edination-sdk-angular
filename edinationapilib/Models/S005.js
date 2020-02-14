/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of S005
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('S005', ['BaseModel', S005Model]);

    function S005Model(BaseModel) {
        var S005 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.recipientReferencePassword1 = this.getValue(obj.recipientReferencePassword1);
            this.recipientReferencePasswordQualifier2 = this.getValue(obj.recipientReferencePasswordQualifier2);
        };

        S005.prototype = new BaseModel();
        S005.prototype.constructor = S005;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        S005.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'recipientReferencePassword1', realName: 'RecipientReferencePassword_1' },
                { name: 'recipientReferencePasswordQualifier2', realName: 'RecipientReferencePasswordQualifier_2' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        S005.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S005.prototype.getRecipientReferencePassword1 = function () {
            return this.recipientReferencePassword1;
        };
    
        /**
         * Setter for RecipientReferencePassword1
         * 
         * @param {string|null} value 
         */
        S005.prototype.setRecipientReferencePassword1 = function (value) {
            this.recipientReferencePassword1 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S005.prototype.getRecipientReferencePasswordQualifier2 = function () {
            return this.recipientReferencePasswordQualifier2;
        };
    
        /**
         * Setter for RecipientReferencePasswordQualifier2
         * 
         * @param {string|null} value 
         */
        S005.prototype.setRecipientReferencePasswordQualifier2 = function (value) {
            this.recipientReferencePasswordQualifier2 = value;
        };
    
        return S005;
    }

}(angular));

/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of S008
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('S008', ['BaseModel', S008Model]);

    function S008Model(BaseModel) {
        var S008 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.messageVersionNumber1 = this.getValue(obj.messageVersionNumber1);
            this.messageReleaseNumber2 = this.getValue(obj.messageReleaseNumber2);
            this.associationAssignedCode3 = this.getValue(obj.associationAssignedCode3);
        };

        S008.prototype = new BaseModel();
        S008.prototype.constructor = S008;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        S008.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'messageVersionNumber1', realName: 'MessageVersionNumber_1' },
                { name: 'messageReleaseNumber2', realName: 'MessageReleaseNumber_2' },
                { name: 'associationAssignedCode3', realName: 'AssociationAssignedCode_3' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        S008.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S008.prototype.getMessageVersionNumber1 = function () {
            return this.messageVersionNumber1;
        };
    
        /**
         * Setter for MessageVersionNumber1
         * 
         * @param {string|null} value 
         */
        S008.prototype.setMessageVersionNumber1 = function (value) {
            this.messageVersionNumber1 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S008.prototype.getMessageReleaseNumber2 = function () {
            return this.messageReleaseNumber2;
        };
    
        /**
         * Setter for MessageReleaseNumber2
         * 
         * @param {string|null} value 
         */
        S008.prototype.setMessageReleaseNumber2 = function (value) {
            this.messageReleaseNumber2 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S008.prototype.getAssociationAssignedCode3 = function () {
            return this.associationAssignedCode3;
        };
    
        /**
         * Setter for AssociationAssignedCode3
         * 
         * @param {string|null} value 
         */
        S008.prototype.setAssociationAssignedCode3 = function (value) {
            this.associationAssignedCode3 = value;
        };
    
        return S008;
    }

}(angular));

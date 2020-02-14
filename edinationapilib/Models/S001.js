/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of S001
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('S001', ['BaseModel', S001Model]);

    function S001Model(BaseModel) {
        var S001 = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.syntaxIdentifier1 = this.getValue(obj.syntaxIdentifier1);
            this.syntaxVersionNumber2 = this.getValue(obj.syntaxVersionNumber2);
            this.serviceCodeListDirectoryVersionNumber3 = this.getValue(obj.serviceCodeListDirectoryVersionNumber3);
            this.characterEncoding4 = this.getValue(obj.characterEncoding4);
        };

        S001.prototype = new BaseModel();
        S001.prototype.constructor = S001;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        S001.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'syntaxIdentifier1', realName: 'SyntaxIdentifier_1' },
                { name: 'syntaxVersionNumber2', realName: 'SyntaxVersionNumber_2' },
                { name: 'serviceCodeListDirectoryVersionNumber3', realName: 'ServiceCodeListDirectoryVersionNumber_3' },
                { name: 'characterEncoding4', realName: 'CharacterEncoding_4' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        S001.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S001.prototype.getSyntaxIdentifier1 = function () {
            return this.syntaxIdentifier1;
        };
    
        /**
         * Setter for SyntaxIdentifier1
         * 
         * @param {string|null} value 
         */
        S001.prototype.setSyntaxIdentifier1 = function (value) {
            this.syntaxIdentifier1 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S001.prototype.getSyntaxVersionNumber2 = function () {
            return this.syntaxVersionNumber2;
        };
    
        /**
         * Setter for SyntaxVersionNumber2
         * 
         * @param {string|null} value 
         */
        S001.prototype.setSyntaxVersionNumber2 = function (value) {
            this.syntaxVersionNumber2 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S001.prototype.getServiceCodeListDirectoryVersionNumber3 = function () {
            return this.serviceCodeListDirectoryVersionNumber3;
        };
    
        /**
         * Setter for ServiceCodeListDirectoryVersionNumber3
         * 
         * @param {string|null} value 
         */
        S001.prototype.setServiceCodeListDirectoryVersionNumber3 = function (value) {
            this.serviceCodeListDirectoryVersionNumber3 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        S001.prototype.getCharacterEncoding4 = function () {
            return this.characterEncoding4;
        };
    
        /**
         * Setter for CharacterEncoding4
         * 
         * @param {string|null} value 
         */
        S001.prototype.setCharacterEncoding4 = function (value) {
            this.characterEncoding4 = value;
        };
    
        return S001;
    }

}(angular));

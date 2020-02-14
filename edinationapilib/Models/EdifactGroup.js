/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of EdifactGroup
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('EdifactGroup', ['BaseModel', EdifactGroupModel]);

    function EdifactGroupModel(BaseModel) {
        var EdifactGroup = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.uNG = this.getValue(obj.uNG);
            this.transactions = this.getValue(obj.transactions);
            this.uNETrailers = this.getValue(obj.uNETrailers);
        };

        EdifactGroup.prototype = new BaseModel();
        EdifactGroup.prototype.constructor = EdifactGroup;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        EdifactGroup.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'uNG', realName: 'UNG', type: 'UNG' },
                { name: 'transactions', realName: 'Transactions', array: true },
                { name: 'uNETrailers', realName: 'UNETrailers', array: true, type: 'UNE' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        EdifactGroup.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {UNG|null}
         */
        EdifactGroup.prototype.getUNG = function () {
            return this.uNG;
        };
    
        /**
         * Setter for UNG
         * 
         * @param {UNG|null} value 
         */
        EdifactGroup.prototype.setUNG = function (value) {
            this.uNG = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        EdifactGroup.prototype.getTransactions = function () {
            return this.transactions;
        };
    
        /**
         * Setter for Transactions
         * 
         * @param {array} value 
         */
        EdifactGroup.prototype.setTransactions = function (value) {
            this.transactions = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array|null}
         */
        EdifactGroup.prototype.getUNETrailers = function () {
            return this.uNETrailers;
        };
    
        /**
         * Setter for UNETrailers
         * 
         * @param {array|null} value 
         */
        EdifactGroup.prototype.setUNETrailers = function (value) {
            this.uNETrailers = value;
        };
    
        return EdifactGroup;
    }

}(angular));

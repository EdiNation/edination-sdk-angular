/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of X12Group
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('X12Group', ['BaseModel', X12GroupModel]);

    function X12GroupModel(BaseModel) {
        var X12Group = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.gS = this.getValue(obj.gS);
            this.transactions = this.getValue(obj.transactions);
            this.gETrailers = this.getValue(obj.gETrailers);
        };

        X12Group.prototype = new BaseModel();
        X12Group.prototype.constructor = X12Group;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        X12Group.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'gS', realName: 'GS', type: 'GS' },
                { name: 'transactions', realName: 'Transactions', array: true },
                { name: 'gETrailers', realName: 'GETrailers', array: true, type: 'GE' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        X12Group.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {GS}
         */
        X12Group.prototype.getGS = function () {
            return this.gS;
        };
    
        /**
         * Setter for GS
         * 
         * @param {GS} value 
         */
        X12Group.prototype.setGS = function (value) {
            this.gS = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array}
         */
        X12Group.prototype.getTransactions = function () {
            return this.transactions;
        };
    
        /**
         * Setter for Transactions
         * 
         * @param {array} value 
         */
        X12Group.prototype.setTransactions = function (value) {
            this.transactions = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {array|null}
         */
        X12Group.prototype.getGETrailers = function () {
            return this.gETrailers;
        };
    
        /**
         * Setter for GETrailers
         * 
         * @param {array|null} value 
         */
        X12Group.prototype.setGETrailers = function (value) {
            this.gETrailers = value;
        };
    
        return X12Group;
    }

}(angular));

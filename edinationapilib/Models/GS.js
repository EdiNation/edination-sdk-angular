/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of GS
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('GS', ['BaseModel', GSModel]);

    function GSModel(BaseModel) {
        var GS = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.codeIdentifyingInformationType1 = this.getValue(obj.codeIdentifyingInformationType1);
            this.senderIDCode2 = this.getValue(obj.senderIDCode2);
            this.receiverIDCode3 = this.getValue(obj.receiverIDCode3);
            this.date4 = this.getValue(obj.date4);
            this.time5 = this.getValue(obj.time5);
            this.groupControlNumber6 = this.getValue(obj.groupControlNumber6);
            this.transactionTypeCode7 = this.getValue(obj.transactionTypeCode7);
            this.versionAndRelease8 = this.getValue(obj.versionAndRelease8);
        };

        GS.prototype = new BaseModel();
        GS.prototype.constructor = GS;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        GS.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'codeIdentifyingInformationType1', realName: 'CodeIdentifyingInformationType_1' },
                { name: 'senderIDCode2', realName: 'SenderIDCode_2' },
                { name: 'receiverIDCode3', realName: 'ReceiverIDCode_3' },
                { name: 'date4', realName: 'Date_4' },
                { name: 'time5', realName: 'Time_5' },
                { name: 'groupControlNumber6', realName: 'GroupControlNumber_6' },
                { name: 'transactionTypeCode7', realName: 'TransactionTypeCode_7' },
                { name: 'versionAndRelease8', realName: 'VersionAndRelease_8' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        GS.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        GS.prototype.getCodeIdentifyingInformationType1 = function () {
            return this.codeIdentifyingInformationType1;
        };
    
        /**
         * Setter for CodeIdentifyingInformationType1
         * 
         * @param {string|null} value 
         */
        GS.prototype.setCodeIdentifyingInformationType1 = function (value) {
            this.codeIdentifyingInformationType1 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        GS.prototype.getSenderIDCode2 = function () {
            return this.senderIDCode2;
        };
    
        /**
         * Setter for SenderIDCode2
         * 
         * @param {string|null} value 
         */
        GS.prototype.setSenderIDCode2 = function (value) {
            this.senderIDCode2 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        GS.prototype.getReceiverIDCode3 = function () {
            return this.receiverIDCode3;
        };
    
        /**
         * Setter for ReceiverIDCode3
         * 
         * @param {string|null} value 
         */
        GS.prototype.setReceiverIDCode3 = function (value) {
            this.receiverIDCode3 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        GS.prototype.getDate4 = function () {
            return this.date4;
        };
    
        /**
         * Setter for Date4
         * 
         * @param {string|null} value 
         */
        GS.prototype.setDate4 = function (value) {
            this.date4 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        GS.prototype.getTime5 = function () {
            return this.time5;
        };
    
        /**
         * Setter for Time5
         * 
         * @param {string|null} value 
         */
        GS.prototype.setTime5 = function (value) {
            this.time5 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        GS.prototype.getGroupControlNumber6 = function () {
            return this.groupControlNumber6;
        };
    
        /**
         * Setter for GroupControlNumber6
         * 
         * @param {string|null} value 
         */
        GS.prototype.setGroupControlNumber6 = function (value) {
            this.groupControlNumber6 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        GS.prototype.getTransactionTypeCode7 = function () {
            return this.transactionTypeCode7;
        };
    
        /**
         * Setter for TransactionTypeCode7
         * 
         * @param {string|null} value 
         */
        GS.prototype.setTransactionTypeCode7 = function (value) {
            this.transactionTypeCode7 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        GS.prototype.getVersionAndRelease8 = function () {
            return this.versionAndRelease8;
        };
    
        /**
         * Setter for VersionAndRelease8
         * 
         * @param {string|null} value 
         */
        GS.prototype.setVersionAndRelease8 = function (value) {
            this.versionAndRelease8 = value;
        };
    
        return GS;
    }

}(angular));

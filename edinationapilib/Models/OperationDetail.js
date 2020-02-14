/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of OperationDetail
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('OperationDetail', ['BaseModel', OperationDetailModel]);

    function OperationDetailModel(BaseModel) {
        var OperationDetail = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.index = this.getValue(obj.index);
            this.transactionIndex = this.getValue(obj.transactionIndex);
            this.transactionRef = this.getValue(obj.transactionRef);
            this.segmentId = this.getValue(obj.segmentId);
            this.value = this.getValue(obj.value);
            this.message = this.getValue(obj.message);
            this.status = this.getValue(obj.status);
        };

        OperationDetail.prototype = new BaseModel();
        OperationDetail.prototype.constructor = OperationDetail;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        OperationDetail.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'index', realName: 'Index' },
                { name: 'transactionIndex', realName: 'TransactionIndex' },
                { name: 'transactionRef', realName: 'TransactionRef' },
                { name: 'segmentId', realName: 'SegmentId' },
                { name: 'value', realName: 'Value' },
                { name: 'message', realName: 'Message' },
                { name: 'status', realName: 'Status' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        OperationDetail.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int|null}
         */
        OperationDetail.prototype.getIndex = function () {
            return this.index;
        };
    
        /**
         * Setter for Index
         * 
         * @param {int|null} value 
         */
        OperationDetail.prototype.setIndex = function (value) {
            this.index = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int|null}
         */
        OperationDetail.prototype.getTransactionIndex = function () {
            return this.transactionIndex;
        };
    
        /**
         * Setter for TransactionIndex
         * 
         * @param {int|null} value 
         */
        OperationDetail.prototype.setTransactionIndex = function (value) {
            this.transactionIndex = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        OperationDetail.prototype.getTransactionRef = function () {
            return this.transactionRef;
        };
    
        /**
         * Setter for TransactionRef
         * 
         * @param {string|null} value 
         */
        OperationDetail.prototype.setTransactionRef = function (value) {
            this.transactionRef = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        OperationDetail.prototype.getSegmentId = function () {
            return this.segmentId;
        };
    
        /**
         * Setter for SegmentId
         * 
         * @param {string|null} value 
         */
        OperationDetail.prototype.setSegmentId = function (value) {
            this.segmentId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        OperationDetail.prototype.getValue = function () {
            return this.value;
        };
    
        /**
         * Setter for Value
         * 
         * @param {string|null} value 
         */
        OperationDetail.prototype.setValue = function (value) {
            this.value = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        OperationDetail.prototype.getMessage = function () {
            return this.message;
        };
    
        /**
         * Setter for Message
         * 
         * @param {string|null} value 
         */
        OperationDetail.prototype.setMessage = function (value) {
            this.message = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        OperationDetail.prototype.getStatus = function () {
            return this.status;
        };
    
        /**
         * Setter for Status
         * 
         * @param {string|null} value 
         */
        OperationDetail.prototype.setStatus = function (value) {
            this.status = value;
        };
    
        return OperationDetail;
    }

}(angular));

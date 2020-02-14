/**
 * EdiNationAPILib
 *
 * This file was automatically generated for EdiNation by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ISA
 *
 * @constructor
 */
angular.module('EdiNationAPILib')
    .factory('ISA', ['BaseModel', ISAModel]);

    function ISAModel(BaseModel) {
        var ISA = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.authorizationInformationQualifier1 = this.getValue(obj.authorizationInformationQualifier1);
            this.authorizationInformation2 = this.getValue(obj.authorizationInformation2);
            this.securityInformationQualifier3 = this.getValue(obj.securityInformationQualifier3);
            this.securityInformation4 = this.getValue(obj.securityInformation4);
            this.senderIDQualifier5 = this.getValue(obj.senderIDQualifier5);
            this.interchangeSenderID6 = this.getValue(obj.interchangeSenderID6);
            this.receiverIDQualifier7 = this.getValue(obj.receiverIDQualifier7);
            this.interchangeReceiverID8 = this.getValue(obj.interchangeReceiverID8);
            this.interchangeDate9 = this.getValue(obj.interchangeDate9);
            this.interchangeTime10 = this.getValue(obj.interchangeTime10);
            this.interchangeControlStandardsIdentifier11 = this.getValue(obj.interchangeControlStandardsIdentifier11);
            this.interchangeControlVersionNumber12 = this.getValue(obj.interchangeControlVersionNumber12);
            this.interchangeControlNumber13 = this.getValue(obj.interchangeControlNumber13);
            this.acknowledgementRequested14 = this.getValue(obj.acknowledgementRequested14);
            this.usageIndicator15 = this.getValue(obj.usageIndicator15);
            this.componentElementSeparator16 = this.getValue(obj.componentElementSeparator16);
        };

        ISA.prototype = new BaseModel();
        ISA.prototype.constructor = ISA;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        ISA.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'authorizationInformationQualifier1', realName: 'AuthorizationInformationQualifier_1' },
                { name: 'authorizationInformation2', realName: 'AuthorizationInformation_2' },
                { name: 'securityInformationQualifier3', realName: 'SecurityInformationQualifier_3' },
                { name: 'securityInformation4', realName: 'SecurityInformation_4' },
                { name: 'senderIDQualifier5', realName: 'SenderIDQualifier_5' },
                { name: 'interchangeSenderID6', realName: 'InterchangeSenderID_6' },
                { name: 'receiverIDQualifier7', realName: 'ReceiverIDQualifier_7' },
                { name: 'interchangeReceiverID8', realName: 'InterchangeReceiverID_8' },
                { name: 'interchangeDate9', realName: 'InterchangeDate_9' },
                { name: 'interchangeTime10', realName: 'InterchangeTime_10' },
                {
                    name: 'interchangeControlStandardsIdentifier11',
                    realName: 'InterchangeControlStandardsIdentifier_11',
                },
                { name: 'interchangeControlVersionNumber12', realName: 'InterchangeControlVersionNumber_12' },
                { name: 'interchangeControlNumber13', realName: 'InterchangeControlNumber_13' },
                { name: 'acknowledgementRequested14', realName: 'AcknowledgementRequested_14' },
                { name: 'usageIndicator15', realName: 'UsageIndicator_15' },
                { name: 'componentElementSeparator16', realName: 'ComponentElementSeparator_16' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        ISA.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ISA.prototype.getAuthorizationInformationQualifier1 = function () {
            return this.authorizationInformationQualifier1;
        };
    
        /**
         * Setter for AuthorizationInformationQualifier1
         * 
         * @param {string|null} value 
         */
        ISA.prototype.setAuthorizationInformationQualifier1 = function (value) {
            this.authorizationInformationQualifier1 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ISA.prototype.getAuthorizationInformation2 = function () {
            return this.authorizationInformation2;
        };
    
        /**
         * Setter for AuthorizationInformation2
         * 
         * @param {string|null} value 
         */
        ISA.prototype.setAuthorizationInformation2 = function (value) {
            this.authorizationInformation2 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ISA.prototype.getSecurityInformationQualifier3 = function () {
            return this.securityInformationQualifier3;
        };
    
        /**
         * Setter for SecurityInformationQualifier3
         * 
         * @param {string|null} value 
         */
        ISA.prototype.setSecurityInformationQualifier3 = function (value) {
            this.securityInformationQualifier3 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ISA.prototype.getSecurityInformation4 = function () {
            return this.securityInformation4;
        };
    
        /**
         * Setter for SecurityInformation4
         * 
         * @param {string|null} value 
         */
        ISA.prototype.setSecurityInformation4 = function (value) {
            this.securityInformation4 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ISA.prototype.getSenderIDQualifier5 = function () {
            return this.senderIDQualifier5;
        };
    
        /**
         * Setter for SenderIDQualifier5
         * 
         * @param {string|null} value 
         */
        ISA.prototype.setSenderIDQualifier5 = function (value) {
            this.senderIDQualifier5 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ISA.prototype.getInterchangeSenderID6 = function () {
            return this.interchangeSenderID6;
        };
    
        /**
         * Setter for InterchangeSenderID6
         * 
         * @param {string|null} value 
         */
        ISA.prototype.setInterchangeSenderID6 = function (value) {
            this.interchangeSenderID6 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ISA.prototype.getReceiverIDQualifier7 = function () {
            return this.receiverIDQualifier7;
        };
    
        /**
         * Setter for ReceiverIDQualifier7
         * 
         * @param {string|null} value 
         */
        ISA.prototype.setReceiverIDQualifier7 = function (value) {
            this.receiverIDQualifier7 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ISA.prototype.getInterchangeReceiverID8 = function () {
            return this.interchangeReceiverID8;
        };
    
        /**
         * Setter for InterchangeReceiverID8
         * 
         * @param {string|null} value 
         */
        ISA.prototype.setInterchangeReceiverID8 = function (value) {
            this.interchangeReceiverID8 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ISA.prototype.getInterchangeDate9 = function () {
            return this.interchangeDate9;
        };
    
        /**
         * Setter for InterchangeDate9
         * 
         * @param {string|null} value 
         */
        ISA.prototype.setInterchangeDate9 = function (value) {
            this.interchangeDate9 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ISA.prototype.getInterchangeTime10 = function () {
            return this.interchangeTime10;
        };
    
        /**
         * Setter for InterchangeTime10
         * 
         * @param {string|null} value 
         */
        ISA.prototype.setInterchangeTime10 = function (value) {
            this.interchangeTime10 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ISA.prototype.getInterchangeControlStandardsIdentifier11 = function () {
            return this.interchangeControlStandardsIdentifier11;
        };
    
        /**
         * Setter for InterchangeControlStandardsIdentifier11
         * 
         * @param {string|null} value 
         */
        ISA.prototype.setInterchangeControlStandardsIdentifier11 = function (value) {
            this.interchangeControlStandardsIdentifier11 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ISA.prototype.getInterchangeControlVersionNumber12 = function () {
            return this.interchangeControlVersionNumber12;
        };
    
        /**
         * Setter for InterchangeControlVersionNumber12
         * 
         * @param {string|null} value 
         */
        ISA.prototype.setInterchangeControlVersionNumber12 = function (value) {
            this.interchangeControlVersionNumber12 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ISA.prototype.getInterchangeControlNumber13 = function () {
            return this.interchangeControlNumber13;
        };
    
        /**
         * Setter for InterchangeControlNumber13
         * 
         * @param {string|null} value 
         */
        ISA.prototype.setInterchangeControlNumber13 = function (value) {
            this.interchangeControlNumber13 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ISA.prototype.getAcknowledgementRequested14 = function () {
            return this.acknowledgementRequested14;
        };
    
        /**
         * Setter for AcknowledgementRequested14
         * 
         * @param {string|null} value 
         */
        ISA.prototype.setAcknowledgementRequested14 = function (value) {
            this.acknowledgementRequested14 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ISA.prototype.getUsageIndicator15 = function () {
            return this.usageIndicator15;
        };
    
        /**
         * Setter for UsageIndicator15
         * 
         * @param {string|null} value 
         */
        ISA.prototype.setUsageIndicator15 = function (value) {
            this.usageIndicator15 = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ISA.prototype.getComponentElementSeparator16 = function () {
            return this.componentElementSeparator16;
        };
    
        /**
         * Setter for ComponentElementSeparator16
         * 
         * @param {string|null} value 
         */
        ISA.prototype.setComponentElementSeparator16 = function (value) {
            this.componentElementSeparator16 = value;
        };
    
        return ISA;
    }

}(angular));
